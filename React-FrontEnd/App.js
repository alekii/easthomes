 import './App.css'; 
import { BrowserRouter,Route } from 'react-router-dom';
import styled from 'styled-components'
import Home from './components/Home'; 
import About from './components/about'; 
import { Switch } from 'react-router-dom';
import Nav from './components/nav';
import Footer from "./components/footer";
import Single from './components/singleProperty';
import Contact from './components/contact';

function App() { 
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
         <Route path="/single" > 
         <Single/> 
         </Route>
         <Route path="/contact" > 
         <Contact/>  
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
justify-content:space-between
`