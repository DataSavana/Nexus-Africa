import React from "react";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
