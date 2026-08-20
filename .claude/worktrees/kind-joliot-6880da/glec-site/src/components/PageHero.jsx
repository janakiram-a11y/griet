import { Link } from 'react-router-dom';

export default function PageHero({ college, title, subtitle, breadcrumb = [], bgImage }) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '260px' }}>
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: bgImage
            ? `linear-gradient(to right, ${college.primaryColor}F0, ${college.primaryColor}CC)`
            : college.primaryColor,
        }}
      />
      {/* Subtle diagonal grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[120px] py-[64px] flex flex-col gap-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 flex-wrap">
          <Link
            to="/"
            className="font-montserrat text-[13px] leading-4 transition-colors"
            style={{ color: `${college.accentColor}CC` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = college.accentColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${college.accentColor}CC`)}
          >
            Home
          </Link>
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg className="w-3 h-3 opacity-40" viewBox="0 0 12 12" fill="none">
                <path d="M4 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                className="font-montserrat text-[13px] leading-4"
                style={{ color: i === breadcrumb.length - 1 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)' }}
              >
                {crumb}
              </span>
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="font-poppins font-bold text-[42px] leading-[52px] text-white max-w-[700px]"
          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-montserrat font-normal text-[16px] leading-[26px] max-w-[580px]"
            style={{ color: 'rgba(255,255,255,0.80)' }}
          >
            {subtitle}
          </p>
        )}

        {/* Accent line */}
        <div
          className="w-16 h-1 rounded-full mt-1"
          style={{ backgroundColor: college.accentColor }}
        />
      </div>
    </section>
  );
}
