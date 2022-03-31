import React from "react";
import "../css/styles.css";


const Select = ({className,name,options,label,...rest}) => { 
 return( <div className={className}>
    <label htmlFor={name}>{label}</label>
    <select  
      {...rest}
      name={name}
      id={name}
    >
      {options.map((option,index)=>{  
     return( <option key={index} value={option}>{option}</option>);
      })} 
    </select>
  </div>);
};

export default Select;
