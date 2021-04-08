import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../components/Pagination'
import TitleChild from '../../../../components/TitleChild/TitleChild'



// import Item from './components/Item'
// import CountUp from 'react-countup';

const Liquidity = () => {
  return (
    <Box_home>
      <TitleChild title="Liquidity Pools"/>
      <Pagination
        prev="juicewapclassic.org"
        linkprev="/amm-exchange/swapping/how-to-swap-tokens"
        next="juiceswap"
        linknext="/amm-exchange/liquidity-pools/juiceswap"
      />
         
  </Box_home>
  )
}



const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`

export default Liquidity
