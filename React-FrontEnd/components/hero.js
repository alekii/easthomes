import React, { Component, createRef } from "react";
import styled from "styled-components";
import Slider from "./Carousel/Slider";
import "../css/hero.css";
import PropertySearchForm from "./propertysearchform";

class Hero extends Component {
  imagesData = ["exterior-01.jpg","exterior-00.jpg",  "exterior-05.jpg"];

  render() {
    return (
      <HeroSection>
        <Slider slides={this.imagesData} />
        <PropertySearchForm></PropertySearchForm>
        <AmSoWavy style={{ backgroundImage: "url(/img/theone.svg)" }}>
          <AboutUs>
            <h3>About Us</h3>
            <p>
              We are a real estate agent based in Nairobi with focus on property
              sales
            </p>
          </AboutUs>
        </AmSoWavy>
      </HeroSection>
    );
  }
}

export default Hero;

const HeroSection = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  height: 718px;
  @media (max-width: 540px) {
    height: 370px;
  }
`;

const AmSoWavy = styled.div`
  position: absolute;
  top: 557px;
  height: 210px;
  z-index: 3;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1366px;
  @media (max-width: 1220px) {
    top: 550px;
  }
  @media (max-width: 980px) {
    top: 510px;
  }
  @media (max-width: 540px) {
    display: none;
  }
`;

const AboutUs = styled.div`
  max-width: 516px;
  margin: 0 auto;
  height: 93px;
  width: 100%;
  margin-top: 120px;
  z-index: 4;
  @media (max-width: 1220px) {
    margin-top: 140px;
  }
  @media (max-width: 980px) {
    margin-top: 180px;
  }
  h3 {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;
