export function withAlpha(hex, opacity) {
  return hex + Math.round(opacity * 255).toString(16).padStart(2, '0').toUpperCase();
}

const college = {
  id: 'glec',
  shortName: 'GLEC',
  fullName: 'Gokaraju Lailavathi Engineering College',
  tagline: "Building tomorrow's engineers with excellence and integrity.",
  email: 'placements@glwec.in',
  phone: '+91 7207344440',
  admissionsPhone: '+91 7207344440',
  admissionsLabel: 'Admissions helpdesk available for 2025–26',
  address: 'Nizampet Road, Bachupally, Kukatpally, Hyderabad – 500090',
  counsellingCode: 'GLWC',
  counsellingExam: 'TG EAPCET',
  logo: '/imgi_1_GLEC_Logo.png',
  accreditationLogo: null,
  smallLogo: '/small-logo.png',
  primaryColor: '#5B1127',
  accentColor: '#E6A31E',

  socialLinks: {
    instagram: 'https://www.instagram.com',
    facebook: 'https://www.facebook.com',
    linkedin: 'https://www.linkedin.com',
    youtube: 'https://www.youtube.com',
  },

  announcements: [
    { text: 'Deemed-to-be University – LOI Received', badge: 'NEW', isLOI: true },
    { text: 'Admissions Open for 2025–26', href: '/admissions', badge: 'NEW' },
    { text: 'B.E. 2025-2026 admitted students regular classwork commences from 28th August 2025', href: '#', badge: 'NEW' },
    { text: 'Faculty Recruitment — Applications Open', href: '#', badge: 'NEW' },
  ],

  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Administration',
      href: '/administration',
      dropdown: [
        { label: 'Management', href: '/administration' },
        { label: 'Sponsoring Body & MOAG', href: '/administration#sponsoring-body' },
        { label: 'Governing Body', href: '/administration#governing-body' },
        { label: 'Registrar', href: '/administration#registrar' },
        { label: 'Principal', href: '/administration#principal' },
        { label: 'ID Plan', href: '/administration#id-plan' },
        { label: 'Anti Ragging Committee', href: '/administration#anti-ragging' },
        { label: 'Anti Sexual Harassment Committee', href: '/administration#anti-harassment' },
        { label: 'Grievance Redressal Policy', href: '/administration#grievance' },
        { label: 'SEGD Cell', href: '/administration#segd' },
        { label: 'Finance Committee', href: '/administration#finance' },
        { label: 'Equal Opportunity Cell', href: '/administration#equal-opportunity' },
        { label: 'ICC', href: '/administration#icc' },
      ],
    },
    {
      name: 'Admissions',
      href: '/admissions',
      dropdown: [
        { label: 'Courses Offered', href: '/admissions' },
        { label: 'Admission Procedure', href: '/admissions#procedure' },
        { label: 'Course Fees', href: '/admissions#fees' },
        { label: 'EAPCET Ranks', href: '/admissions#eapcet' },
        { label: 'Fee Refund Policy', href: '/admissions#refund' },
      ],
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { label: 'Academic Leadership', href: '/academics' },
        { label: 'Academic Collaborations', href: '/academics#collaborations' },
        { label: 'IQAC', href: '/academics#iqac' },
        { label: 'Library', href: '/academics#library' },
        { label: 'Rules & Regulations', href: '/academics#rules' },
        { label: 'Academic Calendar', href: '/academics#calendar' },
      ],
    },
    {
      name: 'Departments',
      href: '/departments/cse',
      dropdown: [
        { label: 'B.E. (CSE)', href: '/departments/cse' },
        { label: 'B.E. (CSE AI & ML)', href: '/departments/cse-aiml' },
        { label: 'B.E. (IT)', href: '/departments/it' },
        { label: 'B.E. (CS)', href: '/departments/cyber-security' },
        { label: 'B.E. (H&S)', href: '/departments/hs' },
      ],
    },
    { name: 'Research', href: '/research' },
    { name: 'Placements', href: '/placements' },
    {
      name: 'Examinations',
      href: '/examinations',
      dropdown: [
        { label: 'Examination Committee', href: '/examinations' },
        { label: 'Notifications', href: '/examinations#notifications' },
        { label: 'Results', href: '/examinations#results' },
        { label: 'Exam Branch Online Services', href: '/examinations#online-services' },
      ],
    },
    { name: 'Contact Us', href: '/contact' },
  ],

  quickLinks: [
    { label: 'About College', href: '/about' },
    { label: 'Chairman', href: '/administration' },
    { label: 'Vice President', href: '/administration' },
    { label: 'Registrar', href: '/administration#registrar' },
    { label: 'Principal', href: '/administration#principal' },
    { label: 'Placements', href: '/placements' },
    { label: 'Infrastructure', href: '/about/infrastructure' },
    { label: 'SKILL Series', href: '/research' },
    { label: 'Contact Us', href: '/contact' },
  ],

  resources: [
    { label: 'Health Facilities', href: '/about/infrastructure#health' },
    { label: 'Sports Facilities', href: '/about/infrastructure#sports' },
    { label: 'Placements', href: '/placements' },
    { label: 'Physically Challenged', href: '/about/infrastructure#accessibility' },
    { label: 'Ombudsperson', href: '/administration#ombudsperson' },
    { label: 'RTI Act', href: '/administration#rti' },
  ],

  // ── Hero ──────────────────────────────────────────────────────────────────
  heroHeading: "Shaping Tomorrow's Engineers with Excellence & Innovation",
  heroSubtext: 'Gokaraju Lailavathi Engineering College, established in 2021, is committed to providing world-class technical education. AICTE approved and affiliated with Osmania University, GLEC nurtures students into competent professionals under the Gokaraju Group legacy.',
  heroCTALabel: 'Admissions Open 2025',
  heroCTAHref: '/admissions',
  heroBgImage: '/imgi_5_aboutusbanner.jpg',

  // ── Stats Bar ─────────────────────────────────────────────────────────────
  statsBarItems: ['AICTE Approved', 'Osmania University Affiliated', '253 Placement Offers', '6+ LPA Highest Package'],

  // ── Campus Intro ──────────────────────────────────────────────────────────
  campusIntroLabel: 'Campus Experience',
  campusIntroHeading: 'Be a Part of the GLEC Experience',
  campusIntroDesc: 'Step into a future-focused campus where innovation meets opportunity. At GLEC, students learn beyond classrooms through hands-on labs, collaborative projects, industry exposure, and a thriving student community dedicated to excellence.',
  campusVideoSrc: null,
  campusIntroImage: '/imgi_4_Gokaraju-Rangaraju.jpg',

  // ── Highlight Cards ───────────────────────────────────────────────────────
  highlightCards: [
    { title: 'AICTE Approved', desc: 'Recognized by AICTE with programs meeting national quality standards.' },
    { title: 'Placements', desc: '253 placement offers with top recruiters for the 2025 batch.' },
    { title: 'Community', desc: 'A vibrant student community with innovative clubs and student chapters.' },
  ],

  // ── About ─────────────────────────────────────────────────────────────────
  aboutHeading: 'Welcome to Gokaraju Lailavathi Engineering College',
  aboutP1: 'Gokaraju Lailavathi Engineering College (GLEC) — previously Gokaraju Lailavathi Womens Engineering College (GLWEC) — was established in 2021 by Dr. G. Gangaraju as a self-financed institution under the Gokaraju Rangaraju Educational Society. Approved by AICTE, New Delhi, and affiliated with Osmania University, Hyderabad.',
  aboutP2: 'As a sister concern of GRIET, GLEC adopts its world-class facilities and teaching-learning processes to ensure excellence in education. The college converted to co-education from the academic year 2024–25, now welcoming all students with a TG EAPCET counselling code of GLWC.',
  aboutP3: 'With a management committee comprising experts from various industries and academia, GLEC is committed to fostering experiential learning, innovation, and holistic development — shaping graduates who are career-ready and globally competitive.',
  aboutFeatures: [
    { title: 'AICTE Approved', sub: 'Nationally recognized programs' },
    { title: 'OU Affiliated', sub: 'Osmania University, Hyderabad' },
    { title: 'Expert Faculty', sub: 'Industry & research veterans' },
    { title: 'Modern Infrastructure', sub: 'State-of-the-art labs & campus' },
  ],
  aboutYears: '4+',
  aboutYearsLabel: 'Years of Academic Excellence',
  aboutImage: '/Why choose us.png',
  aboutTotalSeats: '480+',

  // ── Vision & Mission ──────────────────────────────────────────────────────
  // ── About Page Content ────────────────────────────────────────────────────────
  aboutFounders: 'Dr. G. Gangaraju, Chairman of the Gokaraju Rangaraju Educational Society (GRES) and the Laila Group of Industries, is the inspiring force behind Gokaraju Lailavathi Engineering College. A visionary industrialist and philanthropist, Dr. Gangaraju established GRIET in 1997 and extended his commitment to technical education by founding GLEC in 2021. His mission has always been to create institutions that empower young minds with practical skills, ethical values, and the confidence to compete on a global stage.',

  aboutSociety: "Gokaraju Lailavathi Engineering College is established by the Gokaraju Rangaraju Educational Society (GRES), a trust founded with a singular commitment to providing quality higher education in Engineering and Technology. GRES operates Gokaraju Rangaraju Institute of Engineering & Technology (GRIET), one of Hyderabad's most reputed autonomous engineering colleges, and extended its educational vision to GLEC in 2021. The Society is committed to fostering centres of academic excellence that produce globally competent engineers.",

  aboutDetailedParagraphs: [
    "Gokaraju Lailavathi Engineering College (GLEC) — formerly Gokaraju Lailavathi Women's Engineering College (GLWEC) — was established in 2021 under the Gokaraju Rangaraju Educational Society by Dr. G. Gangaraju. Approved by AICTE, New Delhi, and affiliated with Osmania University, Hyderabad, GLEC is a self-financed institution committed to delivering world-class engineering education.",
    'As a sister institution of GRIET, GLEC inherits a culture of academic rigour, research orientation, and industry engagement developed over 25+ years. The college converted to co-education from the academic year 2024–25 and now offers B.E. programmes in Computer Science & Engineering, CSE (AI & ML), Information Technology, Cyber Security, and Humanities & Sciences.',
    'The institution is led by a visionary management committee comprising industry experts, academic leaders, and research scholars. GLEC operates from a modern, fully equipped campus at Nizampet Road, Bachupally, Hyderabad, with state-of-the-art laboratories, a central library, sports facilities, and residential hostels.',
    "GLEC's flagship skill development programmes — NIPUN (industry bridge), DHI (communication & leadership), and SEEKH (experiential learning) — ensure that graduates are not only technically proficient but also industry-ready communicators and problem solvers. The 2025 batch recorded 253 placement offers with a highest package of 6+ LPA from recruiters including Microsoft, Oracle, TCS, Capgemini, Infosys, and Deloitte.",
    'Driven by values of Excellence, Integrity, Innovation, and Service to the Nation, GLEC aspires to be a world-class engineering college that inspires young technocrats to become globally competent professionals and leaders committed to societal development.',
  ],

  vision: 'To be world class engineering college for imparting experiential, innovative and critical skills addressing societal problems. Inspiring young technocrats to become globally competent in technical education and research to emerge as world class leaders.',

  mission: [
    'To promote experiential learning in students by engaging them in hands on experience and reflection, so that, they are able to connect theories and knowledge learned in the classroom to real-world situations.',
    'To create an ambience in which novel ideas, research and development flourish in order to shape the emerging innovators.',
    'To provide infrastructure and facilities to meet the latest technology trends.',
    'To avail necessary support for skill enhancement to reduce the industry-academia gap.',
  ],

  qualityPolicy: 'To provide an integrated learning environment to enable students to grow towards their full potential and meet the high expectations of the Industry and the Society.',

  strategies: [
    'Develop and sustain a qualified, research-oriented, and industry-experienced faculty pool.',
    'Forge strategic partnerships with leading industries for internships, projects, and placements.',
    'Continuously update curricula to align with emerging technologies and national/global industry needs.',
    'Foster a culture of innovation through research centres, student clubs, and entrepreneurship cells.',
    'Implement outcome-based education (OBE) with regular feedback loops from alumni, industry, and academia.',
    'Provide comprehensive student support — mentoring, counselling, health, sports, and career services.',
  ],

  coreValues: [
    { name: 'Excellence', desc: 'Continually strive to achieve the highest standards in education and research.' },
    { name: 'Integrity', desc: 'Sustain an atmosphere of honesty, openness, and transparency in all dealings.' },
    { name: 'Innovation', desc: 'Promote a culture of curiosity and reward originality of thought and action.' },
    { name: 'Entrepreneurship', desc: 'Promote and nurture entrepreneurial spirit among students.' },
    { name: 'Leadership', desc: 'Develop leaders with ability to find creative solutions to the problems of the industry.' },
    { name: 'Sustainability', desc: 'Conduct research that addresses critical global challenges and promote public awareness of the issues involved.' },
    { name: 'Service to the Nation', desc: 'Utilize technology for building national wealth.' },
  ],

  // ── Leadership ────────────────────────────────────────────────────────────
  leadership: [
    {
      name: 'Dr. Gokaraju Ganga Raju',
      title: 'Chairman',
      image: 'https://www.glwec.in/images/Gokaraju_Ganga_Raju.jpg',
      bio: 'Founder of the Gokaraju Rangaraju Educational Society. Established GRIET in 1997 and GLEC in 2021. Chairman of Laila Group of Industries with interests spanning pharmaceuticals, paper, sugar, and agro-products.',
    },
    {
      name: 'Sri G.V.K. Ranga Raju',
      title: 'Vice President',
      image: 'https://www.glwec.in/images/Ranga_Raju.jpg',
      bio: 'Vice President of GRES, bringing business expertise and a forward-thinking educational philosophy. Advocates for technology-driven learning and preparing students to become leaders in modern industry.',
    },
    {
      name: 'Dr. Akundi Sai Hanuman',
      title: 'Principal',
      image: 'https://www.glwec.in/images/Akund_Sai_Hanuman.jpg',
      bio: 'Professor of CSE with 24+ years of experience in academics, industry, and research. Ph.D. from Acharya Nagarjuna University. 35+ publications, 2 patents. IEEE & CSI member.',
    },
    {
      name: 'Prof. K.V.S. Raju',
      title: 'Registrar',
      image: 'https://www.glwec.in/images/K_VS_Raju.jpg',
      bio: 'Ph.D. in Management from JNTU Hyderabad with extensive experience spanning academia and banking. Active researcher with contributions in national and international journals.',
    },
  ],

  // ── Why Choose GLEC ───────────────────────────────────────────────────────
  whyChooseLabel: 'Why Choose GLEC',
  whyChooseHeading: 'Academic Excellence That Shapes Your Success',
  whyChooseCards: [
    { title: 'Quality Education', desc: 'Programs designed with strong educational benchmarks and AICTE-approved quality standards for career-ready graduates.' },
    { title: 'Career Advantage', desc: '253 placement offers across top companies for the 2025 batch — with Microsoft, Oracle, Capgemini, Infosys, and more.' },
    { title: 'Innovative Teaching', desc: 'Teaching practices aligned with modern industry needs through NIPUN, DHI, and SEEKH skill-development initiatives.' },
    { title: 'Skill Development', desc: 'Dedicated programs bridging the academia-industry gap through experiential learning and communication workshops.' },
    { title: 'Innovation Culture', desc: 'Strong support for research, innovation clubs, student-driven projects, and emerging technology exploration.' },
    { title: 'GRIET Legacy', desc: "Backed by the Gokaraju Group — sharing GRIET's world-class infrastructure, faculty network, and 25+ years of excellence." },
  ],

  // ── Academic Programs ─────────────────────────────────────────────────────
  academicProgramsLabel: 'Academic Programs',
  academicProgramsHeading: 'Programs Designed for Future Engineers',
  academicProgramsDesc: 'Explore career-focused programs built to prepare students for innovation, leadership, and industry success.',
  academicPrograms: [
    {
      count: 'B.E.',
      title: 'Computer Science & Engineering',
      seats: 360,
      desc: 'Industry-focused engineering degree with strong foundations in software, systems, and emerging technologies.',
    },
    {
      count: 'B.E.',
      title: 'CSE (AI & ML)',
      seats: 120,
      desc: 'Specialization in Artificial Intelligence and Machine Learning for future-ready, high-demand careers.',
    },
    {
      count: 'B.E.',
      title: 'Information Technology',
      seats: null,
      desc: 'Comprehensive IT program covering networks, databases, cloud computing, and enterprise systems.',
    },
    {
      count: 'B.E.',
      title: 'Cyber Security',
      seats: null,
      desc: 'Specialized program in ethical hacking, network security, cryptography, and digital forensics.',
    },
    {
      count: 'B.E.',
      title: 'Humanities & Sciences',
      seats: null,
      desc: 'Foundational program covering mathematics, physics, chemistry, and communication skills for engineering.',
    },
  ],

  // ── Career Outcomes ───────────────────────────────────────────────────────
  careerLabel: 'Career Outcomes',
  careerHeading: 'Where Talent Meets Opportunity',
  careerDesc: 'GLEC graduates are hired by top recruiters across technology and core engineering domains. Strong placement training, mentoring through NIPUN and SEEKH initiatives, and industry collaborations help students launch successful careers.',
  careerHighestPackage: '6+ LPA',
  careerOffersCount: '253+',
  careerRecruiters: [
    'Microsoft', 'Oracle', 'Capgemini', 'TCS', 'Infosys',
    'Deloitte', 'Cognizant', 'Accenture', 'Wipro', 'TechMahindra',
    'Pega Systems', 'ADP', 'Factset', 'NetCracker', 'S&P Capital IQ', 'L&T Constructions',
  ],
  careerImage: '/Career Outcomes.png',

  // ── Research & Initiatives ────────────────────────────────────────────────
  researchLabel: 'Our Initiatives',
  researchHeading: 'Innovation & Skill Development at GLEC',
  researchStats: [
    {
      count: 'NIPUN',
      label: 'Industry Bridge Program',
      desc: 'Nurtures innovative thinking and bridges the academia-industry gap through project-based learning.',
    },
    {
      count: 'DHI',
      label: 'Communication & Leadership',
      desc: 'Develops public speaking, essay writing, dramatics, debates, JAM sessions, and group discussions.',
    },
    {
      count: 'SEEKH',
      label: 'Experiential Learning',
      desc: 'Delivers hands-on experiential learning for budding engineers through real-world application.',
    },
    {
      count: '253+',
      label: 'Placement Offers',
      desc: 'Total placement offers for the 2025 batch across top companies in technology and engineering.',
    },
  ],

  // ── Campus Life ───────────────────────────────────────────────────────────
  campusLifeLabel: 'Student Experience',
  campusLifeHeading: 'Vibrant Campus Life',
  campusLifeCards: [
    { title: 'Cultural Events & Fests', desc: 'Annual flagship events bringing students together from across the campus.', img: '/Cultural event & Fests.png', large: true },
    { title: 'Sports Facilities', desc: 'Indoor and outdoor sports complexes for every student.', img: '/Sports fecilities.png' },
    { title: 'Innovation Clubs', desc: 'Student-run tech and non-tech chapters fostering creativity.', img: '/Innovation clubs.png' },
    { title: 'Hostel Life', desc: 'Comfortable, secure, and vibrant residential halls.', img: '/Hostel life.png' },
    { title: 'Central Library', desc: 'A hub of knowledge with thousands of curated resources.', img: '/Central library.png' },
  ],

  // ── Departments ───────────────────────────────────────────────────────────
  departments: [
    {
      slug: 'cse',
      name: 'Computer Science & Engineering',
      shortName: 'CSE',
      degree: 'B.E.',
      ugIntake: 360,
      established: 2021,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of Computer Science & Engineering at Gokaraju Lailavathi Engineering College was established with the primary objective of imparting quality technical education and fostering research-oriented thinking. The department produces graduates who are technically proficient and equipped with problem-solving, communication, and leadership skills demanded by the global industry.',
        "The department offers the B.E. programme in CSE with an intake of 360 students. Supported by GLEC's flagship skill development initiatives — NIPUN, SEEKH, and DHI — the department ensures strong academia-industry alignment. With experienced faculty, state-of-the-art laboratories, and active placement support, the CSE department has delivered 253+ placement offers for the 2025 batch.",
      ],
      announcements: [
        'B.E. CSE 2025–26 admissions open — TG EAPCET code: GLWC',
        'Industry Expert Lecture on Cloud Architecture — 20 Feb 2025',
        'Hackathon 2025: Register by 28 February 2025',
        'Guest Lecture: "AI in Production" by Microsoft Engineer — 15 Mar 2025',
        'NIPUN Industry Bridge Programme — Batch 4 registrations open',
      ],
      vision: 'To be a centre of excellence in Computer Science & Engineering education, producing globally competitive graduates who innovate and lead in emerging technology domains while contributing to the advancement of society.',
      mission: [
        'To provide outcome-based, industry-aligned education that builds strong fundamentals in computer science, software engineering, and emerging technologies.',
        'To foster a culture of research, innovation, and entrepreneurship through collaborative projects, hackathons, and industry partnerships.',
        'To equip students with professional skills — communication, teamwork, and ethics — essential for global career readiness.',
        'To bridge the academia-industry gap through structured skill programmes (NIPUN, SEEKH, DHI) and continuous curriculum upgradation.',
      ],
      achievements: [
        { count: '360', label: 'UG Intake', desc: 'B.E. Computer Science & Engineering' },
        { count: '253+', label: 'Placements 2025', desc: 'Offers from top tech recruiters' },
        { count: '4+', label: 'Years of Excellence', desc: 'Established since GLEC inception in 2021' },
        { count: '20+', label: 'Expert Faculty', desc: 'Industry & research experienced staff' },
      ],
      news: [
        { title: 'Hackathon 2025', desc: 'CSE students secured top positions at the inter-college hackathon organised at GRIET campus.', date: 'Feb 2025' },
        { title: 'Cloud Computing Workshop', desc: 'Two-day hands-on workshop on AWS and Azure cloud platforms conducted by industry experts.', date: 'Jan 2025' },
        { title: 'NIPUN Batch 4 Launch', desc: 'New batch of the NIPUN Industry Bridge Programme launched with 120 CSE students enrolled.', date: 'Dec 2024' },
        { title: 'Guest Lecture: AI in Production', desc: 'Microsoft engineer delivered an expert session on deploying machine learning models at scale.', date: 'Nov 2024' },
        { title: 'Orientation Programme 2024–25', desc: 'Welcome orientation for the 2024–25 B.E. CSE batch with industry mentors and faculty.', date: 'Aug 2024' },
        { title: 'Cybersecurity Awareness Seminar', desc: 'Department organised a seminar on cybersecurity best practices for students and faculty.', date: 'Sep 2024' },
      ],
      alumni: [
        { name: 'Priya Sharma (2022)', role: 'Software Engineer', company: 'Microsoft' },
        { name: 'Rahul Verma (2022)', role: 'Data Analyst', company: 'Capgemini' },
        { name: 'Sneha Reddy (2023)', role: 'Cloud Engineer', company: 'TCS' },
        { name: 'Aditya Kumar (2023)', role: 'Full Stack Developer', company: 'Infosys' },
        { name: 'Divya Nair (2024)', role: 'ML Engineer', company: 'Oracle' },
        { name: 'Karthik Rao (2024)', role: 'DevOps Engineer', company: 'Accenture' },
      ],
      facilities: [
        { title: 'Advanced Computing Labs', desc: 'State-of-the-art labs equipped with high-performance workstations, latest software tools, and cloud computing access for hands-on learning in programming, AI/ML, and networks.' },
        { title: 'Training & Skill Development', desc: 'Dedicated training cells running NIPUN, SEEKH, and DHI programmes — covering technical skills, communication, aptitude, and industry project simulations for placement readiness.' },
        { title: 'Campus Placements', desc: 'Exceptional placement support with 253+ offers in 2025. Dedicated placement coordinators, mock interviews, resume workshops, and active recruiter partnerships with 16+ top companies.' },
      ],
    },
    {
      slug: 'cse-aiml',
      name: 'CSE (Artificial Intelligence & Machine Learning)',
      shortName: 'CSE AI&ML',
      degree: 'B.E.',
      ugIntake: 120,
      established: 2022,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of CSE (Artificial Intelligence & Machine Learning) at Gokaraju Lailavathi Engineering College was established in 2022 to meet the growing industry demand for AI-skilled professionals. Offering a B.E. programme with an intake of 120 students, the department is dedicated to producing graduates who can design, develop, and deploy intelligent systems that solve real-world problems.',
        "The curriculum integrates core computer science foundations with specialised modules in machine learning, deep learning, natural language processing, computer vision, and data science. Backed by GLEC's NIPUN, SEEKH, and DHI initiatives, students gain hands-on project experience, strong communication skills, and industry exposure — making them placement-ready from day one.",
      ],
      announcements: [
        'B.E. CSE (AI & ML) 2025–26 admissions open — TG EAPCET code: GLWC',
        'Deep Learning & Computer Vision Workshop — March 2025',
        'AI Hackathon 2025: Registrations open till 10 March',
        'Guest Lecture: "Generative AI in Enterprise" — 22 Feb 2025',
        'SEEKH Experiential Learning Batch 3 — Enrol Now',
      ],
      vision: 'To be a premier centre for Artificial Intelligence & Machine Learning education, producing globally competitive graduates who develop innovative intelligent systems and contribute to the technological advancement of society.',
      mission: [
        'To deliver rigorous, outcome-based education in AI, ML, deep learning, and data science grounded in strong mathematical and computational foundations.',
        'To foster a research and innovation culture through student projects, hackathons, publications, and collaboration with industry AI teams.',
        'To bridge academia and industry through structured training programmes, internships, and real-world project engagements with leading technology companies.',
        'To develop well-rounded professionals equipped with ethical reasoning, communication skills, and leadership qualities essential for AI careers.',
      ],
      achievements: [
        { count: '120', label: 'UG Intake', desc: 'B.E. CSE (Artificial Intelligence & Machine Learning)' },
        { count: '50+', label: 'Placements 2025', desc: 'Offers in AI, ML & Data Science roles' },
        { count: '3+', label: 'Years of Excellence', desc: 'Established since 2022 at GLEC' },
        { count: '12+', label: 'Expert Faculty', desc: 'Specialists in AI, ML, NLP & Computer Vision' },
      ],
      news: [
        { title: 'AI Hackathon 2025', desc: 'CSE AI&ML students won second place at the inter-college AI hackathon, presenting a real-time object detection model.', date: 'Feb 2025' },
        { title: 'Deep Learning Workshop', desc: 'Two-day intensive workshop on CNNs and Transformers conducted in collaboration with an industry AI research team.', date: 'Jan 2025' },
        { title: 'Guest Lecture: Generative AI', desc: 'Senior ML Engineer from a leading tech firm delivered a session on LLMs and their enterprise deployment strategies.', date: 'Feb 2025' },
        { title: 'SEEKH Batch 3 Launch', desc: 'Third batch of the SEEKH experiential learning programme launched with 60 CSE AI&ML students building end-to-end ML pipelines.', date: 'Dec 2024' },
        { title: 'Research Paper Publication', desc: 'Faculty and final-year students co-authored a paper on "Federated Learning for Healthcare" accepted at a national conference.', date: 'Nov 2024' },
        { title: 'Orientation 2024–25', desc: 'Welcome orientation for the new B.E. CSE AI&ML batch featuring alumni talks, lab tours, and faculty introductions.', date: 'Aug 2024' },
      ],
      alumni: [
        { name: 'Ananya Reddy (2023)', role: 'ML Engineer', company: 'Oracle' },
        { name: 'Rohan Mehta (2023)', role: 'Data Scientist', company: 'Deloitte' },
        { name: 'Sai Priya (2024)', role: 'AI Research Intern', company: 'Microsoft' },
        { name: 'Vikram Nair (2024)', role: 'Computer Vision Engineer', company: 'TCS' },
        { name: 'Meghna Sharma (2024)', role: 'NLP Engineer', company: 'Infosys' },
        { name: 'Arjun Rao (2024)', role: 'Data Analyst', company: 'Capgemini' },
      ],
      facilities: [
        { title: 'AI/ML Research Lab', desc: 'Dedicated GPU-enabled workstations for deep learning model training, computer vision research, and large-scale NLP experiments using TensorFlow and PyTorch.' },
        { title: 'Data Science Studio', desc: 'Collaborative workspace with big data tools (Hadoop, Spark), cloud ML platforms (AWS SageMaker, Azure ML), and advanced data visualisation software.' },
        { title: 'Industry Project Cell', desc: 'Live project engagements with industry partners in computer vision, NLP, and predictive analytics — giving students real-world AI deployment experience before graduation.' },
      ],
    },
    {
      slug: 'hs',
      name: 'Humanities & Sciences',
      shortName: 'H&S',
      degree: 'B.E.',
      ugIntake: null,
      established: 2021,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of Humanities & Sciences at Gokaraju Lailavathi Engineering College serves as the foundational pillar of engineering education at GLEC. Established in 2021, the department offers core instruction in Mathematics, Physics, Chemistry, English Communication, and Management Sciences to all first-year engineering students across all branches.',
        "The department plays a crucial role in strengthening analytical thinking, scientific reasoning, and communication skills that are fundamental to every engineering discipline. Through well-equipped physics and chemistry laboratories, language labs, and a team of experienced faculty, the H&S department ensures that GLEC students build a strong academic foundation for their specialised engineering programmes. The department also supports GLEC's DHI initiative — focusing on communication, leadership, and professional development.",
      ],
      announcements: [
        'First-year student orientation and timetable — August 2025',
        'Mathematics Bridge Course for new B.E. students — 1st week of semester',
        'English Communication & Soft Skills workshop — Sept 2025',
        'DHI Programme Batch 5 — Registrations open for 1st year students',
        'Chemistry lab safety training — Mandatory for all new students',
      ],
      vision: 'To be a centre of excellence in foundational science and humanities education, nurturing analytical, communicative, and ethically grounded engineers capable of contributing meaningfully to technology and society.',
      mission: [
        'To provide rigorous instruction in mathematical, physical, and chemical sciences that form the bedrock of all engineering disciplines.',
        'To develop strong English communication, critical thinking, and professional skills through structured language and humanities programmes.',
        'To foster scientific temperament, curiosity, and ethical values among first-year engineering students.',
        'To support holistic development through interdisciplinary learning, co-curricular activities, and the DHI communication initiative.',
      ],
      achievements: [
        { count: '5+', label: 'Core Subjects', desc: 'Maths, Physics, Chemistry, English & Management' },
        { count: '4+', label: 'Years of Excellence', desc: 'Foundation department since GLEC inception 2021' },
        { count: '15+', label: 'Expert Faculty', desc: 'PhD holders & experienced science educators' },
        { count: '1000+', label: 'Students Trained', desc: 'First-year students across all B.E. programmes' },
      ],
      news: [
        { title: 'National Science Day Celebrations', desc: 'Department organised science demonstrations and quiz competitions celebrating National Science Day with participation from all first-year students.', date: 'Feb 2025' },
        { title: 'English Communication Workshop', desc: 'Intensive two-day workshop on technical writing, presentation skills, and group discussion techniques conducted for B.E. first-year students.', date: 'Jan 2025' },
        { title: 'DHI Batch 5 Launch', desc: 'Fifth batch of the DHI communication and leadership programme launched, covering public speaking, essay writing, and JAM sessions.', date: 'Dec 2024' },
        { title: 'Mathematics Remedial Programme', desc: 'Special remedial sessions in Engineering Mathematics for students needing additional support, conducted by senior faculty.', date: 'Nov 2024' },
        { title: 'Chemistry Lab Practical Exhibition', desc: 'Annual chemistry lab exhibition where first-year students showcased experimental results and findings to faculty and senior students.', date: 'Oct 2024' },
        { title: 'Orientation 2024–25', desc: 'Departmental orientation for all new B.E. students covering academic structure, lab rules, and the role of H&S in engineering education.', date: 'Aug 2024' },
      ],
      alumni: [
        { name: 'Pooja Verma (2022)', role: 'Software Engineer', company: 'TCS' },
        { name: 'Srinivas Reddy (2022)', role: 'Systems Analyst', company: 'Infosys' },
        { name: 'Kavya Nair (2023)', role: 'Business Analyst', company: 'Capgemini' },
        { name: 'Ravi Kumar (2023)', role: 'Technical Writer', company: 'Accenture' },
        { name: 'Lavanya Singh (2024)', role: 'Data Analyst', company: 'Wipro' },
        { name: 'Nikhil Rao (2024)', role: 'Operations Executive', company: 'Deloitte' },
      ],
      facilities: [
        { title: 'Physics & Chemistry Labs', desc: 'Fully equipped physics and chemistry laboratories with modern instruments enabling students to conduct experiments aligned with first-year B.E. syllabi prescribed by Osmania University.' },
        { title: 'English Language Lab', desc: 'Dedicated language lab with audio-visual systems and communication software supporting spoken English, pronunciation, listening skills, and professional communication development.' },
        { title: 'DHI Communication Centre', desc: 'Dedicated space for the DHI programme — hosting group discussions, JAM sessions, debates, essay competitions, and dramatics to build leadership and communication excellence.' },
      ],
    },
    {
      slug: 'it',
      name: 'Information Technology',
      shortName: 'IT',
      degree: 'B.E.',
      ugIntake: null,
      established: 2021,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of Information Technology at Gokaraju Lailavathi Engineering College offers a comprehensive B.E. programme designed to produce skilled IT professionals who can design, manage, and secure modern information systems. Established in 2021, the department equips students with expertise across networks, databases, cloud computing, enterprise systems, and software development.',
        "The IT programme emphasises a balance between theoretical depth and hands-on practical skills. Through GLEC's NIPUN, SEEKH, and DHI initiatives, students gain industry-relevant experience and communication proficiency. The department has strong placement linkages with IT service companies and product firms, enabling graduates to transition seamlessly into professional roles immediately after graduation.",
      ],
      announcements: [
        'B.E. IT 2025–26 admissions open — TG EAPCET code: GLWC',
        'Network Security & Ethical Hacking Workshop — March 2025',
        'Cloud Computing Certification Drive (AWS/Azure) — Feb 2025',
        'Industry Expert Talk: "Enterprise IT Architecture" — 18 Feb 2025',
        'NIPUN Industry Bridge Programme — IT Batch 4 open',
      ],
      vision: 'To be a leading centre for Information Technology education, producing competent, innovative, and ethical IT professionals who drive digital transformation and contribute to the growth of technology-driven enterprises.',
      mission: [
        'To provide strong foundational and advanced knowledge in information technology covering networks, databases, software systems, cloud computing, and cybersecurity.',
        'To develop practical, project-based learning competencies through lab work, internships, and live industry engagements aligned with real IT environments.',
        'To cultivate innovation and entrepreneurial thinking through exposure to emerging technologies including IoT, cloud platforms, DevOps, and enterprise software.',
        'To prepare students for global IT careers by building technical depth, professional communication, and ethical standards required by the industry.',
      ],
      achievements: [
        { count: '120+', label: 'Students Trained', desc: 'B.E. Information Technology programme' },
        { count: '80+', label: 'Placements 2025', desc: 'Offers in IT service & product companies' },
        { count: '4+', label: 'Years of Excellence', desc: 'Established since GLEC inception in 2021' },
        { count: '15+', label: 'Expert Faculty', desc: 'Industry & research experienced IT educators' },
      ],
      news: [
        { title: 'Cloud Computing Workshop', desc: 'Hands-on workshop on AWS and Microsoft Azure fundamentals attended by IT students, culminating in a certification preparation session.', date: 'Feb 2025' },
        { title: 'Network Security Seminar', desc: 'Cybersecurity expert delivered a session on ethical hacking, penetration testing, and network vulnerability assessment tools.', date: 'Jan 2025' },
        { title: 'NIPUN IT Batch 4 Launch', desc: 'Fourth batch of NIPUN launched for IT students focusing on full-stack web development, API design, and cloud deployment pipelines.', date: 'Dec 2024' },
        { title: 'Database Design Competition', desc: 'Intra-department competition on relational and NoSQL database design where teams built and presented end-to-end data management solutions.', date: 'Nov 2024' },
        { title: 'Industry Visit: IT Park Hyderabad', desc: 'IT students visited leading IT companies at the Hyderabad IT corridor, gaining insight into enterprise software development environments.', date: 'Oct 2024' },
        { title: 'Orientation 2024–25', desc: 'Welcome orientation for the new B.E. IT batch with faculty introductions, lab tours, and industry alumni interactions.', date: 'Aug 2024' },
      ],
      alumni: [
        { name: 'Harsha Vardhan (2022)', role: 'Software Developer', company: 'TCS' },
        { name: 'Swathi Reddy (2022)', role: 'Network Engineer', company: 'Infosys' },
        { name: 'Manish Kumar (2023)', role: 'Cloud Support Engineer', company: 'Wipro' },
        { name: 'Deepika Nair (2023)', role: 'Database Administrator', company: 'Capgemini' },
        { name: 'Suresh Babu (2024)', role: 'Full Stack Developer', company: 'Accenture' },
        { name: 'Preethi Sharma (2024)', role: 'IT Analyst', company: 'Cognizant' },
      ],
      facilities: [
        { title: 'Networking & Systems Lab', desc: 'Fully equipped lab with routers, switches, firewalls, and network simulation software (Cisco Packet Tracer, GNS3) enabling hands-on network configuration and troubleshooting exercises.' },
        { title: 'Cloud & Enterprise Computing Centre', desc: 'Lab with access to AWS, Azure, and Google Cloud platforms for students to build, deploy, and manage cloud-native applications as part of their coursework and projects.' },
        { title: 'Software Development Studio', desc: 'Collaborative studio with modern development tools, version control systems, CI/CD pipelines, and agile project management platforms supporting team-based software engineering projects.' },
      ],
    },
    {
      slug: 'cyber-security',
      name: 'Cyber Security',
      shortName: 'Cyber Security',
      degree: 'B.E.',
      ugIntake: null,
      established: 2021,
      accreditation: 'AICTE Approved',
      heroBgImage: '/imgi_5_aboutusbanner.jpg',
      about: [
        'The Department of Cyber Security at Gokaraju Lailavathi Engineering College offers a specialised B.E. programme focused on preparing graduates to protect digital systems, networks, and data from evolving cyber threats. Established in 2021, the department addresses the rapidly growing global demand for cybersecurity professionals across government, banking, healthcare, and technology sectors.',
        "The curriculum covers ethical hacking, network security, cryptography, digital forensics, cloud security, and secure software development. Students gain hands-on experience through dedicated security labs, capture-the-flag (CTF) competitions, and industry-mentored projects. Backed by GLEC's NIPUN and SEEKH programmes, students develop both technical and professional competencies essential for careers in cybersecurity consulting, incident response, and security engineering.",
      ],
      announcements: [
        'B.E. Cyber Security 2025–26 admissions open — TG EAPCET code: GLWC',
        'Ethical Hacking & Penetration Testing Workshop — March 2025',
        'CTF (Capture The Flag) Competition — Register by 15 Feb 2025',
        'Guest Lecture: "Zero Trust Architecture in Enterprise" — 20 Feb 2025',
        'SEEKH Batch 3 for Cyber Security students — Enrol Now',
      ],
      vision: 'To be a premier centre of excellence in Cyber Security education, producing skilled, ethical, and innovative security professionals who safeguard digital infrastructures and contribute to a secure and resilient digital society.',
      mission: [
        'To provide rigorous, outcome-based education in cybersecurity covering ethical hacking, cryptography, network defence, digital forensics, and secure systems design.',
        'To develop hands-on technical proficiency through dedicated security labs, CTF competitions, and real-world incident response simulations.',
        'To foster ethical responsibility, legal awareness, and professional standards critical to cybersecurity practice in public and private sectors.',
        'To bridge the talent gap in cybersecurity through industry partnerships, certifications, and structured internship and placement programmes.',
      ],
      achievements: [
        { count: '120+', label: 'Students Trained', desc: 'B.E. Cyber Security programme' },
        { count: '60+', label: 'Placements 2025', desc: 'Offers in security & IT companies' },
        { count: '4+', label: 'Years of Excellence', desc: 'Established since GLEC inception in 2021' },
        { count: '10+', label: 'Expert Faculty', desc: 'Specialists in network security, forensics & cryptography' },
      ],
      news: [
        { title: 'CTF Competition 2025', desc: 'Cyber Security students participated in a national Capture The Flag competition, securing top-10 positions against 200+ teams.', date: 'Feb 2025' },
        { title: 'Penetration Testing Workshop', desc: 'Industry-led two-day workshop on ethical hacking and penetration testing using Kali Linux, Metasploit, and Burp Suite.', date: 'Jan 2025' },
        { title: 'Guest Lecture: Zero Trust Security', desc: 'Senior security architect from a leading IT firm delivered a session on Zero Trust Architecture and its implementation in enterprise environments.', date: 'Feb 2025' },
        { title: 'SEEKH Batch 3 Launch', desc: 'Third SEEKH batch for Cyber Security students kicked off with projects on vulnerability assessment, SIEM tools, and cloud security monitoring.', date: 'Dec 2024' },
        { title: 'Cyber Awareness Week', desc: 'Department organised a week-long cybersecurity awareness programme with quizzes, demos, and workshops open to all GLEC students.', date: 'Oct 2024' },
        { title: 'Orientation 2024–25', desc: 'Welcome orientation for new B.E. Cyber Security students covering lab protocols, programme structure, and career pathways in security.', date: 'Aug 2024' },
      ],
      alumni: [
        { name: 'Arjun Mehta (2022)', role: 'Security Analyst', company: 'Wipro' },
        { name: 'Divya Krishnan (2022)', role: 'Network Security Engineer', company: 'TCS' },
        { name: 'Siddharth Rao (2023)', role: 'Ethical Hacker', company: 'Infosys' },
        { name: 'Pooja Shenoy (2023)', role: 'SOC Analyst', company: 'Capgemini' },
        { name: 'Rohit Verma (2024)', role: 'Cloud Security Engineer', company: 'Accenture' },
        { name: 'Sneha Patil (2024)', role: 'Digital Forensics Analyst', company: 'Deloitte' },
      ],
      facilities: [
        { title: 'Cybersecurity Lab', desc: 'Dedicated lab with isolated network environments for ethical hacking, penetration testing, vulnerability scanning, and malware analysis using industry-standard tools including Kali Linux, Wireshark, and Metasploit.' },
        { title: 'Digital Forensics Centre', desc: 'Equipped forensics workstations with tools for disk imaging, memory analysis, network forensics, and evidence recovery — supporting coursework and research in cyber crime investigation.' },
        { title: 'Security Operations Simulation', desc: 'Simulated SOC environment with SIEM platforms, intrusion detection systems, and threat intelligence feeds enabling students to practise real-time incident detection, analysis, and response.' },
      ],
    },
  ],

  // ── Admissions CTA ────────────────────────────────────────────────────────
  ctaHeading: 'Admissions Open for 2025–26',
  ctaDesc: 'Take the first step towards a bright future. Join GLEC and shape your engineering career with world-class education, strong placement support, and a legacy of excellence.',
  ctaCTALabel: 'Apply Now',
  ctaCTAHref: '/admissions',
  ctaSecondaryLabel: 'Download Brochure',
};

export default college;
