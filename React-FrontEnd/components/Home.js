import React, { Component } from "react";
import styled from "styled-components";
import Nav from "./nav";
import Footer from "./footer";
import Hero from "./hero";
import PropertyCard from "./PropertyCard";
import Paginator from "./paginator";
import SearchBar from "./SearchBar";

class Home extends Component {
  state = {};
  render() {
    return (
      <Wrap>
        <Nav></Nav>
        <SearchBar></SearchBar>
        <Hero></Hero>
        <PropertyForSaleHeading>
          <h2>Property for Sale</h2>
        </PropertyForSaleHeading>
        <PropertyCard></PropertyCard>
        <WhiteWave></WhiteWave>
        <WhiteBackground>
          <PropertyCard></PropertyCard>
        </WhiteBackground>
        <Wave></Wave>
          <PropertyCard></PropertyCard>
          <Paginator></Paginator>
        <Footer></Footer>
      </Wrap>
    );
  }
}

export default Home;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
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

const WhiteWave = styled.div`
background-image:url("/img/wavewhite.svg");
width:100%; 
background-repeat:no-repeat; 
background-size:cover;  
padding-bottom: 210px; 
}
`;
const Wave = styled.div`
background-image:url("/img/theone.svg");
width:100%; 
background-repeat:no-repeat; 
background-size:cover; 
padding: 100px;
margin-top: -200px;
}

`;
const WhiteBackground = styled.div`
  background-color: #fff;
  padding-bottom:210px
`;
