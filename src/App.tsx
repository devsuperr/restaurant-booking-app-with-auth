import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import AppliancesPage from './pages/AppliancesPage';
import ApplianceDetailPage from './pages/ApplianceDetailPage';
import WarrantiesPage from './pages/WarrantiesPage';
import MaintenancePage from './pages/MaintenancePage';
import SearchPage from './pages/SearchPage';
import RemindersPage from './pages/RemindersPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/appliances" element={<AppliancesPage />} />
        <Route path="/appliances/:id" element={<ApplianceDetailPage />} />
        <Route path="/warranties" element={<WarrantiesPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/reminders" element={<RemindersPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}