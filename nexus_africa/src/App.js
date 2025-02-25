import React from "react";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { Navbar } from './components/Navbar';
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import DataPipeline from "./components/DataPipeline";
import WhyAfricanData from "./components/WhyAfricanData";
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
      <Navbar />
      <HeroSection />
      <About />
      <HowItWorks />
      <Features />
      <DataPipeline />
      <WhyAfricanData />
      {/* <Pricing /> */}
      <FAQ />
      <Contact />
      {user ? null : <CTA />}
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
