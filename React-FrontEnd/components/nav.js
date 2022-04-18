import React from "react"; 
import styled from "styled-components"; 
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';

const Nav=(props)=>{ 
  const {openSidebar,openSearchForm} = props
  
    return (
      <NavBar>
        <MenuItems>
          <Logo><Link to="/">EastHomes</Link> </Logo> 
          <LeftItems>  
              <DesktopMenu>
                <ListItems>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              </ListItems>
              </DesktopMenu>
              <MobileMenu>
                <ListItems>
              <li onClick={openSearchForm}><i className="ri-search-line"></i></li>
              <li onClick={openSidebar}><i className="ri-menu-3-line"></i></li>
              </ListItems>
              </MobileMenu>
           </LeftItems>
        </MenuItems>
      </NavBar>
    );
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
  font-size: 22px;
  font-weight: bold;
  width:20px !important
`;

const LeftItems = styled.div``

const ListItems = styled.ul`
display:flex; 
 li {
    list-style:none;
    padding: 0 15px;
    text-transform:uppercase;
    margin-top:16px; 
    font-family: "Roboto"; 
    cursor:pointer;
    font-weight:500; 
  }
  
  i{
    color: white; 
    font-size: 30px; 
}
  }@media(max-width:360px){
    li{
      padding: 0 5px;
    }
  }
    
`

const DesktopMenu = styled.div`

@media(max-width:768px){
  li{
    display:none
  }  
}
`

const MobileMenu = styled.div`
li{
  margin-top:10px;
}
@media(min-width:768px){  
  li{
    display:none;
  }
  
}

@media(min-width:500px){
  li:first-child{
    display:none
  }
}


`