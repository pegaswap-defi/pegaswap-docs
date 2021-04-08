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
        prev="The Juice Menu"
        linkprev="/yield-farming/the-juice-menu"
        next="juiceswapclassic.org"
        linknext="/yield-farming/the-juice-menu/juiceswapclassic.org"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default JUSswap
