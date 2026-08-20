import AdmissionsLayout, { SectionHeading } from '../components/AdmissionsLayout';
import college from '../theme';

function SubHeading({ children }) {
  return (
    <p className="font-montserrat font-bold text-[13px] uppercase tracking-wide mt-4 mb-2" style={{ color: '#1a1a1a' }}>
      {children}
    </p>
  );
}

function Body({ children, className = '' }) {
  return (
    <p className={`font-montserrat text-[14px] leading-relaxed text-gray-800 mb-3 ${className}`}>
      {children}
    </p>
  );
}

export default function AdmissionProcedurePage() {
  return (
    <AdmissionsLayout title="Admission Procedure">

      {/* B Tech */}
      <section className="mb-10">
        <SectionHeading>B Tech Programmes</SectionHeading>
        <p className="font-montserrat text-[13px] text-gray-600 mb-3 italic">
          The Eligibility Criteria for Admission to B.Tech Programme:
        </p>
        <Body>
          Admissions to the Institute are made along with the other Engineering colleges in the state through a common
          entrance test (EAPCET) conducted by the Govt. of Telangana State.
        </Body>
        <Body>
          The admission pattern to B. Tech is as follows: The minimum qualification for admission to first year of the
          B. Tech course is a pass in the Intermediate (10 + 2) conducted by the Board of Intermediate education,
          Govt. of Telangana State or any other examination recognized as equivalent thereto with Mathematics, Physics
          and Chemistry as optional subjects.
        </Body>

        <SubHeading>Admission</SubHeading>
        <ol className="font-montserrat text-[14px] leading-relaxed text-gray-800 space-y-1 list-decimal list-inside">
          <li>70 % of the seats are allotted based on the merit in the EAPCET.</li>
          <li>30 % of the seats are earmarked for Management/NRI candidates.</li>
          <li>
            In addition to the above, Diploma holders are admitted in second year of B. Tech to the extent of 10% of
            intake based on the merit in the{' '}
            <a href="#" style={{ color: college.primaryColor }} className="underline hover:opacity-80">
              ECET, under lateral entry scheme
            </a>
            .
          </li>
        </ol>
      </section>

      {/* M Tech */}
      <section className="mb-10">
        <SectionHeading>M Tech Programmes</SectionHeading>
        <p className="font-montserrat text-[13px] text-gray-600 mb-3 italic">
          The Eligibility Criteria for Admission to M.Tech Programme:
        </p>
        <Body>
          Non Sponsored Candidates must have a B.E / B.Tech Degree or its equivalent from AICTE approved Institutions
          and a valid GATE score/ PGECET Rank. Sponsored Candidates must have a minimum B.E / B.Tech Degree or its
          equivalent from AICTE approved Institutions with a minimum of 55% marks in aggregate. The candidate must
          have a minimum two years of full time work experience in a recognized firm / industry / Company / Educational
          or Research Institution / Any Department of Government / Autonomous organization in the relevant field in
          which admission is being sought. A letter from the employer must be furnished stating that the candidate is
          being sponsored to get admission. The employer should also indicate that the candidate will not be withdrawn,
          midway till the completion of the programme.
        </Body>

        <SubHeading>Admission</SubHeading>
        <Body>
          Admission will be made through GATE, by the convenor PGECET. When GATE Candidates are not available,
          admission will be given to PGECET qualified candidates on merit basis. Admission for Sponsored category will
          be made based on merit. Preference will be given to GATE qualified candidates.
          STIPEND/SCHOLARSHIP FOR M.TECH
        </Body>

        <div className="mt-4 space-y-2">
          <div>
            <a href="#" style={{ color: college.primaryColor }} className="font-montserrat font-semibold text-[14px] underline hover:opacity-80">
              M.Tech Notification
            </a>
          </div>
          <div>
            <a href="#" style={{ color: college.primaryColor }} className="font-montserrat font-semibold text-[14px] underline hover:opacity-80">
              M.Tech Application Form (2024–25)
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4" style={{ borderTop: `1px solid #e5e7eb` }}>
          <p className="font-montserrat font-bold text-[14px] text-gray-900 mb-1">
            AICTE Scholarships are available to eligible GATE Qualified Candidates.
          </p>
          <p className="font-montserrat text-[14px] text-gray-700">
            Sponsored Candidates are not eligible to receive stipend / Scholarship, even if they are admitted based on
            GATE Score.
          </p>
        </div>
      </section>

    </AdmissionsLayout>
  );
}
