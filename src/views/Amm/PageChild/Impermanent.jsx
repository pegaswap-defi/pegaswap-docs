import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../components/Pagination'
import TitleChild from '../../../components/TitleChild/TitleChild'



// import Item from './components/Item'
// import CountUp from 'react-countup';

const Impermanent = () => {
  return (
    <Box_home>
          <TitleChild title="Impermanent loss"/>
          <Pagination 
            prev="juiceswapclassic.org"
            linkprev="/amm-exchange/liquidity-pools/juiceswapclassic.org"
            next="Yield Farming"
            linknext="/yield-farming"
          />
           
  </Box_home>
  )
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`



export default Impermanent
