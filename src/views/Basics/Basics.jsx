import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Title from '../../components/Title'
// import Item from './components/Item'
// import CountUp from 'react-countup';

const Home = () => {
  return (
    <Box_home>
            <Title image="bss.png"  title="The Basics"/>
            <p>The tokenomics (JuiceNOMICS) can be broken down as follows</p>
            <Pagination
        prev="Limit Orders"
        linkprev="/limit-orders"
        next="Current governance model"
        linknext="/current-governance-mdoel"
      />
  </Box_home>
  )
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`



export default Home
