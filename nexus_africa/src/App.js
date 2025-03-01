import React from "react";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import DataPipeline from "./components/DataPipeline";
import WhyAfricanData from "./components/WhyAfricanData";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <About />
              <HowItWorks />
              <Features />
              <DataPipeline />
              <WhyAfricanData />
              <FAQ />
              <Contact />
              {!user && <CTA />} {/* Only show CTA if user is NOT logged in */}
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
