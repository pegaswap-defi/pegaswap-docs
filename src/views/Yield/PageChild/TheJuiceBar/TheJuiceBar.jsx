import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../components/Pagination'
import TitleChild from '../../../../components/TitleChild'



// import Item from './components/Item'
// import CountUp from 'react-countup';

const TheJuiceBar = () => {
  return (
    <Box_home>
      <TitleChild title="The Juicebar"/>
      <Pagination
        prev="Yield Farming"
        linkprev="/yield-farming"
        next="juiceswap"
        linknext="/yield-farming/the-juicebar/juiceswap"
      />
         
  </Box_home>
  )
}



const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`

export default TheJuiceBar
