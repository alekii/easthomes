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
          <h2 id ="scrollIntoView">Property for Sale</h2>
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
  h2 {
    font-size: 25px;
    font-family: "Roboto", sans-serif;
    color: #1a1a1a; 
    text-align: center; 
    position:relative;
    top:200px
  }
 @media(max-width:768px){
    h2{
    top:130px
    }
  }
  @media(max-width:500px){
  h2{
    font-size:22px
  }
  }
  @media(max-width:360px){
  h2{
    font-size:18px
  }
  }


`;
