import college from '../theme';
import CollegeLayout from '../CollegeLayout';
import { AcademicsBanner } from '../components/AcademicsLayout';

// ── Section heading ─────────────────────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <h2
      className="font-poppins font-bold text-xl mb-4 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

// ── Yearwise left sidebar ────────────────────────────────────────────────────
const PLACEMENT_YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

function PlacementSidebar({ activeYear, onYearSelect }) {
  return (
    <aside className="w-full lg:w-60 flex-shrink-0 lg:sticky lg:top-[176px]">
      <div className="rounded-lg border border-gray-200">
        <div
          className="rounded-t-lg px-5 py-3"
          style={{ background: `linear-gradient(135deg, ${college.primaryColor} 0%, #2d0714 100%)` }}
        >
          <span className="font-poppins font-bold text-[13px] text-white tracking-wide">
            Yearwise Placement Details
          </span>
        </div>
        <ul className="rounded-b-lg divide-y divide-gray-100 bg-white sidebar-scroll max-h-[calc(100vh-240px)]">
          {PLACEMENT_YEARS.map((year) => {
            const isActive = activeYear === year;
            return (
              <li key={year}>
                <button
                  onClick={() => onYearSelect(year)}
                  className="w-full flex items-center gap-3 px-5 py-2.5 transition-colors hover:bg-gray-50 text-left"
                  style={{
                    backgroundColor: isActive ? `${college.primaryColor}0d` : undefined,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-colors"
                    style={{ backgroundColor: isActive ? college.primaryColor : college.accentColor }}
                  />
                  <span
                    className="font-montserrat text-[13px]"
                    style={{ color: isActive ? college.primaryColor : '#374151', fontWeight: isActive ? 700 : 500 }}
                  >
                    {year}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

// ── Placement stats per year ─────────────────────────────────────────────────
const YEAR_STATS = {
  2025: { highest: '51.6 LPA', offers: '950+', companies: '120+', topRecruiters: ['Google', 'Amazon', 'PayPal', 'Commvault', 'CISCO', 'JP Morgan Chase'] },
  2024: { highest: '44 LPA', offers: '900+', companies: '110+', topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Deloitte', 'Accenture'] },
  2023: { highest: '40 LPA', offers: '850+', companies: '100+', topRecruiters: ['Microsoft', 'Amazon', 'TCS', 'Infosys', 'HCL'] },
  2022: { highest: '36 LPA', offers: '800+', companies: '90+', topRecruiters: ['TCS', 'Wipro', 'Cognizant', 'Capgemini', 'IBM'] },
  2021: { highest: '32 LPA', offers: '700+', companies: '85+', topRecruiters: ['TCS', 'Infosys', 'Tech Mahindra', 'Hexaware'] },
  2020: { highest: '28 LPA', offers: '600+', companies: '80+', topRecruiters: ['TCS', 'Wipro', 'Infosys', 'Mindtree'] },
  2019: { highest: '24 LPA', offers: '550+', companies: '75+', topRecruiters: ['TCS', 'CTS', 'Infosys', 'HCL'] },
  2018: { highest: '20 LPA', offers: '500+', companies: '70+', topRecruiters: ['TCS', 'CTS', 'Wipro', 'Accenture'] },
};

function YearStatsPanel({ year }) {
  const stats = YEAR_STATS[year] || YEAR_STATS[2025];
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Highest Package', value: stats.highest },
          { label: 'Total Offers', value: stats.offers },
          { label: 'Companies Visited', value: stats.companies },
        ].map((s) => (
          <div key={s.label}
            className="text-center p-5 rounded-lg border-l-4 border border-gray-100 bg-white"
            style={{ borderLeftColor: college.primaryColor }}>
            <div className="font-poppins font-bold text-2xl mb-1" style={{ color: college.primaryColor }}>
              {s.value}
            </div>
            <div className="font-montserrat text-[11px] uppercase tracking-wide text-gray-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-[13px] mb-3 uppercase tracking-wide" style={{ color: college.primaryColor }}>
          Top Recruiters – {year}
        </h4>
        <div className="flex flex-wrap gap-2">
          {stats.topRecruiters.map((r) => (
            <span key={r}
              className="px-4 py-2 rounded-full border font-montserrat text-[12px] font-semibold text-gray-700 bg-white hover:shadow-sm transition-shadow"
              style={{ borderColor: college.accentColor }}>
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Congratulations banner ───────────────────────────────────────────────────
function PlacementsBanner() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 mb-8">
      <div
        className="text-white text-center py-5 px-6"
        style={{ background: `linear-gradient(135deg, #5B1027 0%, ${college.primaryColor} 100%)` }}
      >
        <p className="font-poppins font-bold text-xl md:text-2xl uppercase tracking-wide">
          🎉 Congratulations!! – 2025 Batch Highest Package
        </p>
        <p className="font-montserrat text-base text-white/90 mt-1">
          Rao Nishitha – Google: 51.6 Lakhs &nbsp;|&nbsp; S D Sowjanya – Amazon: 45.6 Lakhs
        </p>
        <p className="font-montserrat text-base text-white/90">
          M Likhithanjali – Amazon: 45.6 Lakhs &nbsp;|&nbsp; K Lohitha – Amazon: 45.6 Lakhs
        </p>
      </div>
      <div
        className="text-white text-center py-3 px-6 font-poppins font-bold text-[15px] uppercase tracking-wide"
        style={{ backgroundColor: college.accentColor, color: college.primaryColor }}
      >
        JP Morgan Chase &amp; Co Selects with 19.75 Lakhs
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
import { useState } from 'react';

export default function PlacementsPage() {
  const [activeYear, setActiveYear] = useState(2025);

  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title="Training &amp; Placements" />

      <div className="page-pad">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Left Sidebar ──────────────────────────────────────────── */}
          <PlacementSidebar activeYear={activeYear} onYearSelect={setActiveYear} />

          {/* ── Main Content ───────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* Congratulations Banner */}
            <PlacementsBanner />

            {/* About the Cell */}
            <section>
              <SectionHeading>Training &amp; Placements Cell</SectionHeading>
              <div className="space-y-3 font-montserrat text-[14px] leading-relaxed text-gray-700">
                <p>
                  The Training &amp; Placements Cell of GRIET:
                </p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>
                    Imparts training in soft skills to the students from the first year class onwards to prepare
                    them appropriately for careers in industry.
                  </li>
                  <li>
                    Coordinates the Industry and the GRIETians for suitable training &amp; placements.
                  </li>
                </ol>
                <p>
                  In order to achieve this, the database of all the students of different branches is compiled
                  and furnished to identified industries from time to time. Consequently, as per the manpower
                  requirements of the industries, On or Off Campus Placements are conducted to provide suitable
                  career opportunities to the students.
                </p>
                <p>
                  A large number of students (details given separately in this section), have been placed in
                  all leading Software, Hardware, Manufacturing and Maintenance industries. A good number of
                  students pursue higher studies at home and abroad (details given separately in this section).
                  Every batch witnesses a few dawning the hats as entrepreneurs.
                </p>
              </div>
            </section>

            {/* Yearwise Stats */}
            <section>
              <div className="flex items-center justify-between mb-5">
                <SectionHeading>Placement Statistics – {activeYear}</SectionHeading>
              </div>
              <YearStatsPanel year={activeYear} />
            </section>

            {/* Overall Stats */}
            <section
              className="rounded-xl py-10 px-6"
              style={{ backgroundColor: '#5B1027' }}
            >
              <p className="font-poppins font-bold text-center text-[15px] uppercase tracking-widest mb-6"
                style={{ color: college.accentColor }}>
                Placement Highlights
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { count: '44 LPA', label: 'Highest Package', desc: 'Consistently offered by top MNCs' },
                  { count: '900+', label: 'Offers Per Year', desc: 'From 100+ visiting companies' },
                  { count: '900+', label: 'Recruiters', desc: 'Global, national & regional companies' },
                  { count: '25+', label: 'Years of Placements', desc: 'Strong track record since 1997' },
                ].map((s) => (
                  <div key={s.label}
                    className="bg-white/10 border border-white/20 rounded-xl px-5 py-7 flex flex-col items-center text-center gap-2">
                    <span className="font-poppins font-bold text-2xl" style={{ color: college.accentColor }}>{s.count}</span>
                    <span className="font-poppins font-semibold text-sm text-white">{s.label}</span>
                    <span className="font-montserrat text-[11px] text-white/70 leading-relaxed">{s.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <SectionHeading>Contact Information</SectionHeading>
              <div className="overflow-x-auto">
                <table className="w-full font-montserrat text-[13px] border border-gray-200 rounded-lg overflow-hidden">
                  <tbody>
                    {[
                      { role: 'Dean Training & Placements', name: 'Dr. K. Butchi Raju', contact: '7702964747' },
                      { role: 'Training & Placements Officer', name: 'Dr. M. Aravind Kumar', contact: '9849027132' },
                      { role: 'Placements Cell', name: '', contact: '7207344440, 7207714441' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-5 py-3 border-b border-gray-100 font-semibold text-gray-800 w-1/3">
                          {row.role}
                        </td>
                        <td className="px-5 py-3 border-b border-gray-100 text-gray-700">
                          {row.name}
                          {row.name && ', '}
                          {row.contact}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-white">
                      <td className="px-5 py-3 font-semibold text-gray-800">Contact mail:</td>
                      <td className="px-5 py-3">
                        <a
                          href="mailto:placements@gokaraju.org"
                          className="font-semibold hover:underline"
                          style={{ color: college.primaryColor }}
                        >
                          placements@gokaraju.org
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Recruitment Process */}
            <section>
              <SectionHeading>Recruitment Process</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: '01', title: 'Pre-Placement Training', desc: 'Year-round aptitude, soft skills, technical, and interview preparation from first year onwards.' },
                  { step: '02', title: 'Company Registration', desc: 'Companies register with the T&P cell and share their requirements for the placement season.' },
                  { step: '03', title: 'Eligibility Screening', desc: 'Students are shortlisted based on academic performance and company eligibility criteria.' },
                  { step: '04', title: 'Selection Process', desc: 'Online tests, technical interviews, HR rounds conducted at campus or online.' },
                ].map((s) => (
                  <div key={s.step}
                    className="flex gap-4 p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-poppins font-bold text-white text-sm"
                      style={{ backgroundColor: college.primaryColor }}
                    >
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-poppins font-semibold text-[14px] mb-1" style={{ color: college.primaryColor }}>
                        {s.title}
                      </h3>
                      <p className="font-montserrat text-[12px] text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </div>

      <PlacementsFooter />
    </CollegeLayout>
  );
}

// ── Page footer ──────────────────────────────────────────────────────────────
const footerCols = [
  {
    heading: 'Quick Links',
    items: ['DTBU', 'MOUs', 'GRIET Rules (REG) Book', 'Pragnya 90.4 FM Radio', 'Support Services', 'Sports and Games', 'Transport', 'Infrastructure', 'Institute Central Facilities'],
  },
  {
    heading: 'Important Links',
    items: ['Skill Development Cell', 'IQAC', 'J-Lab @ GRIET', 'ICT @ GRIET', 'Swayam Prabha', 'Professional Associations', 'AAC', 'NSS Events', 'Finishing School'],
  },
  {
    heading: 'R & D',
    items: ['Journals', 'Staff Publications', 'Scopus SCI List', 'Patents', 'TEQIP PHASE-II Grant', 'PhDs Awarded', 'IRINS.ORG', 'National and International Conferences'],
  },
  {
    heading: 'Student Events',
    items: ['IEEE GRIET SB', 'Flavours', 'AICTE SPICES', 'X-Kernel', 'Quizicals', 'Retrieve', 'Gaming Club', 'Robotic Club', 'GEM Magazine', 'Scientific Forestep'],
  },
  {
    heading: 'Special Days',
    items: ['Annual Day', 'Graduation Day', 'Reflections: Class of 2025', 'Reudo', 'Alumni Day'],
  },
];

function PlacementsFooter() {
  return (
    <section className="w-full bg-[#F3DAB2] py-12 px-6 border-t border-gray-200 mt-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {footerCols.map((col) => (
          <div key={col.heading}>
            <h4 className="font-poppins font-bold text-[13px] uppercase tracking-wide mb-4 pb-1.5 border-b"
              style={{ color: college.primaryColor, borderColor: college.accentColor }}>
              {col.heading}
            </h4>
            <ul className="space-y-1.5">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#" className="font-montserrat text-[12px] text-gray-600 hover:underline"
                    onMouseEnter={(e) => (e.currentTarget.style.color = college.primaryColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
