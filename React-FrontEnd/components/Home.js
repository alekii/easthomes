 import React, { Component } from "react"; 
 import styled from "styled-components"; 
import Hero from "./hero";
import Items from "./items";

class Home extends Component { 
  state={  
  }
 
  render() { 
    return (
      <Wrap> 
        <Hero></Hero>
        <PropertyForSaleHeading >
          <h2>Property for Sale</h2>
        </PropertyForSaleHeading>
        <Items></Items>
      </Wrap>
    );
  }
}

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
   
`;

const PropertyForSaleHeading = styled.div`
  margin-top: 100px;
  h2 {
    font-size: 25px;
    font-family: "Roboto", sans-serif;
    color: #1a1a1a;
    text-align: center;
    padding: 30px 0;
  }
`;
