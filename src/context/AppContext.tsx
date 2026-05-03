import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ChatMessage } from '../lib/mockData';
import { AI_RESPONSES } from '../lib/mockData';

interface OnboardingData {
  language: string;
  interests: string[];
  goal: string;
  experience: string;
  completed: boolean;
}

interface AppContextType {
  onboardingData: OnboardingData;
  setOnboardingData: (data: Partial<OnboardingData>) => void;
  isOnboarded: boolean;
  setIsOnboarded: (v: boolean) => void;
  chatMessages: ChatMessage[];
  sendMessage: (text: string) => void;
  currentSkillId: string;
  setCurrentSkillId: (id: string) => void;
  totalEarned: number;
  addEarning: (amount: number) => void;
  completedDays: number[];
  completeDay: (day: number) => void;
}

const AppContext = createContext<AppContextType | null>(null);

function getAIResponse(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes('fast') || lower.includes('jaldi') || lower.includes('quickly')) return AI_RESPONSES.fast;
  if (lower.includes('task') || lower.includes('kaam')) return AI_RESPONSES.task;
  if (lower.includes('earn') || lower.includes('paisa') || lower.includes('money') || lower.includes('kamai')) return AI_RESPONSES.earn;
  if (lower.includes('motivat') || lower.includes('help') || lower.includes('dar') || lower.includes('nervous')) return AI_RESPONSES.motivation;
  if (lower.includes('skill') || lower.includes('seekh') || lower.includes('learn')) return AI_RESPONSES.skill;
  if (lower.includes('kya') || lower.includes('what') || lower.includes('how') || lower.includes('kaise')) return AI_RESPONSES.help;
  return AI_RESPONSES.default;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [onboardingData, setOnboardingDataState] = useState<OnboardingData>({
    language: '',
    interests: [],
    goal: '',
    experience: '',
    completed: false,
  });
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'ai',
      content: '👋 Namaste! Main hoon tumhara AI Coach!\n\nSkillForBharat mein aapka swagat hai! 🎉\n\nMujhse kuch bhi puchho – skills, tasks, earning tips – sab bataunga simple language mein!\n\nKya jaanna chahte ho? 👇',
      timestamp: new Date(),
    },
  ]);
  const [currentSkillId, setCurrentSkillId] = useState('video-editing');
  const [totalEarned, setTotalEarned] = useState(1850);
  const [completedDays, setCompletedDays] = useState<number[]>([1, 2, 3]);

  const setOnboardingData = useCallback((data: Partial<OnboardingData>) => {
    setOnboardingDataState(prev => ({ ...prev, ...data }));
  }, []);

  const sendMessage = useCallback((text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setChatMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: getAIResponse(text),
        timestamp: new Date(),
      };
      setChatMessages(prev => [...prev, aiMsg]);
    }, 1000 + Math.random() * 500);
  }, []);

  const addEarning = useCallback((amount: number) => {
    setTotalEarned(prev => prev + amount);
  }, []);

  const completeDay = useCallback((day: number) => {
    setCompletedDays(prev => prev.includes(day) ? prev : [...prev, day]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        onboardingData,
        setOnboardingData,
        isOnboarded,
        setIsOnboarded,
        chatMessages,
        sendMessage,
        currentSkillId,
        setCurrentSkillId,
        totalEarned,
        addEarning,
        completedDays,
        completeDay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}