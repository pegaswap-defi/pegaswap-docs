import React, { useState } from "react";
import styled from "styled-components";

const Title = ({ title , image}) => {
  
  return <ContentTitle className="title">
  <img className="thum-nav" src={image}   alt="Justswap" /> {title}
  </ContentTitle>;
};

const ContentTitle = styled.h3`
    max-width: 600px;
    margin-bottom: 25px;
    font-size: 32px;
    font-weight: bold;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 2px solid #E6ECF1;
    @media(max-width:770px){
      font-size:24px;
    }
    img{
      max-width:32px;
      width: 100%;
      margin-top:-7px;
    }
`;

export default Title;
