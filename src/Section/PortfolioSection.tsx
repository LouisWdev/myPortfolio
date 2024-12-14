import styled from "styled-components"

const PortfolioSection = () => {
  return (
    <MainContainer>
       <ProjectCard>
         <ProjectCardTitle>First Project</ProjectCardTitle>
         <ProjectCardImage>Image goes here</ProjectCardImage>
         <ProjectCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas.</ProjectCardText>
         <ProjectCardButton>Go to project</ProjectCardButton>
       </ProjectCard>

       <ProjectCard>
         <ProjectCardTitle>Second Project</ProjectCardTitle>
         <ProjectCardImage>Image goes here</ProjectCardImage>
         <ProjectCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas.</ProjectCardText>
         <ProjectCardButton>Go to project</ProjectCardButton>
       </ProjectCard>

       <ProjectCard>
         <ProjectCardTitle>Third Project</ProjectCardTitle>
         <ProjectCardImage>Image goes here</ProjectCardImage>
         <ProjectCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas.</ProjectCardText>
         <ProjectCardButton>Go to project</ProjectCardButton>
       </ProjectCard>
    </MainContainer>
  )
}

export default PortfolioSection

/* STYLED COMPONENTS */
const MainContainer = styled.div`
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
`;

const ProjectCard = styled.div`
      border: solid white 1vh;
      width: 20vw;
      height: 50vh;
      border-radius: 20px;
      margin: 1vh 1vw;
`;

const ProjectCardTitle = styled.h1`
    padding: 1vh 1vw;
`;

const ProjectCardText = styled.p`
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
      margin: 1vh 3vw;
      border: 0.5vh solid white;
      border-radius: 1vh;
      transition: 500ms all;

      &:hover {
          background-color: lightblue;
      }
`;