import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../../components/Pagination'
import TitleChild from '../../../../../components/TitleChild'



const JUSswap = () => {
  return (
    <Box_home>
      <TitleChild title="juiceswap"/>
      <Pagination
        prev="Menu of the Week"
        linkprev="/yield-farming/menu-of-the-week"
        next="juiceswapclassic.org"
        linknext="/yield-farming/menu-of-the-week/juiceswapclassic.org"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default JUSswap
