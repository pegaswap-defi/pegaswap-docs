import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../../../../components/Pagination'
import TitleChild from '../../../../components/TitleChild/TitleChild'



// import Item from './components/Item'
// import CountUp from 'react-countup';

const Swapping = () => {
  return (
    <Box_home>
      <TitleChild title="Swapping"/>
      <Pagination 
        prev="AMM / Exchange"
        linkprev="/amm-exchange"
        next="juiceswap"
        linknext="/amm-exchange/swapping/juiceswap"
      />
    </Box_home>
  );
}


const BoxPagination = styled.div`
  display: flex;
  margin-top: 25px;
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
  p{
    margin-bottom:0;
    span{
      display:block;
    }
  }
 
`


const Box_home = styled.section`
  position: relative;
  overflow: hidden;
  padding: 45px 0;
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

const ListMenu = styled.ul`
  margin-top:35px;
  position: relative;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  width:100%;
  padding-left:0;
  max-width:600px;
  justify-content: space-between;
  li{
    list-style: none;
    height:45px;
    width: 100%;
    background: #fff;
    text-align: center;
    color: rgb(36, 42, 49);
    border: 1px solid rgb(230, 236, 241);
    margin-bottom: 25px;
    box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
    max-width: 285px;
    transition:ease-in-out .3s all;
    &:hover {
    margin-top:-5px;
    box-shadow: rgb(177 138 80 / 66%) 0px 3px 8px 0px;
  }
  }
`

export default Swapping
