import React from "react"; 
import PropertyCard from "./PropertyCard"; 
import {searchProperty} from '../services/propertyService';  
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from "styled-components";

const SearchResults =() =>{ 
   const {town,minprice,maxprice} = useParams()
   let [data,setData] = React.useState(null)
   let [IsDataReady,setIsDataReady] = React.useState(false)
   let [dataPresent,setDataPresent] = React.useState(false)
   let no_of_pages = 1;
   let searchterm = {town:town,
                     minprice:minprice,
                     maxprice:maxprice}
  React.useEffect(()=>{
    fetchData();
  },[])
  
  async function fetchData(){
    const res = await searchProperty(searchterm)
    setData(res)
    setIsDataReady(true)
    if(res.data.count!==0){
      setDataPresent(true)
    } 
    no_of_pages = Math.ceil(res.data.count/res.data.results.length) 
  }
  
   if(!IsDataReady){
    return (
      <h4 style={{marginTop:"40vh",paddingBottom:"80vh",textAlign:"center"}}>Loading...</h4>
      ) 
   }if(!dataPresent){  
    return (
      <h4 style={{marginTop:"40vh",paddingBottom:"80vh",textAlign:"center"}}>No Results Found</h4>
      )
   }
  return (
    
    <Wrap><h2>Showing {data.data.count} results for {town} town </h2>
    <PropertyCard data={data.data.results}></PropertyCard>  
    </Wrap>
      
     )
  
}

export default SearchResults;


const Wrap = styled.div`
  max-width:1366px;
  width:95%;
  margin:0 auto;
  margin-top:70px;
  h2{
    margin-bottom:16px;
    margin-left:20px;
    font-size:18px

  }
  
`
const PaginationBox= styled.div`
   position:relative;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%)
`