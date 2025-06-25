import React, { Suspense } from 'react';
import './App.css';
import LoadingSpinner from './common/components/LoadingSpinner';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const LargeWasteDisposalPage = React.lazy(() => import('./pages/LargeWasteDisposalPage/LargeWasteDisposalPage'));

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* HomePage는 별도 */}
        <Route path="/" element={<HomePage />} />

        {/* AppLayout이 필요한 경로 */}
        <Route path="/largewaste" element={<AppLayout />}>
          <Route index element={<LargeWasteDisposalPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
