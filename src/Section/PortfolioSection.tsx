import styled from "styled-components"

const PortfolioSection = () => {
  return (
    <MainContainer>
       <ProjectCard>
         <ProjectCardTitle>First Project</ProjectCardTitle>
         <ProjectCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas.</ProjectCardText>
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
      height: 40vh;
      border-radius: 20px;
`;

const ProjectCardTitle = styled.h1`
`;

const ProjectCardText = styled.p`
`;