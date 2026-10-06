/**
 * Academic & Portfolio Showcase Script
 * Hussein Balfaqih Academic Platform
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // Academic Data Repository
  const academicData = {
    courses: [
      {
        id: "fe-arch",
        code: "IT-FE401",
        category: "frontend",
        icon: "layers",
        ar: {
          title: "هندسة واجهات المستعمل المتقدمة والأداء (Advanced Frontend Architecture)",
          subtitle: "مساق متقدم لطلاب البكالوريوس في هندسة وتطوير الواجهات عالية الكفاءة",
          description: "دراسة شاملة لبناء تطبيقات الويب الكبيرة بـ React و Next.js، تطبيق أنماط الكود النظيف، تحسين مؤشرات سرعة الويب Core Web Vitals إلى أعلى من 95%، وإدارة الحالات المعقدة.",
          outcomes: ["بناء معمارية معيارية قابلة للتوسع", "تحسين مؤشرات Core Web Vitals +95", "إدارة الحالات ومزامنة البيانات محلياً"]
        },
        en: {
          title: "Advanced Frontend Architecture & Web Performance",
          subtitle: "Advanced undergraduate course in scalable frontend engineering & web vitals",
          description: "In-depth study of enterprise web application architectures with React & Next.js, clean code design patterns, performance optimization for Core Web Vitals 95+, and state management.",
          outcomes: ["Modular Scalable Architecture", "Core Web Vitals 95+ Score", "Client-Side State Synchronization"]
        },
        enrolledAr: "+240 طالباً",
        enrolledEn: "+240 Students",
        resourceLink: "resources/fe-architecture-syllabus.pdf"
      },
      {
        id: "uiux-ds",
        code: "IT-UX302",
        category: "uiux",
        icon: "palette",
        ar: {
          title: "تصميم أنظمة واجهات وتجربة المستخدم (UI/UX Design Systems)",
          subtitle: "مساق تطبيقي يعالج الهندسة البصرية وتصميم التجارب السلسة",
          description: "بناء أنظمة التصميم الرقمية الشاملة في Figma، تحديد Design Tokens، استيفاء المعايير العالمية لإمكانية الوصول والنفاذ الرقمي (WCAG 2.1)، وتصميم التفاعلات الإنسانية.",
          outcomes: ["بناء مكتبات أنظمة التصميم Figma", "استيفاء معايير WCAG 2.1 النفاذية", "قياس تجربة المستخدم ومعدلات التفاعل"]
        },
        en: {
          title: "UI/UX Design Systems & Interface Ergonomics",
          subtitle: "Hands-on course bridging design tokens, Figma libraries, and HCI principles",
          description: "Creating comprehensive digital design systems in Figma, defining Design Tokens, enforcing WCAG 2.1 accessibility guidelines, and mapping human-computer interaction flows.",
          outcomes: ["Enterprise Design System Libraries", "WCAG 2.1 Accessibility Compliance", "Human Interaction Journey Mapping"]
        },
        enrolledAr: "+190 طالباً",
        enrolledEn: "+190 Students",
        resourceLink: "resources/uiux-design-systems.pdf"
      },
      {
        id: "ai-vibe",
        code: "IT-AI505",
        category: "ai",
        icon: "bot",
        ar: {
          title: "أتمتة البرمجة بالذكاء الاصطناعي (AI & Vibe Coding)",
          subtitle: "برنامج تدريبي مكثف في هندسة الأوامر وتسريع بناء الواجهات",
          description: "ورشة عمل تدمج النماذج اللغوية الكبيرة (LLMs) وأدوات التوليد البرمجي في مسارات العمل، تدريب الطلاب على هندسة الأوامر المتقدمة لبناء نماذج أولية تفاعلية سرعة مضاعفة 10x.",
          outcomes: ["هندسة الأوامر البرمجية المتقدمة", "دمج نماذج LLM عبر API", "تسريع دورة الإنتاج والتطوير 10x"]
        },
        en: {
          title: "Generative AI Development & Vibe Coding Methodologies",
          subtitle: "Intensive training program accelerating frontend engineering with LLM AI workflows",
          description: "Hands-on bootcamp embedding Large Language Models (LLMs) into frontend pipelines, teaching advanced prompt engineering to build interactive prototypes with 10x speed.",
          outcomes: ["Advanced Prompt Engineering Patterns", "LLM API Pipeline Integrations", "10x Prototyping Developer Velocity"]
        },
        enrolledAr: "+180 متدرباً",
        enrolledEn: "+180 Trainees",
        resourceLink: "resources/ai-vibe-coding-guide.pdf"
      },
      {
        id: "ds-alg",
        code: "IT-DS201",
        category: "frontend",
        icon: "cpu",
        ar: {
          title: "هياكل البيانات والخوارزميات للويب (Data Structures for Web)",
          subtitle: "المبادئ الأساسية للبرمجة الهيكلية والأداء المعالجي في المتصفح",
          description: "تغطية هياكل البيانات الخطيّة وغير الخطيّة، تحليل التعقيد الزمني والمكاني (Big-O)، معالجة المصفوفات والأشجار، وإدارة الذاكرة الفعالة في تطبيقات الويب الحديثة.",
          outcomes: ["تحليل التعقيد البرمجي Big-O", "خوارزميات البحث والفرز والبيانات", "إدارة الذاكرة وتحسين الأداء"]
        },
        en: {
          title: "Data Structures & Algorithmic Foundations for Web",
          subtitle: "Core computer science principles & browser memory optimizations",
          description: "Covering linear and non-linear data structures, Big-O algorithmic time & space complexity, tree traversals, and client-side browser memory management optimizations.",
          outcomes: ["Big-O Complexity Analysis", "Tree & Graph Traversal Algorithms", "Browser Memory Optimization"]
        },
        enrolledAr: "+310 طالباً",
        enrolledEn: "+310 Students",
        resourceLink: "resources/data-structures-guide.pdf"
      },
      {
        id: "hci-paper",
        code: "RES-2024-01",
        category: "research",
        icon: "microscope",
        ar: {
          title: "بحث: تقييم التفاعل البشري الحاسوبي (HCI) في البيئات التعليمية الذكية",
          subtitle: "دراسة أكاديمية نشرت في تقييم سهولة الاستخدام واستبقاء المعرفة",
          description: "ورقة بحثية علمية محكّمة تقيم أثر التفاعلات البصرية الواجهية على معدل استبقاء المعرفة وتخفيف العبء الذهني للطلاب أثناء تصفح المنصات التعليمية الرقمية الذكية.",
          outcomes: ["مقاييس سهولة الاستخدام HCI", "تقييم العبء الذهني المعرفي", "اختبارات A/B في بيئات التعليم"]
        },
        en: {
          title: "Research Paper: Evaluating HCI Ergonomics in Smart EdTech Platforms",
          subtitle: "Peer-reviewed academic research on cognitive ergonomics & knowledge retention",
          description: "Academic paper investigating user interaction paradigms, cognitive load reduction, and usability metrics in generative AI-augmented digital learning environments.",
          outcomes: ["HCI Usability Metric Frameworks", "Cognitive Load Ergonomic Metrics", "A/B Controlled Usability Testing"]
        },
        enrolledAr: "ورقة علمية محكّمة",
        enrolledEn: "Peer-Reviewed Study",
        resourceLink: "resources/hci-edtech-paper.pdf"
      }
    ]
  };

  // State
  let activeAcadFilter = 'all';

  // DOM Elements
  const acadCoursesGrid = document.getElementById('acad-courses-grid');
  const acadProjectsGrid = document.getElementById('acad-projects-grid');
  const acadFilterBtns = document.querySelectorAll('.acad-filter-btn');
  const acadSearchInput = document.getElementById('acad-project-search');
  const downloadCvBtn = document.getElementById('download-academic-cv');
  const downloadSyllabusBtn = document.getElementById('download-syllabus-pack');

  /* ============================================================
     1. RENDER ACADEMIC COURSES & RESEARCH
     ============================================================ */
  function renderAcadCourses(filter = 'all') {
    if (!acadCoursesGrid) return;
    const isAr = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';

    const filtered = filter === 'all'
      ? academicData.courses
      : academicData.courses.filter(c => c.category === filter);

    acadCoursesGrid.innerHTML = filtered.map(c => {
      const details = isAr ? c.ar : c.en;
      const enrolled = isAr ? c.enrolledAr : c.enrolledEn;
      return `
        <article class="glass-card p-6 md:p-7 rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-800/80 hover:border-indigo-500/50 transition duration-300">
          <div>
            <!-- Header Badge & Icon -->
            <div class="flex items-center justify-between gap-3 mb-5">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition duration-300">
                <i data-lucide="${c.icon}" class="w-6 h-6"></i>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 text-cyan-400 border border-slate-700">
                ${c.code}
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition mb-2">
              ${details.title}
            </h3>
            <p class="text-xs text-indigo-400 font-mono mb-4">
              ${details.subtitle}
            </p>

            <!-- Description -->
            <p class="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-3">
              ${details.description}
            </p>

            <!-- Outcomes List -->
            <div class="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
              ${details.outcomes.map(out => `
                <div class="flex items-center gap-2 text-xs text-slate-400">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i>
                  <span>${out}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Card Footer -->
          <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[11px] font-mono text-slate-400">
              👥 ${enrolled}
            </span>
            <button onclick="handleDownloadResource('${c.resourceLink}', '${details.title}')" class="px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 text-xs font-semibold border border-slate-700/80 flex items-center gap-1.5 transition">
              <i data-lucide="download" class="w-3.5 h-3.5"></i>
              <span>${isAr ? 'الدليل / الموعد' : 'Resource'}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter Buttons Handler
  acadFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      acadFilterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-indigo-500/30', 'shadow-md');
        b.classList.add('text-slate-400', 'hover:text-white', 'bg-slate-800/60');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-indigo-500/30', 'shadow-md');
      btn.classList.remove('text-slate-400', 'bg-slate-800/60');

      const filter = btn.getAttribute('data-acad-filter');
      activeAcadFilter = filter;
      renderAcadCourses(filter);
    });
  });

  /* ============================================================
     2. RENDER PROJECTS SHOWCASE ON ACADEMIC PAGE
     ============================================================ */
  function renderAcadProjects(query = '') {
    if (!acadProjectsGrid || !window.portfolioData || !window.portfolioData.projectsData) return;
    const isAr = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';

    let projects = window.portfolioData.projectsData;

    if (query.trim() !== '') {
      const q = query.toLowerCase();
      projects = projects.filter(p => {
        const details = isAr ? p.ar : p.en;
        return details.title.toLowerCase().includes(q) ||
               details.subtitle.toLowerCase().includes(q) ||
               p.tags.some(t => t.toLowerCase().includes(q));
      });
    }

    acadProjectsGrid.innerHTML = projects.map(p => {
      const details = isAr ? p.ar : p.en;
      return `
        <article class="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-800/80 hover:border-indigo-500/40 transition duration-300">
          <div>
            <div class="relative overflow-hidden aspect-video cursor-pointer" onclick="openProjectModal('${p.id}')">
              <img src="${p.image}" alt="${details.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-95 group-hover:brightness-105" loading="lazy">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute top-4 ${isAr ? 'right-4' : 'left-4'}">
                <span class="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600/80 backdrop-blur-md text-white border border-indigo-400/30">
                  ${p.category.toUpperCase()}
                </span>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition cursor-pointer mb-2" onclick="openProjectModal('${p.id}')">
                ${details.title}
              </h3>
              <p class="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                ${details.subtitle}
              </p>

              <div class="flex flex-wrap gap-1.5 mb-4">
                ${p.tags.map(tag => `
                  <span class="text-[11px] px-2 py-0.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                    ${tag}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-3">
            <button onclick="openProjectModal('${p.id}')" class="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>${isAr ? 'تفاصيل المشروع' : 'View Details'}</span>
              <i data-lucide="${isAr ? 'arrow-left' : 'arrow-right'}" class="w-3.5 h-3.5"></i>
            </button>
            <div class="flex items-center gap-2">
              <a href="${p.codeUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white transition" title="GitHub">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
              </a>
              <button onclick="openProjectModal('${p.id}')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-1 shadow-md shadow-indigo-500/20">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>${isAr ? 'معاينة' : 'Demo'}</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (acadSearchInput) {
    acadSearchInput.addEventListener('input', (e) => {
      renderAcadProjects(e.target.value);
    });
  }

  // Global Download Handler
  window.handleDownloadResource = function(link, title) {
    const isAr = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';
    const toastNotification = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');

    if (toastNotification && toastMessage) {
      toastMessage.textContent = isAr 
        ? `جاري تجهيز وثيقة: ${title}` 
        : `Preparing download for: ${title}`;
      toastNotification.classList.remove('translate-y-24', 'opacity-0');
      toastNotification.classList.add('translate-y-0', 'opacity-100');

      setTimeout(() => {
        toastNotification.classList.add('translate-y-24', 'opacity-0');
        toastNotification.classList.remove('translate-y-0', 'opacity-100');
      }, 3500);
    }
  };

  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      window.handleDownloadResource('resources/academic-cv.pdf', 'السيرة الذاتية الأكاديمية (Academic CV)');
    });
  }

  if (downloadSyllabusBtn) {
    downloadSyllabusBtn.addEventListener('click', () => {
      window.handleDownloadResource('resources/syllabus-pack.zip', 'حقيبة التدريس والأدلة الأكاديمية');
    });
  }

  const cvAcademicTrigger = document.getElementById('cv-academic-trigger');
  if (cvAcademicTrigger && window.openCVModal) {
    cvAcademicTrigger.addEventListener('click', window.openCVModal);
  }

  // Initial Render
  renderAcadCourses('all');
  renderAcadProjects('');
});
