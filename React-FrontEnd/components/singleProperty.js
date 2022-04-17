import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";   
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'; 
import  {getProperty}  from '../services/propertyService';

function Single() {   
  const [response, setResponse] = React.useState([])
  const [isLoaded, setIsLoaded] = React.useState(false)
  const {id} = useParams() 

React.useEffect(()=>{  
  fetchData();
},[])  
async function fetchData(){ 
  const res = await getProperty(id);  
  setResponse(res)
  setIsLoaded(true) 
}
  if(!isLoaded){
    return(
      <h4 style={{marginTop:"40vh",paddingBottom:"80vh",textAlign:"center"}}>Loading...</h4>
    )
  } 
    return ( 
      <Content>
        <SearchBar />
        <div className="content"> 
          <h2>Bungalow in South Nairobi</h2> 
           <h3>Kshs 4,568,870</h3>
          <ImgHolder>
            <img src="/img/exterior-00.jpg" alt="" />
          </ImgHolder>
          <ContentMain>
            <ContentLeft>
                <h4>Property Details</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </ContentLeft>
            <ContentRight>
                <AgentImgHolder>
                <img src="/img/agent-00.jpg" alt=""/><p> </p> 
                <p><strong>Agent Name:</strong> {`${response.data.agent.first_name}`}</p>
                <p><strong>Phone:</strong> {response.data.agent.phone}</p>
                <p><strong>Email:</strong> {response.data.agent.email}</p>
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
  h2,h3{ 
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