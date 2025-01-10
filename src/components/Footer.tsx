import styled from "styled-components";

const Footer = () => {
  return (
    <MainFooterContainer>
       <RightsContainer>@All rights reserved Louis W</RightsContainer>
       <SocialsContainer>
            <ListItem>LinkedIn</ListItem>
            <ListItem>GitHub</ListItem>
       </SocialsContainer>
    </MainFooterContainer>
  )
}

export default Footer

const MainFooterContainer = styled.div`
      position: fixed;
      bottom: 0%;
      background-color: transparent;
      border-top: 2px solid #FDF500;
      width: 100vw;
`;

const RightsContainer = styled.div`
      border-right: 5px solid #FDF500;
      border-bottom: 5px solid #FDF500;
      width: 15vw;
      padding: 1vh;

      animation: glitch 5s infinite;

      @keyframes glitch {
       0% {
          text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff;
      }
       50% {
          text-shadow: -2px -2px #ff00ff, 2px 2px #00ffff;
      }
      100% {
        text-shadow: 2px -2px #ff00ff, -2px 2px #00ffff;
      }
     }

     .glitch {
       animation: glitch 0.3s infinite;
      }
`;

const SocialsContainer = styled.div`
      width: 5vw;
      border-right: 5px solid #FDF500;
`;

const ListItem = styled.div`
      padding: 1vh;
      cursor: pointer;
      border-bottom: 5px solid #FDF500;

      color: #00ffff;
      text-decoration: none;
      transition: color 0.3s, box-shadow 0.3s;

      &:hover {
        color: #ff00ff;
        box-shadow: 0 0 10px #ff00ff, 0 0 20px #00ffff; 
      }
`;