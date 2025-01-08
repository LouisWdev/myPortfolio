import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
           <Navbutton>Home</Navbutton>  
           <Navbutton>Portfolio</Navbutton>
           <Navbutton>Contact me</Navbutton>
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
     position: fixed;
     top: 0%;
     background-color: #05D9E8;
     
     padding: 40px 100px;
     display: flex;
     clip-path: polygon( 11% 0, 100% 0, 100% 69%, 90% 100%, 0 100%, 0 28%);
     transform: translate(-35vw);
     transition: translate 2s;

     &:hover {
      transition: transform 1.5s linear;
      transform: translate(0vw);
     }
`;

const buttonStyles = styled.div`
      margin: 1vh;
`;

const Navbutton = styled.div`
      padding: 1vh 2vw;
`;

