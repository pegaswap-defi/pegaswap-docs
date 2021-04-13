import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Pagination from '../../components/Pagination'
// import Title from '../../components/Title'
import TitleChild from '../../components/TitleChild'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Amm = () => {
  return (
    <Box_home>
      <TitleChild title="AMM / Exchange"/>
      <p>Here are the articles in this section:</p>
      <h3>Pegaswap Exchange:</h3>
      <p>The Pegaswap exchange allows users to swap any BEP20 token into any other BEP20 token through automated liquidity pools.</p>
      <ThumPage><img src="./exchange.png" alt=""/></ThumPage>
      <p>The liquidity provided to the exchange comes from Liquidity Providers ("LPs") who stake their tokens in "Pools." In return, they get SLP (Pegaswap Liquidity Provider) tokens, which can also be staked in the "Farm."</p>
      <p>When users make a trade on the exchange, they pay a 0.3% trade fee.</p>
      <h3>0.25% fee reward for LPs:</h3>
      <p>0.25% of this trading fee goes to the Liquidity Providers who provide liquidity for that pool. It is added to the pool balance.</p>
      <p>If previously there were 100 SLP tokens representing 100 BNB and 100 SRM, each token would be worth 1 BNB & 1 SRM.</p>
      <p>If one user trade 10 BNB for 10 SRM and another traded 10 SRM for 10 BNB, then there would now be 100.025 BNB and 100.025 SRM.</p>
      <p>This means each LP token would be worth 1.00025 BNB and 1.00025 SRM now when it is withdrawn.</p>
      <h3>0.05% fee reward for xPegaswap holders:</h3>
      <p>The remaining portion of the trade fee paid goes to a pool called PegaswapBar. </p>
      <p>The PegaswapBar contract collects the fees from all the pools, and when the reward distribution command is called, it then sells all the fees turning them into Pegaswap (via Pegaswap)</p>
      <p>That new Pegaswap is divided up among the users in the xPegaswap pool. When those users withdraw their xPegaswap, it will be worth more Pegaswap than when they put in from the distribution.</p>
     
    </Box_home>
  );
}



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


export default Amm
