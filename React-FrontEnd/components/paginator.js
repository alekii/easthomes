import React, { Component } from 'react';
import styled from "styled-components"

function Paginator() {
    return ( 

        <Wrap>
            <Button>
               <p>1</p>
            </Button>
            <Button>
               <p>2</p>
            </Button>
            <Button>
               <p>3</p>
            </Button>
            <Button>
               <p>4</p>
            </Button>
        </Wrap>

    );
}

export default Paginator;

const Wrap = styled.div`
   
display:flex;
padding:70px 0 0px 0; 
align-self:center;

`

const Button = styled.div`

width:50px;
height:50px;
background-color:white;  
border-radius:50%;
margin:10px;
cursor:pointer;


p{
    text-align:center;
    position:relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    font-size:17px;
    font-weight:600
}

&:hover,&:first-child{
    background-color:#1EA69A;
    p{
        color:white; 
    }
}



`