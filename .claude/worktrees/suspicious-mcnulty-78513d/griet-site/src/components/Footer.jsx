import { Link } from 'react-router-dom';

const ICON_COLOR = '#BFBFBF';

const TwitterIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={ICON_COLOR} strokeWidth="1.5">
    <path d="M17 3l-6.5 6L4 3H2l7.5 6.5L2 17h2l5.5-4.5 2 2L18 17h2L13 10 20 3h-3z" strokeLinejoin="round" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={ICON_COLOR} strokeWidth="1.5">
    <rect x="2" y="2" width="16" height="16" rx="2" />
    <path d="M6 9v5M6 6.5v.01M10 14v-3a2 2 0 014 0v3M10 9v5" strokeLinecap="round" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={ICON_COLOR} strokeWidth="1.5">
    <rect x="2" y="2" width="16" height="16" rx="4" />
    <circle cx="10" cy="10" r="3" />
    <circle cx="14.5" cy="5.5" r="0.5" fill={ICON_COLOR} />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke={ICON_COLOR} strokeWidth="1.5">
    <path d="M17 2H3a1 1 0 00-1 1v14a1 1 0 001 1h7v-6H8V9h2V7a3 3 0 013-3h2v3h-2a1 1 0 00-1 1v2h3l-.5 3H12v6h5a1 1 0 001-1V3a1 1 0 00-1-1z" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" stroke={ICON_COLOR} strokeWidth="1.5">
    <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.5-2-4.5-4.5-4.5z" />
    <circle cx="9" cy="6" r="1.5" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" stroke={ICON_COLOR} strokeWidth="1.5">
    <path d="M2 2.5a1 1 0 011-1h1.8a1 1 0 01.98.84l.67 4a1 1 0 01-.54 1.06l-1.4.7a9.9 9.9 0 005.4 5.4l.7-1.4a1 1 0 011.06-.54l4 .67a1 1 0 01.84.98V15.5a1 1 0 01-1 1H15C8.1 16.5 1.5 9.9 1.5 3V2.5z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" stroke={ICON_COLOR} strokeWidth="1.5">
    <rect x="1.5" y="4.5" width="15" height="10.5" rx="1.5" />
    <path d="M1.5 6l7.5 5 7.5-5" strokeLinecap="round" />
  </svg>
);

export default function Footer({ college }) {
  return (
    <footer className="w-full bg-[#222222] px-4 pt-10 pb-8 md:px-[60px] md:pt-[60px] lg:px-[120px] lg:pt-[80px]">
        <div className="grid grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <img src={college.logo} alt={`${college.shortName} Logo`} className="w-48 h-22 object-contain" />
            </div>
            <p className="font-montserrat font-normal text-[14px] leading-[23px] text-[#BFBFBF]">
              {college.fullName}. {college.tagline}
            </p>
            <div className="flex items-center gap-4">
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-poppins font-bold text-[20px] leading-7 text-[#F3DAB2]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {college.quickLinks.map((l) => {
                const label = l.label || l;
                const href = l.href || '#';
                const isExternal = href.startsWith('http');
                return (
                  <li key={label}>
                    {isExternal ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-montserrat font-normal text-[14px] leading-5 text-[#BFBFBF] transition-colors"
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C32033')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#BFBFBF')}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={href}
                        className="font-montserrat font-normal text-[14px] leading-5 text-[#BFBFBF] transition-colors"
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C32033')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#BFBFBF')}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-6">
            <h4 className="font-poppins font-bold text-[20px] leading-7 text-[#F3DAB2]">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {college.resources.map((l) => {
                const label = l.label || l;
                const href = l.href || '#';
                const isExternal = href.startsWith('http');
                return (
                  <li key={label}>
                    {isExternal ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-montserrat font-normal text-[14px] leading-5 text-[#BFBFBF] transition-colors"
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C32033')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#BFBFBF')}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={href}
                        className="font-montserrat font-normal text-[14px] leading-5 text-[#BFBFBF] transition-colors"
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C32033')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#BFBFBF')}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-poppins font-bold text-[20px] leading-7 text-[#F3DAB2]">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPinIcon />
                <span className="font-montserrat font-normal text-[14px] leading-5 text-[#BFBFBF]">
                  {college.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <span className="font-montserrat font-normal text-[14px] leading-5 text-[#BFBFBF]">
                  {college.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon />
                <a
                  href={`mailto:${college.email}`}
                  className="font-montserrat font-normal text-[14px] leading-5 text-[#BFBFBF] transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C32033')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#BFBFBF')}
                >
                  {college.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#333333] pt-8 flex justify-between items-center">
          <span className="font-montserrat font-normal text-[14px] leading-5 text-[#6b7280]">
            © 2024 {college.fullName}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="font-montserrat font-normal text-[14px] leading-5 text-[#6b7280] hover:text-[#C32033] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-montserrat font-normal text-[14px] leading-5 text-[#6b7280] hover:text-[#C32033] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
    </footer>
  );
}
