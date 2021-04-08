import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import Title from '../../components/Title'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Migrating = () => {
  return (
    <Box_home>
          <Title image="mt.png"  title="Migrating JuiceSwap v2 JLP tokens"/>
          <p>You can now easily migrate your liquidity from Uniswap to JuiceSwap with just a few clicks, in a gas efficient manner. </p>
          <p>If you feel unsure, please ask in our Discord or read the smart contract code yourself should you be able to understand it!</p>
          <p>We will have a video guide showcasing how it is done online on the evening of Monday, November 16.</p>
          <Pagination
            prev="Welcome to JuiceSwap"
            linkprev="/"
            next="FAQ"
            linknext="/faq"
          />
  </Box_home>
  )
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`

const BoxPagination = styled.div`
  display: flex;
  margin-top: 25px;
  flex-wrap:wrap;
  width: 100%;
  max-width:600px;
  justify-content: space-between;
`

const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #E6ECF1;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  border-radius: 3px;
  background-color: #FFFFFF;
  transition: ease-in-out .5s all;
  cursor: pointer;
  padding: 10px 25px;
  max-width: 400px;
  width: 100%;
  margin-right:25px;
  p{
    margin-bottom:0;
    span{
      display:block;
    }
  }
 @media (max-width:576px) {
   width:100%;
   margin-right:0;
   margin-bottom:25px;
 }
`

const StyledLink = styled(NavLink)`
  text-decoration: none!important;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  width:100%;
  height:100%;
  display: flex;
  align-items:center;
  justify-content:center;
  transition:ease-in-out .5s all;
  span{
    display:block;
  }
  &:hover {
    color: #805e49;
  }
  
`

export default Migrating
