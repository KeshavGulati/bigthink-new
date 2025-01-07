import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PyoneersSection from "./components/PyoneersSection.jsx"
import EdgeSection from "./components/EDGESection.jsx";
import MeetTheTeam from "./components/MeetTheTeam.jsx";
import FaqSection from "./components/FaqSection.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <PyoneersSection />
      <EdgeSection />
      <MeetTheTeam />
      <FaqSection />
      <Footer />
    </div>

  )

}

export default App
