// ═══════════════════════════════════════════════════════════════
//  SUMBER ISI PORTOFOLIO
//  Semua teks dan data halaman ada di file ini. Sunting di sini,
//  tidak perlu menyentuh file komponen mana pun.
//
//  Catatan: tanda == == di dalam teks about akan dirender bergaris
//  bawah dan lebih tebal. Contoh: "saya seorang ==developer=="
// ═══════════════════════════════════════════════════════════════

import {
  FaCss3,
  FaHtml5,
  FaBootstrap,
  FaJsSquare,
  FaPython,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaravel,
  FaVuejs,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFigma,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiKotlin,
  SiFlutter,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiSvelte,
  SiGo,
  SiRust,
  SiDocker,
  SiPostgresql,
  SiTauri,
  SiGithubactions,
} from "react-icons/si";
import { FiCode, FiPenTool, FiDatabase, FiCpu } from "react-icons/fi";

// Jeda dasar animasi masuk. Tiap section memakai kelipatannya.
export const DELAY = 0.04;

// ── Identitas ──────────────────────────────────────────────────
export const site = {
  name: "Kalila Atha Achmad",
  shortName: "Atha",
  role: "Software Engineer",
  location: "Sleman, Yogyakarta",
  portrait: "/Assets/Atha.png",
  cv: "/CV Kalila Atha Achmad.pdf",
};

