import { Routes, Route, Navigate } from 'react-router';
import './App.css';
import React, { Suspense } from 'react';
import LargeWasteDisposalPage from './pages/LargeWasteDisposalPage/LargeWasteDisposalPage';
import AnnouncementsPage from './pages/NoticePage/AnnouncementsPage';
import FaqPage from './pages/NoticePage/FaqPage';
import FaqDetail from './pages/NoticePage/FaqDetail';
import AnnouncementsDetail from './pages/NoticePage/AnnouncementsDetail';
import FreeDisposalPage from './pages/FreeDisposalPage/FreeDisposalPage';
import CircleMenu from './pages/CleanPage/component/menu/CircleMenu';
import CleanMainPage from './pages/CleanPage/CleanMainPage';

const AppLayout = React.lazy(() => import('./layout/AppLayout'));
const LocationPage = React.lazy(() => import('./pages/LocationPage/LocationPage'));

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
              <Route path=":id" element={<AnnouncementsDetail />} />
            </Route>
            <Route path="faq">
              <Route index element={<FaqPage />} />
              <Route path=":id" element={<FaqDetail />} />
            </Route>
          </Route>
          <Route path="freedisposal" element={<FreeDisposalPage />} />
          <Route path="locations" element={<LocationPage />} />
          <Route path="/clean" element={<CleanMainPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
