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
      border-radius: 5px;
      border: 3px solid lightblue;
      transition: all 0.5s;

      &:hover {
        background-color: blue;
      }
`;

const RightButtonContainer = styled.div`
      display: inline-block;
      position: absolute;
      right: 3%;

      
`;

const PortfolioButton = styled.button`
      margin: 1vh;
      padding: 1vh 2vw;
      border-radius: 5px;
      border: 3px solid lightblue;

      transition: all 0.5s;

      &:hover {
        background-color: blue;
      }
`;

const ContactButton = styled.button`
      padding: 1vh 2vw;
      margin-left: 1vw;
      border-radius: 5px;
      border: 3px solid lightblue;

      transition: all 0.5s;

      &:hover {
        background-color: blue;
      }
`;
