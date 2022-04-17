import React, { Component, createRef } from "react";
import styled from "styled-components";
import Slider from "./Carousel/Slider";
import "../css/hero.css";
import Form from "../common/form";
import { Redirect } from "react-router-dom";
import SearchResults from "./searchResults";

class Hero extends Form {
  towns = ["Nairobi", "Kajiado", "Kiambu", "Machakos"];
  bedrooms = [1, 2, 3, 4];
  state = {
    query: {
      town: this.towns[0],
      bedrooms: this.bedrooms[0],
      minprice: "1000000",
      maxprice: "10000000",
    },
    errors: {},
    redirect:false
  };

  imagesData = [ 
    "exterior-00.jpg", 
    "exterior-01.jpg", 
    "exterior-05.jpg" 
  ];

  redirect = () =>{  
    let redirect = this.state.redirect
    redirect=true; 
    this.setState({redirect}) 
  };
  render() {
      if(this.state.redirect){  
        const {town, minprice,maxprice} = this.state.query 
        let search = `/search/${town}/${minprice}/${maxprice}`  
      return( 
        <><Redirect to={{pathname:search}}/>
        </>)
    }
    const { query, errors } = this.state;
    return (
      <HeroSection>
        <Slider slides={this.imagesData} />
        <PropertySearch> 
          <h2>Property Search</h2> 
          <form onSubmit={this.handleSubmit}>
            {this.renderSelect("", "town", "Town", this.towns)}
            {this.renderSelect("", "bedrooms", "Bedrooms", this.bedrooms)}  
            <Price>
              <MinPrice>
                {this.renderInput("", "minprice", "Min Price")}
              </MinPrice>
              <MaxPrice>
                {this.renderInput("", "maxprice", "Max Price")}
              </MaxPrice>
            </Price> 
            <input type="submit" name="search" id="search" value="Search" /> 
          </form>
        </PropertySearch>
        <AmSoWavy style={{ backgroundImage: "url(/img/theone.svg)" }}>
          <AboutUs>
            <h3>About Us</h3>
            <p id ="scrollIntoView">
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
  height:718px;
  @media(max-width:540px){
    height:370px
  }
`;
const Slides = styled.div`
 `; 
const PropertySearch = styled.div`
  background-color: #f7f7f7;
  z-index: 5;
  height: 395px;
  width: 362px;
  position: absolute;
  left: 65%;
  top: 248px;
  border: 2px solid #bce0fd;
 
  @media(max-width:1220px){
     left:55%
  }
  @media(max-width:980px){
    left:45%;

 }
 
@media(max-width:768px){
  left:27%;
  top:117px 
}
@media(max-width:600px){
  left:17%; 
}
@media(max-width:540px){
   position:relative;
   width:100%;
   top:50px;
   left:0 ;
}
 
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
    background-color: inherit;
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
  @media(max-width:1220px){
    top:550px
 }@media(max-width:980px){
  top:510px
}@media(max-width:540px){
  display:none 
} 
`;

const AboutUs = styled.div`
  max-width: 516px;
  margin: 0 auto;
  height: 93px;
  width: 100%; 
  margin-top: 120px;
  z-index: 4;
  @media(max-width:1220px){
    margin-top:140px
 } @media(max-width:980px){
  margin-top:180px
} 
  h3 {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;
