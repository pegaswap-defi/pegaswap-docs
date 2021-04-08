import React from 'react'
import styled from 'styled-components'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Pagination from '../../components/Pagination'
import TitleChild from '../../components/TitleChild';

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Pools = () => {
  return (
    <Box_home>
      <TitleChild  title="Juiceswap Pools"/>
      <p>Juiceswap pools allow liquidity providers to add their tokens to liquidity pools.</p>
      <p>When they do so, they will receive JLP tokens (Juiceswap Liquidity Provider tokens). For example, if a user deposited $Juiceswap and $ETH into a pool, they would receive Juice-ETH JLP tokens.</p>
      <p>These tokens represent a proportional share of the pooled assets, allowing a user to reclaim their funds at any point.</p>
      <ReactFancyBox 
          thumbnail="./pool.png"
          image="./pool.png"/>
      <br/>
      <p>As an LP, it is important to understand that you may be exposed to "Impermanent Loss" when providing liquidity.</p>
      <p>However, as a liquidity provider, you will also receive a trade fee reward.</p>
      <p>Every time a user trades between $Juice and $ETH, a 0.3% fee is taken on the trade. 0.25% of that trade goes back to the LP pool.</p>
      <p>If previously there were 100 JLP tokens representing 100 ETH and 100 Juice, each token would be worth 1 ETH & 1 SRM.</p>
      <p>If one user trade 10 ETH for 10 Juice and another traded 10 Juice for 10 ETH, then there would now be 100.025 ETH and 100.025 Juice.</p>
      <p>This means each LP token would be worth 1.00025 ETH and 1.00025 Juice now when it is withdrawn.</p>
      <p>When you have your LP tokens, you can also put them into yield farming on:</p>
      <ul>
        <li><a href="https://juiceswap.finance/farms">https://juiceswap.finance/farms</a></li>
      </ul>
      <p>If you are farming on the farms, you will still get the 0.25% reward fee for being an LP when you next remove your liquidity.</p>
      <p>However, because the /farms and exchange.Juiceswapclassic.org/#/pool are different smart contracts, it's important to know that the pool page cannot see the tokens you have in farms.</p>
      <p>When you are on the pool page, it only scans your wallet for JLP tokens to tell you if you are providing liquidity. Therefore it may say "No Liquidity" even though you ARE providing liquidity. It's just that it cannot see which tokens you've deposited into the farms.</p>
      

      <Pagination
        prev="Migrating Uniswap v2 LP tokens"
        linkprev="/migrating"
        next="AMM / Exchange"
        linknext="/amm-exchange"
      />
    </Box_home>
  );
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;

  .react-fancybox {
    margin-left:100px;

    .thumbnail {
      max-width:500px;

      img{
        width:100%;
      }
    }
  }

  @media(max-width:1025px){
    .react-fancybox{
      margin-left:0;

      .thumbnail {
        margin: 0 auto;
      }
    }  
  }

  @media(max-width:576px){
    .react-fancybox{
      
      .image-box{
        width:90%;

        .close-btn{
          width:auto;
        }
        img{
          width:100%;
        }
      }
    }  
  }
`



export default Pools
