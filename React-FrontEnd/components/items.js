import React from 'react';
import { getProperties } from '../services/propertyService';
import styled from "styled-components";
import PropertyCard from "./PropertyCard";
import Paginator from "./paginator";


function Items() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [noPages, setNoPages] = React.useState(1) 
  const [properties, setProperties] = React.useState([])
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [initialized, setInitialized] = React.useState(false)
  const [size, setSize] = React.useState(window.innerWidth, window.innerHeight) 
  let j = 3; 

  React.useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    fetchData(currentPage);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  function updateData(page) { 
    setCurrentPage(page)
    setProperties([])
    setIsLoaded(false)
    fetchData(page)
  }
  async function fetchData(page) {
    const res = await getProperties(page);
    setProperties(res.data.results);  
    if (!initialized) { 
      const no_of_pages = Math.ceil(res.data.count / (res.data.results.length))
      setNoPages(no_of_pages); 
      setInitialized(true); 
    } 
    setIsLoaded(true)

  }
  if (!isLoaded) {
    return <h4 style={{ marginTop: "40vh", paddingBottom: "80vh", textAlign: "center" }}>Loading...</h4>
  }
  if (window.innerWidth < 769) {
    j = 2;

  }


function getCard(j) { 
  let Slicedata = [ {}
  ] 
   let i = 0
   let k =0 
   let l = j 
   while (i<properties.length){
    Slicedata[k] = properties.slice(i,l)
      i+=j
      k+=1 
      l+=j 
   }    
    return (  
      Slicedata.map((data,index)=>{   
        return(
        <React.Fragment key={index+1}> {
          index%2===0 &&
        <>
          <WhiteWave></WhiteWave>
          <WhiteBackground>
            <PropertyCard data={Slicedata[index]} id="items"></PropertyCard>
          </WhiteBackground>
        </>
      }
        {
          index%2!==0 &&
          <>
            <Wave></Wave>
            <F7Background>
            <PropertyCard data={Slicedata[index]}></PropertyCard>
            </F7Background>
          </>
        }
      </React.Fragment>) 
    })
    )
  }
  


  return (
    <>
      <div className="items">
        {getCard(j)}
      </div>
      <Paginator no_of_pages={noPages} currentPage={currentPage} onPageChange={page => updateData(page)}></Paginator>
    </>

  );
}

export default Items;


const WhiteWave = styled.div`
background-image:url("/img/wavewhite.svg");
width:100%; 
background-repeat:no-repeat; 
background-size:cover;  
padding-bottom: 210px;
 @media(max-width:768px){ 
  padding-bottom: 100px;
  }
}
`;
const Wave = styled.div`
background-image:url("/img/theone.svg");
width:100%; 
background-repeat:no-repeat; 
background-size:cover; 
padding: 100px;
margin-top: -200px;
@media(max-width:768px){
  
margin-top: -280px;
}
}

`;
const WhiteBackground = styled.div`
  background-color: #fff;
  padding-bottom:210px;
  
`;const F7Background = styled.div`
background-color: #f7f7f7; 

`;
