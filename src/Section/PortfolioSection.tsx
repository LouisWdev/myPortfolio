import styled from "styled-components"

const PortfolioSection = () => {
  return (
    <MainContainer>
       <ProjectCard>
         <ProjectCardTitle>First Project</ProjectCardTitle>
         <ProjectCardText></ProjectCardText>
       </ProjectCard>
    </MainContainer>
  )
}

export default PortfolioSection

/* STYLED COMPONENTS */
const MainContainer = styled.div`
      height: 100vh;
      background-color: green;
`;

const ProjectCard = styled.div``;
const ProjectCardTitle = styled.h1``;
const ProjectCardText = styled.p``;