import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { AuthProvider } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import DashboardPage from '@/pages/DashboardPage';
import RateLogPage from '@/pages/RateLogPage';
import ClientsPage from '@/pages/ClientsPage';
import GoalsPage from '@/pages/GoalsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import NotFound from '@/pages/NotFound';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (user) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/login"
          element={<PublicRoute><LoginPage /></PublicRoute>}
        />
        <Route
          path="/signup"
          element={<PublicRoute><SignupPage /></PublicRoute>}
        />
        <Route
          path="/forgot-password"
          element={<PublicRoute><ForgotPasswordPage /></PublicRoute>}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="rates" element={<RateLogPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="goals" element={<GoalsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}