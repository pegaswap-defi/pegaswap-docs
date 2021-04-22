import React, { useState } from 'react'
import styled from 'styled-components'
import {pagi} from '../../constants/index';
import { NavLink } from 'react-router-dom'



const Pagination = ({prev, next, linkprev, linknext}) => {

    return (
      <BoxPagination className="row">
        <BoxButton className="prev col-12 col-md-6">
          <p>
            <i class="fa fa-arrow-left"></i>
          </p>
          <StyledLink to={linkprev}>
            <span>Prev</span>
             {prev}
          </StyledLink>
        </BoxButton>
        <BoxButton className="next col-12 col-md-6">
          <StyledLink to={linknext}>
            <span>Next</span>
             {next}
          </StyledLink>
          <p>
            <i class="fa fa-arrow-right"></i>
          </p>
        </BoxButton>
      </BoxPagination>
    );
}

const BoxPagination = styled.div`
  
  display: flex;
  margin-left: 0 !important;
  margin-top: 25px;
  width: 100%;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    max-width: 800px;
    margin-left: 0 !important;
  }
`

const BoxButton = styled.div`
  &.prev{
    margin-bottom: 10px;
    @media screen and (min-width: 768px){
      margin: 0;
      
    }
  }
 

  @media screen and (min-width: 768px){
    &.col-md-6{ 
      max-width: 49% !important;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #E6ECF1;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  border-radius: 3px;
  background-color: #FFFFFF;
  transition: ease-in-out .5s all;
  cursor: pointer;
  padding: 10px 25px;

  width: 100%;
  p{
    margin-bottom:0;
    span{
      display:block;
    }
  }
  &:before,
  &:after {
    width: 0%;
    height: 2px;
    position: absolute;
    background: #23d8f3;
    transition: width .4s ease-in-out;
    content: " ";
  }

  &:before {
    left: 0;
    top: -2px;
  }

  &:after {
    bottom: -2px;
    right: 0;
  }

  &:hover {
    opacity:.5;
    border-color: #23d8f3;
    color: #23d8f3;

    &:before,
    &:after {
      width: 100%;
    }
  }
  
`;

const StyledLink = styled(NavLink)`
  text-decoration: none!important;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  width:100%;
  text-align:center;
  height:100%;
  display: block;
  align-items:center;
  justify-content:center;
  transition:ease-in-out .5s all;
  span{
    display: block;
    width: 100%;
    color: #c3c3c3;
  }
  &:hover {
    color: #805e49;
  }
`


export default Pagination