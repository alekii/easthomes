import React from 'react';
import  {getProperties}  from '../services/propertyService';
import styled from "styled-components"; 
import PropertyCard from "./PropertyCard";
import Paginator from "./paginator"; 


function Items() {
    const [currentPage,setCurrentPage] = React.useState(1)
    const [noPages,setNoPages] = React.useState(1)
    const [properties,setProperties] = React.useState([])
    const [isLoaded,setIsLoaded] = React.useState(false) 
    const [init,setInit] = React.useState(false) 

    React.useEffect(()=>{  
        fetchData(currentPage);
      },[]) 
      function updateData(page){
          console.log("currentPage " +page) 
           setCurrentPage(page)
           setProperties([])
           setIsLoaded(false) 
           fetchData(page)
      }
      async function fetchData(page){ 
        const res= await getProperties(page);
        setProperties(res.data.results); 
        console.log(res)
        if(!init){
        const no_of_pages = Math.ceil(res.data.count/(res.data.results.length))
        setNoPages(no_of_pages)
        setInit(true)
        }
        console.log("no Pages " +noPages)
        console.log("Count " +res.data.count)
        setIsLoaded(true)
      }
      if(!isLoaded){ 
        return   <h4 style={{marginTop:"40vh",paddingBottom:"80vh",textAlign:"center"}}>Loading...</h4>
      }

    return (  
        <><div id="items">
            <PropertyCard data={properties.slice(0, 3)} id="items"></PropertyCard>
           { properties.length>5 &&
           <><WhiteWave></WhiteWave><WhiteBackground>
                    <PropertyCard data={properties.slice(3, 6)}></PropertyCard>
                </WhiteBackground></>
             }
             {properties.length>8 && 
            <><Wave></Wave><PropertyCard data={properties.slice(6, 9)}></PropertyCard></>
            }
        </div>
        <Paginator no_of_pages={noPages} currentPage={currentPage} onPageChange={page => updateData(page)}></Paginator></> 
      
    );
}

export default Items;


const WhiteWave = styled.div`
background-image:url("/img/wavewhite.svg");
width:100%; 
background-repeat:no-repeat; 
background-size:cover;  
padding-bottom: 210px; 
}
`;
const Wave = styled.div`
background-image:url("/img/theone.svg");
width:100%; 
background-repeat:no-repeat; 
background-size:cover; 
padding: 100px;
margin-top: -200px;
}

`;
const WhiteBackground = styled.div`
  background-color: #fff;
  padding-bottom:210px
`;
