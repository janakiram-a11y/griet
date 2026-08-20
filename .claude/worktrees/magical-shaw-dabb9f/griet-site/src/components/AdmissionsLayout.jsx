import { Link, useLocation } from 'react-router-dom';
import college from '../theme';
import CollegeLayout from '../CollegeLayout';

const SIDEBAR_LINKS = [
  { label: 'Programmes', href: '/admissions/programmes' },
  { label: 'TGEAPCET Admission Procedure', href: '/admissions/admission-procedure' },
  { label: 'Fee Structure', href: '/admissions/fee-structure' },
  { label: 'Fees Payment Procedure', href: '/admissions/fee-structure' },
  { label: 'EAPCET Lastrank', href: '/admissions/eapcet-last-rank' },
  { label: 'ECET Lastrank', href: '/admissions/ecet-last-rank' },
  { label: 'TGECET Admission Procedure', href: '/admissions/ecet-last-rank' },
  { label: 'FEE Refund Policy', href: '#' },
];

function SidebarLink({ label, href }) {
  const location = useLocation();
  const isActive = href !== '#' && location.pathname === href;

  const baseStyle = {
    borderBottom: `1px solid #e5e7eb`,
    color: isActive ? '#ffffff' : college.primaryColor,
    backgroundColor: isActive ? college.primaryColor : 'transparent',
  };

  const content = (
    <>
      <svg className="w-4 h-4 flex-shrink-0 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span className="font-montserrat text-[13px] font-medium">{label}</span>
    </>
  );

  const className = 'flex items-center px-3 py-2.5 transition-colors w-full text-left';

  const handleEnter = (e) => {
    if (!isActive) {
      e.currentTarget.style.backgroundColor = college.primaryColor;
      e.currentTarget.style.color = '#ffffff';
    }
  };
  const handleLeave = (e) => {
    if (!isActive) {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = college.primaryColor;
    }
  };

  if (href === '#') {
    return (
      <a href="#" className={className} style={baseStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={className} style={baseStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {content}
    </Link>
  );
}

export function AdmissionsSidebar() {
  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div style={{ border: '1px solid #e5e7eb' }}>
        {SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.label + link.href} {...link} />
        ))}
      </div>
    </div>
  );
}

export function AdmissionsBanner({ title }) {
  return (
    <div
      className="w-full flex items-center justify-center py-8"
      style={{ backgroundColor: '#1B3A4B' }}
    >
      <h1 className="text-white font-poppins font-bold text-2xl md:text-3xl tracking-widest uppercase text-center px-4">
        {title}
      </h1>
    </div>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2
      className="font-poppins font-bold text-xl md:text-2xl mb-3"
      style={{ color: college.primaryColor }}
    >
      {children}
    </h2>
  );
}

export default function AdmissionsLayout({ title, children }) {
  return (
    <CollegeLayout college={college}>
      <AdmissionsBanner title={title} />
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">{children}</div>
          <AdmissionsSidebar />
        </div>
      </div>
    </CollegeLayout>
  );
}
