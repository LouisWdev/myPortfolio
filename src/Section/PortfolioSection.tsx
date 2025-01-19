// styled comps import
import styled from "styled-components";

const PortfolioSection = () => {
  return (
    <MainContainer>
       <ProjectCard>
         <ProjectCardTitle>First Project</ProjectCardTitle>
         <ProjectCardImage>Image goes here</ProjectCardImage>
         <ProjectCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas.</ProjectCardText>
         <ProjectCardButton>Go to project</ProjectCardButton>

   
       </ProjectCard>

       <SkillSection>
         <SkillTitle>Skills:</SkillTitle>
         <SkillChips>
            <span>React</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
         </SkillChips>
       </SkillSection>

       <CTAsection>
          <CTAtitle>Want to Collaborate ?</CTAtitle>
          <ContactButton>Contact Me</ContactButton>
       </CTAsection>
    </MainContainer>
  )
}

export default PortfolioSection

/* STYLED COMPONENTS */
const MainContainer = styled.div`
      display: block;
      height: 100vh;
  `;

/* Project Card's Section */
const ProjectCard = styled.div`
      border: solid white 1vh;
      width: 20vw;
      height: 50vh;
      border-radius: 20px;
      margin: 1vh 1vw;
      margin: 20vh 40vw;
`;

const ProjectCardTitle = styled.h1`
    padding: 1vh 1vw;
`;

const ProjectCardText = styled.p`
    margin-top: 14vh;
    padding: 2vh 2vw;
`;

const ProjectCardImage = styled.image`
    height: 5vh;
    margin: 5vh 5vw;
`;

const ProjectCardButton = styled.button`
      cursor: pointer;
      padding: 2vh 4vw;
      color: white;
      background-color: yellow;
      margin: 1vh 3vw;
      border: 0.5vh solid white;
      border-radius: 1vh;
      transition: 500ms all;

      &:hover {
          background-color: lightblue;
      }
`;


/* Skills Section */
const SkillSection = styled.div`
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
`;
const SkillTitle = styled.div`
      padding: 3vh;
`;
const SkillChips = styled.div`
`;

/*CallToAction*/
const CTAsection = styled.div`
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
`;
const CTAtitle = styled.h3`
`;
const ContactButton = styled.div`
  
`;