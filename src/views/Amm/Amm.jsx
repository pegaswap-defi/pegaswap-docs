import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Pagination from '../../components/Pagination'
import Title from '../../components/Title'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Amm = () => {
  return (
    <Box_home>
      <Title image="amm.png"  title="AMM / Exchange"/>
      <p>Here are the articles in this section:</p>
      <h3>Juiceswap Exchange:</h3>
      <p>The Juiceswap exchange allows users to swap any ERC20 token into any other ERC20 token through automated liquidity pools.</p>
      <ThumPage><img src="./exchange.png" alt=""/></ThumPage>
      <p>The liquidity provided to the exchange comes from Liquidity Providers ("LPs") who stake their tokens in "Pools." In return, they get SLP (Juiceswap Liquidity Provider) tokens, which can also be staked in the "Farm."</p>
      <p>When users make a trade on the exchange, they pay a 0.3% trade fee.</p>
      <h3>0.25% fee reward for LPs:</h3>
      <p>0.25% of this trading fee goes to the Liquidity Providers who provide liquidity for that pool. It is added to the pool balance.</p>
      <p>If previously there were 100 SLP tokens representing 100 ETH and 100 SRM, each token would be worth 1 ETH & 1 SRM.</p>
      <p>If one user trade 10 ETH for 10 SRM and another traded 10 SRM for 10 ETH, then there would now be 100.025 ETH and 100.025 SRM.</p>
      <p>This means each LP token would be worth 1.00025 ETH and 1.00025 SRM now when it is withdrawn.</p>
      <h3>0.05% fee reward for xJuiceswap holders:</h3>
      <p>The remaining portion of the trade fee paid goes to a pool called JuiceswapBar. </p>
      <p>The JuiceswapBar contract collects the fees from all the pools, and when the reward distribution command is called, it then sells all the fees turning them into Juiceswap (via Juiceswap)</p>
      <p>That new Juiceswap is divided up among the users in the xJuiceswap pool. When those users withdraw their xJuiceswap, it will be worth more Juiceswap than when they put in from the distribution.</p>
      <ListMenu>
        <li>
          <StyledLink to="/amm-exchange/swapping">Swapping</StyledLink>
        </li>
        <li>
          <StyledLink to="/amm-exchange/liquidity-pools">
            Liquidity Pools
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/amm-exchange/impermanent-loss">
            Impermanent loss
          </StyledLink>
        </li>
      </ListMenu>
      <Pagination
        prev="FAQ"
        linkprev="/faq"
        next="Swapping"
        linknext="/amm-exchange/swapping"
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
`

const ThumPage = styled.p`
  max-width: 500px;
  width:100%;
  overflow: hidden;
  margin-left: 100px;

  img{
    width: 100%;
    object-fit: cover;
  }

  @media (max-width:1025px){
    margin: 0 auto;
    
  }
  @media (max-width:576px){
    margin: 0 auto;
    margin-left: 0;
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

const ListMenu = styled.ul`
  height: 200px;
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

const TitlePage = styled.h3`
  max-width:${(props) => props.width};
  margin-bottom:25px;
  font-size:${(props) => props.size};
  font-weight:bold;
  width:100%;
  padding-bottom:20px;
  border-bottom: 2px solid #E6ECF1;
`

export default Amm
