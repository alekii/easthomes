import React, { Component } from "react";
import Input from "./input";
import Select from "./select"; 
import { searchProperty } from './../services/propertyService'; 

class Form extends Component {
  state = {
    query: {},
    errors: {},
  };
  validate = (number) => {
    if (number === "") return false;
    return isNaN(number) ? false : true;
  };
  validateForm = () => {
    const errors = {};
    const { minprice, maxprice } = this.state.query;

    if (minprice.trim() === "" || isNaN(minprice)) {
      errors.minprice = "Number expected";
    }
    if (maxprice.trim() === "" || isNaN(maxprice)) {
      errors.maxprice = "Number expected";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = async(e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;  
    this.redirect()  
  };


  handleChange = ({ currentTarget: input }) => {
    const query = { ...this.state.query };
    query[input.name] = input.value;
    if (input.name === "minprice" || input.name === "maxprice") {
      const errors = this.validate(input.value);
      if (!errors) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "1px solid #ccc";
      }
    }
    this.setState({ query });
  };


  
  changeOption = ({ currentTarget: select }) => {
    const query = { ...this.state.query };
    query[select.name] = select.value;
    this.setState({ query });
  };

  renderInput(className, price, label) {
    const { query, errors } = this.state;
    return (
      <Input
        className={className}
        price={price}
        onChange={this.handleChange}
        label={label}
        value={query[price]}
        error={errors[price]}
      ></Input>
    );
  }
  renderSelect(className, name, label, options) {
    return (
      <Select
        name={name}
        className={className}
        onChange={this.changeOption}
        label={label}
        options={options}
      ></Select>
    );
  }
}

export default Form;
