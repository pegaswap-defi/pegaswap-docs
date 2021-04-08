import React from 'react'
import styled from 'styled-components'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Pagination from '../../components/Pagination'
import TitleChild from '../../components/TitleChild';




// import Item from './components/Item'
// import CountUp from 'react-countup';

const Staking = () => {
  return (
    <Box_home>
      <TitleChild title="Juiceswap Staking"/>
      <p>The JuiceSwap located at <a href="https://juiceswap.finance/Staking">https://juiceswap.finance/Staking</a> allows you to stake your Juiceswap and receive xJuiceswap in return and then you stake it in the xJuiceswap pool.</p>
      <ReactFancyBox 
          thumbnail="./stack.png"
          image="./stack.png"/>
      <br/>
      <p>When users make trades on the Juiceswap Exchange a 0.3% fee is charged.</p>
      <p>0.05% of this fee is added to the Juiceswap pool in the form of LP tokens for the relative pool.</p>
      <p>When the rewards contract is called (minimum once per day) all the LP tokens are sold for Juiceswap (on Juiceswap Exchange). The newly purchased Juiceswap is then divided up proportionally between the xJuiceswap holders in the pool, meaning their xJuiceswap is now worth more Juiceswap.</p>
      <p>Currently you will not see the gained amount until you have withdrawn.</p>
      <p>It started as 1 Juiceswap = 1 xJuiceswap, but just like LP tokens the price of xJuiceswap changes over time depending on how many Juiceswap rewards are in the pool.</p>

      {/* <Pagination
        prev="Migrating Uniswap v2 LP tokens"
        linkprev="/migrating"
        next="AMM / Exchange"
        linknext="/amm-exchange"
      /> */}
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



export default Staking
