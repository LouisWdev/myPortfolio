import styled from 'styled-components';

const CtaComponent = () => {
  return (
    <CTAsection>
          <CTAtitle>Want to Collaborate ?</CTAtitle>
          <ContactButton>Contact Me</ContactButton>
    </CTAsection>
  )
}

export default CtaComponent;

/*CallToAction*/
const CTAsection = styled.div`
     height: 100vh;
     background-color: 	#061f2b;
     display: flex;
     justify-content: center;
     align-items: center;
`;
const CTAtitle = styled.h2`
    font-size: 2em;
    background-color: #061f2b;
`;
const ContactButton = styled.div` 
    margin: 2vh;
    padding: 1vh 2vw;

    cursor: pointer;
    background-color:#fee801;
    color: black;
    border: darkblue 2px solid;
    border-radius: 1vh;
    transition: 1s;

    &:hover {
      background-color:#9a9f17;
    }
`;