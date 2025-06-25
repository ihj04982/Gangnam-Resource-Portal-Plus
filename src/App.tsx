import { Routes, Route } from 'react-router';
import './App.css';
import React, { Suspense } from 'react';
import LargeWasteDisposalPage from './pages/LargeWasteDisposalPage/LargeWasteDisposalPage';

const AppLayout = React.lazy(() => import('./layout/AppLayout'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="largewaste" element={<LargeWasteDisposalPage />} />
        </Route>     
      </Routes>
    </Suspense>
  );
};

export default App;
