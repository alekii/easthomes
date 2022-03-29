import React, { Component } from "react";
import styled from "styled-components";
class Nav extends Component {
  state = {};
  render() {
    return (
      <Wrap>
        <MenuItems>
          <Logo> EastHomes </Logo>
          <LeftItems>
              <li><a href="wwwmecom">ABout</a></li>
              <li><a href="wwwmecom">Contact</a></li>
          </LeftItems>
        </MenuItems>
      </Wrap>
    );
  }
}

export default Nav;

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2699fb;
  position:fixed;
  z-index:6
`;

const MenuItems = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display:flex;justify-content:space-between

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
    font-weight:bold
  }
   li a {
  text-decoration:none;
  color:white;

   }
`