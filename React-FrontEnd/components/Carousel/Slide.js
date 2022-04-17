import React from "react"
import styled from "styled-components"
 
export const SliderContainer = styled.div`
height:inherit;  
max-width:1366px;
margin:0 auto;  
width:100%;
@media(max-width:540px){
   display:none 
} 
`

export const Img = styled.img` 
   height:700px;
   background-repeat:no-repeat;
   background-size:cover;
   opacity:1;
   transition:opacity 0.7s ease-in; 
   width:100%;

`
