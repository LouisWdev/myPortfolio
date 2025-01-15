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
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;

`;

const FormContainer = styled.div``;

const EmailContainer = styled.form``;

const CompanyName = styled.form``;

const ExtraText = styled.form``;