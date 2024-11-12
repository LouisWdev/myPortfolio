import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
        <HomeButton>Home</HomeButton>  

        <RightButtonContainer>
           <PortfolioButton>Portfolio</PortfolioButton>
           <ContactButton>Contact me</ContactButton>
        </RightButtonContainer>
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
    height: 10vh;
`;
const HomeButton = styled.button`
      padding: 1vh 2vw;
      margin: 1vh;
      display: inline-block;
`;

const RightButtonContainer = styled.div`
      display: inline-block;
      position: absolute;
      right: 3%;
`;

const PortfolioButton = styled.button`
`;

const ContactButton = styled.button`
`;
