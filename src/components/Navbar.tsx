import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
           <Navbutton>Home</Navbutton>  
           <Navbutton>Portfolio</Navbutton>
           <LastButton>Contact me</LastButton>

           <Lines></Lines>
           <Lines></Lines>
           <Lines></Lines>
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
     position: fixed;
     top: 0%;
     background-color: #05D9E8;
     
     padding: 0 10px;
     display: flex;
     clip-path: polygon(0 0, 100% 0, 100% 58%, 87% 98%, 0 100%, 0% 50%);
     transform: translate(-34vw);
     transition: transform 1.5s linear;

     &:hover {
      transform: translate(-1vw);
     }
`;

const Navbutton = styled.div`
      padding: 5vh 2vw;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.2rem;
      background-color: #05D9E8;
      color: yellow;
      transition: all 0.5s linear;
      border-left: #005678 solid;

      &:hover {
        background-color: black;
      }
`;

const LastButton = styled.div`
      padding: 5vh 4vw;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.2rem;
      background-color: #05D9E8;
      color: yellow;
      transition: all 0.5s linear;
      border-left: #005678 solid;
      border-right: #005678 solid;
      margin-right: 4vw;

      &:hover {
        background-color: black;
      }
`;


const Lines = styled.div`
      border-top: #005678 3px solid;
`;
