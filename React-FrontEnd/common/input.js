import React from 'react';
import "../css/styles.css";


const Input = ({className,price,label,error,...rest}) => { 
    return ( 
    <div className={className}>
    <label htmlFor={price}>{label}</label>
    <input 
      {...rest}
      type="text"
      name={price}
      id={price}
    />
    {error && <p style={{color:"red",marginTop:"-20px"}}>{error}</p>}
  </div> );
}

export default Input;