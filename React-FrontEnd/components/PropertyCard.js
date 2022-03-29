import React from "react";
import styled from "styled-components";

function PropertyCard() { 
  return (
    <PropertyRow>
      <SinglePropertyCard>
        <img src="/img/exterior-01.jpg"  alt=""/>
        <h3>Bungalow in South Side</h3>
        <h4>4 bedrooms</h4>
        <p>Kshs 6,534,000</p>
      </SinglePropertyCard>{" "}
      <SinglePropertyCard>
        <img src="/img/exterior-01.jpg" alt=""/>
        <h3>Bungalow in South Side</h3>
        <h4>4 bedrooms</h4>
        <p>Kshs 6,534,000</p>
      </SinglePropertyCard>{" "}
      <SinglePropertyCard>
        <img src="/img/exterior-01.jpg" alt=""/>
        <h3>Bungalow in South Side</h3>
        <h4>4 bedrooms</h4>
        <p>Kshs 6,534,000</p>
      </SinglePropertyCard>
    </PropertyRow>
  );
}

export default PropertyCard;

const PropertyRow = styled.div` 
  z-index:3;
  display: flex;
  flex: 1;
  max-width: 1366px;
  margin: 0 40px 40px 40px;
  justify-content: space-around;
  width:100%;
  margin:0 auto;
`;

const SinglePropertyCard = styled.div`
  font-family: "Arial", sans-serif;
  font-weight: normal;
  letter-spacing: 0px;
  img {
    width: 400px;
    height: 350px;
  }
  @media (max-width: 1300px) {
    img {
      width: 350px;
      height: 300px;
    }
  }@media (max-width: 1140px) {
    img {
      width: 300px;
      height: 250px;
    }
  }@media (max-width: 1000px) {
    img {
      width: 250px;
      height: 200px;
    }  h3 {
        font-size: 16px;
      }
      h4 {
        font-size: 14px;
      }
      p {
        font-size: 16px;
      }
  }
  h3 {
    font-size: 18.7px;
    color: #1a1a1a;
    line-height: 30px;
  }
  h4 { 
    font-size: 15.7px;
    line-height: 30px;
  }
  p {
    line-height: 30px;
    color: #20b759;
    font-size: 18px;
  }
  @media (max-width: 968px) {
    img {
      width: 200px;
      height: 150px;
    }
  
  }
`;
