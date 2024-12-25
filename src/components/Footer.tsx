import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <MainFooterContainer>@All rights reserved Louis W</MainFooterContainer>
      <SocialsContainer></SocialsContainer>
    </>
  )
}

export default Footer

const MainFooterContainer = styled.div`
      position: fixed;
      bottom: 0%;
      margin: 1vh;
      background-color: transparent;
`;

const SocialsContainer = styled.div``;