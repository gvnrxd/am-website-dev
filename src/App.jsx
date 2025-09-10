import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import Components Here:
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Import pages Here:

import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import SiteMapPage from "./pages/SiteMapPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <div className="page">
        <header>
          <NavBar />
        </header>
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/site-map" element={<SiteMapPage />} />
            {/* Catch Unknown Routes */}
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
