import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrietPage from './pages/GrietPage';
import DepartmentPage from './pages/DepartmentPage';
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
import EndowmentAwardsPage from './pages/EndowmentAwardsPage';
import FinishingSchoolPage from './pages/FinishingSchoolPage';
import DigitalWellbeingCouncilPage from './pages/DigitalWellbeingCouncilPage';
import ExaminationsPage from './pages/ExaminationsPage';
import GoldMedalsPage from './pages/GoldMedalsPage';
import ExamNotificationsPage from './pages/ExamNotificationsPage';
import ResultsPage from './pages/ResultsPage';
import ExamBranchDownloadsPage from './pages/ExamBranchDownloadsPage';
import TranscriptsCertificatesPage from './pages/TranscriptsCertificatesPage';

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
        <Route path="/academics/endowment-awards" element={<EndowmentAwardsPage />} />
        <Route path="/academics/finishing-school" element={<FinishingSchoolPage />} />
        <Route path="/academics/digital-wellbeing-council" element={<DigitalWellbeingCouncilPage />} />
        <Route path="/examinations" element={<ExaminationsPage />} />
        <Route path="/examinations/gold-medals" element={<GoldMedalsPage />} />
        <Route path="/examinations/exam-notifications" element={<ExamNotificationsPage />} />
        <Route path="/examinations/results" element={<ResultsPage />} />
        <Route path="/examinations/exam-branch-downloads" element={<ExamBranchDownloadsPage />} />
        <Route path="/examinations/transcripts-certificates" element={<TranscriptsCertificatesPage />} />
        <Route path="/departments/:deptId" element={<DepartmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
