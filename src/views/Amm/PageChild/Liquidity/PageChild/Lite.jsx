import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../../components/Pagination'
import TitleChild from '../../../../../components/TitleChild'


const Lite = () => {
  return (
    <Box_home>
      <TitleChild title="lite.juiceswap.fi"/>
      <Pagination
        prev="juiceswap"
        linkprev="/amm-exchange/liquidity-pools/juiceswap"
        next="juiceswapclassic.org"
        linknext="/amm-exchange/liquidity-pools/juiceswapclassic.org"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default Lite
