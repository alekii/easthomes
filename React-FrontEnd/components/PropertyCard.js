import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
const PropertyCard = ({ data }) => {
  return (
    <PropertyRow>
      {data.map((property, index) => {
        return (
          <SinglePropertyCard key={index}>
            <Link to={`/single/${data[index].id}`}>
              <img src={property.images[0].image} alt={property.name} />
            </Link>
            <h3>{property.name}</h3>
            <h4>{property.bedrooms} bedrooms</h4>
            <p>
              <CurrencyFormat
                value={property.price}
                displayType="text"
                thousandSeparator={true}
                prefix={"Kshs "}
              />
            </p>
          </SinglePropertyCard>
        );
      })}
    </PropertyRow>
  );
};

export default PropertyCard;

const PropertyRow = styled.div`
  z-index: 3;
  display: flex;
  flex: 1;
  max-width: 1366px;
  margin: 0 0 40px 0;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const SinglePropertyCard = styled.div`
  font-family: "Arial", sans-serif;
  font-weight: normal;
  letter-spacing: 0px;
    margin-bottom: 20px;
    font-weight:600;
  img {
    width: 400px;
    height: 350px;
    cursor:pointer;
  }
    h3 {
    font-size: 18.7px;
    color: #1a1a1a;
    opacity:0.85;
    line-height: 30px;
  }

  h4 {
    font-size: 15.7px;
    line-height: 30px;
    font-weight:500;
  }
  span{
    line-height: 30px;
    color: #20b759;
    font-size: 18px;
    font-weight:400;
  }

  @media (max-width: 1300px) {
    img {
      width: 350px;
      height: 300px;
    }
    h3{
    max-width:350px 
  }
  }@media (max-width: 1140px) {
    img {
      width: 300px ;
      height: 250px ;
    }
    h3{
       max-width:300px 
  }
  }@media (max-width: 1000px) {
    img {
      width: 250px ;
      height: 200px ;
    }  h3 {
        font-size: 16px ;
       max-width:250px 
      }
      h4 {
        font-size: 14px ;
      }
       span{
        font-size: 16px ;
      }@media (max-width: 968px) {
    img {
      width: 200px;
      height: 150px;
    }

    h3{
       max-width:200px 
  }
  }
  }@media (max-width: 768px) {
    img {
      width: 260px ;
      height: 210px ;
    }
    h3{
       max-width:260px 
    font-size: 18.7px;
    line-height: 20px;

  }
  }@media (max-width: 640px) {
    img {
      width: 240px ;
      height: 190px ;
    }   
    h3 {
      font-size:15.7px 
       max-width:240px 
    }

  }@media (max-width: 568px) {
    img {
      width: 210px ;
      height: 160px ;
    }
   h3 {
    font-size: 15.7px ;
       max-width:210px 
  }
  h4 {
    font-size: 14px ;
  }
  span{
    font-size: 16px ;
  }
  }@media (max-width: 478px) {
    img {
      width: 180px ;
      height: 130px ;
    }
    h3{
       max-width:180px 
  }
  @media (max-width: 400px) {
    img {
      width: 160px ;
      height: 110px ;
    }
    h3{
       max-width:160px 
  }
  }@media (max-width: 360px) {
    img {
      width: 160px ;
      height: 100px ;
    }
     h3 {
       font-size: 13.7px ;
       max-width:160px 
  }
  h4 {
    font-size: 12.7px ;
  }
  span{
    font-size: 14px ;
  }
  }@media (max-width: 320px) {
    img {
      width: 130px ;
      height: 100px ;
    }
    h3{
       max-width:130px 
  }
  }@media (max-width: 300px) {
    img {
      width: 100px ;
      height: 80px ;
    }
    h3{
       max-width:100px 
  }
  }


`;
