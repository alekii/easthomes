import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";   
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'; 
import  {getProperty}  from '../services/propertyService';
import CurrencyFormat from "react-currency-format"; 

function Single() {   
  const [data, setData] = React.useState([])
  const [isLoaded, setIsLoaded] = React.useState(false)
  const {id} = useParams() 

React.useEffect(()=>{  
  fetchData();
},[])  
async function fetchData(){ 
  const res = await getProperty(id);  
  setData(res.data)  
  setIsLoaded(true) 
}
  if(!isLoaded){
    return(
      <h4 style={{marginTop:"40vh",paddingBottom:"80vh",textAlign:"center"}}>Loading...</h4>
    )
  } 
    return ( 
      <Content>
        <div className="SearchBarArea">
      <SearchBar />
      </div>
        <div className="content"> 
          <h2>{data.name}</h2>  
           <h3><CurrencyFormat value={data.price} 
                               displayType="text" 
                               thousandSeparator={true} 
                               prefix={'Kshs '}/>
           </h3> 
           <h4>{data.location.location_name}</h4>
           <ImgHolder>
            <img src={data.images[0].image} alt="" />
          </ImgHolder>
          <ContentMain>
            <ContentLeft>
                <h4>Property Details</h4> 
                 {data.description} 
            </ContentLeft>
            <ContentRight>
                <AgentImgHolder>
                <img src={data.agent.agentimages[0].image} alt=""/><p> </p> 
                <p><strong>Agent Name:</strong> {`${data.agent.first_name}`}</p>
                <p><strong>Phone:</strong> {data.agent.phone}</p>
                <p><strong>Email:</strong> {data.agent.email}</p>
                </AgentImgHolder> 
            </ContentRight>
          </ContentMain>
        </div>
      </Content> 
    )
  }


export default Single;
const Content = styled.div`
  width: 100%;
  h2,h3,h4{ 
      width:80%; 
      margin:0 auto;  
      line-height:34px; 
      @media(max-width:995px){
        width:95%; 
         
    }
  }
    h3{
        color:#5d7482; 
      }
  
`;
const ImgHolder = styled.div`
  height: 530px;
  width: 80%;
  margin: 20px auto 20px auto;
  max-width: 1366px; 

  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
  } 
   
  @media(max-width:995px){
    width:95%;
    height:auto;
    img{
      height:auto;
    }
} 
`;
const ContentMain = styled.div`
  display: flex;
  width: 80%;
  max-width: 1366px;
  justify-content:space-between;
  margin: 0 auto; 
   @media(max-width:995px){
    width:95%;  
   }
    @media(max-width:768px){
      display: block;
    }
  
`;
const ContentLeft = styled.div`
  width: 64%;
  background-color:white;
  padding:20px;

  p{
      margin-top:10px;
      letter-spacing:0.7px;
      word-spacing:7px 
  } 
  @media(max-width:768px){
    width:100%
}
`;
const ContentRight = styled.div`
  width: 34%;
  height:374px;
  background-color:white;
  border: 1px solid #bce0fd;
   @media(max-width:768px){
    width:100%;
    margin-top: 20px;
}
`;
const AgentImgHolder = styled.div` 
  width:214px; 
  margin:20px auto 0 auto; 
  img{
  margin-bottom:10px;
  height:214px; 
  width:100%;
  border-radius:50%;
  }

  p{
      line-height:30px;
 
  }

`