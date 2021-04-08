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
        linkprev="/amm-exchange/swapping/lite.juiceswap"
        next="Liquidity Pools"
        linknext="/amm-exchange/liquidity-pools"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default Classic
