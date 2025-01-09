import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
           <Link to={"/"} className="nav-link">Home</Link>
           <Link to={"/portfolio"} className="nav-link">Portfolio</Link>
           <Link to={"/contact"} className="last-nav-link">Contact me</Link>
    </NavbarContainer>
  )
}

export default Navbar

/* STYLED COMPONENTS */

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