// ── Navigasi rail kiri ─────────────────────────────────────────
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Now", href: "#now" },
  { name: "Experience", href: "#work" },
  { name: "Awards", href: "#awards" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

// ── Hero ───────────────────────────────────────────────────────
export const hero = {
  headline: "Hi, I'm Atha",
  subtext:
    "Software Engineer building web and mobile apps. Full-stack developer at AWBS Network, currently developing Kana House Lab.",
};

// ── About ──────────────────────────────────────────────────────
export const about = {
  heading: "About",
  bio: "I'm a ==Informatics Engineering student at Amikom University== who enjoys sharing what I learn. My focus sits on ==back-end programming and software engineering==, and I build across both web and mobile. I founded ==Cipta Works==, where I led a team to top-tier recognition across four national competitions, and I now work as a full-stack developer at AWBS Network. Alongside code I keep sharpening 2D design, video editing, and data analysis.",
};

// ── Pengalaman kerja ───────────────────────────────────────────
// Bentuk data satu item:
//   org        nama tempat
//   role       posisi
//   initials   dua huruf untuk bulatan avatar
//   duration   rentang tahun, tampil rata kanan
//   type       jenis keterlibatan: Full-time, Freelance, Internship, dst
//   location   kota atau Remote. Kosongkan kalau tidak relevan
//   summary    satu kalimat, selalu terlihat
//   highlights daftar poin, tampil setelah kartu dibuka. Boleh kosong
//   stack      chip teknologi. Boleh kosong
//
// TODO Atha: tiga entri ditandai INPUT DIBUTUHKAN di bawah masih memakai
// ringkasan seadanya karena CV tidak memuat rinciannya. Isi summary,
// highlights, dan stack-nya supaya kartunya sekuat yang lain.
export const experience = {
  heading: "Work Experience",
  intro:
    "Six years of work, from coordinating telematics for a district office to shipping full-stack products.",
  items: [
    {
      // INPUT DIBUTUHKAN: rincian pekerjaan dan tumpukan teknologi
      org: "AWBS Network",
      role: "Full Stack Developer",
      initials: "AW",
      duration: "2026 - Present",
      type: "Full-time",
      location: "Yogyakarta",
      summary:
        "Full-stack development on the company's web products, from API and database work through to the interfaces people use every day.",
      highlights: [],
      stack: [],
    },
    {
      org: "Freelance",
      role: "Full-Stack Web Developer",
      initials: "FL",
      duration: "2024 - Present",
      type: "Freelance",
      location: "Remote",
      summary:
        "Client work end to end, most recently the Point Tour car rental platform, built and delivered on my own.",
      highlights: [
        "Built the front end in Vue and Tailwind, including catalogue search, booking forms, and interactive maps.",
        "Wrote the Laravel back end — routing, middleware, controllers, and models — with Eloquent over MySQL.",
        "Integrated third-party APIs for car availability, maps, and chat, plus authentication and access control.",
      ],
      stack: ["Vue.js", "Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    },
    {
      // INPUT DIBUTUHKAN: rincian pekerjaan dan tumpukan teknologi
      org: "Indonesia IT, PT. Jendela Digital Indonesia",
      role: "Junior Programmer",
      initials: "II",
      duration: "2025 - 2026",
      type: "Full-time",
      location: "Yogyakarta",
      summary:
        "Programming work across the company's client projects, on both the application and the data behind it.",
      highlights: [],
      stack: [],
    },
    {
      org: "Cipta Works",
      role: "Founder and Full-Stack Developer",
      initials: "CW",
      duration: "2025 - 2026",
      type: "Founder",
      location: "Yogyakarta",
      summary:
        "Founded the team and led full-stack delivery on every build we entered into national competition.",
      highlights: [
        "Took 1st place at AMICTA 2025 in Software Development and 1st at the Refactory Hackathon 2025.",
        "Placed 2nd at Mediweb 2025 for website design and reached the Top 10 at IDFest Developer Day 2025.",
        "Owned the architecture and the full-stack implementation while coordinating a cross-functional team.",
      ],
      stack: ["Laravel", "Vue.js", "Kotlin", "MySQL"],
    },
    {
      // INPUT DIBUTUHKAN: rincian pekerjaan
      org: "ABP Startup Incubator",
      role: "Coordinator, Video Content Creator",
      initials: "AB",
      duration: "2024 - 2025",
      type: "Part-time",
      location: "Yogyakarta",
      summary:
        "Coordinated the video content team covering the incubator's programs and events.",
      highlights: [],
      stack: [],
    },
    {
      org: "Bangkit Academy",
      role: "Mobile Development Cohort",
      initials: "BA",
      duration: "2024 - 2025",
      type: "Program",
      location: "Remote",
      summary:
        "Selected for Bangkit, the program run by Google, GoTo, and Traveloka, on the mobile development path.",
      highlights: [
        "Built native Android apps with Kotlin and Jetpack across the full curriculum.",
        "Capstone project won Best Product Track out of the cohort.",
      ],
      stack: ["Kotlin", "Android Jetpack"],
    },
    {
      org: "Forum Asisten",
      role: "Laboratory Assistant",
      initials: "FA",
      duration: "2023 - 2025",
      type: "Part-time",
      location: "AMIKOM Yogyakarta",
      summary:
        "Taught practicum sessions for six courses, explaining the hard parts to students who were seeing them for the first time.",
      highlights: [
        "Covered Algorithms and Programming, Data Structures, Programming, and Data Communication.",
        "Ran sessions for 60+ students per class across nine classes, guiding them through exercises and lab work.",
        "Prepared lab environments and helped the lead instructor grade assignments and practical work.",
      ],
      stack: [],
    },
    {
      org: "Dinas Komunikasi dan Informatika",
      role: "IT and Telematics Coordinator",
      initials: "DK",
      duration: "2020 - 2024",
      type: "Coordinator",
      location: "Sleman",
      summary:
        "Ran the telematics side of the district's SAKA Kominfo unit, from member meetings to public events.",
      highlights: [
        "Led and coordinated telematics activities, overseeing meetings, events, and regular gatherings.",
        "Delivered material on web development and programming languages, mentoring 50+ members through the fundamentals.",
        "Mentored members one on one, answering questions and sharing practical technique from my own work.",
      ],
      stack: [],
    },
    {
      org: "Prospekin",
      role: "Junior Data Analyst",
      initials: "PR",
      duration: "2023",
      type: "Internship",
      location: "Remote",
      summary:
        "Turned messy datasets into something clients could act on, and wrote the code that kept doing it.",
      highlights: [
        "Analysed and cleaned complex datasets with Python and Pandas, preparing them to client specification.",
        "Built scrapers with Beautiful Soup to pull data from websites and other online sources.",
        "Wrote and tested data processing code, checking accuracy and reliability before handover.",
      ],
      stack: ["Python", "Pandas", "Beautiful Soup", "SQL"],
    },
  ],
};

// ── Penghargaan ────────────────────────────────────────────────
export const awards = {
  badge: "Recognition",
  heading: "Awards and honors",
  intro:
    "Competition results from building with a team, mostly across national-level technology events.",
  items: [
    {
      place: "1st",
      title: "AMICTA 2025",
      detail: "Software Development category",
      year: "2025",
    },
    {
      place: "1st",
      title: "Refactory Hackathon 2025",
      detail: "Mobile Development, for Kalana Commerce",
      year: "2025",
    },
    {
      place: "2nd",
      title: "Mediweb 2025",
      detail: "Website Design",
      year: "2025",
    },
    {
      place: "Top 10",
      title: "IDFest Developer Day 2025",
      detail: "Software Development category finalist",
      year: "2025",
    },
    {
      place: "Best",
      title: "Bangkit Academy Capstone",
      detail: "Best Product Track Capstone Project",
      year: "2025",
    },
    {
      place: "Award",
      title: "JOTA-JOTI Sleman 2023",
      detail: "Piagam Penghargaan",
      year: "2023",
    },
  ],
};

// ── Skills ─────────────────────────────────────────────────────
export const skills = {
  heading: "Skills",
  items: [
    { icon: SiExpress, name: "Express.js", group: "Back end" },
    { icon: FaAndroid, name: "Android Jetpack", group: "Mobile" },
    { icon: SiKotlin, name: "Kotlin", group: "Mobile" },
    { icon: SiFlutter, name: "Flutter", group: "Mobile" },
    { icon: FaLaravel, name: "Laravel", group: "Back end" },
    { icon: FaNodeJs, name: "Node.js", group: "Back end" },
    { icon: FaPhp, name: "PHP", group: "Back end" },
    { icon: SiGo, name: "Go", group: "Back end" },
    { icon: SiMysql, name: "MySQL", group: "Back end" },
    { icon: SiPostgresql, name: "PostgreSQL", group: "Back end" },
    { icon: FaDatabase, name: "SQL", group: "Back end" },
    { icon: FaPython, name: "Python", group: "Data" },
    { icon: FaReact, name: "React", group: "Front end" },
    { icon: SiNextdotjs, name: "Next.js", group: "Front end" },
    { icon: SiSvelte, name: "Svelte", group: "Front end" },
    { icon: FaVuejs, name: "Vue.js", group: "Front end" },
    { icon: SiTailwindcss, name: "Tailwind CSS", group: "Front end" },
    { icon: SiTypescript, name: "TypeScript", group: "Front end" },
    { icon: FaJsSquare, name: "JavaScript", group: "Front end" },
    { icon: FaHtml5, name: "HTML5", group: "Front end" },
    { icon: FaCss3, name: "CSS3", group: "Front end" },
    { icon: FaBootstrap, name: "Bootstrap", group: "Front end" },
    { icon: SiRust, name: "Rust", group: "Other" },
    { icon: SiTauri, name: "Tauri", group: "Other" },
    { icon: SiDocker, name: "Docker", group: "DevOps" },
    { icon: SiGithubactions, name: "GitHub Actions", group: "DevOps" },
  ],
};

// ── Proyek ─────────────────────────────────────────────────────
// TODO Atha: tambahkan tautan live dan github, serta screenshot untuk
// proyek yang belum punya gambar. Kartu tanpa gambar tetap tampil rapi.
export const work = {
  badge: "My Projects",
  heading: "Check out my latest work",
  intro:
    "Products I built or led, from award-winning hackathon builds to apps shipped on the Play Store.",
  projects: [
    {
      title: "Kalana Commerce",
      year: "2025",
      description:
        "AI-integrated mobile commerce app. I led the full-stack development, and it took 1st place at the Refactory Hackathon 2025.",
      stack: ["Kotlin", "Android Jetpack", "Laravel", "AI"],
      image: "",
      live: "",
      github: "",
    },
    {
      title: "Digilondree",
      year: "2026",
      description:
        "Offline-first laundry management app published on the Google Play Store, backed by a Laravel RESTful API for sync.",
      stack: ["Kotlin", "Laravel", "REST API", "SQLite"],
      image: "",
      live: "",
      github: "",
    },
    {
      title: "Kalana Pantry",
      year: "2025",
      description:
        "Smart pantry management platform for sustainable inventory tracking. I architected the backend and core system integrations.",
      stack: ["Laravel", "MySQL", "Vue.js", "REST API"],
      image: "",
      live: "",
      github: "",
    },
    {
      title: "HealthPassport",
      year: "2025",
      description:
        "Web platform with AI-driven health risk analysis, turning personal health data into a readable personal risk profile.",
      stack: ["Laravel", "Python", "AI", "Tailwind CSS"],
      image: "",
      live: "",
      github: "",
    },
    {
      title: "Civila",
      year: "2025",
      description:
        "Career intelligence platform that processes personal data into tailored guidance on where to go next.",
      stack: ["Laravel", "Python", "AI", "Vue.js"],
      image: "",
      live: "",
      github: "",
    },
    {
      title: "Point Rental Mobil",
      year: "2024",
      description:
        "Car rental platform with a browsable fleet, availability handling, and a booking flow built for people new to booking online.",
      stack: ["Vue.js", "Tailwind CSS", "JavaScript", "HTML5"],
      image: "/Point.png",
      live: "",
      github: "",
    },
    {
      title: "Healify",
      year: "2024",
      description:
        "Health application pairing a Laravel backend with a Vue frontend, covering records, scheduling, and an admin side for staff.",
      stack: ["Laravel", "Vue.js", "Tailwind CSS", "PHP", "MySQL"],
      image: "/Healify.png",
      live: "",
      github: "",
    },
  ],
};

// ── Layanan ────────────────────────────────────────────────────
export const services = {
  badge: "Services",
  heading: "What I can do for you",
  intro: "Four things I take on, for clients and on my own projects.",
  items: [
    {
      icon: FiCode,
      title: "Web Development",
      description:
        "Full-stack web applications built to hold up in production. Laravel and Node on the back, React or Vue on the front.",
    },
    {
      icon: FaAndroid,
      title: "Mobile Development",
      description:
        "Native Android apps with Kotlin and Jetpack, including offline-first architectures that keep working without a connection.",
    },
    {
      icon: FiDatabase,
      title: "Data and Automation",
      description:
        "Python for data analysis and mining, plus workflow automation with n8n to take repetitive work off your hands.",
    },
    {
      icon: FiCpu,
      title: "Agentic AI Development",
      description:
        "AI agents that do real work, not demos. LLM orchestration, MCP servers, and tool calling wired into the systems you already run.",
    },
  ],
};

// ── Cara kerja ─────────────────────────────────────────────────
export const process = {
  badge: "Process",
  heading: "How I work",
  intro: "The same three steps on every project, so nothing comes as a surprise.",
  steps: [
    {
      title: "Understand the problem",
      description:
        "I map the requirement, the people who will use it, and the constraints before writing a line of code. Most bad software is a clear answer to the wrong question.",
    },
    {
      title: "Design, then build",
      description:
        "The interface gets agreed in Figma first, so the shape is settled early. Then a clean implementation with readable data flow and no surprises buried in the codebase.",
    },
    {
      title: "Ship and improve",
      description:
        "Deploy it, watch what real users actually do, and iterate. A project is not finished at handover, it is finished when it works in the wild.",
    },
  ],
};

// ── Angka ──────────────────────────────────────────────────────
export const stats = {
  items: [
    { value: 6, suffix: "", label: "Years in tech" },
    { value: 6, suffix: "", label: "Awards and honors" },
    { value: 4, suffix: "", label: "National competitions" },
    { value: 25, suffix: "", label: "Technologies" },
  ],
};

// ── Sedang dikerjakan ──────────────────────────────────────────
// TODO Atha: perbarui bagian ini sesekali, ini yang membuat halaman
// terasa hidup dan bukan arsip.
export const now = {
  heading: "What I'm up to now",
  updated: "Updated September 2026",
  items: [
    {
      label: "Building",
      text: "Full-stack work at AWBS Network, and developing Kana House Lab on the side.",
    },
    {
      label: "Learning",
      text: "Going deeper into back-end architecture and software engineering practice, alongside data analysis.",
    },
    {
      label: "Also",
      text: "Keeping 2D design, graphics, and video editing sharp, because they make the products better.",
    },
  ],
};

// ── Perjalanan ─────────────────────────────────────────────────
export const journey = {
  heading: "The short version",
  intro: "How I got from a first line of code to here.",
  items: [
    {
      year: "2020",
      title: "Started in IT field work",
      text: "Joined Dinas Komunikasi dan Informatika Sleman as IT and Telematics Coordinator, mentoring 50+ members in web development fundamentals.",
    },
    {
      year: "2022",
      title: "Began Informatics Engineering",
      text: "Enrolled at Universitas AMIKOM Yogyakarta and started taking programming seriously.",
    },
    {
      year: "2023",
      title: "First data role and lab assistant",
      text: "Junior data analyst at Prospekin using Python for analysis and mining, and became a laboratory assistant at Forum Asisten.",
    },
    {
      year: "2024",
      title: "Bangkit Academy, mobile track",
      text: "Selected for Bangkit led by Google, GoTo, and Traveloka. Won Best Product Track for the capstone project.",
    },
    {
      year: "2025",
      title: "Founded Cipta Works",
      text: "Led a cross-functional team to recognition across four national competitions, including two first-place wins.",
    },
    {
      year: "Now",
      title: "Full-stack at AWBS Network",
      text: "Building web and mobile products, and developing Kana House Lab.",
    },
  ],
};

// ── Pertanyaan yang sering muncul ──────────────────────────────
export const faq = {
  heading: "Frequently asked",
  items: [
    {
      question: "Are you available for freelance work?",
      answer:
        "Yes. I take on freelance projects alongside my full-time work, and I am open to conversations about larger collaborations.",
    },
    {
      question: "What kind of projects do you take on?",
      answer:
        "Full-stack web applications and native Android apps. I have built commerce platforms, health tools, inventory systems, and offline-first mobile apps.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "A small company profile site is usually two to three weeks. A full application with authentication, an admin panel, and a database runs longer, and I will give you a realistic estimate before we start rather than an optimistic one.",
    },
    {
      question: "Do you work with existing codebases?",
      answer:
        "Yes. I am comfortable picking up a project someone else started, whether that means fixing what is broken, adding features, or cleaning up the parts that have become hard to change.",
    },
    {
      question: "How do we start?",
      answer:
        "Send me an email with a short description of what you need. I will reply with questions, a rough timeline, and a price before any work begins.",
    },
  ],
};

// ── Kontak ─────────────────────────────────────────────────────
export const contact = {
  badge: "Contact",
  heading: "Get in Touch",
  intro:
    "Want to work together, or just say hello? Send me a message and I will get back to you.",
  email: "kalilaatha8@gmail.com",
};

// ── Sosial ─────────────────────────────────────────────────────
// Biarkan href kosong untuk menyembunyikan ikon dari dock.
export const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Roxxy17" },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kalilaathaachmad",
  },
  { icon: FaInstagram, label: "Instagram", href: "" },
  { icon: FaYoutube, label: "YouTube", href: "" },
];
