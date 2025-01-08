import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
           <HomeButton>Home</HomeButton>  
           <PortfolioButton>Portfolio</PortfolioButton>
           <ContactButton>Contact me</ContactButton>
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
     position: fixed;
     top: 0%;
     background-color: transparent;
     border-right: #05D9E8 5px solid ;
     border-bottom: #05D9E8 5px solid;
     
     padding: 2vh 10vw;
     display: flex;
`;

const HomeButton = styled.div`
`;

const PortfolioButton = styled.div`
`;
const ContactButton = styled.div`
`;