import React, { Component, createRef } from "react";
import styled from "styled-components";
import Slider from "./Carousel/Slider";
import "../css/hero.css";

class Hero extends Component {
  state = {};

  imagesData = [
    "q1.jpg",
    "q2.jpg",
    "exterior-00.jpg",
    "exterior-01.jpg",
    "exterior-05.jpg",
    "home1.jpeg",
    "home3.jpeg",
    "home4.jpeg",
  ];
  render() {
    return (
      <HeroSection>
        <Slider slides={this.imagesData} />
        <PropertySearch>
          <h2>Property Search</h2>

          <form>
            <label htmlFor="town">Town</label>
            <select name="towns" id="towns">
              <option value="Nairobi">Nairobi</option>
              <option>Kiambu</option>
              <option>Kajiado</option>
              <option>Machakos</option>
            </select>
            <label htmlFor="bedroom">Bedrooms</label>
            <select name="rooms" id="rooms">
              <option value="4">4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
            <Price>
              <MinPrice>
                <label htmlFor="MinPrice">Min Price</label>
                <input type="text" name="MinPrice" id="minprie" />
              </MinPrice>
              <MaxPrice>
                <label htmlFor="MaxPrice">Max Price</label>
                <input type="text" name="MinPrice" id="maxprice" />
              </MaxPrice>
            </Price>

            <input type="submit" name="search" id="search" value="Search" />
          </form>
        </PropertySearch>
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
  height: 718px;
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
`;
const Slides = styled.div``;

const PropertySearch = styled.div`
  background-color: #f7f7f7;
  z-index: 5;
  height: 395px;
  width: 362px;
  position: absolute;
  left: 65%;
  top: 248px;
  border: 2px solid #bce0fd;

  h2 {
    font-family: "Arial", serif;
    font-size: 19px;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
  }

  form {
    margin: 0 10px;
  }

  label {
    font-weight: 500;
  }

  select,
  input {
    width: 100%;
    margin: 10px 0 20px 0;
    paddding: 5px;
    height: 44px;
    font-weight: 400;
    font-size: 16px;
    border: 1px solid #bce0fd;
    background-color:inherit
  }

  input {
    padding: 5px;
  }

  input[type="submit"] {
    font-family: "Roboto", serif;
    font-size: 17px;
    font-weight: bold;
    background-color: #1ea69a;
    color: white;
    border: none;
    border-radius: 4px;
    height: 48px;
    cursor: pointer;
  }

  select:focus,
  input:focus {
    outline: none;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MinPrice = styled.div`
  width: 48%;
`;
const MaxPrice = styled.div`
  width: 48%;
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
`;

const AboutUs = styled.div`
  max-width: 516px;
  margin: 0 auto;
  height: 93px;
  width: 100%;
  margin-top: 110px;
  z-index: 4;
  h3 {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;
