
/**
 * Main Interactive Application Script
 * Hussein Balfaqih Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Safe Storage Wrapper (resilient to browser tracking prevention & cookies blocking)
  const safeStorage = {
    get(key, fallback) {
      try {
        const val = localStorage.getItem(key);
        return val !== null ? val : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, val) {
      try {
        localStorage.setItem(key, val);
      } catch (e) {
        // In-memory fallback if storage is restricted
      }
    }
  };

  // Global State
  const state = {
    lang: safeStorage.get('hb_lang', 'ar'),
    theme: safeStorage.get('hb_theme', 'dark'),
    activePalette: safeStorage.get('hb_palette', 'cyber-indigo'),
    customColor: safeStorage.get('hb_custom_color', '#6366F1'),
    activeFilter: 'all',
    countersAnimated: false
  };

  // DOM Elements
  const htmlEl = document.documentElement;
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langCurrentLabel = document.getElementById('lang-current-label');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const projectsGrid = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillsContainer = document.getElementById('skills-container');
  const timelineContainer = document.getElementById('timeline-container');
  const statsContainer = document.getElementById('stats-grid');
  const contactForm = document.getElementById('contact-form');
  const toastNotification = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  // Palette Elements
  const paletteToggleBtn = document.getElementById('palette-toggle-btn');
  const paletteDropdown = document.getElementById('palette-dropdown');
  const palettesContainer = document.getElementById('palettes-container');
  const paletteResetBtn = document.getElementById('palette-reset-btn');
  const customColorInput = document.getElementById('custom-color-input');
  const customColorHex = document.getElementById('custom-color-hex');
  const headerActiveColorDot = document.getElementById('header-active-color-dot');
  const floatingColorBar = document.getElementById('floating-color-bar');
  const floatingPaletteBtn = document.getElementById('floating-palette-btn');
  const floatingSwatches = document.getElementById('floating-swatches');
  const mobilePalettesRow = document.getElementById('mobile-palettes-row');
  const mobileActivePaletteName = document.getElementById('mobile-active-palette-name');

  // Modals
  const projectModal = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('project-modal-close');
  const cvModal = document.getElementById('cv-modal');
  const cvModalTrigger = document.getElementById('cv-modal-trigger');
  const cvModalClose = document.getElementById('cv-modal-close');

  /* ============================================================
     1. THEME CONTROLLER (Dark / Light)
     ============================================================ */
  function applyTheme(theme) {
    state.theme = theme;
    safeStorage.set('hb_theme', theme);
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
      htmlEl.classList.remove('light');
      if (themeIconSun) themeIconSun.classList.remove('hidden');
      if (themeIconMoon) themeIconMoon.classList.add('hidden');
    } else {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light');
      if (themeIconSun) themeIconSun.classList.add('hidden');
      if (themeIconMoon) themeIconMoon.classList.remove('hidden');
    }
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }


  /* ============================================================
     1.5 FAST COLOR PALETTE CONTROLLER (محرّك الألوان والسمات السريعة)
     ============================================================ */
  function hexToRgb(hex) {
    let clean = hex.replace('#', '');
    if (clean.length === 3) {
      clean = clean.split('').map(c => c + c).join('');
    }
    const num = parseInt(clean, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return { r, g, b, str: `${r}, ${g}, ${b}` };
  }

  function hexToHsl(hex) {
    const { r, g, b } = hexToRgb(hex);
    let rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
    let max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
        case gNorm: h = (bNorm - rNorm) / d + 2; break;
        case bNorm: h = (rNorm - gNorm) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
    let rHex = Math.min(255, Math.max(0, Math.round((r + m) * 255))).toString(16).padStart(2, '0');
    let gHex = Math.min(255, Math.max(0, Math.round((g + m) * 255))).toString(16).padStart(2, '0');
    let bHex = Math.min(255, Math.max(0, Math.round((b + m) * 255))).toString(16).padStart(2, '0');
    return `#${rHex}${gHex}${bHex}`;
  }

  function generateHarmoniousPalette(hex) {
    const hsl = hexToHsl(hex);
    const secH = (hsl.h + 38) % 360;
    const accH = (hsl.h + 75) % 360;
    const secondary = hslToHex(secH, Math.min(95, Math.max(50, hsl.s)), Math.min(65, Math.max(45, hsl.l)));
    const accent = hslToHex(accH, Math.min(95, Math.max(50, hsl.s)), Math.min(65, Math.max(45, hsl.l)));
    return {
      primary: hex,
      primaryRgb: hexToRgb(hex).str,
      secondary: secondary,
      secondaryRgb: hexToRgb(secondary).str,
      accent: accent,
      accentRgb: hexToRgb(accent).str
    };
  }

  function applyPalette(paletteId, customHex = null) {
    const root = document.documentElement;
    let colors;

    if (paletteId === 'custom' && customHex) {
      colors = generateHarmoniousPalette(customHex);
      state.activePalette = 'custom';
      state.customColor = customHex;
      safeStorage.set('hb_palette', 'custom');
      safeStorage.set('hb_custom_color', customHex);
      if (customColorInput) customColorInput.value = customHex;
      if (customColorHex) customColorHex.textContent = customHex.toUpperCase();
    } else {
      const p = window.portfolioData.palettes.find(item => item.id === paletteId) || window.portfolioData.palettes[0];
      colors = {
        primary: p.primary,
        primaryRgb: p.primaryRgb,
        secondary: p.secondary,
        secondaryRgb: p.secondaryRgb,
        accent: p.accent,
        accentRgb: p.accentRgb
      };
      state.activePalette = p.id;
      safeStorage.set('hb_palette', p.id);
      if (customColorInput) customColorInput.value = p.primary;
      if (customColorHex) customColorHex.textContent = p.primary.toUpperCase();
    }

    // Set Root CSS Variables
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-primary-rgb', colors.primaryRgb);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-secondary-rgb', colors.secondaryRgb);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-accent-rgb', colors.accentRgb);
    root.style.setProperty('--theme-gradient', `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`);
    root.style.setProperty('--theme-gradient-reverse', `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`);
    root.style.setProperty('--theme-text-gradient', `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 50%, ${colors.accent} 100%)`);
    root.style.setProperty('--theme-glow-1', `rgba(${colors.primaryRgb}, 0.22)`);
    root.style.setProperty('--theme-glow-2', `rgba(${colors.secondaryRgb}, 0.22)`);
    root.style.setProperty('--theme-glow-3', `rgba(${colors.accentRgb}, 0.16)`);

    document.body.classList.add('theme-applied');

    if (headerActiveColorDot) {
      headerActiveColorDot.style.backgroundColor = colors.primary;
      headerActiveColorDot.style.boxShadow = `0 0 10px ${colors.primary}`;
    }

    renderPaletteSelectors();
  }

  function renderPaletteSelectors() {
    const isAr = state.lang === 'ar';
    const activeId = state.activePalette;

    // 1. Navbar Popover List
    if (palettesContainer && window.portfolioData.palettes) {
      palettesContainer.innerHTML = window.portfolioData.palettes.map(p => {
        const isActive = activeId === p.id;
        const name = isAr ? p.nameAr : p.nameEn;
        return `
          <button type="button" data-palette-id="${p.id}" class="palette-option-btn w-full p-2 rounded-xl flex items-center justify-between text-left transition duration-200 ${isActive ? 'bg-slate-800/90 ring-1 ring-white/30 shadow-md' : 'hover:bg-slate-800/50'}">
            <div class="flex items-center gap-2.5">
              <span class="w-5 h-5 rounded-full shadow-sm flex items-center justify-center shrink-0 border border-white/20" style="background: linear-gradient(135deg, ${p.primary} 50%, ${p.secondary} 50%);">
              </span>
              <span class="text-xs font-semibold ${isActive ? 'text-white' : 'text-slate-300'}">${name}</span>
            </div>
            ${isActive ? `
              <span class="w-4 h-4 rounded-full flex items-center justify-center text-white" style="color: ${p.primary};">
                <i data-lucide="check" class="w-3.5 h-3.5"></i>
              </span>
            ` : ''}
          </button>
        `;
      }).join('');

      palettesContainer.querySelectorAll('.palette-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const pId = btn.getAttribute('data-palette-id');
          applyPalette(pId);
        });
      });
    }

    // 2. Floating Swatches Bar (Quick access 6 colors)
    if (floatingSwatches && window.portfolioData.palettes) {
      floatingSwatches.innerHTML = window.portfolioData.palettes.map(p => {
        const isActive = activeId === p.id;
        const name = isAr ? p.nameAr : p.nameEn;
        return `
          <button type="button" data-palette-id="${p.id}" title="${name}" class="palette-swatch-btn relative w-7 h-7 rounded-full p-0.5 transition transform hover:scale-110 focus:outline-none ${isActive ? 'active ring-2 ring-white scale-110 shadow-lg' : 'opacity-80 hover:opacity-100'}">
            <span class="block w-full h-full rounded-full border border-white/20" style="background: linear-gradient(135deg, ${p.primary} 50%, ${p.secondary} 50%);"></span>
          </button>
        `;
      }).join('');

      floatingSwatches.querySelectorAll('.palette-swatch-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const pId = btn.getAttribute('data-palette-id');
          applyPalette(pId);
        });
      });
    }

    // 3. Mobile Drawer Swatches
    if (mobilePalettesRow && window.portfolioData.palettes) {
      mobilePalettesRow.innerHTML = window.portfolioData.palettes.map(p => {
        const isActive = activeId === p.id;
        return `
          <button type="button" data-palette-id="${p.id}" class="w-8 h-8 rounded-full shrink-0 p-0.5 border border-white/20 transition ${isActive ? 'ring-2 ring-white scale-105' : 'opacity-80'}" style="background: linear-gradient(135deg, ${p.primary} 50%, ${p.secondary} 50%);">
          </button>
        `;
      }).join('');

      mobilePalettesRow.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          const pId = btn.getAttribute('data-palette-id');
          applyPalette(pId);
        });
      });

      if (mobileActivePaletteName) {
        const cur = window.portfolioData.palettes.find(p => p.id === activeId);
        mobileActivePaletteName.textContent = cur ? (isAr ? cur.nameAr : cur.nameEn) : (isAr ? 'مخصص' : 'Custom');
      }
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Palette Event Listeners
  if (paletteToggleBtn && paletteDropdown) {
    paletteToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      paletteDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!paletteDropdown.contains(e.target) && !paletteToggleBtn.contains(e.target)) {
        paletteDropdown.classList.add('hidden');
      }
    });
  }

  if (paletteResetBtn) {
    paletteResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyPalette('cyber-indigo');
      if (toastNotification && toastMessage) {
        toastMessage.textContent = state.lang === 'ar' ? 'تمت استعادة سمة الألوان الافتراضية بنجاح' : 'Reset to default theme colors successfully';
        toastNotification.classList.remove('opacity-0', 'translate-y-24');
        setTimeout(() => toastNotification.classList.add('opacity-0', 'translate-y-24'), 2500);
      }
    });
  }

  if (customColorInput) {
    customColorInput.addEventListener('input', (e) => {
      applyPalette('custom', e.target.value);
    });
    customColorInput.addEventListener('change', (e) => {
      applyPalette('custom', e.target.value);
    });
  }

  if (floatingPaletteBtn && paletteDropdown) {
    floatingPaletteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      paletteDropdown.classList.toggle('hidden');
      if (!paletteDropdown.classList.contains('hidden')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  /* ============================================================
     2. LANGUAGE / I18N CONTROLLER
     ============================================================ */
  function applyLanguage(lang) {
    state.lang = lang;
    safeStorage.set('hb_lang', lang);
    const isAr = lang === 'ar';

    // HTML Attributes
    htmlEl.lang = lang;
    htmlEl.dir = isAr ? 'rtl' : 'ltr';

    // Switch Font Class if needed
    if (isAr) {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Outfit', sans-serif";
    }

    // Update Lang button text
    if (langCurrentLabel) {
      langCurrentLabel.textContent = isAr ? 'English' : 'العربية';
    }

    // Set page title
    const t = window.portfolioData.i18n[lang];
    if (t && t.siteTitle) {
      document.title = t.siteTitle;
    }

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const path = el.getAttribute('data-i18n');
      const text = getDeepValue(t, path);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Translate placeholder attributes if specified
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const path = el.getAttribute('data-i18n-placeholder');
      const text = getDeepValue(t, path);
      if (text) el.placeholder = text;
    });

    // Re-render Dynamic Content
    renderStats();
    renderSkills();
    renderProjects(state.activeFilter);
    renderTimeline();
    renderCVContent();
    renderPaletteSelectors();

    // Re-initialize Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function getDeepValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  function toggleLanguage() {
    const nextLang = state.lang === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLang);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }

  /* ============================================================
     3. RENDER STATS & NUMBER COUNTERS
     ============================================================ */
  function renderStats() {
    if (!statsContainer) return;
    const isAr = state.lang === 'ar';
    statsContainer.innerHTML = window.portfolioData.stats.map(s => `
      <div class="glass-card p-6 rounded-2xl text-center relative overflow-hidden group">
        <div class="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:scale-150 transition duration-500"></div>
        <div class="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 mb-2 font-mono flex items-center justify-center">
          <span class="counter-number" data-target="${s.value}">0</span>
          <span>${s.suffix}</span>
        </div>
        <p class="text-sm lg:text-base text-slate-400 dark:text-slate-300 font-medium">
          ${isAr ? s.ar : s.en}
        </p>
      </div>
    `).join('');

    initCounterObserver();
  }

  function initCounterObserver() {
    const numbers = document.querySelectorAll('.counter-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !state.countersAnimated) {
          state.countersAnimated = true;
          numbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'), 10);
            animateCounter(num, target);
          });
        }
      });
    }, { threshold: 0.3 });

    if (statsContainer) observer.observe(statsContainer);
  }

  function animateCounter(el, target) {
    let start = 0;
    const duration = 1600;
    const increment = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = start;
      }
    }, 16);
  }

  /* ============================================================
     4. RENDER SKILLS
     ============================================================ */
  function renderSkills() {
    if (!skillsContainer) return;
    const isAr = state.lang === 'ar';
    const t = window.portfolioData.i18n[state.lang].skills;

    skillsContainer.innerHTML = window.portfolioData.skillsData.map((category) => {
      const catTitle = t.categories[category.categoryKey] || category.categoryKey;
      return `
        <div class="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group">
          <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50 dark:border-slate-800">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-300">
              <i data-lucide="${category.icon}" class="w-6 h-6"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-100">${catTitle}</h3>
              <span class="text-xs text-indigo-400 font-mono">${category.items.length} ${isAr ? 'مهارات متخصصة' : 'Core Disciplines'}</span>
            </div>
          </div>
          <div class="space-y-4">
            ${category.items.map(skill => `
              <div class="space-y-1.5">
                <div class="flex justify-between items-center text-sm">
                  <span class="font-medium text-slate-200">${skill.name}</span>
                  <span class="text-xs text-indigo-400 font-mono bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    ${skill.level}
                  </span>
                </div>
                <div class="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5">
                  <div class="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000" style="width: ${skill.pct}%;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  /* ============================================================
     5. RENDER PROJECTS & FILTER
     ============================================================ */
  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    const isAr = state.lang === 'ar';
    const t = window.portfolioData.i18n[state.lang].projects;

    const filtered = filter === 'all' 
      ? window.portfolioData.projectsData 
      : window.portfolioData.projectsData.filter(p => p.category === filter);

    projectsGrid.innerHTML = filtered.map(p => {
      const details = isAr ? p.ar : p.en;
      return `
        <article class="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-800/60 hover:border-indigo-500/40 transition duration-300">
          <div>
            <!-- Image & Badge -->
            <div class="relative overflow-hidden aspect-video cursor-pointer" onclick="openProjectModal('${p.id}')">
              <img src="${p.image}" alt="${details.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-95 group-hover:brightness-105" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute top-4 ${isAr ? 'right-4' : 'left-4'} flex gap-2">
                <span class="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600/80 backdrop-blur-md text-white border border-indigo-400/30">
                  ${p.category.toUpperCase()}
                </span>
              </div>
              <button type="button" class="absolute bottom-4 ${isAr ? 'left-4' : 'right-4'} px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-xs text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                <span>${t.viewDetails}</span>
              </button>
            </div>

            <!-- Content -->
            <div class="p-6 md:p-7">
              <h3 class="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition cursor-pointer mb-2" onclick="openProjectModal('${p.id}')">
                ${details.title}
              </h3>
              <p class="text-sm text-slate-400 mb-5 leading-relaxed line-clamp-2">
                ${details.subtitle}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                ${p.tags.map(tag => `
                  <span class="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                    ${tag}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-3">
            <button onclick="openProjectModal('${p.id}')" class="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5">
              <span>${t.viewDetails}</span>
              <i data-lucide="${isAr ? 'arrow-left' : 'arrow-right'}" class="w-4 h-4"></i>
            </button>
            <div class="flex items-center gap-2">
              <a href="${p.codeUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white transition" title="${t.viewCode}">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
              </a>
              <button onclick="openProjectModal('${p.id}')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-indigo-500/20">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>${t.liveDemo}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Filter Click Handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-indigo-500/30', 'shadow-md');
        b.classList.add('text-slate-400', 'hover:text-white');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-indigo-500/30', 'shadow-md');
      btn.classList.remove('text-slate-400');

      const filter = btn.getAttribute('data-filter');
      state.activeFilter = filter;
      renderProjects(filter);
    });
  });

  /* ============================================================
     6. RENDER TIMELINE
     ============================================================ */
  function renderTimeline() {
    if (!timelineContainer) return;
    const isAr = state.lang === 'ar';

    timelineContainer.innerHTML = window.portfolioData.experiences.map((exp, idx) => `
      <div class="relative pl-8 md:pl-0 pb-12 last:pb-0 group">
        <!-- Milestone Card -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
          <!-- Date / Badge (Left or Right) -->
          <div class="md:col-span-4 ${isAr ? 'md:text-left' : 'md:text-right'} flex flex-col justify-start">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-cyan-400 border border-indigo-500/20 w-fit ${isAr ? 'md:ml-auto' : 'md:mr-auto'}">
              <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
              ${isAr ? exp.periodAr : exp.periodEn}
            </span>
            <span class="text-xs text-slate-400 mt-1 font-medium">
              ${isAr ? exp.typeAr : exp.typeEn}
            </span>
          </div>

          <!-- Central Dot for Desktop -->
          <div class="hidden md:flex md:col-span-1 justify-center relative">
            <div class="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 timeline-dot ring-4 ring-slate-900 z-10"></div>
          </div>

          <!-- Description Card -->
          <div class="md:col-span-7 glass-card p-6 rounded-2xl border border-slate-800/70 group-hover:border-indigo-500/40 transition">
            <h4 class="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition mb-1">
              ${isAr ? exp.roleAr : exp.roleEn}
            </h4>
            <div class="text-sm font-semibold text-indigo-400 mb-3 flex items-center gap-2">
              <i data-lucide="building-2" class="w-4 h-4"></i>
              <span>${isAr ? exp.institutionAr : exp.institutionEn}</span>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed">
              ${isAr ? exp.descAr : exp.descEn}
            </p>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ============================================================
     7. PROJECT DETAILS MODAL
     ============================================================ */
  window.openProjectModal = function(projectId) {
    const project = window.portfolioData.projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    const isAr = state.lang === 'ar';
    const details = isAr ? project.ar : project.en;
    const t = window.portfolioData.i18n[state.lang].projects;

    document.getElementById('modal-img').src = project.image;
    document.getElementById('modal-img').alt = details.title;
    document.getElementById('modal-title').textContent = details.title;
    document.getElementById('modal-category').textContent = project.category.toUpperCase();
    document.getElementById('modal-desc').textContent = details.description;

    const featuresContainer = document.getElementById('modal-features');
    if (featuresContainer && details.keyFeatures) {
      featuresContainer.innerHTML = details.keyFeatures.map(f => `
        <li class="flex items-start gap-2.5 text-sm text-slate-300">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
          <span>${f}</span>
        </li>
      `).join('');
    }

    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = project.tags.map(tag => `
        <span class="px-2.5 py-1 text-xs rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
          ${tag}
        </span>
      `).join('');
    }

    const demoBtn = document.getElementById('modal-demo-btn');
    if (demoBtn) {
      demoBtn.href = project.demoUrl;
      demoBtn.querySelector('span').textContent = t.liveDemo;
    }

    const codeBtn = document.getElementById('modal-code-btn');
    if (codeBtn) {
      codeBtn.href = project.codeUrl;
      codeBtn.querySelector('span').textContent = t.viewCode;
    }

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  };

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  /* ============================================================
     8. CV MODAL & SUMMARY
     ============================================================ */
  function renderCVContent() {
    const isAr = state.lang === 'ar';
    const cvBody = document.getElementById('cv-modal-body');
    if (!cvBody) return;

    cvBody.innerHTML = `
      <div class="space-y-6 text-slate-200">
        <!-- Header -->
        <div class="border-b border-slate-700/60 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-black text-slate-100">${isAr ? 'حسين بلفقيه' : 'Hussein Balfaqih'}</h2>
            <p class="text-indigo-400 font-medium text-sm mt-1">
              ${isAr ? 'مهندس برمجيات واجهات أمامية | خبير UI/UX | معيد أكاديمي' : 'Frontend Engineer | UI/UX Specialist | Academic TA'}
            </p>
          </div>
          <div class="text-xs text-slate-400 space-y-1 font-mono">
            <div>📍 ${isAr ? 'حضرموت، اليمن (متاح للعمل عن بُعد)' : 'Hadhramout, Yemen (Remote Global)'}</div>
            <div>✉️ hussein.balfaqih@example.com</div>
          </div>
        </div>

        <!-- Academic & Experience Summary -->
        <div>
          <h3 class="text-base font-bold text-cyan-400 mb-2 flex items-center gap-2">
            <i data-lucide="briefcase" class="w-4 h-4"></i>
            <span>${isAr ? 'الملخص المهني والأكاديمي' : 'Professional & Academic Summary'}</span>
          </h3>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            ${isAr 
              ? 'مهندس واجهات أمامية ومصمم تجارب مستخدم يتمتع بخبرة تتجاوز 5 سنوات في هندسة الحلول الرقمية، إلى جانب العمل الأكاديمي كمعيد في كلية تكنولوجيا المعلومات. تخصصي يجمع بين دقة الهندسة البرمجية للواجهات (React, Next.js, Tailwind)، حس التصميم الراقي (Figma)، وتطبيقات الذكاء الاصطناعي الحديثة وأسلوب البرمجة التوليدية (Vibe Coding).' 
              : 'Frontend Software Engineer and UI/UX Specialist with 5+ years of experience crafting high-performance digital products, coupled with academic responsibilities as an IT Teaching Assistant. Combines rigorous frontend architecture (React, Next.js, Tailwind), human-centered UX design (Figma), and generative AI/Vibe Coding automation workflows.'
            }
          </p>
        </div>

        <!-- Highlights Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h4 class="font-bold text-sm text-indigo-300 mb-2">${isAr ? 'التعليم الأكاديمي' : 'Education'}</h4>
            <div class="text-xs text-slate-300">
              <div class="font-semibold">${isAr ? 'بكالوريوس تكنولوجيا المعلومات والبرمجيات' : 'B.Sc. in Information Technology & Software'}</div>
              <div class="text-slate-400 text-[11px] mt-0.5">${isAr ? 'مرتبة شرف - تعيين كمعيد بالكلية' : 'First Class Honors - Appointed Teaching Assistant'}</div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h4 class="font-bold text-sm text-cyan-300 mb-2">${isAr ? 'اللغات المتقنة' : 'Languages'}</h4>
            <div class="text-xs text-slate-300 space-y-1">
              <div class="flex justify-between"><span>${isAr ? 'العربية' : 'Arabic'}</span><span class="text-indigo-400 font-mono">${isAr ? 'اللغة الأم' : 'Native'}</span></div>
              <div class="flex justify-between"><span>${isAr ? 'الإنجليزية' : 'English'}</span><span class="text-indigo-400 font-mono">${isAr ? 'إتقان مهني وأكاديمي' : 'Professional Fluent'}</span></div>
            </div>
          </div>
        </div>

        <!-- Core Competencies -->
        <div>
          <h4 class="font-bold text-sm text-slate-200 mb-2">${isAr ? 'أبرز الكفاءات والتقنيات' : 'Key Core Competencies'}</h4>
          <div class="flex flex-wrap gap-1.5">
            ${['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma', 'UI/UX Design Systems', 'AI & Vibe Coding', 'Prompt Engineering', 'Academic Lecturing', 'REST APIs', 'Git/GitHub', 'Performance Tuning'].map(skill => `
              <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono">${skill}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  function openCVModal() {
    if (!cvModal) return;
    renderCVContent();
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCVModal() {
    if (!cvModal) return;
    cvModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cvModalTrigger) {
    cvModalTrigger.addEventListener('click', openCVModal);
  }

  const cvHeroBtn = document.getElementById('cv-hero-btn');
  if (cvHeroBtn) {
    cvHeroBtn.addEventListener('click', openCVModal);
  }

  if (cvModalClose) {
    cvModalClose.addEventListener('click', closeCVModal);
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCVModal();
    });
  }

  // Print CV trigger
  const cvPrintBtn = document.getElementById('cv-print-btn');
  if (cvPrintBtn) {
    cvPrintBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* ============================================================
     9. CONTACT FORM INTERACTION & FEEDBACK
     ============================================================ */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      const isAr = state.lang === 'ar';

      // Loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>${isAr ? 'جاري الإرسال...' : 'Sending...'}</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(isAr ? 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً جداً.' : 'Message sent successfully! I will get back to you soon.');
      }, 1200);
    });
  }

  function showToast(message) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotification.classList.remove('translate-y-24', 'opacity-0');
    toastNotification.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toastNotification.classList.add('translate-y-24', 'opacity-0');
      toastNotification.classList.remove('translate-y-0', 'opacity-100');
    }, 4500);
  }

  /* ============================================================
     10. MOBILE MENU TOGGLE
     ============================================================ */
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });

    mobileMenuDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuDrawer.classList.add('hidden');
      });
    });
  }

  /* ============================================================
     11. ESCAPE KEY MODAL CLOSING
     ============================================================ */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCVModal();
    }
  });

  /* ============================================================
     INITIALIZATION
     ============================================================ */
  applyTheme(state.theme);
  applyPalette(state.activePalette, state.customColor);
  applyLanguage(state.lang);
});
