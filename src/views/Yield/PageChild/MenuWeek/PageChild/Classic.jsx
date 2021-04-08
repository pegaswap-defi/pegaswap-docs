import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../../components/Pagination'
import TitleChild from '../../../../../components/TitleChild'


const Classic = () => {
  return (
    <Box_home>
      <TitleChild title="juiceswapclassic.org"/>
      <Pagination
        prev="juiceswap"
        linkprev="/yield-farming/menu-of-the-week/juiceswap"
        next="🍱 Lending (BentoBox)"
        linknext="/lending-bentobox"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default Classic
