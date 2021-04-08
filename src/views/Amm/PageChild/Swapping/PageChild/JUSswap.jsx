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
        prev="Swapping"
        linkprev="/amm-exchange/swapping"
        next="lite.juiceswap"
        linknext="/amm-exchange/swapping/lite.juiceswap"
      />
    </Box_home>
  );
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`


export default JUSswap
