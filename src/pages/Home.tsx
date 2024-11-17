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
      margin-left: 43vw;
`;
const MainButton = styled.button``;

const ContactButton = styled.button``;

const RecentContainer = styled.div``;
const RecentProjectText = styled.h2``;
const RecentProjectCard = styled.div``;