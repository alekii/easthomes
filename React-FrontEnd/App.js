import './App.css'; 
 import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import styled from 'styled-components'
import Home from './components/Home'; 
import About from './components/about'; 
import { Switch } from 'react-router-dom';
import Nav from './components/nav';
import Footer from "./components/footer";
import Single from './components/singleProperty';
import Contact from './components/contact'; 
import SearchResults from './components/searchResults';

 class App extends Component { 
    
 render(){
    
 return (
     <Content> 
     <Nav></Nav>
       <Switch> 
         <Route exact  path="/" > 
         <Home/>  
         </Route> 
         <Route path="/about" > 
         <About/>  
         </Route>  
         <Route path="/single/:id" > 
         <Single/>  
         </Route>
         <Route path="/single"
          render={(props) =><Single {...props}/>} />  
         <Route path="/contact" > 
         <Contact/>  
         </Route>
         <Route path="/search/:town/:minprice/:maxprice" > 
         <SearchResults/>  
         </Route>
     </Switch> 
     <Footer></Footer>
     </Content>
  );
}
}

export default App;

const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between
`