import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrietPage from './pages/GrietPage';
import AboutPage from './pages/AboutPage';
import AdministrationPage from './pages/AdministrationPage';
import RankingsPage from './pages/RankingsPage';
import ResearchPage from './pages/ResearchPage';
import PlacementsPage from './pages/PlacementsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ProgrammesPage from './pages/ProgrammesPage';
import AdmissionProcedurePage from './pages/AdmissionProcedurePage';
import FeeStructurePage from './pages/FeeStructurePage';
import EapcetLastRankPage from './pages/EapcetLastRankPage';
import EcetLastRankPage from './pages/EcetLastRankPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import AcademicsPage from './pages/AcademicsPage';
import RegulationsPage from './pages/RegulationsPage';
import SyllabusPage from './pages/SyllabusPage';
import AcademicCalendarPage from './pages/AcademicCalendarPage';
import LibraryPage from './pages/LibraryPage';
import CodeOfConductPage from './pages/CodeOfConductPage';
import CollegeDiaryPage from './pages/CollegeDiaryPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GrietPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/admissions/programmes" element={<ProgrammesPage />} />
        <Route path="/admissions/admission-procedure" element={<AdmissionProcedurePage />} />
        <Route path="/admissions/fee-structure" element={<FeeStructurePage />} />
        <Route path="/admissions/eapcet-last-rank" element={<EapcetLastRankPage />} />
        <Route path="/admissions/ecet-last-rank" element={<EcetLastRankPage />} />
        <Route path="/admissions/scholarships" element={<ScholarshipsPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/regulations" element={<RegulationsPage />} />
        <Route path="/academics/syllabus" element={<SyllabusPage />} />
        <Route path="/academics/academic-calendar" element={<AcademicCalendarPage />} />
        <Route path="/academics/library" element={<LibraryPage />} />
        <Route path="/academics/code-of-conduct" element={<CodeOfConductPage />} />
        <Route path="/academics/college-diary" element={<CollegeDiaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
