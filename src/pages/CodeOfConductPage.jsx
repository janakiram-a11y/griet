import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const PDF_PATH = '/code-of-conduct-students.pdf';

/* ── Exact content transcribed from the official PDF ─────────────────────
   Numbering (1–25) and wording are verbatim from the source document. ──── */
const RULES = [
  { n: 1, text: 'Every student must carry his or her identity (ID) card inside the campus. Any violation of this will lead to disciplinary action.' },
  { n: 2, text: 'Usage of Mobile phones within the instructional area is strictly prohibited.' },
  { n: 3, text: 'Be polite and respectful towards staff (Teaching, Non-Teaching & Administrative) and students.' },
  { n: 4, text: 'Follow the timings as per the class time table. Plan to arrive to class on time and to stay for the entire class period (or until class ends).' },
  { n: 5, text: 'Attendance is compulsory. If a student fails to get 75% of attendance, he or she is not eligible to appear for the examinations, as per University rules.' },
  { n: 6, text: 'Students are expected to read and follow notices/circulars displayed on the notice board from time to time.' },
  { n: 7, text: 'Students are advised to make full use of the facilities available in the college library and reading room. Unnecessary wandering on the corridor is considered as indiscipline.' },
  { n: 8, text: 'Students must help to keep the campus neat and clean. Do not scribble on the desks or the class boards or on the walls or trees of the college. Spitting, smoking and throwing bits of paper in the premises is prohibited.' },
  { n: 9, text: 'Misuse or unauthorized use of the Institute premises or items of the property, including computer misuse, library misuse, etc, will lead to disciplinary and penal action.' },
  { n: 10, text: 'Students shall observe strict modesty and decency in dress. Boys can wear formal dress (Trousers & Shirt), Jeans and Shirt. Girls can wear Salwar-Suit, Jeans and Kurta. Both boys and girls must not wear T-shirt and tight fit wears. For girls, without sleeve shirt and T-shirt, tight fit leggings and other such wears are strictly prohibited.' },
  { n: 11, text: 'Ragging is banned on the campus. Any incident of ragging will be dealt with serious disciplinary action.' },
  { n: 12, text: 'All vehicles should be parked in the allotted place.' },
  { n: 13, text: 'Students coming on their own vehicle must have valid license and follow the rules. Students coming on two wheelers have to compulsorily wear helmet and those coming by four wheelers must wear a seat belt.' },
  { n: 14, text: 'The Institute management is not responsible for the safety (including damage and/or theft /loss of vehicles) of vehicles in the premises.' },
  { n: 15, text: 'Students must ride/drive their vehicles into & at the campus at a moderate speed only; over speeding will be treated as an act of indiscipline and will attract adverse consequences.' },
  { n: 16, text: 'Bike race / motor car race / car rally or similar activities shall not be permitted inside the campus. Vehicles of any type shall not be used during celebrations inside the Institute campus.' },
  { n: 17, text: 'Food and beverages are not permitted in computer labs or classrooms. Those must be consumed in designated areas only.' },
  { n: 18, text: 'Smoking and consumption of alcohol on the Institute premises or entering the Institute premises after consuming alcoholic drinks is strictly prohibited. Usage of drugs is strictly prohibited.' },
  { n: 19, text: 'Students shall do nothing either inside or outside the Institute that will in any way interfere with its orderly conduct and discipline.' },
  { n: 20, text: 'No Society or Association shall be formed in the Institute and no person will be invited to address a meeting without the HOD’s or Principal’s prior permission.' },
  { n: 21, text: 'Students will not be allowed to take active part in current politics.' },
  { n: 22, text: 'The Institute is not responsible for lost property. However, student may make a claim for lost property at the office, provided the item is available in the Institute Office.' },
  { n: 23, text: 'Students receiving Government or Institute Scholarships or any remission in fees, must note that the grant and continuance thereof are subject to good behaviour, regular attendance and satisfactory progress and good results at the Institute and University Examinations.' },
  { n: 24, text: 'Students joining the Institute are bound by the rules and regulations of the Institute.' },
  { n: 25, text: 'The Principal is the ultimate disciplinary authority in the Institute.' },
];

export default function CodeOfConductPage() {
  return (
    <AcademicsLayout title="Code of Conduct for Students">

      {/* Letterhead — mirrors the exact layout of the source PDF's cover page */}
      <div className="text-center mb-8">
        <img src={college.smallLogo} alt="GRIET Seal" className="mx-auto w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3" />
        <h2 className="font-serif font-bold text-[1.375rem] sm:text-[1.75rem] text-black">
          GOKARAJU RANGARAJU
        </h2>
        <p className="font-serif font-bold text-[1rem] sm:text-[1.125rem] text-black mt-0.5">
          Institute of Engineering and Technology
        </p>
        <p className="font-serif font-bold text-[0.875rem] sm:text-[0.9375rem] text-black mt-0.5">
          (Autonomous)
        </p>
        <p className="font-serif font-bold text-[1rem] sm:text-[1.125rem] text-black mt-5">
          Code of conduct for Students
        </p>
        <p className="font-serif text-[0.9375rem] sm:text-base text-black mt-5 text-left">
          Students are requested to adhere to the following:
        </p>
      </div>

      {/* Numbered list — exact order and wording as the source PDF */}
      <ol className="rounded-xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-100">
        {RULES.map(({ n, text }) => (
          <li key={n} className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-4">
            <span
              className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full font-display font-bold text-[0.75rem] sm:text-[0.8125rem]"
              style={{ backgroundColor: `${college.primaryColor}12`, color: college.primaryColor }}
            >
              {n}
            </span>
            <p className="font-dm-sans text-[0.9375rem] sm:text-base leading-relaxed text-gray-700 pt-0.5">
              {text}
            </p>
          </li>
        ))}
      </ol>

      {/* Download link */}
      <div className="mt-6 text-center">
        <a
          href={PDF_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-dm-sans font-semibold text-[0.875rem] text-white transition-opacity hover:opacity-85"
          style={{ backgroundColor: college.primaryColor }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download Original PDF
        </a>
      </div>

    </AcademicsLayout>
  );
}
