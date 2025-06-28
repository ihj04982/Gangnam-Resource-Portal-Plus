import { Routes, Route, Navigate } from 'react-router';
import './App.css';
import React, { Suspense } from 'react';
import LargeWasteDisposalPage from './pages/LargeWasteDisposalPage/LargeWasteDisposalPage';
import AnnouncementsPage from './pages/NoticePage/AnnouncementsPage';
import FaqPage from './pages/NoticePage/FaqPage';
import FaqDetail from './pages/NoticePage/FaqDetail';
import AnnouncementsDetail from './pages/NoticePage/AnnouncementsDetail';
import FreeDisposalPage from './pages/FreeDisposalPage/FreeDisposalPage';
import CleanMain from './pages/CleanPage/CleanMain';
import Trash from './pages/CleanPage/component/Trash';
import Sewage from './pages/CleanPage/component/Sewage';
import RecycleStatistics from './pages/CleanPage/component/RecycleStatistics';
import Recycle from './pages/CleanPage/component/Recycle';
import Pet from './pages/CleanPage/component/Pet';
import GNRecycleCenter from './pages/CleanPage/component/GNRecycleCenter';
import GNEnvReCenter from './pages/CleanPage/component/GNEnvReCenter';
import GeneralRequest from './pages/CleanPage/component/GeneralRequest';
import BizTrash from './pages/CleanPage/component/BizTrash';
import CoffeeGround from './pages/CleanPage/component/CoffeeGround';
import GenCivilComplaint from './pages/CleanPage/component/GenCivilComplaint';

const AppLayout = React.lazy(() => import('./layout/AppLayout'));
const LocationPage = React.lazy(() => import('./pages/LocationPage/LocationPage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="largewaste">
            <Route index element={<LargeWasteDisposalPage />} />
            <Route path="free" element={<FreeDisposalPage />} />
          </Route>

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

          <Route path="locations" element={<LocationPage />} />
          <Route path="clean">
            <Route index element={<CleanMain />} />
            <Route path="trash" element={<Trash />} />
            <Route path="sewage" element={<Sewage />} />
            <Route path="recycle-statistics" element={<RecycleStatistics />} />
            <Route path="recycle" element={<Recycle />} />
            <Route path="pet" element={<Pet />} />
            <Route path="gn-recycle-center" element={<GNRecycleCenter />} />
            <Route path="gn-env-re-center" element={<GNEnvReCenter />} />
            <Route path="gn-request" element={<GeneralRequest />} />
            <Route path="biz-trash" element={<BizTrash />} />
            <Route path="coffee-ground" element={<CoffeeGround />} />
            <Route path="gn-civil" element={<GenCivilComplaint />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
