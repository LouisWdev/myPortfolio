// styled comps import
import styled from "styled-components";
import Footer from "../components/Footer";
import PortfolioProject from "../components/PortfolioProject";

const PortfolioSection = () => {
  return (
    <MainContainer>
       <ProjectsSection>
          <PortfolioProject />
       </ProjectsSection>

       <SkillSection>
        <SkillTitle>Skills:</SkillTitle>
        <TerminalContainer>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } React - Intermediate</SkillText>
          </TerminalLine>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } JavaScript - Advanced</SkillText>
          </TerminalLine>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } TypeScript - Intermediate</SkillText>
          </TerminalLine>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } HTML & CSS - Advanced</SkillText>
          </TerminalLine>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } Node.js - Intermediate</SkillText>
          </TerminalLine>
        </TerminalContainer>
      </SkillSection>

       <CTAsection>
          <CTAtitle>Want to Collaborate ?</CTAtitle>
          <ContactButton>Contact Me</ContactButton>
       </CTAsection>
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

const SkillTitle = styled.h3`
  color: #00ff00;
`;

/* Terminal Section */
const TerminalContainer = styled.div`
  padding: 2vh;
  display: flex;
  flex-direction: column;
`;

const TerminalLine = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
`;

const SkillText = styled.p`
  color: #00ff00;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 2s steps(30) 2s forwards, blink-caret 0.75s step-end infinite;
  font-family: 'Courier New', monospace;
@keyframes typing {
  from {
    width: 1%;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  50% {
    opacity: 10;
  }
}
`;


/*CallToAction*/
const CTAsection = styled.div`
     height: 100vh;
     background-color: 	#061f2b;
     display: flex;
     justify-content: center;
     align-items: center;
`;
const CTAtitle = styled.h2`
    font-size: 2em;
    background-color: #061f2b;
`;
const ContactButton = styled.div` 
    margin: 2vh;
    padding: 1vh 2vw;

    cursor: pointer;
    background-color:#fee801;
    color: black;
    border: darkblue 2px solid;
    border-radius: 1vh;
    transition: 1s;

    &:hover {
      background-color:#9a9f17;
    }
`;