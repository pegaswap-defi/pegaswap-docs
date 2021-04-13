import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonMenu from '../ButtonMenu';
import Nav from './components/Nav'

const SideBar = () => {


  return (
    <StyledSideBar >
      <Nav />
    </StyledSideBar>
  );
}

const StyledSideBar = styled.section`
  display: none;
  @media screen and (min-width: 768px){
    display: block;
    overflow-y:auto;
    height:95vh;
    padding: 0;
  }
  ::-webkit-scrollbar{
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background:#bdf4fd;
    border-radius: 10px;
  }

`

export default SideBar