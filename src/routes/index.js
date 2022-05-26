import { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  HomePage,
  StagesPage,
  AboutPage,
  BureauPage,
  TravelerPage,
  PartnerPage,
} from 'pages';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Wrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/jinguashi-mining-bureau" element={<BureauPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/traveler" element={<TravelerPage />} />
          <Route path="/stages" element={<StagesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Wrapper>
    </AnimatePresence>
  );
};

export default Router;
