import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

/* ── Data ───────────────────────────────────────────────────────────
   Sourced from the existing GRIET website's Gold Medals page:
   https://www.griet.ac.in/goldmedals.php
   Roll numbers double as the photo filenames, so each row's `photo`
   is guaranteed to match that exact student.
──────────────────────────────────────────────────────────────────── */

const GRAD_YEARS = [
  {
    title: 'GRIET 23rd Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',   roll: '20245A0101', name: 'Aamanchi Bowmi',              cgpa: '9.66', photo: '/gold-medal-photos/20245a0101.jpg' },
      { sno: 2,  branch: 'EEE',  roll: '19241A0210', name: 'Chidugu Sindhu',               cgpa: '9.55', photo: '/gold-medal-photos/19241a0210.jpg' },
      { sno: 3,  branch: 'ME',   roll: '20245A0326', name: 'Vadla Tharun Kumar',           cgpa: '9.28', photo: '/gold-medal-photos/20245a0326.jpg' },
      { sno: 4,  branch: 'ECE',  roll: '19241A04B7', name: 'Tholeti Poojitha',             cgpa: '9.70', photo: '/gold-medal-photos/19241a04b7.jpg' },
      { sno: 5,  branch: 'CSE',  roll: '19241A05I1', name: 'Baki Divyasree',               cgpa: '9.82', photo: '/gold-medal-photos/19241a05i1.jpg' },
      { sno: 6,  branch: 'IT',   roll: '19241A1284', name: 'Karupotula Nipunika',          cgpa: '9.47', photo: '/gold-medal-photos/19241a1284.jpg' },
      { sno: 7,  branch: 'STE',  roll: '20241D2023', name: 'Shaik Ansar Ahmed',            cgpa: '9.00', photo: '/gold-medal-photos/20241d2023.jpg' },
      { sno: 8,  branch: 'PE',   roll: '20241D4311', name: 'Thatikonda Amulya',            cgpa: '8.99', photo: '/gold-medal-photos/20241d4311.jpg' },
      { sno: 9,  branch: 'DFM',  roll: '20241D5201', name: 'Deshini Aravind',              cgpa: '9.75', photo: '/gold-medal-photos/20241d5201.jpg' },
      { sno: 10, branch: 'VLSI', roll: '20241D5714', name: 'A Padmavathi',                 cgpa: '9.54', photo: '/gold-medal-photos/20241d5714.jpg' },
      { sno: 11, branch: 'CSE',  roll: '20241D5810', name: 'Singamsetty Ritwika',          cgpa: '9.41', photo: '/gold-medal-photos/20241d5810.jpg' },
      { sno: 12, branch: 'DS',   roll: '20241DB007', name: 'Summayya Banu',                cgpa: '9.25', photo: '/gold-medal-photos/20241db007.jpg' },
    ],
  },
  {
    title: 'GRIET 22nd Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',   roll: '18241A0187', name: 'Malraj Manvitha',              cgpa: '9.69', photo: '/gold-medal-photos/18241a0187.jpg' },
      { sno: 2,  branch: 'EEE',  roll: '18241A0212', name: 'Edulakanti Shubhani Reddy',    cgpa: '9.40', photo: '/gold-medal-photos/18241a0212.jpg' },
      { sno: 3,  branch: 'ME',   roll: '18241A0376', name: 'Dundumulla Sai Vikas Reddy',   cgpa: '9.57', photo: '/gold-medal-photos/18241a0376.jpg' },
      { sno: 4,  branch: 'ECE',  roll: '18241A04G9', name: 'Singitham Vyshnavi',           cgpa: '9.52', photo: '/gold-medal-photos/18241a04g9.jpg' },
      { sno: 5,  branch: 'CSE',  roll: '18241A05W4', name: 'Jampala Sri Naga Sai',         cgpa: '9.78', photo: '/gold-medal-photos/18241a05w4.jpg' },
      { sno: 6,  branch: 'IT',   roll: '18241A12E1', name: 'Duvvuri Lakshmi Prasanna',     cgpa: '9.63', photo: '/gold-medal-photos/18241a12e1.jpg' },
      { sno: 7,  branch: 'STE',  roll: '19241D2014', name: 'Nimishakavi Naga Sai Pravallika', cgpa: '9.82', photo: '/gold-medal-photos/19241d2014.jpg' },
      { sno: 8,  branch: 'PE',   roll: '19241D4307', name: 'Gajala Himavarsha',            cgpa: '9.24', photo: '/gold-medal-photos/19241d4307.jpg' },
      { sno: 9,  branch: 'DFM',  roll: '19241D5204', name: 'Gatlola Keerthi Reddy',        cgpa: '9.43', photo: '/gold-medal-photos/19241d5204.jpg' },
      { sno: 10, branch: 'VLSI', roll: '19241D5706', name: 'Pabba Sowmya',                 cgpa: '9.74', photo: '/gold-medal-photos/19241d5706.jpg' },
      { sno: 11, branch: 'CSE',  roll: '19241D5814', name: 'Velpuri Ramya Manaswi',        cgpa: '9.56', photo: '/gold-medal-photos/19241d5814.jpg' },
    ],
  },
  {
    title: 'GRIET 21st Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',   roll: '17241A01B0', name: 'Seshani Anjali',               cgpa: '9.56', photo: '/gold-medal-photos/17241a01b0.jpg' },
      { sno: 2,  branch: 'EEE',  roll: '17241A0217', name: 'Devasani Priyanka',            cgpa: '9.62', photo: '/gold-medal-photos/17241a0217.jpg' },
      { sno: 3,  branch: 'ME',   roll: '17241A0348', name: 'Sardar Harshit Singh',         cgpa: '9.71', photo: '/gold-medal-photos/17241a0348.jpg' },
      { sno: 4,  branch: 'ECE',  roll: '17241A04Q1', name: 'Ineedu Sai Nikhila',           cgpa: '9.69', photo: '/gold-medal-photos/17241a04q1.jpg' },
      { sno: 5,  branch: 'CSE',  roll: '17241A05L2', name: 'M Prameela',                   cgpa: '9.74', photo: '/gold-medal-photos/17241a05l2.jpg' },
      { sno: 6,  branch: 'IT',   roll: '17241A12G4', name: 'Rayala Lohitaa',               cgpa: '9.64', photo: '/gold-medal-photos/17241a12g4.jpg' },
      { sno: 7,  branch: 'STE',  roll: '18241D2018', name: 'Thoodi Prashanth',             cgpa: '9.37', photo: '/gold-medal-photos/18241d2018.jpg' },
      { sno: 8,  branch: 'TE',   roll: '18241D2102', name: 'Varada Anil Hemanth',          cgpa: '9.54', photo: '/gold-medal-photos/18241d2102.jpg' },
      { sno: 9,  branch: 'SE',   roll: '18241D2511', name: 'Swetha Gooty Kase',            cgpa: '9.53', photo: '/gold-medal-photos/18241d2511.jpg' },
      { sno: 10, branch: 'PE',   roll: '18241D4303', name: 'Duvvuru Sravya',               cgpa: '9.25', photo: '/gold-medal-photos/18241d4303.jpg' },
      { sno: 11, branch: 'DFM',  roll: '18241D5212', name: 'Marelli Divya',                cgpa: '9.62', photo: '/gold-medal-photos/18241d5212.jpg' },
      { sno: 12, branch: 'ES',   roll: '18241D5502', name: 'Rathi Ankita',                 cgpa: '9.56', photo: '/gold-medal-photos/18241d5502.jpg' },
      { sno: 13, branch: 'VLSI', roll: '18241D5704', name: 'Chinthalgiri Jyothi',          cgpa: '9.18', photo: '/gold-medal-photos/18241d5704.jpg' },
      { sno: 14, branch: 'CSE',  roll: '18241D5815', name: 'Sree Sandhya Nune',            cgpa: '9.53', photo: '/gold-medal-photos/18241d5815.jpg' },
      { sno: 15, branch: 'PS',   roll: '18241D8302', name: 'Kunduru Laxmi Pavan Kumar Reddy', cgpa: '9.47', photo: '/gold-medal-photos/18241d8302.jpg' },
    ],
  },
  {
    title: 'GRIET 20th Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',   roll: '16241A0185', name: 'Kolupula Ramya',               cgpa: '9.79', photo: '/gold-medal-photos/16241a0185.jpg' },
      { sno: 2,  branch: 'CE',   roll: '17245A0112', name: 'Ganna Ravalika',               cgpa: '9.79', photo: '/gold-medal-photos/17245a0112.jpg' },
      { sno: 3,  branch: 'EEE',  roll: '16241A0259', name: 'Vipparthi Sowmya',             cgpa: '9.86', photo: '/gold-medal-photos/16241a0259.jpg' },
      { sno: 4,  branch: 'ME',   roll: '16241A0314', name: 'Chandu Gangadhara Rao',        cgpa: '9.81', photo: '/gold-medal-photos/16241a0314.jpg' },
      { sno: 5,  branch: 'ECE',  roll: '16241A04K6', name: 'Kolloju Anusha',               cgpa: '9.98', photo: '/gold-medal-photos/16241a04k6.jpg' },
      { sno: 6,  branch: 'CSE',  roll: '16241A05S4', name: 'Shaik Tasleem',                cgpa: '9.98', photo: '/gold-medal-photos/16241a05s4.jpg' },
      { sno: 7,  branch: 'IT',   roll: '16241A1236', name: 'Nistala Kameswari Shalini',    cgpa: '9.92', photo: '/gold-medal-photos/16241a1236.jpg' },
      { sno: 8,  branch: 'STE',  roll: '17241D2007', name: 'Gudi Sukesh Reddy',            cgpa: '8.68', photo: '/gold-medal-photos/17241d2007.jpg' },
      { sno: 9,  branch: 'TE',   roll: '17241D2120', name: 'Upadhyayula Harish Kumar',     cgpa: '9.18', photo: '/gold-medal-photos/17241d2120.jpg' },
      { sno: 10, branch: 'SE',   roll: '17241D2501', name: 'Airpula Divya Rani',           cgpa: '9.45', photo: '/gold-medal-photos/17241d2501.jpg' },
      { sno: 11, branch: 'PE',   roll: '17241D4302', name: 'Badepalle Yogeswara Reddy',    cgpa: '8.84', photo: '/gold-medal-photos/17241d4302.jpg' },
      { sno: 12, branch: 'PE',   roll: '17241D4308', name: 'M Vaishnavi',                  cgpa: '8.84', photo: '/gold-medal-photos/17241d4308.jpg' },
      { sno: 13, branch: 'DFM',  roll: '17241D5217', name: 'Pavan C',                      cgpa: '9.25', photo: '/gold-medal-photos/17241d5217.jpg' },
      { sno: 14, branch: 'ES',   roll: '17241D5505', name: 'Gandasiri Mounika',            cgpa: '9.16', photo: '/gold-medal-photos/17241d5505.jpg' },
      { sno: 15, branch: 'VLSI', roll: '17241D5710', name: 'Rotala Uma Rani',              cgpa: '9.45', photo: '/gold-medal-photos/17241d5710.jpg' },
      { sno: 16, branch: 'CSE',  roll: '17241D5814', name: 'Maidam Manisha',               cgpa: '9.59', photo: '/gold-medal-photos/17241d5814.jpg' },
      { sno: 17, branch: 'PS',   roll: '17241D8310', name: 'Kotte Saisree Reddy',          cgpa: '9.34', photo: '/gold-medal-photos/17241d8310.jpg' },
    ],
  },
  {
    title: 'GRIET 19th Graduation Day Gold Medal Holders',
    rows: [
      { sno: 1,  branch: 'CE',   roll: '15241A0188', name: 'Jangam Santhosh Kumar',        cgpa: '9.74', photo: '/gold-medal-photos/15241a0188.jpg' },
      { sno: 2,  branch: 'EEE',  roll: '15241A0292', name: 'Koya Madhuri',                 cgpa: '9.90', photo: '/gold-medal-photos/15241a0292.jpg' },
      { sno: 3,  branch: 'ME',   roll: '16245A0324', name: 'Yenugula Venkatasai',          cgpa: '9.86', photo: '/gold-medal-photos/16245a0324.jpg' },
      { sno: 4,  branch: 'ECE',  roll: '15241A0412', name: 'Goruganthu Tirumala Sai Teja', cgpa: '9.97', photo: '/gold-medal-photos/15241a0412.jpg' },
      { sno: 5,  branch: 'CSE',  roll: '15241A0510', name: 'Bhimavarapu Sai Sindhu',       cgpa: '9.92', photo: '/gold-medal-photos/15241a0510.jpg' },
      { sno: 6,  branch: 'IT',   roll: '15241A1255', name: 'Tishant Ghode',                cgpa: '9.79', photo: '/gold-medal-photos/15241a1255.jpg' },
      { sno: 7,  branch: 'STE',  roll: '16241D2001', name: 'Chilveri Bhasker',             cgpa: '9.77', photo: '/gold-medal-photos/16241d2001.jpg' },
      { sno: 8,  branch: 'TE',   roll: '16241D2107', name: 'Gannu Lavanya',                cgpa: '9.64', photo: '/gold-medal-photos/16241d2107.jpg' },
      { sno: 9,  branch: 'SE',   roll: '16241D2509', name: 'Velthuru Vinisha',             cgpa: '9.82', photo: '/gold-medal-photos/16241d2509.jpg' },
      { sno: 10, branch: 'PE',   roll: '16241D4303', name: 'Marupaka Divya',               cgpa: '9.82', photo: '/gold-medal-photos/16241d4303.jpg' },
      { sno: 11, branch: 'DFM',  roll: '16241D5205', name: 'S Devakar Reddy',              cgpa: '9.73', photo: '/gold-medal-photos/16241d5205.jpg' },
      { sno: 12, branch: 'ES',   roll: '16241D5512', name: 'Jahnavi Mekala',               cgpa: '9.91', photo: '/gold-medal-photos/16241d5512.jpg' },
      { sno: 13, branch: 'VLSI', roll: '16241D5709', name: 'Kadavergu Aishwarya',          cgpa: '9.64', photo: '/gold-medal-photos/16241d5709.jpg' },
      { sno: 14, branch: 'CSE',  roll: '16241D5815', name: 'Kollipara Sahithi',            cgpa: '9.86', photo: '/gold-medal-photos/16241d5815.jpg' },
      { sno: 15, branch: 'PS',   roll: '16241D8302', name: 'Ch Rajasri',                   cgpa: '9.77', photo: '/gold-medal-photos/16241d8302.jpg' },
    ],
  },
];

