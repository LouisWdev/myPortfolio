import styled from "styled-components"

const Home = () => {
  return (
    <HomeContainer>
        <MainTitle>Welcome to my new Portfolio site</MainTitle>
        <SubTitle>Take a look around :D</SubTitle>
          <MainButtonsContainer>
             <MainButton>Go To Portfolio</MainButton>
             <ContactButton>Contact Me</ContactButton>
          </MainButtonsContainer>

        <RecentContainer>
            <RecentProjectText>Most Recent Projects</RecentProjectText>
            <RecentProjectCard></RecentProjectCard>

        </RecentContainer>
    </HomeContainer>
  )
}

export default Home


/* STYLED COMPONENTS */
const HomeContainer = styled.div`
        
`;

const MainTitle = styled.h1`
      text-align: center;
      margin-top:10vh;
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
`;

const RecentProjectText = styled.h2`
`;
const RecentProjectCard = styled.div``;