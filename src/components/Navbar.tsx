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
     background: linear-gradient(90deg, #ff00ff, #00ffff);
     transform: translate(-30vw);
     transition: transform 1.5s linear;
     box-shadow: 0 0 15px #00ffff, 0 0 30px #ff00ff, 0 0 60px #00ffff;
   
     /* Circuit pattern overlay */
     &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.2;
          z-index: -1;
     }

     @keyframes pulseGlow {
       0% {
            box-shadow: 0 0 10px #00ffff, 0 0 20px #ff00ff;
       }
       50% {
            box-shadow: 0 0 20px #ff00ff, 0 0 40px #00ffff;
       }
       100% {
            box-shadow: 0 0 10px #00ffff, 0 0 20px #ff00ff;
       }
     }

     &:hover {
        transform: translate(-1vw);
        transform: translate(-1vw);
        animation: pulseGlow 2s infinite;
     }

`;