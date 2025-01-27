import styled from 'styled-components';

const PortfolioProject = () => {
  return (
    <>
     <ProjectCard>
            <ProjectCardTitle> Project one </ProjectCardTitle>
            <ProjectCardImage>Image goes here</ProjectCardImage>
            <ProjectCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas.</ProjectCardText>
            <ProjectCardButton>Go to project</ProjectCardButton>
      </ProjectCard>
    </>
  )
}

export default PortfolioProject

/* PROJECT CARD */
const ProjectCard = styled.div`
      border: solid white 1vh;
      height: 50vh;
      margin: 5vh 0;
      border-radius: 20px;
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
      color: black;
      background-color: yellow;
      margin: 1vh 3vw;
      border: 0.5vh solid white;
      border-radius: 1vh;
      transition: 500ms all;

      &:hover {
          color: white;
          background-color: #494900;
      }
`;