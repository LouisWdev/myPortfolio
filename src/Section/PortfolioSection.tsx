// Components import
import styled from "styled-components";
import Footer from "../components/Footer";

// Portfolio Sections
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
         
        <AboutContainer>
          <AboutSection />
        </AboutContainer>

        <CtaContainer>
          <CtaComponent />
        </CtaContainer>
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
      height: 100vh;
      background-color: #061f2b;
`;

/* About section */
const AboutContainer = styled.div`
    height: 100vh;
`;


/* Call to action section */
const CtaContainer = styled.div``;