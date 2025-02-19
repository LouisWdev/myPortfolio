import styled from "styled-components"; 
import { Text } from "@arwes/react";

const AboutSection = () => {
  return (
    <>
          <AboutContainer>
            <AboutTextContainer>
                  {/* First text */}
                  <AboutTitleText>
                        <Text>How I started</Text>
                  </AboutTitleText>
                  <AboutParagraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Sed voluptates, numquam temporibus exercitationem quis labore sunt repudiandae atque aperiam voluptate!
                  </AboutParagraph>
                  {/* Second text */}
                  <AboutTitleText>Web Development</AboutTitleText>
                  <AboutParagraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Sed voluptates, numquam temporibus exercitationem quis labore sunt repudiandae atque aperiam voluptate!
                  </AboutParagraph>
                  <AboutTitleText>AI</AboutTitleText>
                  {/* Third text */}
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
      margin: 2vh 10vw;
      width: 30vw;
`;

const AboutTitleText = styled.h2`
      
`;

const AboutParagraph = styled.p``;