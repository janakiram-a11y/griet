import college from '../theme';
import CollegeLayout from '../CollegeLayout';

function PageBanner({ image, title }) {
  return (
    <div
      className="relative w-full h-52 md:h-72 flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.52)' }} />
      <h1 className="relative z-10 text-white font-poppins font-bold text-2xl md:text-3xl tracking-widest uppercase text-center px-4 drop-shadow-lg">
        {title}
      </h1>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2
      className="font-poppins font-bold text-2xl mb-6 pb-2 inline-block"
      style={{
        color: college.primaryColor,
        borderBottom: `2px solid ${college.accentColor}`,
      }}
    >
      {children}
    </h2>
  );
}

function MemberCard({ name, role, desc }) {
  return (
    <div className="bg-white rounded-lg border border-black/10 p-6 shadow-sm">
      <div
        className="w-10 h-10 rounded-full mb-4 flex items-center justify-center text-white font-poppins font-bold text-lg"
        style={{ backgroundColor: college.primaryColor }}
      >
        {name.charAt(0)}
      </div>
      <h3 className="font-poppins font-semibold text-[16px]" style={{ color: college.primaryColor }}>
        {name}
      </h3>
      <p className="font-montserrat text-[13px] font-semibold mt-0.5 mb-2" style={{ color: college.accentColor }}>
        {role}
      </p>
      {desc && (
        <p className="font-montserrat text-[13px] leading-relaxed text-gray-600">{desc}</p>
      )}
    </div>
  );
}

export default function AdministrationPage() {
  const { administration, administrationPageBannerImage } = college;
  const { governingBody, principal, academicLeadership } = administration;

  return (
    <CollegeLayout college={college}>
      <PageBanner image={administrationPageBannerImage} title="Administration" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 space-y-14">

        {/* Governing Body */}
        <section>
          <SectionHeading>{governingBody.heading}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governingBody.members.map((m) => (
              <MemberCard key={m.name} {...m} />
            ))}
          </div>
        </section>

        {/* Principal's Message */}
        <section>
          <SectionHeading>{principal.heading}</SectionHeading>
          <div className="flex flex-col md:flex-row gap-8 items-start mt-2">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white font-poppins font-bold text-3xl flex-shrink-0"
              style={{ backgroundColor: college.primaryColor }}
            >
              {principal.name.charAt(0)}
            </div>
            <div>
              <p className="font-montserrat text-[15px] leading-relaxed text-gray-700 italic mb-4">
                "{principal.message}"
              </p>
              <p className="font-poppins font-semibold text-[15px]" style={{ color: college.primaryColor }}>
                {principal.name}
              </p>
              <p className="font-montserrat text-[13px] text-gray-500">{principal.designation}</p>
            </div>
          </div>
        </section>

        {/* Academic Leadership */}
        <section>
          <SectionHeading>{academicLeadership.heading}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {academicLeadership.members.map((m) => (
              <MemberCard key={m.name} {...m} />
            ))}
          </div>
        </section>

      </div>
    </CollegeLayout>
  );
}
