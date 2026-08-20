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

      {/* Text Sections */}
      <div className="w-full bg-white px-6 py-12 md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[80px]">
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

        </div>
      </div>

      {/* 2x2 Dark Info Cards */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Vision */}
          <div className="flex flex-col gap-6 py-12 px-6 md:py-[60px] md:px-[60px] lg:py-[80px] lg:px-[120px]" style={{ backgroundColor: '#1B3A4B' }}>
            <div className="flex flex-col gap-2">
              <span className="font-montserrat font-semibold text-[11px] tracking-[0.2em] uppercase text-white/50">
                Our Vision
              </span>
              <h3 className="font-poppins font-bold text-[26px] leading-tight text-white">
                Vision
              </h3>
              <div className="w-10 h-0.5 rounded-full mt-1" style={{ backgroundColor: college.accentColor }} />
            </div>
            <p className="font-montserrat font-normal text-[15px] leading-[26px] text-white/80">
              {college.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-6 py-12 px-6 md:py-[60px] md:px-[60px] lg:py-[80px] lg:px-[120px]" style={{ backgroundColor: '#5B1127' }}>
            <div className="flex flex-col gap-2">
              <span className="font-montserrat font-semibold text-[11px] tracking-[0.2em] uppercase text-white/50">
                Our Mission
              </span>
              <h3 className="font-poppins font-bold text-[26px] leading-tight text-white">
                Mission
              </h3>
              <div className="w-10 h-0.5 rounded-full mt-1" style={{ backgroundColor: college.accentColor }} />
            </div>
            <ul className="flex flex-col gap-3">
              {college.mission.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                  <span className="font-montserrat font-normal text-[15px] leading-[24px] text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality Policy */}
          <div className="flex flex-col gap-6 py-12 px-6 md:py-[60px] md:px-[60px] lg:py-[80px] lg:px-[120px]" style={{ backgroundColor: '#1A3028' }}>
            <div className="flex flex-col gap-2">
              <span className="font-montserrat font-semibold text-[11px] tracking-[0.2em] uppercase text-white/50">
                Our Standard
              </span>
              <h3 className="font-poppins font-bold text-[26px] leading-tight text-white">
                Quality Policy
              </h3>
              <div className="w-10 h-0.5 rounded-full mt-1" style={{ backgroundColor: college.accentColor }} />
            </div>
            <p className="font-montserrat font-normal text-[15px] leading-[26px] text-white/80">
              {college.qualityPolicy}
            </p>
          </div>

          {/* Strategies */}
          <div className="flex flex-col gap-6 py-12 px-6 md:py-[60px] md:px-[60px] lg:py-[80px] lg:px-[120px]" style={{ backgroundColor: '#1A1A2E' }}>
            <div className="flex flex-col gap-2">
              <span className="font-montserrat font-semibold text-[11px] tracking-[0.2em] uppercase text-white/50">
                Our Approach
              </span>
              <h3 className="font-poppins font-bold text-[26px] leading-tight text-white">
                Strategies
              </h3>
              <div className="w-10 h-0.5 rounded-full mt-1" style={{ backgroundColor: college.accentColor }} />
            </div>
            <ul className="flex flex-col gap-3">
              {college.strategies.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                  <span className="font-montserrat font-normal text-[15px] leading-[24px] text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Core Values — Full Width */}
      <div className="w-full py-12 px-6 md:py-[60px] md:px-[60px] lg:py-[80px] lg:px-[120px]" style={{ backgroundColor: '#1E3A1E' }}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-montserrat font-semibold text-[11px] tracking-[0.2em] uppercase text-white/50">
              What We Stand For
            </span>
            <h3 className="font-poppins font-bold text-[26px] leading-tight text-white">
              Core Values
            </h3>
            <div className="w-10 h-0.5 rounded-full mt-1" style={{ backgroundColor: college.accentColor }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {college.coreValues.map((val) => (
              <div key={val.name} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                  <span className="font-poppins font-semibold text-[15px] text-white">{val.name}</span>
                </div>
                <p className="font-montserrat font-normal text-[13px] leading-[21px] text-white/70 pl-4">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
