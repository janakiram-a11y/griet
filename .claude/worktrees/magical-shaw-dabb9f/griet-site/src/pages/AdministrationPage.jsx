import college from '../theme';
import CollegeLayout from '../CollegeLayout';

function PageBanner({ image, title }) {
  return (
    <div
      className="relative w-full h-48 md:h-64 flex items-end justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
      <h1 className="relative z-10 text-white font-poppins font-bold text-3xl md:text-4xl tracking-widest pb-8 drop-shadow-lg uppercase">
        {title}
      </h1>
    </div>
  );
}

function LeaderCard({ leader }) {
  return (
    <div className="mb-10">
      <h2
        className="font-poppins font-bold text-xl md:text-2xl mb-4 pb-2"
        style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}`, display: 'inline-block' }}
      >
        {leader.name}, {leader.title}
      </h2>
      <div className="flex gap-5 items-start">
        {leader.image ? (
          <img
            src={leader.image}
            alt={leader.name}
            className="w-32 h-40 object-cover object-top flex-shrink-0 shadow-md"
            style={{ border: `2px solid ${college.accentColor}` }}
          />
        ) : (
          <div
            className="w-32 h-40 flex-shrink-0 shadow-md flex items-center justify-center"
            style={{ background: '#f0e6ea', border: `2px solid ${college.accentColor}` }}
          >
            <span className="font-montserrat text-xs text-gray-400 text-center px-2">Photo</span>
          </div>
        )}
        <p className="font-montserrat text-[14px] leading-relaxed text-gray-800">{leader.bio}</p>
      </div>
    </div>
  );
}

function SidebarLink({ label }) {
  return (
    <a
      href="#"
      className="flex items-center justify-between px-4 py-2 font-montserrat text-[13px] font-medium transition-colors group"
      style={{ borderBottom: `1px solid #e5e7eb`, color: college.primaryColor }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = college.primaryColor;
        e.currentTarget.style.color = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = college.primaryColor;
      }}
    >
      <span>{label}</span>
      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}

export default function AdministrationPage() {
  const { administrationLeaders, administrationSidebarLinks, administrationPageBannerImage } = college;

  return (
    <CollegeLayout college={college}>
      <PageBanner image={administrationPageBannerImage} title="Administration" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {administrationLeaders.map((leader) => (
              <LeaderCard key={leader.name} leader={leader} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div
              className="border"
              style={{ borderColor: '#e5e7eb' }}
            >
              {administrationSidebarLinks.map((label) => (
                <SidebarLink key={label} label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </CollegeLayout>
  );
}
