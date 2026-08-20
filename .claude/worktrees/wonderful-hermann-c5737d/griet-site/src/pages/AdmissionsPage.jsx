import { Link } from 'react-router-dom';
import AdmissionsLayout from '../components/AdmissionsLayout';
import college from '../theme';

const quickLinks = [
  { label: 'Programmes', href: '/admissions/programmes', desc: 'UG & PG programme list with intake details' },
  { label: 'Admission Procedure', href: '/admissions/admission-procedure', desc: 'Step-by-step guide for B.Tech & M.Tech admission' },
  { label: 'Fee Structure', href: '/admissions/fee-structure', desc: 'Year-wise tuition and special fee details' },
  { label: 'EAPCET Last Rank', href: '/admissions/eapcet-last-rank', desc: 'Branch-wise first & last ranks for EAPCET' },
  { label: 'ECET Last Rank', href: '/admissions/ecet-last-rank', desc: 'Lateral entry first & last ranks for ECET' },
  { label: 'Scholarships', href: '/admissions/scholarships', desc: 'Government, endowment & rank-based scholarships' },
];

export default function AdmissionsPage() {
  return (
    <AdmissionsLayout title="Admissions">

      {/* Intro strip */}
      <p className="font-montserrat text-[14px] leading-relaxed text-gray-600 mb-10 max-w-3xl">
        GRIET offers world-class engineering education through EAPCET and GATE-based admissions.
        Explore the sections below to understand eligibility, procedures, fee structure, and scholarship opportunities.
      </p>

      {/* B.Tech & M.Tech side-by-side cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        <div className="border-l-4 rounded-r-lg p-6 bg-white shadow-sm" style={{ borderColor: college.primaryColor }}>
          <h2 className="font-poppins font-bold text-[20px] mb-3" style={{ color: college.primaryColor }}>
            B.Tech Programmes
          </h2>
          <p className="font-montserrat text-[13px] leading-relaxed text-gray-700 mb-4">
            Candidates must qualify in <strong>TGEAPCET</strong> (Engineering, Agricultural and Medical
            Common Entrance Test) conducted by the Govt. of Telangana. Eligible students must have
            passed 10+2 with Maths, Physics, and Chemistry. Seats are allotted through state counselling
            based on EAPCET rank.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="font-montserrat text-[12px] font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: college.primaryColor }}>
              70% Merit Seats
            </span>
            <span className="font-montserrat text-[12px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
              30% Management / NRI
            </span>
            <span className="font-montserrat text-[12px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
              10% Lateral Entry (ECET)
            </span>
          </div>
        </div>

        <div className="border-l-4 rounded-r-lg p-6 bg-white shadow-sm" style={{ borderColor: college.accentColor }}>
          <h2 className="font-poppins font-bold text-[20px] mb-3" style={{ color: college.primaryColor }}>
            M.Tech Programmes
          </h2>
          <p className="font-montserrat text-[13px] leading-relaxed text-gray-700 mb-4">
            Admissions are made primarily through <strong>GATE</strong>. When GATE candidates are
            unavailable, PGECET-qualified candidates are considered on merit. Sponsored category
            admissions are merit-based, with preference to GATE-qualified candidates.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="font-montserrat text-[12px] font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: college.primaryColor }}>
              GATE Qualified
            </span>
            <span className="font-montserrat text-[12px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
              PGECET Merit
            </span>
            <span className="font-montserrat text-[12px] font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>
              Sponsored Category
            </span>
          </div>
        </div>

      </div>

      {/* Quick Links section */}
      <div className="mb-4">
        <h3 className="font-poppins font-bold text-[17px] mb-5" style={{ color: college.primaryColor }}>
          Admissions Quick Links
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group flex flex-col p-5 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: college.primaryColor }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-poppins font-semibold text-[14px] group-hover:underline" style={{ color: college.primaryColor }}>
                  {link.label}
                </span>
              </div>
              <p className="font-montserrat text-[12px] text-gray-500 leading-relaxed">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

    </AdmissionsLayout>
  );
}