const JNTU_MEDALS = [
  { sno: 1,  year: '2013-14', dept: 'CE',   roll: '10241A0145', name: 'Pentala Divya',                 pct: '89.3',  rank: 1 },
  { sno: 2,  year: '2013-14', dept: 'CSE',  roll: '10241A0541', name: 'Mittal Vidhi',                  pct: '89.2',  rank: 1 },
  { sno: 3,  year: '2013-14', dept: 'BME',  roll: '10241A1103', name: 'Ch Bhavana',                    pct: '86.5',  rank: 1 },
  { sno: 4,  year: '2011-12', dept: 'BT',   roll: '08241A2372', name: 'K Ramya',                       pct: '86.65', rank: 1 },
  { sno: 5,  year: '2010-11', dept: 'IT',   roll: '07241A12A0', name: 'Shanthik K',                    pct: '86.3',  rank: 1 },
  { sno: 6,  year: '2009-10', dept: 'MECH', roll: '06241A0384', name: 'Mrunalini B',                   pct: '86.87', rank: 1 },
  { sno: 7,  year: '2009-10', dept: 'IT',   roll: '06241A1273', name: 'K Raghav Pavan Srivatsav',      pct: '84.38', rank: 1 },
  { sno: 8,  year: '2008-09', dept: 'EEE',  roll: '05241A0211', name: 'V N Lalit Madhur Mandal',       pct: '82.44', rank: 1 },
  { sno: 9,  year: '2008-09', dept: 'BME',  roll: '05241A1114', name: 'M Nrutya',                      pct: '83.02', rank: 1 },
  { sno: 10, year: '2008-09', dept: 'ME',   roll: '05241A0323', name: 'Harshal A Mungikar',            pct: '84.79', rank: 1 },
  { sno: 11, year: '2007-08', dept: 'BME',  roll: '04241A1102', name: 'M Alekhya',                     pct: '87.49', rank: 1 },
  { sno: 12, year: '2005-06', dept: 'MCA',  roll: '03241F0001', name: 'Achuta Laxmi V',                pct: '89.9',  rank: 1 },
  { sno: 13, year: '2004-05', dept: 'IT',   roll: '01241A1204', name: 'T V Manjana',                   pct: '84.17', rank: 1 },
];

