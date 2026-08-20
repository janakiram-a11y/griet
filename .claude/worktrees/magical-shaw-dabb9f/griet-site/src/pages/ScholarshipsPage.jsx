import AdmissionsLayout, { SectionHeading } from '../components/AdmissionsLayout';
import college from '../theme';

const scholarships = [
  {
    title: 'AICTE Pragati Scholarship',
    eligibility: 'Girl students admitted to first year or lateral entry of AICTE-approved diploma/degree programmes.',
    benefit: '₹ 50,000 per annum (including tuition fee, book grant, and incidental charges).',
    link: 'https://www.aicte-india.org/',
  },
  {
    title: 'AICTE Saksham Scholarship',
    eligibility: 'Students with 40% or more disability, admitted to first year or lateral entry of AICTE-approved programmes.',
    benefit: '₹ 50,000 per annum.',
    link: 'https://www.aicte-india.org/',
  },
  {
    title: 'Telangana State Government Scholarship (SC/ST/BC/EBC)',
    eligibility: 'Students belonging to SC, ST, BC, and EBC categories and domiciled in Telangana.',
    benefit: 'Full tuition fee reimbursement along with maintenance allowance as per government norms.',
    link: 'https://telanganaepass.cgg.gov.in/',
  },
  {
    title: 'National Scholarship Portal (NSP) Scholarships',
    eligibility: 'Students meeting the prescribed income and merit criteria as defined by the respective schemes.',
    benefit: 'Varies by scheme; includes pre-matric, post-matric, and merit-cum-means scholarships.',
    link: 'https://scholarships.gov.in/',
  },
  {
    title: 'GATE Scholarship (M.Tech Students)',
    eligibility: 'GATE-qualified students admitted to M.Tech programmes.',
    benefit: '₹ 12,400 per month as stipend from AICTE/UGC for the duration of the programme.',
    link: null,
  },
  {
    title: 'GRIET Endowment Awards',
    eligibility: 'Meritorious students based on academic performance in respective departments.',
    benefit: 'Cash awards and certificates as per individual endowment criteria.',
    link: null,
  },
];

export default function ScholarshipsPage() {
  return (
    <AdmissionsLayout title="Scholarships">
      <p className="font-montserrat text-[14px] leading-relaxed text-gray-700 mb-8">
        GRIET supports meritorious and economically challenged students through a range of scholarships from
        government bodies, central agencies, and institute-level endowments. Students are encouraged to apply
        early through the respective portals.
      </p>

      <div className="space-y-5">
        {scholarships.map((s, i) => (
          <div
            key={i}
            className="border-l-4 p-5 rounded-r-lg"
            style={{ borderColor: college.primaryColor, backgroundColor: '#fdf8f9' }}
          >
            <h3
              className="font-poppins font-bold text-[16px] mb-2"
              style={{ color: college.primaryColor }}
            >
              {s.title}
            </h3>
            <p className="font-montserrat text-[13px] text-gray-700 mb-1">
              <span className="font-semibold">Eligibility:</span> {s.eligibility}
            </p>
            <p className="font-montserrat text-[13px] text-gray-700 mb-2">
              <span className="font-semibold">Benefit:</span> {s.benefit}
            </p>
            {s.link && (
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[13px] font-semibold underline hover:opacity-75"
                style={{ color: college.accentColor }}
              >
                Apply / Learn More →
              </a>
            )}
          </div>
        ))}
      </div>

      <div
        className="mt-8 p-4 rounded"
        style={{ backgroundColor: '#f0f4f8', border: `1px solid #d1d5db` }}
      >
        <p className="font-montserrat text-[13px] text-gray-600">
          <span className="font-semibold text-gray-800">Note:</span> Students must apply for scholarships
          within the stipulated deadlines. GRIET's Accounts and Student Welfare offices can assist with
          documentation. For more details, contact the Student Affairs office.
        </p>
      </div>
    </AdmissionsLayout>
  );
}
