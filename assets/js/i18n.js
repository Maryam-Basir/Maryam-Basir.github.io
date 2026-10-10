"use strict";
(() => {
  const dictionary = {
    "Loading portfolio…": "در حال آماده‌سازی سایت…",
    "10": "۱۰",
    "AI Tools": "ابزارهای هوش مصنوعی",
    "Familiar with ChatGPT & Claude": "آشنایی با ChatGPT و Claude",
    "Maryam Basir Abyaneh — Database Developer": "مریم بصیرابیانه | توسعه‌دهنده دیتابیس",
    "Maryam Basir Abyaneh, database developer in Tehran specializing in SQL Server, PL/SQL, database design, and business systems.": "مریم بصیرابیانه، توسعه‌دهنده دیتابیس در تهران؛ متخصص SQL Server، PL/SQL، طراحی پایگاه داده و سامانه‌های سازمانی.",
    "Skip to content": "رفتن به محتوای اصلی",
    "Maryam Basir": "مریم بصیر",
    "Maryam": "مریم",
    "Basir": "بصیر",
    "Maryam Basir home": "صفحه اصلی مریم بصیر",
    "Main navigation": "منوی اصلی",
    "Home": "خانه",
    "Resume": "رزومه",
    "Project": "پروژه‌ها",
    "Contact": "تماس",
    "Theme": "پوسته",
    "Switch to dark theme": "فعال‌کردن پوسته تیره",
    "Switch to light theme": "فعال‌کردن پوسته روشن",
    "HELLO, I’M": "سلام، من",
    "DATABASE DEVELOPER": "توسعه‌دهنده دیتابیس",
    "SQL SERVER & PL/SQL": "SQL SERVER و PL/SQL",
    "I design reliable databases and build business systems.": "پایگاه داده قابل‌اعتماد طراحی می‌کنم و سامانه‌های سازمانی می‌سازم.",
    "Focused on performance, data integrity,": "با تمرکز بر بهبود عملکرد، یکپارچگی داده‌ها",
    "and structures that are easy to maintain.": "و ساختارهایی که نگهداری آن‌ها آسان باشد.",
    "View My Work": "مشاهده پروژه‌ها",
    "Download CV (PDF)": "دانلود رزومه (PDF)",
    "ABOUT ME": "درباره من",
    "Reliable data.": "داده‌های قابل‌اعتماد؛",
    "Maintainable business systems.": "سامانه‌هایی با نگهداری آسان.",
    "I’m Maryam Basir Abyaneh, a database developer based in Tehran, specializing in SQL Server and PL/SQL. My work includes writing queries and stored procedures, managing transactions, and designing database structures. I focus on improving performance, preserving data integrity, and building maintainable systems. At Health Financing Holding, I develop databases for sales, regulatory, and HR applications, alongside ASP.NET and jQuery web development.": "من مریم بصیرابیانه، توسعه‌دهنده دیتابیس در تهران هستم و روی SQL Server و PL/SQL تمرکز دارم. نوشتن کوئری و Stored Procedure، مدیریت تراکنش‌ها و طراحی ساختار پایگاه داده از زمینه‌های کاری من است. به بهبود عملکرد، یکپارچگی داده‌ها و پیاده‌سازی ساختارهای قابل نگهداری علاقه‌مندم. در شرکت تأمین سرمایه سلامت، روی دیتابیس سامانه‌های فروش، رگولاتوری و منابع انسانی و همچنین توسعه وب با ASP.NET و jQuery کار می‌کنم.",
    "2012": "۱۳۹۱",
    "Career": "آغاز مسیر",
    "started": "حرفه‌ای",
    "3": "۳",
    "Business": "سامانه",
    "systems": "سازمانی",
    "9": "۹",
    "Technical": "مهارت",
    "skills": "فنی",
    "Tehran": "تهران",
    "Iran": "ایران",
    "Structured Data.": "داده‌های ساختارمند.",
    "Reliable Systems.": "سامانه‌های قابل‌اعتماد.",
    "Database developer": "توسعه‌دهنده دیتابیس",
    "SKILLS": "مهارت‌ها",
    "My Technical Toolkit": "مهارت‌ها و ابزارهای من",
    "Database technologies and web development tools": "فناوری‌های پایگاه داده و ابزارهای توسعه وب",
    "I use to build and maintain business applications.": "برای ساخت و نگهداری سامانه‌های سازمانی.",
    "Database development": "توسعه پایگاه داده",
    "Database programming": "برنامه‌نویسی دیتابیس",
    "Relational databases": "پایگاه داده رابطه‌ای",
    "Web interfaces": "رابط‌های وب",
    "Front-end development": "توسعه فرانت‌اند",
    "Interactive interfaces": "رابط‌های تعاملی",
    "Responsive layouts": "طراحی واکنش‌گرا",
    "Back-end development": "توسعه بک‌اند",
    "Data reporting": "گزارش‌گیری از داده‌ها",
    "Stored procedures": "رویه‌های ذخیره‌شده",
    "Transaction management": "مدیریت تراکنش‌ها",
    "Database design & DDL": "طراحی دیتابیس و DDL",
    "Fine-grained access control": "کنترل دسترسی جزئی‌نگر",
    "Data integrity": "یکپارچگی داده‌ها",
    "EXPERIENCE": "سوابق شغلی",
    "My Professional Journey": "مسیر حرفه‌ای من",
    "2021 – Present": "بهمن ۱۳۹۹ — اکنون",
    "2017 – 2021": "آبان ۱۳۹۶ — بهمن ۱۳۹۹",
    "2012 – 2017": "آبان ۱۳۹۱ — مرداد ۱۳۹۶",
    "Bahman 1399 - Present (Solar Hijri)": "بهمن ۱۳۹۹ تا اکنون",
    "Aban 1396 - Bahman 1399 (Solar Hijri)": "آبان ۱۳۹۶ تا بهمن ۱۳۹۹",
    "Aban 1391 - Mordad 1396 (Solar Hijri)": "آبان ۱۳۹۱ تا مرداد ۱۳۹۶",
    "Database Developer": "توسعه‌دهنده دیتابیس",
    "Health Financing Holding · Tehran": "شرکت تأمین سرمایه سلامت · تهران",
    "Sales system:": "سامانه فروش:",
    "designed fine-grained access control across users, organizations, companies, modules, and sub-modules, with database structures for permissions and resource relationships.": "طراحی و پیاده‌سازی کنترل دسترسی چندسطحی و جزئی‌نگر در سطح کاربر، سازمان، شرکت، ماژول و زیرماژول؛ طراحی ساختار دیتابیس برای مدیریت مجوزها و ارتباط کاربران با منابع سامانه.",
    "Regulatory system:": "سامانه رگولاتوری:",
    "modeled the database around legal and operational requirements; implemented tables, relationships, primary and foreign keys, and integrity constraints; maintained schema changes in production.": "مدل‌سازی پایگاه داده بر اساس نیازمندی‌های قانونی و عملیاتی؛ پیاده‌سازی جداول، روابط، کلیدهای اصلی و خارجی و قیود یکپارچگی؛ پشتیبانی و اعمال تغییرات ساختاری در محیط عملیاتی.",
    "HR recruitment system:": "سامانه جذب منابع انسانی:",
    "designed entities and relationships, standardized the schema, optimized data structures, and applied DDL changes to support development.": "طراحی موجودیت‌ها و روابط، استانداردسازی اسکیما، بهینه‌سازی ساختار داده‌ها و اعمال تغییرات DDL متناسب با نیازهای توسعه.",
    "Web development:": "توسعه وب:",
    "implemented databases, ASP.NET back-end functionality, and jQuery front-end interfaces.": "طراحی و پیاده‌سازی دیتابیس، توسعه بک‌اند با ASP.NET و پیاده‌سازی فرانت‌اند با jQuery.",
    "Pharmacy Network Support": "پشتیبان شبکه داروخانه",
    "Dr. Jafari Omid Pharmacy · Tehran": "داروخانه دکتر جعفری امید · تهران",
    "Provided network support for the pharmacy.": "پشتیبانی از شبکه داروخانه.",
    "Website Support": "پشتیبان وب‌سایت",
    "Tahmorth Pharmacy · Tehran": "داروخانه طهمورث · تهران",
    "Provided website support for the pharmacy.": "پشتیبانی از وب‌سایت داروخانه.",
    "EDUCATION": "تحصیلات",
    "B.Sc. in Information Technology Engineering": "کارشناسی مهندسی فناوری اطلاعات",
    "Payame Noor University, Damavand": "دانشگاه پیام نور دماوند",
    "1390 – 1395 · Solar Hijri": "۱۳۹۰ تا ۱۳۹۵ · هجری شمسی",
    "English": "زبان انگلیسی",
    "Reading, writing, speaking & listening": "خواندن، نوشتن، گفتار و شنیدار",
    "60% in each skill · Self-assessed in resume": "۶۰٪ در هر مهارت · خودارزیابی در رزومه",
    "COURSES & CERTIFICATIONS": "دوره‌ها و گواهینامه‌ها",
    "Cybertech": "سایبرتک",
    "Irsafam": "ایرسافام",
    "Web Design": "طراحی وب",
    "Amanj": "آمانج",
    "Anisas": "انیساس",
    "1394": "۱۳۹۴", "1397": "۱۳۹۷", "1400": "۱۴۰۰", "1401": "۱۴۰۱", "1402": "۱۴۰۲",
    "Course years are in the Solar Hijri calendar.": "سال دوره‌ها بر اساس تقویم هجری شمسی است.",
    "PROJECTS": "پروژه‌ها",
    "Featured Projects": "پروژه‌های منتخب",
    "View All Projects": "همه پروژه‌ها",
    "Show Featured Projects": "فقط پروژه‌های منتخب",
    "DATABASE ENGINEERING / 01": "مهندسی پایگاه داده / ۰۱",
    "DATABASE ENGINEERING / 02": "مهندسی پایگاه داده / ۰۲",
    "DATABASE ENGINEERING / 03": "مهندسی پایگاه داده / ۰۳",
    "DATA": "داده", "LOGIC": "منطق", "ACCESS": "دسترسی",
    "Sales Management System": "سامانه فروش",
    "Regulatory System": "سامانه رگولاتوری",
    "Health Financing Holding": "تأمین سرمایه سلامت",
    "HR Recruitment System": "سامانه جذب منابع انسانی",
    "View project": "مشاهده پروژه",
    "Database development · 1403 SH": "توسعه پایگاه داده · ۱۴۰۳",
    "Database design & maintenance · 1404 SH": "طراحی و نگهداری دیتابیس · ۱۴۰۴",
    "Company website · 1401 SH": "وب‌سایت شرکتی · ۱۴۰۱",
    "Database design & development": "طراحی و توسعه دیتابیس",
    "Access control": "کنترل دسترسی",
    "Database design": "طراحی دیتابیس",
    "Data modeling": "مدل‌سازی داده",
    "HR": "منابع انسانی",
    "Website": "وب‌سایت", "Development": "توسعه", "Design": "طراحی",
    "Earlier website portfolio": "نمونه‌کارهای پیشین وب",
    "Rasta Imen Darou": "راستا ایمن دارو", "Shafa": "شفا", "Vitality": "ویتالیتی",
    "Gravity Pharma": "گراویتی فارما", "Pak Salamat": "پاک سلامت", "Laguna Beauties": "لاگونا بیوتیز",
    "Tamgen": "تامژن", "Zigma": "زیگما", "Pet": "پت",
    "CONTACT": "تماس با من",
    "Let’s Build Something": "با هم بسازیم؛",
    "Great": "بهتر و ماندگار",
    "Have a project in mind? Get in touch to talk about": "پروژه‌ای در ذهن دارید؟ برای گفت‌وگو درباره",
    "your database, business system, or web development needs.": "پایگاه داده، سامانه سازمانی یا توسعه وب با من در ارتباط باشید.",
    "Email Me": "ارسال ایمیل",
    "North Sohrevardi St., Tehran": "تهران، سهروردی شمالی",
    "Mobile: +98 912 847 3038": "موبایل: ‎+98 912 847 3038",
    "Phone: +98 21 8875 5724": "تلفن: ‎+98 21 8875 5724",
    "Name": "نام", "Email": "ایمیل", "Subject": "موضوع", "Message": "پیام",
    "Your name": "نام شما", "Your email": "ایمیل شما",
    "What would you like to build?": "موضوع پروژه یا درخواست شما",
    "Tell me about your project…": "درباره پروژه‌تان بنویسید…",
    "Compose Email": "آماده‌سازی ایمیل",
    "Opens your email app with your message ready to send.": "برنامه ایمیل شما با متن آماده باز می‌شود؛ ارسال نهایی با شماست.",
    "Continue in your email app to send. If it did not open, email maryambasir71@gmail.com directly.": "ارسال را در برنامه ایمیل خود تکمیل کنید. اگر باز نشد، مستقیماً به maryambasir71@gmail.com ایمیل بزنید.",
    "© Maryam Basir": "© مریم بصیر",
    "Designed with care. Built for the web.": "طراحی با دقت؛ ساخته‌شده برای وب.",
    "Back to top ↑": "بازگشت به بالا ↑",
    "PROJECT PREVIEW": "جزئیات پروژه",
    "Visit Website": "مشاهده وب‌سایت",
    "Close project preview": "بستن پیش‌نمایش پروژه",
    "Project summary; no public demo is linked in the resume.": "معرفی پروژه؛ لینک عمومی در رزومه ارائه نشده است.",
    "Developed the sales system database and implemented fine-grained access control at user, organization, company, module, and sub-module levels. Designed permissions and resource relationships for Health Financing Holding.": "توسعه دیتابیس سامانه فروش و پیاده‌سازی کنترل دسترسی جزئی‌نگر در سطح کاربر، سازمان، شرکت، ماژول و زیرماژول. طراحی ساختار مجوزها و ارتباط با منابع برای شرکت تأمین سرمایه سلامت.",
    "Designed and modeled a regulatory database around legal and operational requirements for Health Financing Holding. Implemented tables, relationships, primary and foreign keys, integrity constraints, and production schema changes.": "طراحی و مدل‌سازی دیتابیس سامانه رگولاتوری بر اساس نیازمندی‌های قانونی و عملیاتی شرکت تأمین سرمایه سلامت. پیاده‌سازی جداول، روابط، کلیدهای اصلی و خارجی، قیود یکپارچگی و تغییرات ساختاری در محیط عملیاتی.",
    "Company website for Health Financing Holding, listed in the resume for 1401 (Solar Hijri).": "وب‌سایت شرکت تأمین سرمایه سلامت؛ از پروژه‌های درج‌شده در رزومه در سال ۱۴۰۱.",
    "Designed the recruitment and HR management database for Health Financing Holding. Modeled entities and relationships, standardized the schema, optimized data structures, and supported ongoing development with DDL changes.": "طراحی دیتابیس سامانه جذب و مدیریت منابع انسانی شرکت تأمین سرمایه سلامت. مدل‌سازی موجودیت‌ها و روابط، استانداردسازی اسکیما، بهینه‌سازی ساختار داده‌ها و پشتیبانی از توسعه با اعمال تغییرات DDL.",
    "Website design from my existing portfolio.": "نمونه طراحی وب‌سایت از مجموعه کارهای پیشین من.",
    "Rasta Imen Darou website design": "طراحی وب‌سایت راستا ایمن دارو",
    "Health Financing Holding website design": "طراحی وب‌سایت تأمین سرمایه سلامت",
    "Visit macode.ir": "مشاهده وب‌سایت macode.ir"
  };
  let language = "fa";
  try { language = localStorage.getItem("maryam-language") === "en" ? "en" : "fa"; } catch {}
  const texts = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.parentElement.closest("script, style, .workspace, #language-switcher") && node.textContent.trim()) {
      texts.push({ node, original: node.textContent });
    }
  }
  const attributes = [];
  document.querySelectorAll("[aria-label], [placeholder], [alt], [title]").forEach(element => {
    if (element.id === "language-switcher") return;
    for (const name of ["aria-label", "placeholder", "alt", "title"]) {
      if (element.hasAttribute(name)) attributes.push({ element, name, original: element.getAttribute(name) });
    }
  });
  const title = document.title;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description.content;
  function translate(value) {
    if (language === "en") return value;
    const normalized = value.replace(/\s+/g, " ").trim();
    if (dictionary[normalized]) return dictionary[normalized];
    for (const [prefix, suffix, faPrefix, faSuffix] of [
      ["View ", "", "مشاهده ", ""],
      ["", " website screenshot", "تصویر وب‌سایت ", ""],
      ["", " full website preview", "پیش‌نمایش کامل وب‌سایت ", ""]
    ]) {
      if (value.startsWith(prefix) && value.endsWith(suffix)) {
        const name = value.slice(prefix.length, suffix ? -suffix.length : undefined);
        if (dictionary[name]) return faPrefix + dictionary[name] + faSuffix;
      }
    }
    return value;
  }
  function setLanguage(next) {
    language = next === "en" ? "en" : "fa";
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    texts.forEach(({node, original}) => {
      node.textContent = original.replace(/\S[\s\S]*\S|\S/, value => translate(value));
    });
    attributes.forEach(({element, name, original}) => element.setAttribute(name, translate(original)));
    document.title = translate(title);
    description.content = translate(originalDescription);
    const button = document.getElementById("language-switcher");
    button.querySelector(".language-symbol").textContent = language === "fa" ? "EN" : "فا";
    button.querySelector(".language-label").textContent = language === "fa" ? "English" : "فارسی";
    button.lang = language === "fa" ? "en" : "fa";
    button.setAttribute("aria-label", language === "fa" ? "Switch to English" : "تغییر زبان به فارسی");
    try { localStorage.setItem("maryam-language", language); } catch {}
    window.dispatchEvent(new Event("languagechange"));
  }
  window.PortfolioI18n = { translate, get language() { return language; }, setLanguage };
  document.getElementById("language-switcher").addEventListener("click", () => setLanguage(language === "fa" ? "en" : "fa"));
  setLanguage(language);
})();
