import styled from "styled-components";
import heroImg from "./assets/heroImg.png";
import { useState } from "react";
import Footer from "./components/Footer";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: { clientX: any; clientY: any; currentTarget: any; }) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate percentage position of the mouse relative to the container
    const x = ((clientX - left) / width) * 100; // Horizontal position (0 to 100%)
    const y = ((clientY - top) / height) * 100; // Vertical position (0 to 100%)

    setMousePosition({ x, y });
  };

  return (
    <>
      <HomeSection onMouseMove={handleMouseMove}>
        <ImageContainer x={mousePosition.x} y={mousePosition.y} />
      </HomeSection>
      <Footer />
    </>
  );
};

export default Home;

/* STYLED COMPONENTS */

const HomeSection = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${heroImg});
    background-size: cover;
    background-position: ${(props) => props.x}% ${(props) => props.y}%;
    transition: background-position 0.1s ease; /* Smooth movement effect */
`;
