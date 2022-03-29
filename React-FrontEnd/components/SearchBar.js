import React, { Component } from "react";
import styled from "styled-components"; 
import "../css/styles.css"

function SearchBar() {
  return ( 
      <Bar>
      <form>
        {" "}
        <PropertySearch>
        <div className="searchterms">
          <label htmlFor="town">Town</label>
          <select name="towns" id="towns">
            <option value="Nairobi">Nairobi</option>
            <option>Kiambu</option>
            <option>Kajiado</option>
            <option>Machakos</option>
          </select>
        </div>
        <div className="searchterms">
          <label htmlFor="bedroom">Bedrooms</label>
          <select name="rooms" id="rooms">
            <option value="4">4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </div> 
        <div className="searchterms">
            <label htmlFor="MinPrice">Min Price</label>
            <input type="text" name="MinPrice" id="minprie" />
          </div>
        <div className="searchterms">
            <label htmlFor="MaxPrice">Max Price</label>
            <input type="text" name="MinPrice" id="maxprice" />
          </div>
        <div className="searchterms">
          <input type="submit" name="search" id="search" value="Search" />
        </div>
        </PropertySearch>
      </form>
       </Bar>
  );
}

export default SearchBar;
const Bar = styled.div`
   width:100%;
`
const PropertySearch = styled.div` 
  width:100%;
  padding:10px 50px 0 50px;
  position: fixed;
  top: 50px;
  z-index: 8;
  display: flex;
  flex: 1;
  justify-content:space-around;
  background-color: #f7f7f7;
  border: 2px solid #bce0fd;  

  label {
    font-weight: 500;
  }

  select,
  input {
    margin: 10px 0 20px 0;
    paddding: 5px;
    height: 44px;
    font-weight: 400;
    font-size: 16px;
    border: 1px solid #bce0fd;
    background-color:inherit
  }

  input,select {
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
    cursor: pointer;
    width:100%;
    margin-top:29px;
  }

  select:focus,
  input:focus {
    outline: none;
  }
`;
 