/**
 * Portfolio Data & Bilingual Dictionaries
 * Profile: Hussein Balfaqih (حسين بلفقيه)
 */

const portfolioData = {
  // Localization dictionary
  i18n: {
    ar: {
      siteTitle: "حسين بلفقيه | مهندس برمجيات واجهات ومصمم تجربة مستخدم وأكاديمي",
      nav: {
        home: "الرئيسية",
        about: "عنّي",
        skills: "المهارات",
        projects: "المشاريع",
        experience: "الخبرات والتدريب",
        contact: "تواصل معي",
        hireMe: "وظفني الآن"
      },
      hero: {
        badge: "🟢 متاح للمشاريع النوعية واستشارات الويب والـ UI/UX",
        greeting: "مرحباً، أنا",
        name: "حسين بلفقيه",
        role: "مهندس برمجيات واجهات أمامية | خبير UI/UX | معيد أكاديمي في تكنولوجيا المعلومات",
        summary: "أجمع بين عمق الهندسة البرمجية للواجهات، وحس التصميم الإنساني المتقن، والشغف الأكاديمي وأتمتة الذكاء الاصطناعي (AI & Vibe Coding) لصناعة تجارب رقمية استثنائية وعالية الأداء.",
        ctaProjects: "استعراض المشاريع",
        ctaContact: "تواصل معي",
        ctaCV: "تحميل السيرة الذاتية (CV)",
        stat1: "+5 سنوات خبرة هندسية وتصميمية",
        stat2: "+35 مشروعاً نوعياً منجزاً",
        stat3: "+650 طالباً ومتدرباً في مسارات التقنية",
        floatingRole1: "Frontend Architect",
        floatingRole2: "UI/UX Craftsman",
        floatingRole3: "AI & Vibe Coding",
        floatingRole4: "IT Academic Mentor"
      },
      about: {
        tag: "الهوية المهنية والمسار",
        title: "ما وراء الشفرة: هندسة، إبداع، وشغف بنقل المعرفة",
        paragraph1: "أنا مهندس برمجيات واجهات أمامية (Frontend Developer) ومصمم تجربة مستخدم (UI/UX Designer)، أعمل كمعيد وأكاديمي في كلية تكنولوجيا المعلومات. نشاطي يرتكز على نقطة التقاء فريدة: بناء أنظمة ويب فائقة السرعة والجمال، وتصميم رحلات مستخدم سلسة، ونقل هذه المهارات إلى الجيل الصاعد من التقنيين.",
        paragraph2: "مع تسارع ثورة الذكاء الاصطناعي، أتبنى بنشاط تقنيات أتمتة البرمجة و(AI & Vibe Coding) لدمج النماذج الذكية في مسارات تطوير البرمجيات، إلى جانب اهتمامي البحثي في تقييم فاعلية تقنيات التعليم الرقمي وتحليل سلوك المستخدمين في البيئات الذكية.",
        pillars: {
          code: {
            title: "هندسة نظيفة وأداء صارم",
            desc: "كتابة شيفرات معيارية قابلة للتوسع، خفيفة الوزن، ومتوافقة تماماً مع معايير الويب وسرعة التحميل (Core Web Vitals)."
          },
          design: {
            title: "تصميم واجهات وتجربة مستخدم مدروسة",
            desc: "بناء أنظمة تصميم (Design Systems) تفاعلية، متوازنة بصرياً، ومصممة خصيصاً لتحقيق أعلى معدلات تفاعل وسهولة استخدام."
          },
          academic: {
            title: "تدريس أكاديمي وإرشاد تقني",
            desc: "تقديم مساقات برمجية جامعية وورش عمل تطبيقية تصقل مهارات مئات الطلاب في مجالات الواجهات وحل المشكلات البرمجية."
          },
          ai: {
            title: "أتمتة الذكاء الاصطناعي (AI & Vibe Coding)",
            desc: "تسريع عجلة الابتكار وتطوير الواجهات بالاستفادة من أحدث أدوات التوليد البرمجي والنماذج اللغوية الكبيرة."
          }
        }
      },
      skills: {
        tag: "الترسانة التقنية والمهارات",
        title: "المهارات والأدوات التي أعتمد عليها في تحويل الأفكار إلى واقع",
        categories: {
          frontend: "تطوير الواجهات الأمامية (Frontend)",
          uiux: "تصميم واجهة وتجربة المستخدم (UI/UX)",
          ai: "الذكاء الاصطناعي وأدوات الأتمتة (AI & Vibe Coding)",
          academic: "التعليم الأكاديمي والبحث (Academic & Research)",
          tools: "أدوات التطوير والبنية (Tools & DevOps)"
        }
      },
      projects: {
        tag: "معرض الأعمال المختارة",
        title: "مشاريع رقمية تجمع بين متانة الكود وجمال التجربة",
        filterAll: "الكل",
        filterWeb: "تطبيقات ويب (Web Apps)",
        filterUIUX: "واجهات وتجربة مستخدم (UI/UX)",
        filterAI: "ذكاء اصطناعي وأبحاث (AI & Research)",
        liveDemo: "معاينة حية",
        viewCode: "الكود المصدري",
        viewDetails: "تفاصيل المشروع"
      },
      experience: {
        tag: "الخط الزمني للمسيرة",
        title: "محطات في التدريس الأكاديمي، العمل الحر، وبناء الحلول الرقمية",
        present: "حتى الآن"
      },
      contact: {
        tag: "ابدأ تعاوناً جديداً",
        title: "هل لديك مشروع طموح أو فرصة تعاون؟ دعنا نتحدث!",
        desc: "أنا متاح دائماً لمناقشة مشاريع الواجهات الأمامية، وتصميم أنظمة وتجارب المستخدم، والورش التدريبية، والاستشارات التقنية.",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "اكتب اسمك هنا...",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "example@domain.com",
        subjectLabel: "موضوع الرسالة",
        subjectPlaceholder: "نوع المشروع أو الغرض من التواصل...",
        messageLabel: "نص الرسالة أو تفاصيل المشروع",
        messagePlaceholder: "اشرح فكرة مشروعك، المتطلبات، والجدول الزمني المقترح...",
        submitBtn: "إرسال الرسالة الآن",
        sending: "جاري الإرسال...",
        successMsg: "تم استلام رسالتك بنجاح! سأتواصل معك في أقرب وقت ممكن.",
        infoTitle: "قنوات التواصل المباشرة",
        location: "حضرموت، اليمن (متاح للعمل عن بُعد عالمياً)",
        emailDirect: "hussein.balfaqih@example.com",
        phoneDirect: "+967 770 000 000"
      },
      cvModal: {
        title: "السيرة الذاتية - حسين بلفقيه",
        downloadBtn: "تحميل بصيغة PDF",
        printBtn: "طباعة السيرة",
        closeBtn: "إغلاق النافذة"
      },
      palette: {
        title: "سمات وألوان الواجهة",
        subtitle: "تغيير الألوان بنقرة واحدة فائقة السرعة",
        reset: "الافتراضي",
        custom: "لون مخصص بالكامل:",
        dockTitle: "الألوان السريعة"
      },
      footer: {
        rights: "جميع الحقوق محفوظة © حسين بلفقيه 2026",
        tagline: "صُمم وبُني بكل شغف وإتقان باستخدام أحدث معايير الويب."
      }
    },
    en: {
      siteTitle: "Hussein Balfaqih | Frontend Software Engineer, UI/UX Specialist & Academic",
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
        hireMe: "Hire Me"
      },
      hero: {
        badge: "🟢 Available for selective projects & UI/UX / Web consulting",
        greeting: "Hello, I am",
        name: "Hussein Balfaqih",
        role: "Frontend Software Engineer | UI/UX Specialist | IT Academic Teaching Assistant",
        summary: "Bridging the gap between robust frontend engineering, human-centered UI/UX aesthetics, academic mentorship, and AI & Vibe Coding to craft exceptional, high-velocity digital products.",
        ctaProjects: "Explore Projects",
        ctaContact: "Get in Touch",
        ctaCV: "Download CV",
        stat1: "+5 Years Engineering & Design Experience",
        stat2: "+35 High-Impact Projects Delivered",
        stat3: "+650 Students & Mentees in Tech Tracks",
        floatingRole1: "Frontend Architect",
        floatingRole2: "UI/UX Craftsman",
        floatingRole3: "AI & Vibe Coding",
        floatingRole4: "IT Academic Mentor"
      },
      about: {
        tag: "Identity & Journey",
        title: "Beyond Code: Engineering, Craftsmanship & Academic Passion",
        paragraph1: "I am a Frontend Software Engineer and UI/UX Specialist currently serving as an Academic Teaching Assistant in the Faculty of Information Technology. My work thrives at the convergence of ultra-responsive web architectures, intuitive user experience design, and educating tomorrow's software builders.",
        paragraph2: "With the generative AI revolution, I actively champion AI-assisted software engineering (AI & Vibe Coding) to augment development workflows, while pursuing academic research in evaluating digital education technologies and user interaction in smart learning environments.",
        pillars: {
          code: {
            title: "Clean Code & Performance",
            desc: "Architecting modular, highly maintainable frontend codebases aligned with modern web standards and Core Web Vitals."
          },
          design: {
            title: "Thoughtful UI/UX Systems",
            desc: "Crafting polished design systems and ergonomic user interfaces that maximize engagement, accessibility, and delight."
          },
          academic: {
            title: "Academic Teaching & Mentorship",
            desc: "Delivering foundational and advanced web engineering courses and hands-on workshops to hundreds of aspiring IT professionals."
          },
          ai: {
            title: "AI & Vibe Coding Automation",
            desc: "Accelerating modern software delivery through state-of-the-art AI-augmented workflows and prompt-engineered prototypes."
          }
        }
      },
      skills: {
        tag: "Technical Repertoire",
        title: "The Tools & Disciplines I Leverage to Turn Visions into Reality",
        categories: {
          frontend: "Frontend Engineering",
          uiux: "UI/UX & Product Design",
          ai: "AI & Workflow Automation (Vibe Coding)",
          academic: "Academic Pedagogy & Research",
          tools: "DevOps & Engineering Tooling"
        }
      },
      projects: {
        tag: "Featured Work",
        title: "Featured Case Studies & High-Velocity Digital Solutions",
        filterAll: "All",
        filterWeb: "Web Apps",
        filterUIUX: "UI/UX Design",
        filterAI: "AI & Research",
        liveDemo: "Live Demo",
        viewCode: "Source Code",
        viewDetails: "View Details"
      },
      experience: {
        tag: "Career Milestones",
        title: "Journey Across Academia, Product Engineering, and Mentorship",
        present: "Present"
      },
      contact: {
        tag: "Start a Conversation",
        title: "Have an Ambitious Project or Collaborative Idea? Let's Talk!",
        desc: "I am always open to discussing new frontend challenges, UI/UX design systems, technical workshops, and consulting engagements.",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name...",
        emailLabel: "Email Address",
        emailPlaceholder: "example@domain.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Project inquiry or collaboration...",
        messageLabel: "Your Message or Project Details",
        messagePlaceholder: "Tell me about your project scope, timeline, and goals...",
        submitBtn: "Send Message Now",
        sending: "Sending...",
        successMsg: "Thank you! Your message has been received. I'll get back to you shortly.",
        infoTitle: "Direct Channels",
        location: "Hadhramout, Yemen (Available Globally Remote)",
        emailDirect: "hussein.balfaqih@example.com",
        phoneDirect: "+967 770 000 000"
      },
      cvModal: {
        title: "Curriculum Vitae - Hussein Balfaqih",
        downloadBtn: "Download PDF",
        printBtn: "Print Resume",
        closeBtn: "Close Modal"
      },
      palette: {
        title: "Color Themes & Accents",
        subtitle: "Lightning fast 1-click theme switching",
        reset: "Reset",
        custom: "Custom Color:",
        dockTitle: "Quick Colors"
      },
      footer: {
        rights: "All rights reserved © Hussein Balfaqih 2026",
        tagline: "Designed and engineered with passion using modern web standards."
      }
    }
  },

  // Fast Color Theme Presets (سمات الألوان السريعة والمنسقة)
  palettes: [
    {
      id: "cyber-indigo",
      nameAr: "سايبر نيون أزرق ونيلي",
      nameEn: "Cyber Indigo & Cyan",
      primary: "#6366F1",
      primaryRgb: "99, 102, 241",
      secondary: "#38BDF8",
      secondaryRgb: "56, 189, 248",
      accent: "#A855F7",
      accentRgb: "168, 85, 247",
      dot: "#6366F1",
      badge: "الافتراضي"
    },
    {
      id: "emerald-mint",
      nameAr: "زمردي تقني ونعناعي",
      nameEn: "Tech Emerald & Mint",
      primary: "#10B981",
      primaryRgb: "16, 185, 129",
      secondary: "#34D399",
      secondaryRgb: "52, 211, 153",
      accent: "#06B6D4",
      accentRgb: "6, 182, 212",
      dot: "#10B981"
    },
    {
      id: "cyber-violet",
      nameAr: "بنفسجي وفوشيا فايبر",
      nameEn: "Cyber Violet & Fuchsia",
      primary: "#8B5CF6",
      primaryRgb: "139, 92, 246",
      secondary: "#EC4899",
      secondaryRgb: "236, 72, 153",
      accent: "#D946EF",
      accentRgb: "217, 70, 239",
      dot: "#8B5CF6"
    },
    {
      id: "sunset-amber",
      nameAr: "غروب كهرماني وذهبي",
      nameEn: "Sunset Amber & Flame",
      primary: "#F59E0B",
      primaryRgb: "245, 158, 11",
      secondary: "#F97316",
      secondaryRgb: "249, 115, 22",
      accent: "#EF4444",
      accentRgb: "239, 68, 68",
      dot: "#F59E0B"
    },
    {
      id: "ruby-rose",
      nameAr: "ياقوتي ملكي ووردي",
      nameEn: "Ruby Rose & Crimson",
      primary: "#E11D48",
      primaryRgb: "225, 29, 72",
      secondary: "#FB7185",
      secondaryRgb: "251, 113, 133",
      accent: "#BE185D",
      accentRgb: "190, 24, 93",
      dot: "#E11D48"
    },
    {
      id: "ocean-azure",
      nameAr: "أزرق ملكي ومحيطي",
      nameEn: "Electric Azure & Ocean",
      primary: "#2563EB",
      primaryRgb: "37, 99, 235",
      secondary: "#06B6D4",
      secondaryRgb: "6, 182, 212",
      accent: "#3B82F6",
      accentRgb: "59, 130, 246",
      dot: "#2563EB"
    },
    {
      id: "matrix-lime",
      nameAr: "ليموني نيون وماتريكس",
      nameEn: "Matrix Lime & Neon",
      primary: "#84CC16",
      primaryRgb: "132, 204, 22",
      secondary: "#22C55E",
      secondaryRgb: "34, 197, 94",
      accent: "#10B981",
      accentRgb: "16, 185, 129",
      dot: "#84CC16"
    }
  ],

  // Numerical Quick Stats
  stats: [
    {
      id: "exp",
      value: 5,
      suffix: "+",
      ar: "سنوات خبرة في البرمجيات والواجهات",
      en: "Years of Engineering & UI/UX"
    },
    {
      id: "projects",
      value: 35,
      suffix: "+",
      ar: "مشروعاً وتطبيقاً رقمياً مكتملاً",
      en: "Completed Apps & Systems"
    },
    {
      id: "students",
      value: 650,
      suffix: "+",
      ar: "طالباً ومتدرباً في مسارات التقنية",
      en: "Students & Mentees Trained"
    },
    {
      id: "satisfaction",
      value: 99,
      suffix: "%",
      ar: "معدل الرضا والالتزام بالجودة",
      en: "Client & Student Satisfaction"
    }
  ],

  // Skills categorized
  skillsData: [
    {
      categoryKey: "frontend",
      icon: "code-2",
      items: [
        { name: "React.js / Next.js", level: "Advanced", pct: 95 },
        { name: "Tailwind CSS & Modern CSS", level: "Expert", pct: 98 },
        { name: "JavaScript (ES6+) & TypeScript", level: "Advanced", pct: 92 },
        { name: "State Management (Redux/Zustand)", level: "Advanced", pct: 88 },
        { name: "Responsive & Adaptive Layouts", level: "Expert", pct: 98 },
        { name: "HTML5 Semantic & Web Standards", level: "Master", pct: 100 }
      ]
    },
    {
      categoryKey: "uiux",
      icon: "palette",
      items: [
        { name: "Figma & Design Systems", level: "Advanced", pct: 94 },
        { name: "Wireframing & Interactive Prototyping", level: "Advanced", pct: 92 },
        { name: "User Journey & Usability Research", level: "Proficient", pct: 86 },
        { name: "Web Accessibility (WCAG / a11y)", level: "Advanced", pct: 90 },
        { name: "Micro-interactions & Motion UX", level: "Advanced", pct: 91 }
      ]
    },
    {
      categoryKey: "ai",
      icon: "bot",
      items: [
        { name: "AI-Assisted Dev & Vibe Coding", level: "Expert", pct: 96 },
        { name: "Prompt Engineering & Context Design", level: "Advanced", pct: 92 },
        { name: "LLM APIs Integration (OpenAI/Anthropic)", level: "Advanced", pct: 88 },
        { name: "Workflow Automation & AI Tooling", level: "Advanced", pct: 90 }
      ]
    },
    {
      categoryKey: "academic",
      icon: "graduation-cap",
      items: [
        { name: "University IT Course Instruction", level: "Senior TA", pct: 95 },
        { name: "Digital Learning Technologies Evaluation", level: "Researcher", pct: 89 },
        { name: "Technical Writing & Research Papers", level: "Published", pct: 86 },
        { name: "Practical Lab & Project Mentorship", level: "Lead", pct: 96 }
      ]
    },
    {
      categoryKey: "tools",
      icon: "terminal",
      items: [
        { name: "Git & GitHub Workflow", level: "Advanced", pct: 95 },
        { name: "Vite, Webpack & Modern Bundlers", level: "Advanced", pct: 90 },
        { name: "RESTful APIs & GraphQL Consumption", level: "Advanced", pct: 92 },
        { name: "Performance Optimization & Lighthouse", level: "Advanced", pct: 93 },
        { name: "Vercel, Netlify & Deployment", level: "Advanced", pct: 90 }
      ]
    }
  ],

  // Featured Projects
  projectsData: [
    {
      id: "aether-analytics",
      category: "web-app",
      image: "assets/images/project1.jpg",
      ar: {
        title: "منصة إيثر للتحليلات السحابية (Aether Analytics)",
        subtitle: "منصة ويب متكاملة لتحليل البيانات ومتابعة مؤشرات الأداء اللحظية (SaaS)",
        description: "واجهة سحابية متقدمة مبنية على React وTailwind CSS تقدم تمثيلاً بيانياً تفاعلياً للبيانات الضخمة ومعدلات التحويل وحركات المستخدمين، مع دعم كامل للوضع الداكن والتحديث اللحظي للبيانات.",
        keyFeatures: [
          "لوحات تحكم تفاعلية مع رسوم بيانية متقدمة في الوقت الحقيقي",
          "نظام تصفية وفرز بيانات متعدد المعايير فائق السرعة",
          "بنية مكونات معيارية عالية القابلية لإعادة الاستخدام",
          "تصميم متجاوب بالكامل مع مؤشرات أداء ممتازة"
        ]
      },
      en: {
        title: "Aether Analytics SaaS Dashboard",
        subtitle: "Enterprise cloud intelligence and real-time metric visualization platform",
        description: "An advanced cloud-native dashboard engineered with React and Tailwind CSS, featuring rich interactive data charts, real-time conversion insights, and smooth dark-mode aesthetics.",
        keyFeatures: [
          "Interactive real-time charting with micro-transitions",
          "Multi-parameter high-speed data filtering engine",
          "Modular, scalable component-driven frontend architecture",
          "Flawless mobile-to-desktop responsive adaptation"
        ]
      },
      tags: ["React.js", "Tailwind CSS", "TypeScript", "Chart.js", "Vite"],
      demoUrl: "https://example.com/demo/aether",
      codeUrl: "https://github.com/husseinbalfaqih/aether-analytics"
    },
    {
      id: "axon-fintech",
      category: "ui-ux",
      image: "assets/images/project2.jpg",
      ar: {
        title: "نظام تصميم وتطبيق أكسون المالي (Axon Fintech UI/UX)",
        subtitle: "دراسة حالة لتجربة مستخدم فاخرة لتطبيقات إدارة الأصول والخدمات المصرفية",
        description: "مشروع متكامل لتصميم واجهة وتجربة المستخدم شمل أبحاث المستخدمين، بناء شجرة المهام، وتصميم نظام مكونات رقمي شامل (Design System) في Figma يركز على الراحة البصرية وسهولة التنفيذ البرمجي.",
        keyFeatures: [
          "نظام تصميم كامل بمئات المتغيرات والمكونات الذكية في Figma",
          "دراسة واختبار سهولة الوصول وتدرجات الألوان المريحة للعين",
          "مخططات رحلة العميل (User Journey Mapping) لتقليل خطوات التحويل المالي",
          "نماذج تفاعلية حية تحاكي التطبيق النهائي بدقة متناهية"
        ]
      },
      en: {
        title: "Axon Fintech & Lifestyle UI/UX Suite",
        subtitle: "Comprehensive mobile product design and design system for next-gen wealth management",
        description: "An end-to-end UI/UX product design study encompassing user research, wireframing, and an extensive enterprise design system in Figma tailored for seamless engineering handoff.",
        keyFeatures: [
          "Complete scalable Figma design system with tokens & auto-layout",
          "Strict accessibility audits (WCAG 2.1 AA compliant contrast)",
          "Frictionless user journey optimization for banking workflows",
          "High-fidelity prototypes featuring fluid micro-interactions"
        ]
      },
      tags: ["Figma", "UI/UX Research", "Design Systems", "Prototyping", "Mobile UX"],
      demoUrl: "https://figma.com/@husseinbalfaqih/axon",
      codeUrl: "https://github.com/husseinbalfaqih/axon-design-system"
    },
    {
      id: "neura-academia",
      category: "ai-research",
      image: "assets/images/project3.jpg",
      ar: {
        title: "بوابة نيورا الأكاديمية الذكية (Neura Academia)",
        subtitle: "منصة بحثية مدعومة بنماذج الذكاء الاصطناعي لطلاب وتدريسيي تكنولوجيا المعلومات",
        description: "منصة تجمع بين استكشاف أبحاث الشبكات الذكية وأدوات التوليد البرمجي (AI Code Gen). تم تصميم واجهتها لتسهيل العمل البحثي الجامعي ودعم أسلوب Vibe Coding في التعليم الأكاديمي.",
        keyFeatures: [
          "نافذة تفاعلية لتوليد واختبار الأكواد البرمجية بالذكاء الاصطناعي",
          "تمثيل بياني للشبكات المعرفية والبيانات البحثية المترابطة",
          "واجهة مستخدم تركز على راحة الباحثين في الجلسات الطويلة",
          "تكامل مع واجهات برمجة النماذج اللغوية الكبيرة (LLM APIs)"
        ]
      },
      en: {
        title: "Neura Academia AI & Research Hub",
        subtitle: "AI-augmented academic research portal and intelligent coding assistant for IT scholars",
        description: "A research-grade platform uniting knowledge graphs and AI code generation. Built to empower academic inquiry and facilitate Vibe Coding integration into university labs.",
        keyFeatures: [
          "Interactive in-browser AI code generation and testing playground",
          "Interactive neural graph and relational research visualization",
          "Ergonomic UI optimized for deep research & study focus",
          "Direct integration with cutting-edge Large Language Model APIs"
        ]
      },
      tags: ["Next.js", "AI / LLM APIs", "Tailwind CSS", "Data Viz", "EdTech"],
      demoUrl: "https://example.com/demo/neura",
      codeUrl: "https://github.com/husseinbalfaqih/neura-academia"
    },
    {
      id: "veloce-luxe",
      category: "web-app",
      image: "assets/images/project4.jpg",
      ar: {
        title: "منصة فيلوتشي للتجارة الرقمية الحديثة (Veloce Luxe)",
        subtitle: "متجر رقمي سريع وعصري يقدم تجربة تسوق تفاعلية مع سلة مشتريات سلسة",
        description: "تطبيق تجارة إلكترونية متكامل يركز على متعة التصفح وتفاعل المستهلك. يتميز بلوحات عائمة للمنتجات، درج تفاعلي للمشتريات (Drawer Cart)، ودعم كامل لتصفية المقاسات والألوان في أجزاء من الثانية.",
        keyFeatures: [
          "سلة مشتريات منبثقة بتأثير الزجاج الشفاف وتحديث فوري للمجاميع",
          "معاينة سريعة ثلاثية الأبعاد للمنتجات مع تفاصيل خيارات المقاسات والألوان",
          "تدفق دفع سريع ومبسّط يقلل من نسب التراجع عن الشراء",
          "توافق كامل مع مختلف الشاشات وسرعة تحميل استثنائية"
        ]
      },
      en: {
        title: "Veloce Luxe E-Commerce Platform",
        subtitle: "High-performance digital storefront with interactive cart & modern aesthetics",
        description: "A fast e-commerce web application engineered for maximum shopping delight, featuring glassmorphism drawers, instant product variants selection, and frictionless checkout flows.",
        keyFeatures: [
          "Fluid glassmorphic slide-out cart with instant subtotal recalculation",
          "Quick-view interactive cards with dynamic color & size selector",
          "Streamlined checkout flow minimizing customer drop-off",
          "Lighthouse 95+ performance scores and responsive polish"
        ]
      },
      tags: ["JavaScript ES6+", "Tailwind CSS", "State Management", "E-Commerce", "UX Design"],
      demoUrl: "https://example.com/demo/veloce",
      codeUrl: "https://github.com/husseinbalfaqih/veloce-luxe"
    }
  ],

  // Career & Mentorship Timeline
  experiences: [
    {
      periodAr: "2021 - حتى الآن",
      periodEn: "2021 - Present",
      roleAr: "معيد وأكاديمي في تكنولوجيا المعلومات",
      roleEn: "Academic Teaching Assistant in IT",
      institutionAr: "كلية تكنولوجيا المعلومات - الجامعة",
      institutionEn: "Faculty of Information Technology - University",
      typeAr: "العمل الأكاديمي والتدريس",
      typeEn: "Academic & Mentorship",
      descAr: "تدريس المساقات العملية لمقدمات تطوير الويب، هندسة البرمجيات، وهياكل البيانات. الإشراف الأكاديمي على مشاريع التخرج وتدريب الطلاب على تطبيق أفضل الممارسات البرمجية وأنماط التصميم النظيفة.",
      descEn: "Instructing undergraduate laboratory sessions in web development, software engineering principles, and data structures. Mentoring graduation projects and bridging the gap between theory and industry-grade engineering standards."
    },
    {
      periodAr: "2020 - حتى الآن",
      periodEn: "2020 - Present",
      roleAr: "مهندس واجهات أمامية ومصمم تجربة مستخدم حر",
      roleEn: "Senior Frontend Engineer & UI/UX Consultant",
      institutionAr: "مشاريع مستقلة ومؤسسات إقليمية",
      institutionEn: "Independent Contractor & Regional Clients",
      typeAr: "التطوير البرمجي والتصميم",
      typeEn: "Client Solutions",
      descAr: "تطوير تطبيقات ويب مخصصة ومنصات رقمية لعملاء في قطاعات التجارة، والتعليم، والشركات الناشئة. تحويل النماذج الأولية إلى حلول ويب تفاعلية فائقة السرعة ومتوافقة مع مختلف الأجهزة.",
      descEn: "Designing and engineering tailored web applications for startups, educational institutions, and businesses. Transforming complex mockups into pixel-perfect, high-performance web products."
    },
    {
      periodAr: "2023 - حتى الآن",
      periodEn: "2023 - Present",
      roleAr: "موجّه ومدرب في أتمتة الذكاء الاصطناعي (AI & Vibe Coding)",
      roleEn: "AI Dev & Vibe Coding Trainer & Speaker",
      institutionAr: "مجتمعات تقنية وورش عمل جامعية",
      institutionEn: "Tech Communities & Academic Bootcamps",
      typeAr: "التدريب المجتمعي",
      typeEn: "Community Leadership",
      descAr: "تقديم ورش عمل تدريبية مكثفة حول استغلال أدوات الذكاء الاصطناعي التوليدي وهندسة الأوامر لتسريع بناء النماذج الأولية وتطوير واجهات المستخدم، وتدريب أكثر من 650 مطوراً وطالباً.",
      descEn: "Conducting hands-on workshops on leveraging generative AI tooling, prompt engineering, and Vibe Coding methodologies to boost frontend developer velocity and productivity."
    },
    {
      periodAr: "2022 - حتى الآن",
      periodEn: "2022 - Present",
      roleAr: "باحث في تقييم تقنيات ونظم التعليم الرقمي",
      roleEn: "EdTech & Human-Computer Interaction Researcher",
      institutionAr: "بحوث النظم الذكية والتعليم التقني",
      institutionEn: "Smart Systems & Digital Education Research",
      typeAr: "البحث الأكاديمي",
      typeEn: "Academic Research",
      descAr: "إجراء أبحاث تدرس مدى فاعلية واجهات منصات التعليم الإلكتروني الذكية، وتأثير تجربة المستخدم على استبقاء المعرفة وتفاعل الطلاب في البيئات الجامعية الرقمية.",
      descEn: "Investigating user engagement and usability paradigms within intelligent digital learning environments, with focus on HCI metrics and educational software ergonomics."
    }
  ]
};

// Export to window
window.portfolioData = portfolioData;
