import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { HomePage, StagesPage } from 'pages';

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/stages" element={<StagesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
