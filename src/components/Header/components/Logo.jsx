import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {
    return (
      <div className="col-7 col-md-6 col-lg-2">
        <StyledLink to="/"><img src="logo.png" alt="Pegaswap" /></StyledLink>
      </div>
    )
}

const StyledNav = styled.nav`
    position:relative;
    .sub-trade{
      display:none;
      border-radius:3px;
      padding-top:10px;
      ul{
        padding-left:0;
        li{
          margin-bottom:10px;
          a{
            text-decoration:none;
          }
        }
      }
    }
    .paren_item{
      position:relative;
      cursor: inherit;
    &:hover{
      .sub-trade{
          li{
            list-style:none;
            a{
              font-size:14px;
            }
          }
          background:#fff;
          padding-left:0;
          display:block;
          position:absolute;
          left:15px;
          top:20px
      }
    }
    }
    display:none;
    @media (min-width: 768px) {
      display:block;
    }
`




const StyledLink = styled(NavLink)`
  display: block;
  max-width: 125px;
  width: 100%;
  transition: all 0.5s ease-in-out 0s;
  outline: none;
  text-decoration: none!important;
  overflow: hidden;
  float: left;

  img{
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    
  }
  
  @media (max-width: 576px) {
    padding-left: 8px;
    padding-right: 8px;
    margin-left:25px;
  }
  
`

const StyledAbsoluteLink = styled.a`
  color: rgb(31, 199, 212);
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;
  &:hover {
    color: #805e49;
  }
  &.active {
    color: green[500];
  }
  @media (max-width: 400px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`

export default Logo