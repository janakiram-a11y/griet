import { AcademicsBanner } from './AcademicsLayout';
import CollegeLayout from '../CollegeLayout';
import college from '../theme';

export default function AcademicsLayoutWithSidebar({ title, children, sidebar }) {
  return (
    <CollegeLayout college={college}>
      <AcademicsBanner title={title} />
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar — left */}
          {sidebar && (
            <aside className="w-full lg:w-60 flex-shrink-0">{sidebar}</aside>
          )}
          {/* Main content — right */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </CollegeLayout>
  );
}
