import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';
import { Loader2 } from 'lucide-react';

// Lazy load pages to optimize bundle size
const Home = lazy(() => import('../pages/Home/Home'));
const Buy = lazy(() => import('../pages/Buy/Buy'));
const Sell = lazy(() => import('../pages/Sell/Sell'));
const Invest = lazy(() => import('../pages/Invest/Invest'));
const Agents = lazy(() => import('../pages/Agents/Agents'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const BlogDetail = lazy(() => import('../pages/Blog/BlogDetail'));
const About = lazy(() => import('../pages/About/About'));
const Careers = lazy(() => import('../pages/Careers/Careers'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const AuthPage = lazy(() => import('../pages/Auth/AuthPage'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
    <Loader2 className="w-8 h-8 animate-spin text-amber-500 mb-2" />
    <span className="text-sm font-medium animate-pulse">Loading experience...</span>
  </div>
);

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
          <Route element={<AuthLayout />}>
             <Route path="/auth/login" element={<AuthPage mode="login" />} />
             <Route path="/auth/signup" element={<AuthPage mode="signup" />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};