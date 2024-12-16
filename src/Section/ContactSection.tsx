import styled from 'styled-components'

const ContactSection = () => {
  return (
    <MainContainer>
      <FormContainer>
        <EmailContainer>Email</EmailContainer>
        <CompanyName>Company name</CompanyName>
        <ExtraText>Exra comment</ExtraText>
      </FormContainer>
    </MainContainer>
  )
}

export default ContactSection

/* STYLED COMPONENTS */
const MainContainer = styled.div`
     height: 90vh;
`;

const FormContainer = styled.div`
`;

const EmailContainer = styled.form`

`;

const CompanyName = styled.form``;

const ExtraText = styled.form``;