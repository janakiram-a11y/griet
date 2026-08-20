import { useState, useRef, useEffect } from 'react';
import { withAlpha } from '../theme';

function DropdownItem({ label, college }) {
  return (
    <a
      href="#"
      className="block px-4 py-2 text-[13px] font-montserrat font-medium transition-colors whitespace-nowrap"
      style={{
        color: college.primaryColor,
        borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
      onMouseLeave={(e) => (e.currentTarget.style.color = college.primaryColor)}
    >
      {label}
    </a>
  );
}

function NavItem({ name, active, dropdown, college }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

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
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const activeStyle = { color: college.accentColor };
  const inactiveStyle = { color: '#ffffff' };

  if (!dropdown) {
    return (
      <a
        href="#"
        className="font-montserrat font-semibold text-[14px] leading-[17px] transition-colors"
        style={active ? activeStyle : inactiveStyle}
        onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = college.accentColor; }}
        onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = '#ffffff'; }}
      >
        {name}
      </a>
    );
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
        style={open ? activeStyle : inactiveStyle}
        onMouseEnter={(e) => { if (!open) e.currentTarget.style.color = college.accentColor; }}
        onMouseLeave={(e) => { if (!open) e.currentTarget.style.color = '#ffffff'; }}
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
          style={{ borderTop: `3px solid ${college.accentColor}`, borderLeft: `1px solid ${withAlpha(college.primaryColor, 0.1)}`, borderRight: `1px solid ${withAlpha(college.primaryColor, 0.1)}`, borderBottom: `1px solid ${withAlpha(college.primaryColor, 0.1)}` }}
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
