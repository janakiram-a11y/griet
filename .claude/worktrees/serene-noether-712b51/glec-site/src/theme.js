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
  logo: '/imgi_1_GLEC_Logo.png',
  accreditationLogo: null,
  smallLogo: '/small-logo.png',
  primaryColor: '#5B1127',
  accentColor: '#E6A31E',
  announcements: [
    { text: 'Deemed-to-be University – LOI Received', badge: 'NEW', isLOI: true },
    { text: 'Admissions Open for 2025–26', href: '#', badge: 'NEW' },
    { text: 'B.E. 2025-2026 admitted students regular classwork commences from 28th August 2025', href: '#', badge: 'NEW' },
  ],
  navLinks: [
    { name: 'Home', active: true },
    {
      name: 'About',
      dropdown: ['About College', 'Vision & Mission', 'Infrastructure'],
    },
    {
      name: 'Administration',
      dropdown: ['Management', 'Sponsoring Body & MOAG', 'Governing Body', 'Registrar', 'Principal', 'ID Plan', 'Anti Ragging Committee', 'Anti Sexual Harassment Committee', 'Grievance Redressal Policy', 'SEGD Cell', 'Finance Commitee', 'Equal Opportunity Cell', 'ICC'],
    },
    {
      name: 'Admissions',
      dropdown: ['Courses Offered', 'Admission Procedure', 'Course Fees', 'EAPCET Ranks', 'Fee Refund Policy'],
    },
    {
      name: 'Academics',
      dropdown: ['Academic Leadership', 'Academic Collaborations', 'IQAC', 'Library', 'Rules & Regulations', 'Academic Calendar'],
    },
    {
      name: 'Departments',
      dropdown: ['B.E. (CSE)', 'B.E. (CSE AI & ML)', 'B.E. (H&S)', 'B.E. (IT)', 'B.E. (CS)'],
    },
    { name: 'Research' },
    { name: 'Placements' },
    {
      name: 'Examinations',
      dropdown: ['Examination Committee', 'Notifications', 'Results', 'Exam Branch Online Services'],
    },
    { name: 'Contact Us' },
  ],
  quickLinks: ['About College', 'Chairman', 'Vice President', 'Registrar', 'Principal', 'Placements', 'Infrastructure', 'SKILL Series', 'Contact us'],
  resources: ['Health Facilities', 'Sports Facilities', 'Placements', 'Physically Challenged', 'Ombudsperson', 'RTI Act'],

  heroHeading: "Shaping Tomorrow's Engineers with Excellence & Innovation",
  heroSubtext: 'Gokaraju Lailavathi Engineering College, established in 2021, is committed to providing world-class technical education. AICTE approved and affiliated with Osmania University, GLEC nurtures students into competent professionals under the Gokaraju Group legacy.',
  heroCTALabel: 'Admissions Open 2025',
  heroCTAHref: '#',
  heroBgImage: '/imgi_5_aboutusbanner.jpg',

  statsBarItems: ['AICTE Approved', 'Osmania University Affiliated', '253 Placement Offers', '6+ LPA Highest Package'],

  campusIntroLabel: 'Campus Experience',
  campusIntroHeading: 'Be a Part of the GLEC Experience',
  campusIntroDesc: 'Step into a future-focused campus where innovation meets opportunity. At GLEC, students learn beyond classrooms through hands-on labs, collaborative projects, industry exposure, and a thriving student community dedicated to excellence.',
  campusVideoSrc: null,
  campusIntroImage: '/imgi_4_Gokaraju-Rangaraju.jpg',

  highlightCards: [
    { title: 'AICTE Approved', desc: 'Recognized by AICTE with programs meeting national quality standards.' },
    { title: 'Placements', desc: '253 placement offers with top recruiters for the 2025 batch.' },
    { title: 'Community', desc: 'A vibrant student community with innovative clubs and student chapters.' },
  ],

  aboutHeading: 'Welcome to Gokaraju Lailavathi Engineering College',
  aboutP1: 'Gokaraju Lailavathi Engineering College (GLEC) [previously Gokaraju Lailavathi Womens Engineering College (GLWEC)] was established in 2021 by Dr. G. Gangaraju as a self-financed institution under the Gokaraju Rangaraju Educational Society, dedicated to promoting quality education. Approved by AICTE, New Delhi, and affiliated with Osmania University, Hyderabad.',
  aboutP2: 'As a sister concern of GRIET, GLEC adopts its facilities and teaching-learning processes to ensure excellence in education. The college benefits from the guidance of an experienced management committee comprising experts from various industries and academia.',
  aboutFeatures: [
    { title: 'AICTE Approved', sub: 'Recognized programs' },
    { title: 'OU Affiliated', sub: 'Osmania University' },
    { title: 'Expert Faculty', sub: 'Experienced professors' },
    { title: 'Infrastructure', sub: 'Modern labs & campus' },
  ],
  aboutYears: '4+',
  aboutYearsLabel: 'Years of Academic Excellence',
  aboutImage: '/Why choose us.png',

  whyChooseLabel: 'Why Choose GLEC',
  whyChooseHeading: 'Academic Excellence That Shapes Your Success',
  whyChooseCards: [
    { title: 'Quality Education', desc: 'Programs designed with strong educational benchmarks and AICTE-approved quality standards.' },
    { title: 'Career Advantage', desc: '253 placement offers across top companies for the 2025 batch and growing.' },
    { title: 'Innovative Teaching', desc: 'Recognized for innovative teaching practices aligned with modern industry needs.' },
    { title: 'Skill Development', desc: 'Initiatives like NIPUN, DHI, and SEEKH for holistic student development and growth.' },
    { title: 'Innovation Culture', desc: 'Strong support for research, innovation, and impactful student-driven projects.' },
    { title: 'GRIET Legacy', desc: "Backed by the Gokaraju Group — sharing GRIET's world-class infrastructure and faculty network." },
  ],

  academicProgramsLabel: 'Academic Programs',
  academicProgramsHeading: 'Programs Designed for Future Engineers',
  academicProgramsDesc: 'Explore career-focused programs built to prepare students for innovation, leadership, and industry success.',
  academicPrograms: [
    { count: 'B.E.', title: 'Computer Science & Engineering', desc: 'Industry-focused engineering degree with strong foundations in software and systems.' },
    { count: 'B.E.', title: 'CSE (AI & ML)', desc: 'Specialization in Artificial Intelligence and Machine Learning for future-ready careers.' },
  ],

  careerLabel: 'Career Outcomes',
  careerHeading: 'Where Talent Meets Opportunity',
  careerDesc: 'GLEC graduates are hired by top recruiters across technology and core engineering domains. Strong placement training, mentoring through NIPUN and SEEKH initiatives, and industry collaborations help students launch successful careers.',
  careerHighestPackage: '6+ LPA',
  careerOffersCount: '253+',
  careerRecruiters: ['Capgemini', 'TCS', 'Deloitte', 'TechMahindra', 'Infosys'],
  careerImage: '/Career Outcomes.png',

  researchLabel: 'Our Initiatives',
  researchHeading: 'Innovation & Skill Development at GLEC',
  researchStats: [
    { count: 'NIPUN', label: 'Innovation Program', desc: 'Nurturing innovative thinking and problem-solving skills in our students.' },
    { count: 'DHI', label: 'Collaborative Learning', desc: 'Exploring minds through collaborative discussions and creative ideation.' },
    { count: 'SEEKH', label: 'Skill Enhancement', desc: 'Availing necessary support to reduce the industry-academia gap.' },
    { count: '253+', label: 'Placement Offers', desc: 'Total placement offers for the 2025 batch across top companies.' },
  ],

  campusLifeLabel: 'Student Experience',
  campusLifeHeading: 'Vibrant Campus Life',
  campusLifeCards: [
    { title: 'Cultural Events & Fests', desc: 'Annual flagship events bringing students together from across the campus.', img: '/Cultural event & Fests.png', large: true },
    { title: 'Sports Facilities', desc: 'Indoor and outdoor sports complexes for every student.', img: '/Sports fecilities.png' },
    { title: 'Innovation Clubs', desc: 'Student-run tech and non-tech chapters fostering creativity.', img: '/Innovation clubs.png' },
    { title: 'Hostel Life', desc: 'Comfortable, secure, and vibrant residential halls.', img: '/Hostel life.png' },
    { title: 'Central Library', desc: 'A hub of knowledge with thousands of curated resources.', img: '/Central library.png' },
  ],

  ctaHeading: 'Admissions Open for 2025–26',
  ctaDesc: 'Take the first step towards a bright future. Join GLEC and shape your engineering career with world-class education.',
  ctaCTALabel: 'Apply Now',
  ctaCTAHref: '#',
  ctaSecondaryLabel: 'Download Brochure',
};

export default college;
