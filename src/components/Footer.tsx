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
      background-color: transparent;
      border-top: 2px solid #FDF500;
`;

const RightsContainer = styled.div`
      border-right: 5px solid #FDF500;
      border-bottom: 5px solid #FDF500;
      width: 15vw;
      padding: 1vh;
`;

const SocialsContainer = styled.div`
      width: 5vw;
      border-right: 5px solid #FDF500;
`;

const ListItem = styled.div`
      padding: 1vh;
      cursor: pointer;
      border-bottom: 5px solid #FDF500;
`;