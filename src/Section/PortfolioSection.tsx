// REACT
import { useEffect, useState } from "react";

// styled comps import
import styled from "styled-components";
import Footer from "../components/Footer";
import PortfolioProject from "./Portfolio/PortfolioProject";
import CtaComponent from "./Portfolio/CtaComponent";
import SkillsComponent from "./Portfolio/SkillsComponent";

// ARWES
import { Animator, Dots } from "@arwes/react";

const PortfolioSection = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const iid = setInterval(() => setActive(active => !active), 6000);
    return () => clearInterval(iid);
   }, []);


  return (
    <MainContainer>
       <ProjectsSection>
        <Animator active={active}>
           <Dots />
        </ Animator>
              <PortfolioProject />
       </ProjectsSection>
            

       <SkillSection>
         <SkillsComponent />
      </SkillSection>

       <CtaComponent />
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
     padding: 15vh 40vw;
     padding-bottom: 40vh;
     background-color: #061f2b;
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