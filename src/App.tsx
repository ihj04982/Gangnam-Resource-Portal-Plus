import { Routes, Route } from 'react-router';
import './App.css';
import React, { Suspense } from 'react';
import LargeWasteDisposalPage from './pages/LargeWasteDisposalPage/LargeWasteDisposalPage';
import FreeDisposalPage from './pages/FreeDisposalPage/FreeDisposalPage';

const AppLayout = React.lazy(() => import('./layout/AppLayout'));
const LocationPage = React.lazy(() => import('./pages/LocationPage/LocationPage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="largewaste" element={<LargeWasteDisposalPage />} />
          <Route path="freedisposal" element={<FreeDisposalPage />} />
          <Route path="locations" element={<LocationPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
