import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
    return (
        <StyledNav>
              <StyledLink className="link-mode" exact activeClassName="active" to="/">
                  Juiceswap.fi
              </StyledLink>
              
              <StyledLink className="link-mode" exact activeClassName="active" to="/farms">
                  lite.Juiceswap.fi
              </StyledLink>
              <StyledLink className="link-mode" exact activeClassName="active" to="/pools">
                  analytics
              </StyledLink>
        </StyledNav>
        
     
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

const LinkParen = styled.a`
  color: #99378E;
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none!important;
  .down-menu{
    font-size:12px;
  }
  &:hover {
    color: #805e49;
  }
  &.active {
    color: #000;
  }
  
`



const StyledLink = styled(NavLink)`
  color: #99378E;
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none!important;
  &:hover {
    color: #805e49;
  }
  &.active {
    color: #000;
  }
  @media (max-width: 400px) {
    padding-left: 8px;
    padding-right: 8px;
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

export default Nav