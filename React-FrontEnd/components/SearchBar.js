import React, { Component } from "react";
import styled from "styled-components"; 
import "../css/styles.css"; 
import Form from '../common/form';


class SearchBar extends Form { 
  towns = ["Nairobi", "Kajiado", "Kiambu", "Machakos"];
  bedrooms = [1, 2, 3, 4];
  state = {
    query: { town:this.towns[0] , bedrooms: this.bedrooms[0], minprice: "0", maxprice: "0" },
    errors: {},
  };
  
 submit =()=>{

  console.log(this.state.query)
 }
  render() {
    const { query, errors } = this.state;
    return (
      <Bar>
        <form onSubmit={this.handleSubmit}>
          {" "}
          <PropertySearch>
           {this.renderSelect('searchterms','town','Town',this.towns)}
           {this.renderSelect('searchterms','bedrooms','Bed Rooms',this.bedrooms)}
           {this.renderInput('searchterms','minprice','Min Price')}
           {this.renderInput('searchterms','maxprice','Max Price')}
            <div className="searchterms">
              <input type="submit" name="search" id="search" value="Search" />
            </div>
          </PropertySearch>
        </form>
      </Bar>
    );
  }
}

export default SearchBar;
const Bar = styled.div`
  width: 100%;
`;
const PropertySearch = styled.div`
  width: 100%;
  padding: 10px 50px 0 50px;
  position: fixed;
  top: 50px;
  z-index: 8;
  display: flex;
  flex: 1;
  justify-content: space-around;
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
    background-color: inherit;
  }

  input,
  select {
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
    width: 100%;
    margin-top: 29px;
  }

  select:focus,
  input:focus {
    outline: none;
  }
`;
