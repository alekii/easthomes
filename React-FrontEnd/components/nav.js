import React, { Component } from "react";
import styled from "styled-components";
import About from "./about";
import { Link } from "react-router-dom";
class Nav extends Component {
  state = {};
  render() {
    return (
      <NavBar>
        <MenuItems>
          <Logo><Link to="/">EastHomes</Link> </Logo> 
          <LeftItems>  
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
           </LeftItems>
        </MenuItems>
      </NavBar>
    );
  }
}

export default Nav;

const NavBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1ea69a;
  position:fixed;
  z-index:9
`;

const MenuItems = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display:flex;justify-content:space-between;

  a { 
    text-decoration:none;
    color:white;
  }
  
`;

const Logo = styled.h1`
  padding: 10px 10px;
  color: white;
  cursor: poiner;
  font-size: 25px;
  font-weight: Black;
  width:20px !important
`;

const LeftItems = styled.ul`
display:flex; 
  li {
    list-style:none;
    padding: 0 25px;
    text-transform:uppercase;
    margin-top:16px;
    font-size:16px;
    font-family: "Roboto";
    font-weight:bold;
    cursor:pointer;
  }
  
    
`