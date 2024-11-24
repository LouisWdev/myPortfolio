// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";

// STYLED COMPONENTS
import styled from "styled-components";

function App() {

  return (
    <MainContainer>
      <Navbar />
      <Home />
      <Footer />
    </MainContainer>
  )
}

export default App

// STYLED 
const MainContainer = styled.div``;