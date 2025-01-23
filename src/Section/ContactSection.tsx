import styled from 'styled-components'

const ContactSection = () => {
  return (
    <MainContainer>
      <FormContainer>
        <FormTitle>Contact Me</FormTitle>
        <StyledForm>
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <StyledInput type="text" id="name" placeholder="Enter your name" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <StyledInput type="email" id="email" placeholder="Enter your email" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="message">Message</Label>
            <StyledTextArea id="message" rows="4" placeholder="Write your message here"></StyledTextArea>
          </InputContainer>
          <SubmitButton type="submit">Send</SubmitButton>
        </StyledForm>
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
  background-color: #0a0a0a;
`;

const FormContainer = styled.div`
  background-color: #1a1a1a;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  width: 90%;
  max-width: 500px;
`;

const FormTitle = styled.h2`
  background-color: #1a1a1a;
  color: #00ff00;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Courier New', monospace;
`;

const StyledForm = styled.form`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputContainer = styled.div`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  background-color: #1a1a1a;
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #121212;
  color: #ffffff;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #00ff00;
  }
`;

const StyledTextArea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #121212;
  color: #ffffff;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #00ff00;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #00ff00;
  color: #000000;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00cc00;
  }
`;
