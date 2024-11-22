// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"

// Pages
import Home from "./pages/Home"

function App() {

  return (
    <>
     <Navbar />
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
