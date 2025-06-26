import { Routes, Route, Navigate } from 'react-router';
import './App.css';
import React, { Suspense } from 'react';
import LargeWasteDisposalPage from './pages/LargeWasteDisposalPage/LargeWasteDisposalPage';
import AnnouncementsPage from './pages/NoticePage/AnnouncementsPage';
import FaqPage from './pages/NoticePage/FaqPage';
import NoticeDetail from './pages/NoticePage/NoticeDetail';

const AppLayout = React.lazy(() => import('./layout/AppLayout'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="largewaste" element={<LargeWasteDisposalPage />} />
          <Route path="notice">
            <Route index element={<Navigate to="announcements" replace />} />
            <Route path="announcements">
              <Route index element={<AnnouncementsPage />} />
              <Route path=":id" element={<NoticeDetail />} />
            </Route>
            <Route path="faq">
              <Route index element={<FaqPage />} />
              <Route path=":id" element={<NoticeDetail />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
