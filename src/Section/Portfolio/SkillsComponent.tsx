import styled from 'styled-components';

const SkillsComponent = () => {
  return (
   <>
    <SkillTitle>Skills:</SkillTitle>
        <TerminalContainer>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } React - Intermediate</SkillText>
          </TerminalLine>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } JavaScript - Advanced</SkillText>
          </TerminalLine>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } TypeScript - Intermediate</SkillText>
          </TerminalLine>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } HTML & CSS - Advanced</SkillText>
          </TerminalLine>
          <TerminalLine>
            <span className="cursor"></span>
            <SkillText> { '>' } Node.js - Intermediate</SkillText>
          </TerminalLine>
        </TerminalContainer>
    </>
  )
}

export default SkillsComponent;

const SkillTitle = styled.h3`
  color: #00ff00;
`;

/* Terminal Section */
const TerminalContainer = styled.div`
  padding: 2vh;
  display: flex;
  flex-direction: column;
`;

const TerminalLine = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
`;

const SkillText = styled.p`
  color: #00ff00;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 2s steps(30) 2s forwards, blink-caret 0.75s step-end infinite;
  font-family: 'Courier New', monospace;
@keyframes typing {
  from {
    width: 1%;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  50% {
    opacity: 10;
  }
}
`;