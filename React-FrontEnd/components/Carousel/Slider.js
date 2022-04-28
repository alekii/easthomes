import React, { useState, useEffect } from "react";
import { SliderContainer, Img } from "./Slide";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import styled from "styled-components";

function Slider(props) {
  const firstbutton = React.useRef(null);
  const lastbutton = React.useRef(null);
  const slides = props.slides;
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const length = slides.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        currentImageIndex === length - 1 ? 0 : currentImageIndex + 1
      );
    }, 1500000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? length - 1 : currentImageIndex - 1
    );
  };

  const showButtons = () => {
    firstbutton.current.style.opacity = "1";
    lastbutton.current.style.opacity = "1";
    firstbutton.current.style.transition = "opacity 0.7s ease";
    lastbutton.current.style.transition = "opacity 0.7s ease";
  };
  const hideButtons = () => {
    firstbutton.current.style.opacity = "0";
    lastbutton.current.style.opacity = "0";
    firstbutton.current.style.transition = "opacity 1.7s ease";
    lastbutton.current.style.transition = "opacity 1.7s ease";
  };
  return (
    <SliderContainer onMouseLeave={hideButtons}>
      <Holder>
        <Button onClick={prevImage} ref={firstbutton}>
          <FaAngleLeft />
        </Button>
        {slides.map((slide, index) => {
          return (
            index === currentImageIndex && (
              <ImageHolder key={slide} onMouseOver={showButtons}>
                <img src={"/img/" + slide} />
              </ImageHolder>
            )
          );
        })}
        <Button onClick={nextImage} ref={lastbutton}>
          <FaAngleRight />
        </Button>
      </Holder>
    </SliderContainer>
  );
}

export default Slider;

const Button = styled.button`
  border-radius: 10px;
  font-size: 25px;
  height: 40px;
  width: 40px;
  padding: 10px;
  border: none;
  position: relative;
  top: 40%;
  color: #2699fb;
  cursor: pointer;
  z-index: 1;
  margin: 0 10px;

  &: first-child {
    opacity: 0;
  }
  &: last-child {
    opacity: 0;
  }
  transition: opacity 0.6s;
`;

const ImageHolder = styled.div`
  width: 100%;
  max-width: 1366px;
  height: 718px;
  position: absolute;
  background-size: cover;
  background-repeat: none;
  animation: fadeIn 1.5s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: inherit;
    height: inherit;
  }
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: inherit;
`;
