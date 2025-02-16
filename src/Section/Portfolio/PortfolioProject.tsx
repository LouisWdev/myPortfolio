import styled from 'styled-components';

const PortfolioProject = () => {
  return (
     <ProjectCard>
            <ProjectCardTitle> Project one </ProjectCardTitle>
            <ProjectCardImage>Image goes here</ProjectCardImage>
            <ProjectCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas.</ProjectCardText>
            <ProjectCardButton>Go to project</ProjectCardButton>
      </ProjectCard>
  )
}

export default PortfolioProject

/* PROJECT CARD */
const ProjectCard = styled.div`
      background-color: #00FFB3;
      border: solid white 1vh;
      padding-bottom: 3vh;
      height: 50vh;
      margin: 5vh 0;
      border-radius: 20px;
      transition: linear 1s;

      &:hover {
        box-shadow: 0 0 30px #ff00ff, 0 0 20px #00ffff; 
      }
`;

const ProjectCardTitle = styled.h1`
    padding: 1vh 1vw;
    background-color: #00FFB3;
`;

const ProjectCardText = styled.p`
    margin-top: 14vh;
    padding: 2vh 2vw;
    background-color: #00FFB3;
`;

const ProjectCardImage = styled.image` 
        margin: 5vh 5vw;
`;

const ProjectCardButton = styled.button`
      cursor: pointer;
      padding: 2vh 6vw;
      color: black;
      background-color: yellow;
      margin: 3vh;
      border: 0.5vh solid white;
      border-radius: 1vh;
      transition: 500ms all;

      &:hover {
          color: white;
          background-color: #494900;
      }
`;