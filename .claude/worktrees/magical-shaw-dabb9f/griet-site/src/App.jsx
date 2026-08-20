import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrietPage from './pages/GrietPage';
import AboutPage from './pages/AboutPage';
import AdministrationPage from './pages/AdministrationPage';
import ProgrammesPage from './pages/ProgrammesPage';
import AdmissionProcedurePage from './pages/AdmissionProcedurePage';
import FeeStructurePage from './pages/FeeStructurePage';
import EapcetLastRankPage from './pages/EapcetLastRankPage';
import EcetLastRankPage from './pages/EcetLastRankPage';
import ScholarshipsPage from './pages/ScholarshipsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GrietPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/admissions/programmes" element={<ProgrammesPage />} />
        <Route path="/admissions/admission-procedure" element={<AdmissionProcedurePage />} />
        <Route path="/admissions/fee-structure" element={<FeeStructurePage />} />
        <Route path="/admissions/eapcet-last-rank" element={<EapcetLastRankPage />} />
        <Route path="/admissions/ecet-last-rank" element={<EcetLastRankPage />} />
        <Route path="/admissions/scholarships" element={<ScholarshipsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
