import styled from "styled-components";

const Footer = () => {
  return (
    <MainFooterContainer>
       <>@All rights reserved Louis W</>
       <SocialsContainer>
            <ListItem>LinkedIn</ListItem>
            <ListItem>GitHub</ListItem>
       </SocialsContainer>
    </MainFooterContainer>
  )
}

export default Footer

const MainFooterContainer = styled.ul`
      bottom: 0%;
      margin: 1vh;
      background-color: transparent;
`;

const SocialsContainer = styled.div`
      padding: 1vh;
      margin: 1vh;
`;

const ListItem = styled.li`
      padding: 1vh;
      cursor: pointer;
`;