import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../components/Pagination';
import Title from '../../components/Title';



const Classic = () => {
  return (
    <Box_home>
      <Title image="cp.png"  title="Presskit & Branding Assets"/>
      <Pagination 
        prev="Build on JuiceSwap"
        linkprev="/amm-exchange/swapping/lite.juiceswap.fi"
        next="Welcome to JuiceSwap"
        linknext="/"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default Classic
