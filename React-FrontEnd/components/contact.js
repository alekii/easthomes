import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../css/styles.css";
import styled from "styled-components";
class Contact extends Component {
  state = {
    formData:{name:'',email:'',message:''}
  };
  handleSubmit = () =>{ 
    
  }
  render() {
    return (
      <Content>
        <SearchBar />
        <div className="content">
        <ContactDetails> 
          <h2>Contact Us</h2>
          <p>Phone 1: +254732890765</p>
          <p>Phone 2: +254732890765</p>
          <p>Phone 3: +254732890765</p>
          <p>Email: info@easthomes.com</p>
          <p>WhatsApp +25478634324</p>
          <Form>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
              <label htmlFor="email">email</label>
              <input type="email" name="email" />
              <label htmlFor="message">Message</label>
              <textarea name="message"></textarea>
              <input type="submit" value="Send Message"/>
            </form>
          </Form>
        </ContactDetails>
        </div>
      </Content>
    );
  }
}

export default Contact;
const Content = styled.div`
  width: 100%; 
  h2{
      margin-bottom:10px;
      font-size:20px
      
  }
  p{
      line-height:40px;
  }
`;
const ContactDetails = styled.div` 
width: 80%;
margin: 0 auto;

`
const Form = styled.div`
  width: 40%;
  max-width: 500px;
  margin-top: 20px;
  label,
  input,
  textarea {
    width: 100%;
    font-weight: 500;
  }
  input,
  textarea {
    margin: 5px 0 13px 0;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
  }
  input,textarea{
    padding: 10px;
    font-weight:normal
  }
  textarea {
    height: 150px;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input[type="submit"]{
      background-color:#1ea69a;
      color:white;
      font-weight:bold;
      font-size:15px;
      border-radius:5px
  }
`;
