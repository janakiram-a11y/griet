import { Link } from 'react-router-dom';
import AcademicsLayout from '../components/AcademicsLayout';
import college from '../theme';

const quickLinks = [
  { label: 'Regulations', href: '/academics/regulations', desc: 'Academic regulation codes by year of admission' },
  { label: 'Syllabus', href: '/academics/syllabus', desc: 'UG & PG branch-wise syllabus PDFs by regulation' },
  { label: 'Academic Calendar', href: '/academics/academic-calendar', desc: 'Year-wise academic schedules for B.Tech & M.Tech' },
  { label: 'Library', href: '/academics/library', desc: 'Books, e-resources, journals and library timings' },
  { label: 'Scholarships', href: '/admissions/scholarships', desc: 'Rank-based, government and endowment scholarships' },
  { label: 'Moodle', href: '#', desc: 'Online learning management system for courses' },
];

export default function AcademicsPage() {
  return (
    <AcademicsLayout title="Academics">

      {/* Overview paragraphs */}
      <div className="max-w-3xl mb-10 space-y-4 font-montserrat text-[14px] leading-relaxed text-gray-700">
        <p>
          The departments of GRIET are responsible for academic activities which include Teaching,
          Research and Industrial Consultancy. Courses of study are organized on semester basis and
          the medium of instruction is English.
        </p>
        <p>
          Students are evaluated continuously across two semesters per year, each providing a minimum
          of seventeen weeks of instruction. Evaluation comprises Continuous Internal Evaluation (CIE)
          and Semester End Examination (SEE), balanced with co-curricular activities.
        </p>
        <p>
          Special lectures under the Extra Mural Lecture series, conferences, symposia, workshops,
          guest lectures, and industrial visits complement classroom interactions. All academic
          activities are monitored by the Dean of Academic Affairs.
        </p>
      </div>

      {/* Quick links grid */}
      <div>
        <h3 className="font-poppins font-bold text-[17px] mb-5" style={{ color: college.primaryColor }}>
          Academics Quick Links
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href + link.label}
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

    </AcademicsLayout>
  );
}
