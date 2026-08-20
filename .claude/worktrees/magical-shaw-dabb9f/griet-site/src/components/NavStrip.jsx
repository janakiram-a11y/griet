import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { withAlpha } from '../theme';

const ROUTE_MAP = {
  'Programmes': '/admissions/programmes',
  'Admission Procedure': '/admissions/admission-procedure',
  'Fee Structure': '/admissions/fee-structure',
  'EAPCET Last Rank': '/admissions/eapcet-last-rank',
  'ECET Last Rank': '/admissions/ecet-last-rank',
  'Scholarships': '/admissions/scholarships',
};

function DropdownItem({ label, college }) {
  const href = ROUTE_MAP[label];

  const baseStyle = {
    color: college.primaryColor,
    borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
  };

  const className =
    'block px-4 py-2 text-[13px] font-montserrat font-medium transition-colors whitespace-nowrap';

  const handleEnter = (e) => (e.currentTarget.style.color = college.accentColor);
  const handleLeave = (e) => (e.currentTarget.style.color = college.primaryColor);

  if (href) {
    return (
      <Link
        to={href}
        className={className}
        style={baseStyle}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href="#"
      className={className}
      style={baseStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {label}
    </a>
  );
}

function NavItem({ name, active, dropdown, college, href }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const isActive =
    active ||
    (href && location.pathname === href) ||
    (dropdown &&
      Object.entries(ROUTE_MAP).some(
        ([label, route]) =>
          dropdown.includes(label) && location.pathname === route
      ));

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const activeStyle = { color: college.accentColor };
  const inactiveStyle = { color: '#ffffff' };

  if (!dropdown) {
    const inner = (
      <span
        className="font-montserrat font-semibold text-[14px] leading-[17px] transition-colors"
        style={isActive ? activeStyle : inactiveStyle}
        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = college.accentColor; }}
        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#ffffff'; }}
      >
        {name}
      </span>
    );

    if (href) {
      return <Link to={href} className="leading-none">{inner}</Link>;
    }
    return <a href="#" className="leading-none">{inner}</a>;
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 font-montserrat font-semibold text-[14px] leading-[17px] transition-colors py-2"
        style={open || isActive ? activeStyle : inactiveStyle}
        onMouseEnter={(e) => { if (!open && !isActive) e.currentTarget.style.color = college.accentColor; }}
        onMouseLeave={(e) => { if (!open && !isActive) e.currentTarget.style.color = '#ffffff'; }}
      >
        {name}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`absolute top-full left-0 pt-2 z-50 min-w-[240px] transition-all duration-200 ease-out ${open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-1 invisible pointer-events-none'
          }`}
      >
        <div
          className="bg-white shadow-xl py-2"
          style={{
            borderTop: `3px solid ${college.accentColor}`,
            borderLeft: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
            borderRight: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
            borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
          }}
        >
          {dropdown.map((label) => (
            <DropdownItem key={label} label={label} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NavStrip({ college }) {
  return (
    <div
      className="w-full py-3 sticky top-[113px] z-40"
      style={{
        backgroundColor: college.primaryColor,
        borderBottom: `1px solid ${withAlpha('#000000', 0.1)}`,
      }}
    >
      <div className="flex justify-center items-center gap-[38px] overflow-visible">
        {college.navLinks.map((link) => (
          <NavItem key={link.name} {...link} college={college} />
        ))}
      </div>
    </div>
  );
}
