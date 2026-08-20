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

function SectionHeading({ children, color }) {
  return (
    <h2
      className="font-poppins font-bold text-2xl mb-4 pb-2"
      style={{
        color: color || college.primaryColor,
        borderBottom: `2px solid ${college.accentColor}`,
        display: 'inline-block',
      }}
    >
      {children}
    </h2>
  );
}

const vmLabelMap = {
  Vision: 'Our Vision',
  Mission: 'Our Mission',
  'Quality Policy': 'Our Standard',
  Strategies: 'Our Approach',
};

function VisionCard({ item }) {
  const isStrategies = item.title === 'Strategies';
  const lines = item.text.split('\n');
  const intro = isStrategies ? lines[0] : null;
  const bullets = isStrategies
    ? lines.slice(1).filter(Boolean).map((l) => l.replace(/^•\s*/, ''))
    : [];

  return (
    <div className="rounded-2xl p-8" style={{ backgroundColor: item.bg }}>
      <span
        className="font-montserrat font-semibold text-[11px] uppercase tracking-[2px] mb-3 block"
        style={{ color: college.accentColor }}
      >
        {vmLabelMap[item.title] || item.title}
      </span>
      <h3 className="font-poppins font-bold text-[22px] text-white mb-4">{item.title}</h3>
      <div
        className="w-10 h-0.5 mb-5 rounded-full"
        style={{ backgroundColor: college.accentColor }}
      />
      {isStrategies ? (
        <>
          {intro && (
            <p className="font-montserrat text-[14px] leading-[24px] text-white/85 mb-3">{intro}</p>
          )}
          <ul className="space-y-2">
            {bullets.map((line, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]"
                  style={{ backgroundColor: college.accentColor }}
                />
                <span className="font-montserrat text-[14px] leading-[24px] text-white/85">{line}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="font-montserrat text-[14px] leading-[24px] text-white/85">{item.text}</p>
      )}
    </div>
  );
}

function CoreValuesBlock({ item }) {
  const values = item.text
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const colonIdx = line.indexOf(': ');
      return colonIdx !== -1
        ? { name: line.slice(0, colonIdx), desc: line.slice(colonIdx + 2) }
        : { name: line, desc: '' };
    });

  return (
    <div className="rounded-2xl p-10" style={{ backgroundColor: item.bg }}>
      <div className="mb-8 text-center">
        <span
          className="font-montserrat font-semibold text-[11px] uppercase tracking-[2px] mb-2 block"
          style={{ color: college.accentColor }}
        >
          Our Foundation
        </span>
        <h3 className="font-poppins font-bold text-[24px] text-white">Core Values</h3>
        <div
          className="w-12 h-0.5 rounded-full mx-auto mt-3"
          style={{ backgroundColor: college.accentColor }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value) => (
          <div
            key={value.name}
            className="rounded-xl p-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div
              className="w-8 h-8 rounded-full mb-3 flex items-center justify-center"
              style={{ backgroundColor: college.accentColor }}
            >
              <span className="font-poppins font-bold text-[13px] text-white">
                {value.name.charAt(0)}
              </span>
            </div>
            <h4 className="font-poppins font-bold text-[16px] text-white mb-2">{value.name}</h4>
            {value.desc && (
              <p className="font-montserrat text-[13px] leading-[22px] text-white/75">{value.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { aboutInspirer, sponsoringSociety, aboutGriet, aboutVisionMission, aboutPageBannerImage } = college;

  return (
    <CollegeLayout college={college}>
      <PageBanner image={aboutPageBannerImage} title="About GRIET" />

      <div className="page-pad space-y-14">

        {/* About Inspirer and Promoters */}
        <section>
          <SectionHeading>{aboutInspirer.heading}</SectionHeading>
          <div className="mt-4 space-y-6 font-montserrat text-[15px] leading-relaxed text-gray-800">
            <div>
              <span className="font-semibold" style={{ color: college.primaryColor }}>
                {aboutInspirer.inspirer.label}
              </span>{' '}
              {aboutInspirer.inspirer.text}
            </div>

            <div>
              <p className="font-semibold mb-2" style={{ color: college.primaryColor }}>
                The Promoters:
              </p>
              {aboutInspirer.promoters.map((p) => (
                <p key={p.name} className="mb-2">
                  <span className="font-semibold">{p.name}</span> {p.desc}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsoring Society */}
        <section>
          <SectionHeading>{sponsoringSociety.heading}</SectionHeading>
          <p
            className="mt-4 font-montserrat text-[15px] leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{
              __html: sponsoringSociety.text.replace(
                /Gokaraju Educational Society/,
                '<strong>Gokaraju Educational Society</strong>'
              ),
            }}
          />
        </section>

        {/* About GRIET */}
        <section>
          <SectionHeading>{aboutGriet.heading}</SectionHeading>
          <div className="mt-4 space-y-4 font-montserrat text-[15px] leading-relaxed text-gray-800">
            {aboutGriet.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Vision, Mission, Quality Policy, Strategies, Core Values */}
        <section>
          <div className="mb-6">
            <span
              className="font-montserrat font-semibold text-[12px] uppercase tracking-[2px] mb-2 block"
              style={{ color: college.accentColor }}
            >
              Values &amp; Direction
            </span>
            <h2
              className="font-poppins font-bold text-[26px] leading-[34px] pb-3"
              style={{
                color: college.primaryColor,
                borderBottom: `3px solid ${college.accentColor}`,
                display: 'inline-block',
              }}
            >
              Vision &amp; Mission
            </h2>
          </div>
          <div className="mt-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutVisionMission.slice(0, 4).map((item) => (
                <VisionCard key={item.title} item={item} />
              ))}
            </div>
            {aboutVisionMission[4] && <CoreValuesBlock item={aboutVisionMission[4]} />}
          </div>
        </section>

      </div>
    </CollegeLayout>
  );
}
