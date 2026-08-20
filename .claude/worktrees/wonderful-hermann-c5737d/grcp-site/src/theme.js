export function withAlpha(hex, opacity) {
  return hex + Math.round(opacity * 255).toString(16).padStart(2, '0').toUpperCase();
}

const college = {
  id: 'grcp',
  shortName: 'GRCP',
  fullName: 'Gokaraju Rangaraju College of Pharmacy',
  tagline: 'Advancing pharmaceutical sciences for a healthier tomorrow.',
  email: 'info@grcp.ac.in',
  phone: '7095271271',
  admissionsPhone: '7095271271',
  admissionsLabel: 'TG PGECET counselling code: GRCP1',
  address: 'Survey No. 288, Nizampet Bachupally Road, Bachupally, Kukatpally, Hyderabad – 500090',
  logo: '/imgi_1_GRCP_Logo.png',
  accreditationLogo: null,
  smallLogo: '/small-logo.png',
  primaryColor: '#5B1127',
  accentColor: '#E6A31E',
  announcements: [
    { text: 'Deemed-to-be University – LOI Received', badge: 'NEW', isLOI: true },
    { text: 'Admissions Open for B.Pharm & M.Pharm 2025–26', href: '#', badge: 'NEW' },
    { text: 'B.Pharmacy NBA Accredited 2025–2028', href: '#', badge: 'NEW' },
  ],
  navLinks: [
    { name: 'Home', active: true },
    {
      name: 'About',
      dropdown: ['About GRCP', 'Vision & Mission', 'Infrastructure', 'PEO', 'POs'],
    },
    {
      name: 'Administration',
      dropdown: ['Chairman', 'Vice President', 'Principal', 'Registrar', 'Governing Body', 'IDMC', 'Organizational Chart', 'Anti-Ragging / Discipline', 'Anti-Sexual Harassment / ICC', 'Grievance Redressal Committee', 'IQAC'],
    },
    {
      name: 'Admissions',
      dropdown: ['Admission Procedure', 'Course Fees', 'EAMCET Last Rank', 'PGECET Last Rank'],
    },
    {
      name: 'Programmes',
      dropdown: ['B.Pharmacy', 'M.Pharmacy'],
    },
    {
      name: 'Academics',
      dropdown: ['Syllabus (UG/PG)', 'Academic Calendar', 'Time Tables', 'Library', 'Faculty List', 'Non-Teaching Staff'],
    },
    {
      name: 'Research',
      dropdown: ['Research @GRCP', 'Ph.D Guideships', 'Publications', 'Patents', 'Sponsored Projects/Consultancy'],
    },
    {
      name: 'Examination',
      dropdown: ['Examination Branch @ GRCP', 'Sessional Time Table', 'OU Time Tables', 'OU Notifications', 'Results', 'Question Papers'],
    },
    {
      name: 'Placements',
      dropdown: ['Placement Cell @GRCP', 'Placement Status'],
    },
    {
      name: 'Alumni',
      dropdown: ['Alumni Registration', 'Executive Members', 'Alumni Enrollment', 'List of Alumni', 'Distinguished Alumni', 'Alumni Contribution'],
    },
  ],
  quickLinks: ['GRCP: Approvals and Recognitions', 'Rules and Regulations', 'Infrastructure', 'Teaching Learning Methods', 'Student Support and Progression', 'Skill Series'],
  resources: ["Anti-Ragging / Discipline", "Anti-Sexual Harassment / ICC", "Grievance Redressal Committee", "Institution's Innovation Council (IIC)", "IQAC", "Drug Information Centre"],

  heroHeading: 'Shaping Pharmaceutical Leaders for a Healthier Tomorrow',
  heroSubtext: 'Gokaraju Rangaraju College of Pharmacy creates an environment of opportunity, producing highly qualified human resources who are academically superior and ethically strong. NBA Accredited, PCI Approved, and affiliated with Osmania University.',
  heroCTALabel: 'Admissions Open 2025',
  heroCTAHref: '#',
  heroBgImage: '/imgi_5_aboutusbanner.jpg',

  statsBarItems: ['NBA Accredited 2025–28', 'PCI Approved', 'Osmania University Affiliated', 'B.Pharm & M.Pharm Programs'],

  campusIntroLabel: 'Campus Experience',
  campusIntroHeading: 'Be a Part of the GRCP Experience',
  campusIntroDesc: "Experience a dedicated pharmaceutical campus just 4 km from JNTU, Kukatpally — far from the city's hustle yet easily accessible. Modern laboratories, lecture halls, computer lab, auditorium, and library await you.",
  campusVideoSrc: null,
  campusIntroImage: '/imgi_4_Gokaraju-Rangaraju.jpg',

  highlightCards: [
    { title: 'NBA Accredited', desc: 'B.Pharmacy program NBA accredited for 2025–2028, ensuring globally recognized quality.' },
    { title: 'PCI Approved', desc: 'All programs approved by the Pharmacy Council of India.' },
    { title: 'Expert Faculty', desc: 'Highly qualified faculty producing academically superior and ethically strong graduates.' },
  ],

  aboutHeading: 'Welcome to Gokaraju Rangaraju College of Pharmacy',
  aboutP1: 'GRCP creates an environment that opens up new worlds of opportunity. From the day of its inception, the college is producing highly qualified human resources who are academically superior and ethically strong. GRCP is just 4 km from JNTU, Kukatpally, and is far from hustle, bustle of the city life and yet close enough for easy approach.',
  aboutP2: 'The college is approved by PCI and is affiliated to the Osmania University. It offers B. Pharmacy & M. Pharmacy courses in Pharmaceutics, Pharmaceutical Analysis and Pharmacology. The college has highly qualified faculty, well equipped laboratories, lecture halls, computer lab, auditorium, library and other supporting facilities.',
  aboutFeatures: [
    { title: 'NBA Accredited', sub: 'B.Pharmacy 2025–2028' },
    { title: 'PCI Approved', sub: 'Pharmacy Council of India' },
    { title: 'Expert Faculty', sub: 'Highly qualified professors' },
    { title: 'Infrastructure', sub: 'Modern labs & facilities' },
  ],
  aboutYears: '12+',
  aboutYearsLabel: 'Years of Pharmaceutical Excellence',
  aboutImage: '/Why choose us.png',

  whyChooseLabel: 'Why Choose GRCP',
  whyChooseHeading: 'Pharmaceutical Excellence That Shapes Your Career',
  whyChooseCards: [
    { title: 'NBA Accreditation', desc: 'B.Pharmacy NBA accredited for 2025–2028, meeting globally recognized quality benchmarks.' },
    { title: 'PCI Approved', desc: 'All programs approved by the Pharmacy Council of India for highest pharmaceutical education standards.' },
    { title: 'Modern Laboratories', desc: 'Well-equipped labs for Pharmaceutics, Pharmaceutical Analysis, and Pharmacology research.' },
    { title: 'Qualified Faculty', desc: 'Highly qualified faculty dedicated to academic excellence, research, and student mentoring.' },
    { title: 'Research Culture', desc: 'Strong emphasis on pharmaceutical research, professional societies, and faculty achievements.' },
    { title: 'Gokaraju Legacy', desc: "Backed by the Gokaraju Group — sharing GRIET's world-class infrastructure and academic network." },
  ],

  academicProgramsLabel: 'Academic Programs',
  academicProgramsHeading: 'Programs Designed for Healthcare Leaders',
  academicProgramsDesc: 'Explore pharmacy programs built to prepare students for a rewarding career in pharmaceutical sciences and healthcare.',
  academicPrograms: [
    { count: 'B.Pharm', title: 'Bachelor of Pharmacy', desc: 'A comprehensive 4-year undergraduate program in pharmaceutical sciences, approved by PCI and NBA accredited.' },
    { count: 'M.Pharm', title: 'Master of Pharmacy', desc: 'Postgraduate specialization in Pharmaceutics, Pharmaceutical Analysis, and Pharmacology.' },
  ],

  careerLabel: 'Career Outcomes',
  careerHeading: 'Pharmacy Careers That Make a Difference',
  careerDesc: 'GRCP graduates are placed in leading pharmaceutical companies, hospitals, research institutions, and regulatory bodies. Our rigorous academic training and industry connections ensure career-ready professionals enter the healthcare sector.',
  careerHighestPackage: '6+ LPA',
  careerOffersCount: '80%+',
  careerRecruiters: ['Sun Pharma', 'Cipla', "Dr. Reddy's", 'Aurobindo', 'Apollo'],
  careerImage: '/Career Outcomes.png',

  researchLabel: 'Research & Recognition',
  researchHeading: 'Excellence in Pharmaceutical Sciences at GRCP',
  researchStats: [
    { count: 'NBA', label: 'Accreditation 2025–28', desc: 'B.Pharmacy recognized by the National Board of Accreditation.' },
    { count: 'PCI', label: 'Approved Programs', desc: 'All pharmacy programs approved by the Pharmacy Council of India.' },
    { count: '5', label: 'Departments', desc: 'Pharmaceutics, Chemistry, Pharmacognosy, Pharmacology & Pharmacy Practice.' },
    { count: '12+', label: 'Years of Excellence', desc: 'Dedicated to pharmaceutical education and research since inception.' },
  ],

  campusLifeLabel: 'Student Experience',
  campusLifeHeading: 'Vibrant Campus Life',
  campusLifeCards: [
    { title: 'Cultural Events & Fests', desc: 'Annual flagship events bringing pharmacy students together for learning and celebration.', img: '/Cultural event & Fests.png', large: true },
    { title: 'Sports Facilities', desc: 'Indoor and outdoor sports complexes for student wellness.', img: '/Sports fecilities.png' },
    { title: 'Research Clubs', desc: 'Student-led pharmaceutical research and professional society chapters.', img: '/Innovation clubs.png' },
    { title: 'Hostel Life', desc: 'Comfortable, secure, and vibrant residential halls on campus.', img: '/Hostel life.png' },
    { title: 'Central Library', desc: 'A hub of pharmaceutical knowledge with thousands of curated resources.', img: '/Central library.png' },
  ],

  ctaHeading: 'Admissions Open for 2025–26',
  ctaDesc: 'Begin your journey in pharmaceutical sciences. Join GRCP and build a rewarding career in healthcare and drug development.',
  ctaCTALabel: 'Apply Now',
  ctaCTAHref: '#',
  ctaSecondaryLabel: 'Download Brochure',
};

export default college;
