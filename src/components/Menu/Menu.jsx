import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from '../SideBar/components/Nav'

const Menu = () => {
  

    return (
      <StyledMenu className="side-bar">
        <div className="z-index">
          <Nav />
        </div>
        <Bg />
      </StyledMenu>
    );
}


const Bg = styled.div`
    inset: 0px;
    margin: 0px;
    display: flex;
    padding: 0px;
    z-index: 29;
    position: absolute;
    align-items: center;
    animation-name: keyframes-animation-2f81d449-0-1-4;
    pointer-events: auto;
    justify-content: center;
    -webkit-box-pack: center;
    background-color: rgba(24, 48, 85, 0.3);
    -webkit-box-align: center;
    transition: background-color 250ms ease-out 0s;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
`

const StyledMenu = styled.section`
  .z-index{
      z-index: 30;
      margin: 0;
      display: block;
      padding: 0;
  }
  
`

export default Menu