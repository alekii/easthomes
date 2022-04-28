import React from "react";
import styled from "styled-components";

function footer() {
  return (
    <Footer>
      <FooterItems>
        <Contact>
          <h4>Contact US</h4>
          <li>+254701096760</li>
          <li>email@email.com</li>
          <li>Nairobi,Kemya</li>
        </Contact>
        <Information>
          <h4>Information</h4>
          <li>About East Homes</li>
        </Information>
        <NewsLetter>
          <li>Subscribe to our newsletter</li>
        </NewsLetter>
      </FooterItems>
      <Copyright>EastHomes Limited. &#169;2022. All rights reserved</Copyright>
    </Footer>
  );
}

export default footer;

const Footer = styled.div`
  background-color: #1ea69a;
  width: 100%;
  margin-top: 50px;
`;

const FooterItems = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1366px) {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Contact = styled.ul`
  display: flex;
  flex-direction: column;

  h4 {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: bold;
    color: white;
  }

  li {
    padding: 5px 0;
    list-style: none;
    color: white !important;
  }
`;
const Information = styled.ul`
  display: flex;
  color: white;
  flex-direction: column;
  h4 {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: bold;
    color: white !important;
  }
  li {
    padding: 10px 0;
    list-style: none;
    color: white !important;
  }
`;
const NewsLetter = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    color: white;
    padding: 10px 0;
    list-style: none;
  }
`;

const Copyright = styled.p`
  background-color: #ebeff7;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  border-top: 1px solid #ccc;
`;
