import AdmissionsLayout, { SectionHeading } from '../components/AdmissionsLayout';
import college from '../theme';

const ugPrograms = [
  { sno: 1, name: 'B.Tech-Electronics and Communication Engineering', nba: true, intake: 60 },
  { sno: 2, name: 'B.Tech-Electrical and Electronics Engineering', nba: true, intake: 30 },
  { sno: 3, name: 'B.Tech-Computer Science and Engineering', nba: true, intake: 600 },
  { sno: 4, name: 'B.Tech-Mechanical Engineering', nba: true, intake: 30 },
  { sno: 5, name: 'B.Tech-Civil Engineering', nba: true, intake: 30 },
  { sno: 6, name: 'B.Tech-Computer Science and Business System', nba: false, intake: 60 },
  { sno: 7, name: 'B.Tech-CSE (Artificial Intelligence and Machine Learning)', nba: false, intake: 300 },
  { sno: 8, name: 'B.Tech-CSE (Data Science)', nba: false, intake: 210 },
];

const pgPrograms = [
  { sno: 1, name: 'M.Tech-Computer Science and Engineering', nba: true, intake: 12 },
  { sno: 2, name: 'M.Tech-Structural Engineering', nba: true, intake: 18 },
];

const thStyle = {
  backgroundColor: college.primaryColor,
  color: '#ffffff',
  padding: '10px 14px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  fontWeight: 600,
  textAlign: 'left',
  borderRight: '1px solid rgba(255,255,255,0.15)',
};

const tdStyle = {
  padding: '9px 14px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '13px',
  color: '#374151',
  borderBottom: '1px solid #e5e7eb',
  borderRight: '1px solid #e5e7eb',
};

function ProgramTable({ data, headers }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb' }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} style={thStyle}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.sno} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
              <td style={tdStyle}>{row.sno}</td>
              <td style={tdStyle}>
                {row.name}{row.nba && <sup style={{ color: college.primaryColor, fontWeight: 700 }}>*</sup>}
              </td>
              <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 600 }}>{row.intake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProgrammesPage() {
  return (
    <AdmissionsLayout title="Programmes">
      <p className="font-montserrat text-[14px] text-gray-800 mb-4">
        GRIET is offering the following UG and PG Programmes for A.Y 2025–26:
      </p>
      <ul className="font-montserrat text-[14px] text-gray-800 mb-8 space-y-1 list-disc list-inside">
        <li>70 % of the seats are allotted based on the merit in the entrance exam.</li>
        <li>30 % of the seats are earmarked for Management/NRI candidates.</li>
        <li>Diploma holders are admitted in second year of B. Tech to the extent of 10% of intake based on the merit entrance exam, under lateral entry scheme.</li>
      </ul>

      <SectionHeading>UG Programmes</SectionHeading>
      <ProgramTable data={ugPrograms} headers={['S.No', 'UG Programme', 'Intake']} />

      <SectionHeading>PG Programmes</SectionHeading>
      <ProgramTable data={pgPrograms} headers={['S.No', 'PG Programme', 'Intake']} />

      <p className="font-montserrat text-[13px] text-gray-600 mt-2">
        <sup style={{ color: college.primaryColor, fontWeight: 700 }}>*</sup> NBA Accreditated
      </p>
    </AdmissionsLayout>
  );
}
