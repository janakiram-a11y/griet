import { useState } from 'react';
import AdmissionsLayout, { SectionHeading } from '../components/AdmissionsLayout';
import college from '../theme';

const bTechFees = [
  {
    year: 'Year of Admission 2025-26',
    headers: ['B.Tech (Four Year Duration)', '(2025-26)\nI Year', '(2026-27)\nII Year', '(2027-28)\nIII Year', '(2028-29)\nIV Year'],
    rows: [
      ['Tuition Fee', '₹ 1,60,500', '₹ 1,60,500', '₹ 1,60,500', '₹ 1,60,500'],
      ['Special Fee', '₹ 5,500', '₹ 2,500', '₹ 2,500', '₹ 2,500'],
      ['NBA Fee', '₹ 3,000', '₹ 3,000', '₹ 3,000', '₹ 3,000'],
    ],
  },
  { year: 'Year of Admission 2024-25' },
  { year: 'Year of Admission 2023-24' },
  { year: 'Year of Admission 2022-23' },
  { year: 'Year of Admission 2021-22' },
  { year: 'Year of Admission 2020-21' },
  { year: 'Year of Admission 2019-20' },
  { year: 'Year of Admission 2018-19' },
  { year: 'Year of Admission 2017-18' },
  { year: 'Year of Admission 2016-17' },
  { year: 'Year of Admission 2015-16' },
];

const mTechFees = [
  {
    year: 'Year of Admission 2025-26',
    headers: ['M.Tech (Two Year Duration)', 'I Year', 'II Year'],
    rows: [
      ['Tuition Fee', '₹ 86,400', '₹ 86,400'],
      ['Special Fee', '₹ 7,500', '₹ 4,500'],
    ],
  },
  { year: 'Year of Admission 2024-25' },
  { year: 'Year of Admission 2023-24' },
  { year: 'Year of Admission 2022-23' },
];

function FeeTable({ headers, rows }) {
  const tdBase = 'px-4 py-2 font-montserrat text-[13px] text-gray-800 border-b border-r border-gray-200';
  return (
    <div className="overflow-x-auto mt-1 mb-3">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-2 font-montserrat text-[13px] font-semibold text-gray-700 text-left border-b border-r border-gray-200 bg-gray-50 whitespace-pre-line"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? '#ffffff' : '#fafafa' }}>
              {row.map((cell, ci) => (
                <td key={ci} className={tdBase}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AccordionSection({ entry, isOpen, onToggle }) {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3 text-left font-montserrat font-semibold text-[13px] text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: college.primaryColor, borderRadius: 4 }}
      >
        <span>{entry.year}</span>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && entry.rows && (
        <FeeTable headers={entry.headers} rows={entry.rows} />
      )}
    </div>
  );
}

export default function FeeStructurePage() {
  const [openBTech, setOpenBTech] = useState(0);
  const [openMTech, setOpenMTech] = useState(0);

  return (
    <AdmissionsLayout title="Fee Structure and Payment Procedure">
      <p className="font-montserrat text-[14px] text-gray-700 mb-6">
        Existing students can pay the fees as per the fee structure through online (Digitally).
      </p>

      <section className="mb-10">
        <SectionHeading>B Tech Programmes</SectionHeading>
        <div className="mt-3">
          {bTechFees.map((entry, i) => (
            <AccordionSection
              key={entry.year}
              entry={entry}
              isOpen={openBTech === i}
              onToggle={() => setOpenBTech(openBTech === i ? null : i)}
            />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading>M Tech Programmes</SectionHeading>
        <div className="mt-3">
          {mTechFees.map((entry, i) => (
            <AccordionSection
              key={entry.year}
              entry={entry}
              isOpen={openMTech === i}
              onToggle={() => setOpenMTech(openMTech === i ? null : i)}
            />
          ))}
        </div>
      </section>
    </AdmissionsLayout>
  );
}
