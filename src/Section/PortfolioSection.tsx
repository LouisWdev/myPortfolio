// REACT
import { useEffect, useState } from "react";

// styled comps import
import styled from "styled-components";
import Footer from "../components/Footer";
import PortfolioProject from "./Portfolio/PortfolioProject";
import CtaComponent from "./Portfolio/CtaComponent";
import SkillsComponent from "./Portfolio/SkillsComponent";
import AboutSection from "./Portfolio/AboutSection";

// ARWES
// import { Animator, Dots } from "@arwes/react";

const PortfolioSection = () => {
  return (
    <MainContainer>
         <ProjectsSection>
             <PortfolioProject />
             <PortfolioProject />
             <PortfolioProject />
         </ProjectsSection>
         
         <SkillSection>
          <SkillsComponent />
         </SkillSection>
         
        <>
          <AboutSection />
        </>
        <>
          <CtaComponent />
        </>
       <Footer />
    </MainContainer>
  )
}

export default PortfolioSection

/* STYLED COMPONENTS */
const MainContainer = styled.div`
      display: block;
      background-color:#061f2b;
  `;

/* Project Card's Section */
const ProjectsSection = styled.div`
     padding: 5vh 20vw;
     padding-bottom: 40vh;
     background-color: #061f2b;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     gap: 4vh;
`;

/* Skills Section */
const SkillSection = styled.div`
  padding: 2vh 0;
  width: 30vw;
  margin-top: 10vh;
  margin: 0 35vw;
  padding: 2vh;
  color: #00ff00;
  border: 2px solid;
  font-family: 'Courier New', monospace;
`;