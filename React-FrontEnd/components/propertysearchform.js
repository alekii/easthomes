import React from 'react'
import styled from 'styled-components'
import Form from "../common/form";
import { Redirect } from "react-router-dom"; 

class PropertySearchForm extends Form {

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
redirect = () =>{  
  let redirect = this.state.redirect
  redirect=true; 
  this.setState({redirect}) 
};
  render(){if(this.state.redirect){  
    const {town, minprice,maxprice} = this.state.query 
    let search = `/search/${town}/${minprice}/${maxprice}`  
  return( 
    <><Redirect to={{pathname:search}}/>
    </>)
}
const { query, errors } = this.state;
  return ( 
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
  )
}
}

export default PropertySearchForm;
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
