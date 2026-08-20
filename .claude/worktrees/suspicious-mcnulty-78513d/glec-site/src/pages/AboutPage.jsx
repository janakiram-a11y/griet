import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavStrip from '../components/NavStrip';
import Footer from '../components/Footer';
import AdmissionsCTA from '../components/AdmissionsCTA';
import college from '../theme';

function SectionHeading({ children, primaryColor }) {
  return (
    <div className="flex flex-col items-start gap-3 mb-8">
      <h2 className="font-poppins font-bold text-[28px] leading-tight text-left" style={{ color: primaryColor }}>
        {children}
      </h2>
      <div className="h-[3px] rounded-full" style={{ width: '60px', backgroundColor: '#E6A31E' }} />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar college={college} />
      <NavStrip college={college} />

      {/* Hero */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ minHeight: 340, background: '#1A1A2E' }}
      >
        <img
          src={college.heroBgImage}
          alt="About GLEC"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-16 text-center">
          <p className="font-montserrat font-semibold text-[13px] tracking-[0.2em] uppercase text-white/60">
            GLEC — Est. 2021
          </p>
          <h1 className="font-poppins font-bold text-[48px] md:text-[56px] leading-tight text-white uppercase tracking-wide">
            About GLEC
          </h1>
          <div className="flex items-center gap-2 text-white/50 font-montserrat text-sm mt-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </div>
        </div>
      </div>

      {/* Text Sections + Vision & Mission */}
      <div className="w-full bg-white section-pad">
        <div className="flex flex-col gap-16">

          {/* Inspirer & Promoters */}
          <section>
            <SectionHeading primaryColor={college.primaryColor}>
              About Inspirer and Promoters
            </SectionHeading>
            <p className="font-montserrat font-normal text-[15px] leading-[27px] text-[#474747]">
              {college.aboutFounders}
            </p>
          </section>

          {/* Sponsoring Society */}
          <section>
            <SectionHeading primaryColor={college.primaryColor}>
              The Sponsoring Society:
            </SectionHeading>
            <p className="font-montserrat font-normal text-[15px] leading-[27px] text-[#474747]">
              {college.aboutSociety}
            </p>
          </section>

          {/* About GLEC */}
          <section>
            <SectionHeading primaryColor={college.primaryColor}>
              About GLEC:
            </SectionHeading>
            <div className="flex flex-col gap-5">
              {college.aboutDetailedParagraphs.map((para, i) => (
                <p key={i} className="font-montserrat font-normal text-[15px] leading-[27px] text-[#474747]">
                  {para}
                </p>
              ))}
            </div>
          </section>

          <div className="w-full h-px" style={{ backgroundColor: `${college.primaryColor}18` }} />

          {/* Vision & Mission */}
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

                {/* Vision */}
                <div className="rounded-2xl p-8" style={{ backgroundColor: '#1B3A4B' }}>
                  <span
                    className="font-montserrat font-semibold text-[11px] uppercase tracking-[2px] mb-3 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Vision
                  </span>
                  <h3 className="font-poppins font-bold text-[22px] text-white mb-4">Vision</h3>
                  <div className="w-10 h-0.5 mb-5 rounded-full" style={{ backgroundColor: college.accentColor }} />
                  <p className="font-montserrat text-[14px] leading-[24px] text-white/85">{college.vision}</p>
                </div>

                {/* Mission */}
                <div className="rounded-2xl p-8" style={{ backgroundColor: '#5B1127' }}>
                  <span
                    className="font-montserrat font-semibold text-[11px] uppercase tracking-[2px] mb-3 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Mission
                  </span>
                  <h3 className="font-poppins font-bold text-[22px] text-white mb-4">Mission</h3>
                  <div className="w-10 h-0.5 mb-5 rounded-full" style={{ backgroundColor: college.accentColor }} />
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
                </div>

                {/* Quality Policy */}
                <div className="rounded-2xl p-8" style={{ backgroundColor: '#1A3028' }}>
                  <span
                    className="font-montserrat font-semibold text-[11px] uppercase tracking-[2px] mb-3 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Standard
                  </span>
                  <h3 className="font-poppins font-bold text-[22px] text-white mb-4">Quality Policy</h3>
                  <div className="w-10 h-0.5 mb-5 rounded-full" style={{ backgroundColor: college.accentColor }} />
                  <p className="font-montserrat text-[14px] leading-[24px] text-white/85">{college.qualityPolicy}</p>
                </div>

                {/* Strategies */}
                <div className="rounded-2xl p-8" style={{ backgroundColor: '#1A1A2E' }}>
                  <span
                    className="font-montserrat font-semibold text-[11px] uppercase tracking-[2px] mb-3 block"
                    style={{ color: college.accentColor }}
                  >
                    Our Approach
                  </span>
                  <h3 className="font-poppins font-bold text-[22px] text-white mb-4">Strategies</h3>
                  <div className="w-10 h-0.5 mb-5 rounded-full" style={{ backgroundColor: college.accentColor }} />
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
                </div>

              </div>

              {/* Core Values */}
              <div className="rounded-2xl p-10" style={{ backgroundColor: '#1E3A1E' }}>
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
      </div>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
