import { Link } from 'react-router-dom';

const TwitterIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="#474747" strokeWidth="1.5">
    <path d="M17 3l-6.5 6L4 3H2l7.5 6.5L2 17h2l5.5-4.5 2 2L18 17h2L13 10 20 3h-3z" strokeLinejoin="round" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="#474747" strokeWidth="1.5">
    <rect x="2" y="2" width="16" height="16" rx="2" />
    <path d="M6 9v5M6 6.5v.01M10 14v-3a2 2 0 014 0v3M10 9v5" strokeLinecap="round" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="#474747" strokeWidth="1.5">
    <rect x="2" y="2" width="16" height="16" rx="4" />
    <circle cx="10" cy="10" r="3" />
    <circle cx="14.5" cy="5.5" r="0.5" fill="#474747" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="#474747" strokeWidth="1.5">
    <path d="M17 2H3a1 1 0 00-1 1v14a1 1 0 001 1h7v-6H8V9h2V7a3 3 0 013-3h2v3h-2a1 1 0 00-1 1v2h3l-.5 3H12v6h5a1 1 0 001-1V3a1 1 0 00-1-1z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="#474747" strokeWidth="1.5">
    <rect x="1" y="4" width="18" height="13" rx="3" />
    <path d="M8 8l5 3-5 3V8z" fill="#474747" stroke="none" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" stroke="#474747" strokeWidth="1.5">
    <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.5-2-4.5-4.5-4.5z" />
    <circle cx="9" cy="6" r="1.5" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" stroke="#474747" strokeWidth="1.5">
    <path d="M2 2.5a1 1 0 011-1h1.8a1 1 0 01.98.84l.67 4a1 1 0 01-.54 1.06l-1.4.7a9.9 9.9 0 005.4 5.4l.7-1.4a1 1 0 011.06-.54l4 .67a1 1 0 01.84.98V15.5a1 1 0 01-1 1H15C8.1 16.5 1.5 9.9 1.5 3V2.5z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] flex-shrink-0" stroke="#474747" strokeWidth="1.5">
    <rect x="1.5" y="4.5" width="15" height="10.5" rx="1.5" />
    <path d="M1.5 6l7.5 5 7.5-5" strokeLinecap="round" />
  </svg>
);

const socialIcons = {
  instagram: { Icon: InstagramIcon, label: 'Instagram' },
  facebook: { Icon: FacebookIcon, label: 'Facebook' },
  linkedin: { Icon: LinkedInIcon, label: 'LinkedIn' },
  youtube: { Icon: YouTubeIcon, label: 'YouTube' },
};

export default function Footer({ college }) {
  return (
    <footer className="w-full bg-white pt-12 pb-8 px-6 md:pt-[60px] md:px-[60px] lg:pt-[80px] lg:pb-10 lg:px-[120px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-4 gap-8 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/">
              <img src={college.logo} alt={`${college.shortName} Logo`} className="w-48 object-contain" />
            </Link>
            <p className="font-montserrat font-normal text-[14px] leading-[23px] text-[#474747]">
              {college.fullName}. {college.tagline}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {college.socialLinks &&
                Object.entries(college.socialLinks).map(([key, url]) => {
                  const entry = socialIcons[key];
                  if (!entry) return null;
                  const { Icon, label } = entry;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="transition-opacity hover:opacity-60"
                    >
                      <Icon />
                    </a>
                  );
                })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-poppins font-bold text-[20px] leading-7" style={{ color: college.primaryColor }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {college.quickLinks.map((item) => {
                const label = typeof item === 'string' ? item : item.label;
                const href = typeof item === 'string' ? '#' : item.href;
                return (
                  <li key={label}>
                    <Link
                      to={href}
                      className="font-montserrat font-normal text-[14px] leading-5 text-[#474747] transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.color = college.primaryColor)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#474747')}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-6">
            <h4 className="font-poppins font-bold text-[20px] leading-7" style={{ color: college.primaryColor }}>
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {college.resources.map((item) => {
                const label = typeof item === 'string' ? item : item.label;
                const href = typeof item === 'string' ? '#' : item.href;
                return (
                  <li key={label}>
                    <Link
                      to={href}
                      className="font-montserrat font-normal text-[14px] leading-5 text-[#474747] transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.color = college.primaryColor)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#474747')}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-poppins font-bold text-[20px] leading-7" style={{ color: college.primaryColor }}>
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPinIcon />
                <span className="font-montserrat font-normal text-[14px] leading-5 text-[#474747]">
                  {college.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a
                  href={`tel:${college.phone}`}
                  className="font-montserrat font-normal text-[14px] leading-5 text-[#474747] hover:underline"
                >
                  {college.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon />
                <a
                  href={`mailto:${college.email}`}
                  className="font-montserrat font-normal text-[14px] leading-5 text-[#474747] hover:underline"
                >
                  {college.email}
                </a>
              </li>
            </ul>
            {college.counsellingCode && (
              <div
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg"
                style={{ backgroundColor: `${college.primaryColor}0D`, border: `1px solid ${college.primaryColor}1A` }}
              >
                <span className="font-montserrat font-semibold text-[12px]" style={{ color: college.primaryColor }}>
                  {college.counsellingExam} Code:
                </span>
                <span className="font-poppins font-bold text-[14px]" style={{ color: college.accentColor }}>
                  {college.counsellingCode}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E7EB] pt-8 flex justify-between items-center flex-wrap gap-4">
          <span className="font-montserrat font-normal text-[14px] leading-5 text-[#6A7282]">
            © 2025 {college.fullName}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="font-montserrat font-normal text-[14px] leading-5 text-[#6A7282] hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="font-montserrat font-normal text-[14px] leading-5 text-[#6A7282] hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
