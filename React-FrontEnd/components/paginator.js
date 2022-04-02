import React, { Component } from 'react';
import styled from "styled-components" 

const Paginator=({no_of_pages,currentPage,onPageChange}) => {

    const handleClick=(index)=>{   
        onPageChange(index)
        document.getElementById('scrollIntoView').scrollIntoView(
        {behavior:'smooth',block:'start', inline:'end'}
    )
    } 

     return (  
        <Wrap>
              {Array(no_of_pages).fill(null).map((value,index)=>( 
                    (index+1)===currentPage ?  
                    <Button onClick={()=>handleClick(index+1)} key={index} style={{backgroundColor:"#1EA69A"}}>
                    <p style={{color:"#fff"}}>{index+1} </p>
                    </Button>  :
                    <Button onClick={()=>handleClick(index+1)} key={index}>
                    <p>{index+1}</p>
                    </Button> 
              )
                    )
                  } 
            
        </Wrap>

    );
}

export default Paginator;

const Wrap = styled.div`
   
display:flex;
padding:70px 0 0px 0; 
align-self:center; 
justify-content: center;
background-color:${props=>props.currentPage} 

`

const Button = styled.div`

width:50px;
height:50px;
background-color:white;  
border-radius:50%;
margin:10px;
cursor:pointer;

a{
    text-decoration:none
}

p{
    text-align:center;
    position:relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    font-size:17px;
    font-weight:600
}


&:hover{
    background-color:#1EA69A;
    p{
        color:white; 
    }

}



`