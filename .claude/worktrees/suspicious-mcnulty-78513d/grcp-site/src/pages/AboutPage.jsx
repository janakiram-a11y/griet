import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import Navbar from '../components/Navbar';
import NavStrip from '../components/NavStrip';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

function SectionHeader({ label, title }) {
  return (
    <div className="mb-6">
      {label && (
        <span
          className="font-montserrat font-semibold text-[12px] uppercase tracking-[2px] mb-2 block"
          style={{ color: college.accentColor }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-poppins font-bold text-[26px] leading-[34px] pb-3"
        style={{
          color: college.primaryColor,
          borderBottom: `3px solid ${college.accentColor}`,
          display: 'inline-block',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function SectionDesc({ text }) {
  return (
    <p className="font-montserrat text-[15px] leading-[26px] text-[#474747]">
      {text}
    </p>
  );
}

function ObjectivesList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0 mt-[9px]"
            style={{ backgroundColor: college.accentColor }}
          />
          <span className="font-montserrat text-[15px] leading-[26px] text-[#474747]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AboutSection() {
  const vmCards = [
    {
      bg: '#1B3A4B',
      label: 'Our Vision',
      title: 'Vision',
      content: (
        <p className="font-montserrat text-[14px] leading-[24px] text-white/85">{college.vision}</p>
      ),
    },
    {
      bg: '#5B1127',
      label: 'Our Mission',
      title: 'Mission',
      content: (
        <ul className="space-y-2">
          {college.mission.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]"
                style={{ backgroundColor: college.accentColor }}
              />
              <span className="font-montserrat text-[14px] leading-[24px] text-white/85">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      bg: '#1A3028',
      label: 'Our Standard',
      title: 'Quality Policy',
      content: (
        <p className="font-montserrat text-[14px] leading-[24px] text-white/85">{college.qualityPolicy}</p>
      ),
    },
    {
      bg: '#1A1A2E',
      label: 'Our Approach',
      title: 'Strategies',
      content: (
        <ul className="space-y-2">
          {college.strategies.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[9px]"
                style={{ backgroundColor: college.accentColor }}
              />
              <span className="font-montserrat text-[14px] leading-[24px] text-white/85">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-14">
      <section>
        <SectionHeader title="About Inspirer and Promoters" />
        <div className="mt-4">
          <SectionDesc text={college.aboutFounders} />
        </div>
      </section>

      <section>
        <SectionHeader title="The Sponsoring Society" />
        <div className="mt-4">
          <SectionDesc text={college.aboutSociety} />
        </div>
      </section>

      <section>
        <SectionHeader title="About GRCP" />
        <div className="mt-4 space-y-4">
          {college.aboutDetailedParagraphs.map((para, i) => (
            <SectionDesc key={i} text={para} />
          ))}
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: `${college.primaryColor}18` }} />

      <section>
        <SectionHeader label="Values & Direction" title="Vision & Mission" />
        <div className="mt-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vmCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-8"
                style={{ backgroundColor: card.bg }}
              >
                <span
                  className="font-montserrat font-semibold text-[11px] uppercase tracking-[2px] mb-3 block"
                  style={{ color: college.accentColor }}
                >
                  {card.label}
                </span>
                <h3 className="font-poppins font-bold text-[22px] text-white mb-4">{card.title}</h3>
                <div
                  className="w-10 h-0.5 mb-5 rounded-full"
                  style={{ backgroundColor: college.accentColor }}
                />
                {card.content}
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-10"
            style={{ backgroundColor: '#1E3A1E' }}
          >
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
              {college.coreValues.map((value) => (
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
                  <p className="font-montserrat text-[13px] leading-[22px] text-white/75">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PeoSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <SectionHeader label="About PEOs" title="Programme Educational Objectives" />
        <p className="font-montserrat text-[15px] leading-[26px] text-[#474747] mt-4 max-w-[720px]">
          Programme Educational Objectives are broad statements that describe what graduates are expected
          to achieve within a few years after graduation.
        </p>
      </div>
      <div className="space-y-4">
        {college.peo.map((item) => (
          <div
            key={item.code}
            className="flex gap-5 rounded-2xl p-6 border"
            style={{
              borderColor: `${college.primaryColor}18`,
              backgroundColor: '#FAFAFA',
            }}
          >
            <div className="flex-shrink-0">
              <span
                className="font-poppins font-bold text-[12px] px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{ backgroundColor: college.accentColor, color: '#fff' }}
              >
                {item.code}
              </span>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-[16px] mb-1.5" style={{ color: college.primaryColor }}>
                {item.title}
              </h4>
              <p className="font-montserrat text-[14px] leading-[24px] text-[#474747]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PosSection() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <SectionHeader label="About POs" title="Programme Outcomes" />
        <p className="font-montserrat text-[15px] leading-[26px] text-[#474747] mt-4 max-w-[720px]">
          Programme Outcomes describe what students are expected to know, understand, and be able to do
          by the time of graduation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {college.pos.map((item, index) => (
          <div
            key={item.code}
            className="rounded-2xl p-6 border relative overflow-hidden"
            style={{
              borderColor: `${college.primaryColor}18`,
              backgroundColor: '#FAFAFA',
            }}
          >
            <div
              className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
              style={{ backgroundColor: college.primaryColor }}
            />
            <div className="pl-2">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="font-poppins font-bold text-[11px] px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: college.accentColor, color: '#fff' }}
                >
                  {item.code}
                </span>
                <span
                  className="font-montserrat font-semibold text-[11px] text-[#9CA3AF]"
                >
                  #{String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="font-poppins font-semibold text-[15px] mb-1.5" style={{ color: college.primaryColor }}>
                {item.title}
              </h4>
              <p className="font-montserrat text-[13px] leading-[22px] text-[#474747]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const sectionConfig = {
  about: {
    title: 'About GRCP',
    subtitle: 'Our heritage, founding society, vision, mission, and core values',
    breadcrumb: ['About Us', 'About GRCP'],
  },
  peo: {
    title: 'Programme Educational Objectives',
    subtitle: 'Broad goals defining what our graduates will achieve in their professional careers',
    breadcrumb: ['About Us', 'PEO'],
  },
  pos: {
    title: 'Programme Outcomes',
    subtitle: 'Competencies and skills that every GRCP graduate will possess upon completion',
    breadcrumb: ['About Us', 'POs'],
  },
};

const sectionContent = {
  about: <AboutSection />,
  peo: <PeoSection />,
  pos: <PosSection />,
};

export default function AboutPage({ section = 'about' }) {
  const config = sectionConfig[section] || sectionConfig.about;
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar college={college} />
      <NavStrip college={college} />
      <PageHero
        college={college}
        title={config.title}
        subtitle={config.subtitle}
        breadcrumb={config.breadcrumb}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[1200px] mx-auto">
          {sectionContent[section] || sectionContent.about}
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
