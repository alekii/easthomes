import './App.css'; 
 import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components'
import Home from './components/Home'; 
import About from './components/about'; 
import { Switch } from 'react-router-dom';
import Nav from './components/nav';
import Footer from "./components/footer";
import Single from './components/singleProperty';
import Contact from './components/contact'; 
import SearchResults from './components/searchResults';
import Sidebar from './components/sidebar'; 
import MobileSearch from './common/searchform';

 const App =()=>{ 
 const [sidebar, setSidebar] = React.useState(false);
 const [searchform, setSearchForm] = React.useState(false)

const toggleSidebar = () =>{  
  setSidebar((prevState)=>!prevState);
}

const toggleSearchForm =()=>{ 
  setSearchForm((prevState)=>!prevState);
}

 return (
     <Content> 
     <Nav openSidebar ={toggleSidebar}
          openSearchForm ={toggleSearchForm}/>
     <Sidebar sidebar={sidebar}
              toggleSidebar={toggleSidebar}> 
      </Sidebar>
      <MobileSearch  
           searchform={searchform}
              toggleSearchForm={toggleSearchForm}>
      >

      </MobileSearch>
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
         <Route path="/search/:town/:minprice/:maxprice/:bedrooms" > 
         <SearchResults/>  
         </Route>
     </Switch> 

     <Footer></Footer>
     </Content>
  );
}

export default App;

const Content = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
min-height: 100vh; 
`