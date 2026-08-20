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
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
      <h1
        className="relative z-10 text-white font-poppins font-bold text-3xl md:text-4xl pb-8 drop-shadow-lg"
      >
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

function VisionCard({ item }) {
  const lines = item.text.split('\n');
  return (
    <div
      className="rounded-lg p-6 text-white"
      style={{ backgroundColor: item.bg }}
    >
      <h3 className="font-poppins font-bold text-xl mb-3">{item.title}</h3>
      <div className="font-montserrat text-sm leading-relaxed opacity-90 space-y-1">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
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

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 space-y-14">

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutVisionMission.map((item) => (
              <VisionCard key={item.title} item={item} />
            ))}
          </div>
        </section>

      </div>
    </CollegeLayout>
  );
}
