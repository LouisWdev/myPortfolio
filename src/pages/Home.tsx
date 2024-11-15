import styled from "styled-components"

const Home = () => {
  return (
    <HomeContainer>
        <MainTitle>Welcome to my new Portfolio site</MainTitle>
        <SubTitle>Take a look around :D</SubTitle>
        <MainButton></MainButton>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
        
`;

const MainTitle = styled.h1`
      text-align: center;
      margin-top:10vh;
`;

const SubTitle = styled.h2`
      text-align: center;
`;

const MainButton = styled.div``;