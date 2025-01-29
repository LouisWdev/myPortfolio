// COMPONENTS
import Navbar from "./components/Navbar";

// PAGES
import Home from "./Home";
import AboutSection from "./Section/About/AboutSection";
import PortfolioSection from "./Section/PortfolioSection";

// STYLED COMPONENTS
import styled from "styled-components";
// REACT-ROUTER-DOM
import { Routes, Route } from "react-router-dom";
import ContactSection from "./Section/ContactSection";

function App() {

  return (
    <MainContainer>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<AboutSection />} />
            <Route path="/portfolio" element={<PortfolioSection />} />
            <Route path="/contact" element={<ContactSection />} />
        </Routes>
    </MainContainer>
  )
}

export default App

// STYLED 
const MainContainer = styled.div``;