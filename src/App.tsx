import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import SkillLearningPage from './pages/SkillLearningPage';
import AIChatPage from './pages/AIChatPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/learn/:skillId" element={<SkillLearningPage />} />
        <Route path="/chat" element={<AIChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  );
}