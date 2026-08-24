import AdministrationLayout from '../components/AdministrationLayout';
import college from '../theme';

function SectionHeading({ children }) {
  return (
    <h2
      className="font-display font-bold text-xl mb-5 pb-2 inline-block"
      style={{ color: college.primaryColor, borderBottom: `2px solid ${college.accentColor}` }}
    >
      {children}
    </h2>
  );
}

const composition = [
  { role: 'Chairperson', member: 'Chairman, GRES', name: null, photo: null },
  { role: 'Member', member: 'Director, GRIET', name: 'Dr. Jandhyala N Murthy', photo: 'https://www.griet.ac.in/images/gbpics/Dr.%20Jandhyala%20N%20Murthy.jpg' },
  { role: 'Member', member: 'Principal, GRIET', name: 'Dr. J Praveen', photo: 'https://www.griet.ac.in/images/gbpics/Dr%20J%20Praveen.jpg' },
  { role: 'Member', member: 'One member from the Governing Body', name: null, photo: null },
  { role: 'Member', member: 'Finance Officer / Accounts Officer', name: null, photo: null },
  { role: 'Member Secretary', member: 'Dean – Academics / Nominated Member', name: 'Dr. K Prasanna Lakshmi', photo: 'https://www.griet.ac.in/2022/iqac%20committee/prasanna%20lakshmi.jpg' },
];

const responsibilities = [
  'Examine and scrutinise the annual budget estimates of the institution',
  'Recommend the budget for approval of the Governing Body',
  'Review financial statements and audit reports',
  'Monitor proper utilisation of grants from government and other agencies',
  'Advise on investment of surplus funds and resource mobilisation',
  'Review policies on tuition fee, scholarships, and financial assistance',
  'Oversee expenditure on infrastructure, equipment, and academic activities',
  'Ensure compliance with statutory financial obligations',
];

export default function AdminFinanceCommitteePage() {
  return (
    <AdministrationLayout title="Finance Committee">
      <div className="space-y-8">

        <div>
          <SectionHeading>Finance Committee</SectionHeading>
          <p className="font-dm-sans text-base leading-relaxed text-gray-600 mb-2 max-w-2xl">
            The Finance Committee is a statutory body of the institution that oversees all financial matters,
            including budgeting, audit, expenditure, and resource mobilisation, reporting to the Governing Body.
          </p>
        </div>

        {/* Composition */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Committee Composition
          </h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-[0.9375rem] font-dm-sans">
              <thead>
                <tr style={{ backgroundColor: college.primaryColor }}>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem] w-36">Role</th>
                  <th className="px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem] min-w-[60px] w-16">Photo</th>
                  <th className="text-left px-4 py-2.5 text-white font-hind font-semibold text-[0.875rem]">Member</th>
                </tr>
              </thead>
              <tbody>
                {composition.map(({ role, member, name, photo }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100 font-semibold" style={{ color: college.accentColor }}>{role}</td>
                    <td className="px-4 py-3 border-b border-gray-100 min-w-[60px] w-16">
                      {photo ? (
                        <img
                          src={photo}
                          alt={name}
                          className="w-10 h-10 rounded-full object-cover border"
                          style={{ borderColor: college.primaryColor }}
                        />
                      ) : null}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-700">
                      {name && <span className="font-semibold text-gray-800">{name}</span>}
                      {name && ' — '}
                      {member}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Responsibilities */}
        <section>
          <h3 className="font-hind font-bold text-[17px] mb-4" style={{ color: college.primaryColor }}>
            Responsibilities
          </h3>
          <ul className="space-y-2.5">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 font-dm-sans text-base text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: college.accentColor }} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Meetings */}
        <section className="bg-[#F6F1F2] rounded-lg border border-gray-200 p-5">
          <h3 className="font-hind font-bold text-[16px] mb-3" style={{ color: college.primaryColor }}>
            Meeting Schedule
          </h3>
          <p className="font-dm-sans text-base text-gray-600">
            The Finance Committee meets at least twice a year — once before the commencement of the academic year
            for budget approval, and once after the financial year for audit review and accounts finalisation.
            Additional meetings are convened as and when required.
          </p>
        </section>

      </div>
    </AdministrationLayout>
  );
}
