import { Routes, Route } from 'react-router';
import './App.css';
import React, { Suspense } from 'react';

const AppLayout = React.lazy(() => import('./layout/AppLayout'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
      </Routes>
    </Suspense>
  );
};

export default App;
