import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlecPage from './pages/GlecPage';
import AboutPage from './pages/AboutPage';
import DepartmentPage from './pages/DepartmentPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlecPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/vision-mission" element={<AboutPage />} />
        <Route path="/about/infrastructure" element={<AboutPage />} />
        {/* Additional pages — to be built */}
        <Route path="/administration" element={<AboutPage />} />
        <Route path="/admissions" element={<AboutPage />} />
        <Route path="/academics" element={<AboutPage />} />
        <Route path="/departments/:slug" element={<DepartmentPage />} />
        <Route path="/research" element={<AboutPage />} />
        <Route path="/placements" element={<AboutPage />} />
        <Route path="/examinations" element={<AboutPage />} />
        <Route path="/contact" element={<AboutPage />} />
        {/* Fallback */}
        <Route path="*" element={<GlecPage />} />
      </Routes>
    </BrowserRouter>
  );
}