/* ── Sub-components ─────────────────────────────────────────────── */

function PersonIcon() {
  return (
    <svg viewBox="0 0 40 48" className="w-20 h-20 mx-auto max-w-none flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="48" rx="2" fill="#f3f4f6" />
      <circle cx="20" cy="16" r="8" fill="#d1d5db" />
      <path d="M4 42c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#d1d5db" />
    </svg>
  );
}

function StudentPhoto({ src, name }) {
  if (!src) return <PersonIcon />;
  return (
    <img
      src={src}
      alt={name}
      className="w-20 h-20 mx-auto object-cover rounded-sm max-w-none flex-shrink-0"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextSibling.style.display = 'block';
      }}
    />
  );
}

const TH = ({ children, narrow }) => (
  <th style={{
    backgroundColor: college.primaryColor,
    color: '#fff',
    padding: narrow ? '10px 10px' : '10px 14px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: 700,
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
    whiteSpace: 'nowrap',
  }}>
    {children}
  </th>
);

const TD = ({ children, narrow }) => (
  <td style={{
    padding: narrow ? '8px 10px' : '8px 14px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    border: '1px solid #e5e7eb',
    textAlign: 'center',
    color: '#374151',
  }}>
    {children}
  </td>
);

function GradYearSection({ title, rows }) {
  return (
    <div className="mb-10">
      <div
        className="px-4 py-2.5 rounded-t font-hind font-bold text-[0.9375rem] text-white"
        style={{ backgroundColor: college.primaryColor }}
      >
        {title}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb', minWidth: '500px' }}>
          <thead>
            <tr>
              <TH narrow>S.No</TH>
              <TH>Branch</TH>
              <TH>Roll No</TH>
              <TH>Name</TH>
              <TH narrow>CGPA</TH>
              <TH narrow>Photo</TH>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                <TD narrow>{r.sno}</TD>
                <TD>{r.branch}</TD>
                <TD>{r.roll}</TD>
                <TD>{r.name}</TD>
                <TD narrow>
                  <span className="font-semibold" style={{ color: college.primaryColor }}>{r.cgpa}</span>
                </TD>
                <TD narrow><StudentPhoto src={r.photo} name={r.name} /></TD>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function GoldMedalsPage() {
  return (
    <AcademicsLayout title="Gold Medals">
      {/* Graduation year tables */}
      {GRAD_YEARS.map((section) => (
        <GradYearSection key={section.title} {...section} />
      ))}

      {/* JNTU section */}
      <div className="mb-4">
        <div
          className="px-4 py-2.5 rounded-t font-hind font-bold text-[0.9375rem] text-white"
          style={{ backgroundColor: '#5B1027' }}
        >
          JNTU Awarded Gold Medals for GRIETians
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ border: '1px solid #e5e7eb', minWidth: '600px' }}>
            <thead>
              <tr>
                {['S.No', 'Year', 'Branch', 'Roll No', 'Name', 'Percentage / Total', 'Rank'].map((h) => (
                  <th key={h} style={{
                    backgroundColor: '#5B1027',
                    color: '#fff',
                    padding: '10px 14px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                    whiteSpace: 'nowrap',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {JNTU_MEDALS.map((r, i) => (
                <tr key={r.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                  {[r.sno, r.year, r.dept, r.roll, r.name, r.pct, r.rank].map((cell, j) => (
                    <td key={j} style={{
                      padding: '8px 14px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      border: '1px solid #e5e7eb',
                      textAlign: 'center',
                      color: '#374151',
                    }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AcademicsLayout>
  );
}
