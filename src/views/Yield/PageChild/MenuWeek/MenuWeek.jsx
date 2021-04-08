import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../components/Pagination'
import TitleChild from '../../../../components/TitleChild'




// import Item from './components/Item'
// import CountUp from 'react-countup';

const MenuWeek = () => {
  return (
    <Box_home>
          <TitleChild title="Menu of the Week"/>
          <Pagination 
            prev="juiceswapclassic.orge"
            linkprev="/yield-farming/the-juice-menu/juiceswapclassic.org"
            next="juiceswap"
            linknext="/yield-farming/menu-of-the-week/juiceswap"
          />
           
  </Box_home>
  )
}


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`



export default MenuWeek
