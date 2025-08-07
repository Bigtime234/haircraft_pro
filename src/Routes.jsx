import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ClientSuccessStories from './pages/client-success-stories';
import ConsultationProcess from './pages/consultation-process';
import HairCollections from './pages/hair-collections';
import QualityPromisePage from './pages/quality-promise';
import AboutTheExpert from './pages/about-the-expert';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutTheExpert />} />
        <Route path="/client-success-stories" element={<ClientSuccessStories />} />
        <Route path="/consultation-process" element={<ConsultationProcess />} />
        <Route path="/hair-collections" element={<HairCollections />} />
        <Route path="/quality-promise" element={<QualityPromisePage />} />
        <Route path="/about-the-expert" element={<AboutTheExpert />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
