import React, { Component } from "react";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  towns = ["Nairobi", "Kajiado", "Kiambu", "Machakos"];
  bedrooms = [1, 2, 3, 4];
  renderform = true;
  state = {
    query: {
      town: this.towns[0],
      bedrooms: "4",
      minprice: "1000000",
      maxprice: "10000000",
    },
    errors: {},
    redirect: false,
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
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.props.toggleSearchForm) {
      this.props.toggleSearchForm();
    }
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.redirect();
  };

  redirect = () => {
    let redirect = this.state.redirect;
    redirect = true;
    this.renderform = false;
    this.setState({ redirect });
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
  renderSelect(className, name, label, options, defaultValue) {
    return (
      <Select
        name={name}
        className={className}
        onChange={this.changeOption}
        label={label}
        options={options}
        defaultValue={defaultValue}
      ></Select>
    );
  }
}

export default Form;
