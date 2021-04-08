import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../../components/Pagination'
import TitleChild from '../../../../../components/TitleChild'


const Lite = () => {
  return (
    <Box_home>
      <TitleChild title="lite.juiceswap"/>
      <Pagination
        prev="juiceswap"
        linkprev="/amm-exchange/swapping/juiceswap"
        next="juiceswapclassic.org"
        linknext="/amm-exchange/swapping/how-to-swap-tokens"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default Lite
