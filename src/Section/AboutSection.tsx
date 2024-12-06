import styled from "styled-components"; 

const AboutSection = () => {
  return (
    <>
          <AboutContainer>
            <AboutTextContainer>
                  <AboutTitleText>How I started</AboutTitleText>
                  <AboutParagraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Sed voluptates, numquam temporibus exercitationem quis labore sunt repudiandae atque aperiam voluptate!
                  </AboutParagraph>
            </AboutTextContainer>
          </AboutContainer>
    </>
  )
}

export default AboutSection

/* STYLED COMPONENTS */
/* ABOUT SECTION */

const AboutContainer = styled.div`
      height: 100vh;
      display: grid;
`;
const AboutTextContainer = styled.div`
      padding: 5vh 3vw;
      margin: 2vh 2vw;
      width: 15vw;
`;

const AboutTitleText = styled.h2`
      
`;

const AboutParagraph = styled.p``;