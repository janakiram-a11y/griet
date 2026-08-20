import { Fragment } from 'react';
import AdmissionsLayout, { SectionHeading } from '../components/AdmissionsLayout';
import college from '../theme';

const ECET_BRANCHES_2025 = [
  { branch: 'CSE', boys: { OC: [100, 800], 'BC-A': [120, 900], 'BC-B': [180, 1200], SC: [500, 2500], ST: [800, 3000] }, girls: { OC: [150, 1000], 'BC-A': [160, 1100], 'BC-B': [220, 1400], SC: [600, 3000], ST: [900, 3500] } },
  { branch: 'ECE', boys: { OC: [500, 3000], 'BC-A': [600, 3500], 'BC-B': [1000, 5000], SC: [2000, 8000], ST: [3000, 10000] }, girls: { OC: [700, 3500], 'BC-A': [800, 4000], 'BC-B': [1200, 5500], SC: [2500, 9000], ST: [3500, 11000] } },
  { branch: 'EEE', boys: { OC: [1000, 5000], 'BC-A': [1200, 5500], 'BC-B': [2000, 7000], SC: [5000, 15000], ST: [7000, 18000] }, girls: { OC: [1200, 5500], 'BC-A': [1400, 6000], 'BC-B': [2200, 7500], SC: [5500, 16000], ST: [7500, 19000] } },
  { branch: 'ME', boys: { OC: [2000, 8000], 'BC-A': [2500, 9000], 'BC-B': [4000, 12000], SC: [8000, 20000], ST: [10000, 24000] }, girls: { OC: [2500, 9000], 'BC-A': [3000, 10000], 'BC-B': [4500, 13000], SC: [8500, 21000], ST: [11000, 25000] } },
  { branch: 'CE', boys: { OC: [3000, 10000], 'BC-A': [3500, 11000], 'BC-B': [5000, 14000], SC: [10000, 25000], ST: [12000, 28000] }, girls: { OC: [3500, 11000], 'BC-A': [4000, 12000], 'BC-B': [5500, 15000], SC: [11000, 26000], ST: [13000, 30000] } },
];

const CATEGORIES = ['OC', 'BC-A', 'BC-B', 'SC', 'ST'];
const YEARS = [
  { year: 'ECET: 2025–26  First & Last Ranks – Dept. wise', data: ECET_BRANCHES_2025 },
  { year: 'ECET: 2024–25  First & Last Ranks – Dept. wise', data: null },
  { year: 'ECET: 2023–24  First & Last Ranks – Dept. wise', data: null },
];

const thCell = { backgroundColor: college.primaryColor, color: '#fff', padding: '6px 10px', fontSize: '12px', fontWeight: 600, textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap' };
const tdCell = { padding: '6px 10px', fontSize: '12px', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', border: '1px solid #e5e7eb', color: '#374151' };

function RankTable({ data }) {
  return (
    <div className="overflow-x-auto mb-2">
      <table className="border-collapse" style={{ minWidth: 600 }}>
        <thead>
          <tr>
            <th rowSpan={2} style={{ ...thCell, minWidth: 70 }}>Branch</th>
            <th rowSpan={2} style={{ ...thCell, minWidth: 50 }}>B/G</th>
            {CATEGORIES.map((cat) => (
              <th key={cat} colSpan={2} style={thCell}>{cat}</th>
            ))}
          </tr>
          <tr>
            {CATEGORIES.map((cat) => (
              <>
                <th key={cat + 'F'} style={thCell}>First</th>
                <th key={cat + 'L'} style={thCell}>Last</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <Fragment key={row.branch}>
              <tr style={{ backgroundColor: ri % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <td rowSpan={2} style={{ ...tdCell, fontWeight: 600, color: college.primaryColor }}>{row.branch}</td>
                <td style={{ ...tdCell, fontWeight: 600 }}>B</td>
                {CATEGORIES.map((cat) => (
                  <Fragment key={cat}>
                    <td style={tdCell}>{row.boys[cat] ? row.boys[cat][0].toLocaleString() : '–'}</td>
                    <td style={tdCell}>{row.boys[cat] ? row.boys[cat][1].toLocaleString() : '–'}</td>
                  </Fragment>
                ))}
              </tr>
              <tr style={{ backgroundColor: ri % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <td style={{ ...tdCell, fontWeight: 600 }}>G</td>
                {CATEGORIES.map((cat) => (
                  <Fragment key={cat}>
                    <td style={tdCell}>{row.girls[cat] ? row.girls[cat][0].toLocaleString() : '–'}</td>
                    <td style={tdCell}>{row.girls[cat] ? row.girls[cat][1].toLocaleString() : '–'}</td>
                  </Fragment>
                ))}
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EcetLastRankPage() {
  return (
    <AdmissionsLayout title="ECET Last Rank">
      <p className="font-montserrat text-[13px] text-gray-600 mb-6">
        ECET (Engineering Common Entrance Test) is the lateral entry test for Diploma holders seeking admission to
        second year B.Tech programmes. The following are the first and last ranks for admissions through ECET.
      </p>
      <p className="font-montserrat text-[12px] text-gray-400 mb-6">
        B – Boys &nbsp;|&nbsp; G – Girls &nbsp;|&nbsp; All rank data is indicative. Actual data may vary.
      </p>

      {YEARS.map(({ year, data }) => (
        <section key={year} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <img src="/imgi_1_GRIET_Logo.png" alt="GRIET" className="h-8 w-8 object-contain" />
            <h2 className="font-poppins font-bold text-[15px] text-gray-800">{year}</h2>
          </div>
          {data ? (
            <RankTable data={data} />
          ) : (
            <p className="font-montserrat text-[13px] text-gray-400 italic border border-dashed border-gray-300 rounded p-4">
              Rank data for this year will be updated shortly.
            </p>
          )}
        </section>
      ))}
    </AdmissionsLayout>
  );
}
