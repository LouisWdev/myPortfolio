import styled from 'styled-components'

const ContactSection = () => {
  return (
    <MainContainer>
      <FormContainer>
          <EmailContainer>Email</EmailContainer>
          <CompanyName>Company name</CompanyName>
          <ExtraText>Extra Text</ExtraText>
      </FormContainer>
    </MainContainer>
  )
}

export default ContactSection

/* STYLED COMPONENTS */
const MainContainer = styled.div`
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
`;

const FormContainer = styled.div`
     padding: 3vh 3vw;
     border: 1vh solid white;
     border-radius: 1vh;
`;

const EmailContainer = styled.form`
     margin: 1vh;
     text-align: left;
     padding: 1vh 8vw;
     border: 0.4vh solid white;
     border-radius: 1vh;
     cursor: pointer;
`;

const CompanyName = styled.form`
     margin: 1vh;
     text-align: left;
     padding: 1vh 8vw;
     border: 0.4vh solid white;
     border-radius: 1vh;
     cursor: pointer;
`;

const ExtraText = styled.form`
     margin: 1vh;
     text-align: left;
     padding: 1vh 8vw;
     border: 0.4vh solid white;
     border-radius: 1vh;
     cursor: pointer;
`;