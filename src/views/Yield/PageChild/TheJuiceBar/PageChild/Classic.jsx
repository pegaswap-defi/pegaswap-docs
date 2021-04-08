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
        prev="lite.juiceswap"
        linkprev="/yield-farming/the-juicebar/lite.juiceswap"
        next="The Juice Menu"
        linknext="/yield-farming/the-juice-menu"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default Classic
