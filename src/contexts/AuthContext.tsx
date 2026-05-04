import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  company: string;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const DEMO_USER: User = {
  id: 'u1',
  name: 'Alex Rivera',
  email: 'alex@leadpilot.ai',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces',
  role: 'Admin',
  company: 'LeadPilot Inc.',
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('lp_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = async (_email: string, _password: string): Promise<void> => {
    await new Promise(r => setTimeout(r, 900));
    setUser(DEMO_USER);
    localStorage.setItem('lp_user', JSON.stringify(DEMO_USER));
  };

  const signup = async (name: string, email: string, _password: string): Promise<void> => {
    await new Promise(r => setTimeout(r, 900));
    const newUser: User = { ...DEMO_USER, name, email };
    setUser(newUser);
    localStorage.setItem('lp_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lp_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}