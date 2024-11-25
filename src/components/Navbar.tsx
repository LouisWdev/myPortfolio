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
     position: fixed;
     top: 2%;
     background-color: transparent;
`;

const HomeButton = styled.button`
      display: inline;
      margin-left: 1vw;
      padding: 1vh 2vw;
      font-size: medium;
      border: white 2px solid;
      border-radius: 5px;
      transition: all 0.5s;

      &:hover {
          background-color: lightblue;
      }
`;

const RightButtonContainer = styled.div`
      display: inline-block;
      margin-left: 70vw;
`;

const PortfolioButton = styled.button`
      padding: 1vh 2vw;
      font-size: medium;
      border: white 2px solid;
      border-radius: 5px;
      transition: all 0.5s;

      &:hover {
          background-color: lightblue;
      }
`;
const ContactButton = styled.button`
      margin-left: 1vw;

      padding: 1vh 2vw;
      font-size: medium;
      border: white 2px solid;
      border-radius: 5px;
      transition: all 0.5s;

      &:hover {
          background-color: lightblue;
      }
`;