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
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    console.log("length" + length);
    setCurrentImageIndex(
      currentImageIndex === length - 1 ? 0 : currentImageIndex + 1
    );
    console.log(currentImageIndex);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? length - 1 : currentImageIndex - 1
    );
    console.log(currentImageIndex);
  };

  const showButtons = () => {
      firstbutton.current.style.transform = "translateX(0)"
      lastbutton.current.style.transform = "translateX(0)"
      firstbutton.current.style.transition = "transform 0.7s ease"
      lastbutton.current.style.transition = "transform 0.7s ease"

  }
  const hideButtons = () => {
    firstbutton.current.style.transform = "translateX(-100vw)"
    lastbutton.current.style.transform = "translateX(100vw)"
    firstbutton.current.style.transition = "transform 1s ease"
    lastbutton.current.style.transition = "transform 1s ease"

}
  const str = "/img/";

  return (
    <SliderContainer onMouseLeave={hideButtons} >
        <Holder>
      <Button onClick={prevImage} ref={firstbutton}>
        <FaAngleLeft />
      </Button>
      {slides.map((slide, index) => {
        return (
          index === currentImageIndex && (
            <ImageHolder key={slide} onMouseOver={showButtons}  style={{ backgroundImage: "url(/img/" + slide + ")" }}
             >
             </ImageHolder>
          )
        );
      })}
      <Button onClick={nextImage} ref={lastbutton}>
        <FaAngleRight />
      </Button></Holder>
    </SliderContainer>
  );
}

export default Slider;


const Button = styled.button`
  border-radius: 10px;
  background-color: #FAFAFA;
  font-size: 25px;
  height: 40px;
  width: 40px;
  padding: 10px;
  border: none;
  position: relative;
  top: 40%;
  color:#2699FB;
  cursor: pointer;
  z-index:1;
  margin: 0 10px;

  &: first-child{
      transform:translateX(-101vw)
  }&: last-child{
    transform:translateX(100vw)
}

`

const ImageHolder = styled.div`

width: 100%;
max-width:1366px;
height: 718px;
position:absolute;
background-size:cover;
background-repeat:none;
animation: fadeIn 1.5s ease;

@keyframes fadeIn {
    0%{opacity:0.9;
    }
    100%{opacity:1; }
}
`

const Holder = styled.div`
display:flex;
justify-content:space-between;
width:100%;
height:inherit;

`



