import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../components/Pagination'
import TitleChild from '../../../../components/TitleChild'


const TheJuiceMenu = () => {
  return (
    <Box_home>
      <TitleChild title="The Juice Menu"/>
      <Pagination 
        prev="juiceswapclassic.org"
        linkprev="/yield-farming/the-juicebar/juiceswapclassic.org"
        next="juiceswap"
        linknext="/yield-farming/the-juice-menu/juiceswap"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;

`

export default TheJuiceMenu
