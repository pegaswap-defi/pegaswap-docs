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
        linkprev="/yield-farming/the-juice-menu/juiceswap"
        next="Menu of the Week"
        linknext="/yield-farming/menu-of-the-week"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default Classic
