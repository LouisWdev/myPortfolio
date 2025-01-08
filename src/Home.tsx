import styled from "styled-components"


const Home = () => {
  return (
   <>
    <HomeSection>
             <HomeContainer>
                 <MainTitle>Welcome to my new Portfolio site</MainTitle>
                 <SubTitle>Take a look around :D</SubTitle>
                   <MainButtonsContainer>
                      <MainButton>Go To Portfolio</MainButton>
                      <ContactButton>Contact Me</ContactButton>
                   </MainButtonsContainer>         
             </HomeContainer>
      </HomeSection>
     </>
  )
}

export default Home


/* STYLED COMPONENTS */
/***  SECTIONS ***/
const HomeSection = styled.div`
     height: 100vh;
`;

/* LANDING SECTION */
const HomeContainer = styled.div``;

const MainTitle = styled.h1`
      text-align: center;
      margin-top:10vh;
      font-size: 2.5rem;
`;

const SubTitle = styled.h2`
      text-align: center;
`;

const MainButtonsContainer = styled.div`
      margin-left: 42vw;
`;
const MainButton = styled.button`
     margin-right: 1vw;
     cursor: pointer;
     border: 3px solid lightblue;
     border-radius: 5px;
     padding: 1vh;
     transition: all 0.5s;

     &:hover {
        background-color: lightblue;
     }
`;

const ContactButton = styled.button`
     border: 3px solid lightblue;
     border-radius: 5px;
     padding: 1vh;
     cursor: pointer;
     transition: all 0.5s;

     &:hover {
        background-color: lightblue;
     }

`;

const RecentContainer = styled.div`
     margin: 5vh 41vw;
     padding: 0;
`;

const RecentProjectText = styled.h2`
`;

/* RECENT PROJECT CARD */
const RecentProjectCard = styled.div`
      border: solid white 4px;
      border-radius: 3.5%;
      position: relative;
`;

const ProjectCardTitle = styled.h3`
      font-weight: 800;
`;

const ProjectCardDescription = styled.h4`
`;

const ProjectCardTextContainer = styled.div`
      padding: 1vh 1vw;
`;

const ProjectCardImage = styled.div`
      padding: 4vh 3vw;
`;
