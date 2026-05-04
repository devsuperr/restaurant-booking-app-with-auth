import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import LogSessionPage from './pages/LogSessionPage';
import AnalyticsPage from './pages/AnalyticsPage';
import GroupPage from './pages/GroupPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/log" element={<LogSessionPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/group" element={<GroupPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}