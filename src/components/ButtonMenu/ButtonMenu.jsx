import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ListIcon from "../Header/components/ListIcon";
import Nav from "../SideBar/components/Nav";


const ButtonMenu = ({ status, onClose }) => {

  return (
    <StyledBlock>
      <StyledCard className={`${status ? "active" : ""}`}>
        <StyledHover className="topRight" onClick={onClose}>
          <svg
            viewBox="0 0 24 24"
            color="text"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-hBEYos ivTGBL"
          >
            <path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>
          </svg>
        </StyledHover>
        <StyledMainNav>
          <Nav/>
          <ListIcon/>
        </StyledMainNav>
      </StyledCard>
      <StyledBg onClick={onClose} className={`${status ? "display" : ""}`} />
    </StyledBlock>
  );
};


const StyledMainNav = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    order: 2;
    margin-bottom: 32px;
    height: 100%;
    overflow-y: scroll;
    .link{
      cursor: pointer;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      min-height: 40px;
      padding: 8px 40px;
      font-weight: 700;
      transition: background-color 0.2s ease 0s;
      color: #99378E;
    }
    .link:hover {
      background-color: rgb(238, 234, 244);
      text-decoration: unset;
      
    }

    @media (max-width:576px){
      .hide_pc{
        display:block;
        
        i{
          margin-right:10px;
        }

      }
    }
`;

const StyledBlock = styled.div``;

const StyledHover = styled.div`

  &.fill{
    svg{
      fill: rgb(31, 199, 212);
    }
   
  }

  &.topRight{
    position: absolute;
    top: 5px;
    right: 5px;
  }

  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  border: 0px;
  border-radius: 16px;
  box-shadow: none;
  color: rgb(31, 199, 212);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  width: max-content;
  height: 32px;
  line-height: 1;
  letter-spacing: 0.03em;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  padding: 0px 16px;
  transition: background-color 0.2s ease 0s;

  padding: 0px 8px;
  border-radius: 8px;

  svg {
    fill: rgb(69, 42, 122);
  }

  &:hover:not(:disabled):not(:active) {
    background-color: rgb(239, 244, 245);
    border-color: currentcolor;
  }
`;

const StyledBg = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 48, 85, 0.3);
  transition: opacity 0.4s ease 0s;
  opacity: 0.6;
  pointer-events: initial;
  display: none;
  z-index: 99;
  &.display {
    display: unset;
  }
`;

const StyledCard = styled.div`
position: fixed;
display: flex;
flex-direction: column;
background-color: rgb(255, 255, 255);
top: 0px;
left: -100%;
width: 100%;
max-width: 320px;
height: 100vh;
padding: 45px 0px;
overflow-y: auto;
transition: right 0.4s ease 0s;
z-index: 999;
&.active{
  left: 0px;
}
  .nav-ct{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    order: 2;
    margin-bottom: 32px;
    
  }
  button{
   
    i {
      width: auto;
      height: auto;
      border: none;
    }
    i:after{
      content: "";
      display: block;
      margin: auto;
      width: 17px;
      border-bottom: solid 2px #ffe630;
      transform: rotate(-45deg);
      margin-top: -2px;
    }
    i:before{
      content: "";
      display: block;
      margin: auto;
      width: 17px;
      border-bottom: solid 2px #ffe630;
      transform: rotate(45deg);
    }
    .m-nav .main-nav > ul > li > a {
      display: block;
      font-weight: normal;
      border: none;
      border-top: solid 1px #e6e6e6;
      line-height: 20px;
      padding: 10px 15px 10px 15px;
      color: rgb(31, 199, 212);
      margin: 0px;
      text-transform: none;
  }
`;

export default ButtonMenu;
