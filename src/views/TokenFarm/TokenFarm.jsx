import React from 'react'
import styled from 'styled-components'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Pagination from '../../components/Pagination'
import TitleChild from '../../components/TitleChild';

// import Item from './components/Item'
// import CountUp from 'react-countup';

const TokenFarm = () => {
  return (
    <Box_home>
      <TitleChild  title="How to Farm with Juiceswap JLP Tokens"/>
      {/* <p>Once you've got your JLP tokens from being a "Liquidity Provider" in the JuiceswapSwap Pools (read the guide here) then you are ready to also stake your tokens in the JuiceswapSwap Farm (Menu) for additional Juiceswap Rewards every block.</p>
      <p><strong>Step 1:</strong></p>
      <p>Navigate to <a target="_blank" href="https://juiceswap.finance/farms">https://juiceswap.finance/farms</a> and unlock your wallet.</p>
      <p><strong>Step 2:</strong></p>
      <p>Select the pool you want to stake into: </p>
      <ReactFancyBox 
          thumbnail="./ya.png"
          image="./ya.png"/>
      <br/>
      <p><strong>Step 3:</strong></p>
      <p>From here you'll need to "Approve" the JLP token for the first time:</p>
      <ReactFancyBox 
          thumbnail=""
          image=""/>
      <br/>
      <p><strong>Step 4:</strong></p>
      <p>Once the token is approved you'll be able to stake your tokens by using the "+" button.</p>
      <ReactFancyBox 
          thumbnail=""
          image=""/>
      <br/>
      <p><strong>Step 5:</strong></p>
      <p>This will then display a pop-up asking you how many JLP tokens you wish to stake. Enter the amount and hit confirm</p>
      <ReactFancyBox 
          thumbnail=""
          image=""/>
      <br/>
      <p><strong>Step 6:</strong></p>
      <p>After this you'll see a transaction as you wait for your token to be staked. Once staked it will appear in the farm and you can unstake it at anytime.</p>
      <p>Important Note: When you deposit your JLP for farming, the exchange.Juiceswapswapclassic.org/#/pool page no longer sees it. That page only scans your wallet to see if you are holding JLP tokens.  So that page will say "No Liquidity" - however you do still have your tokens and you are still earning the 0.25% trade fee, it is just currently deposited in the farming contract and so not detected.</p>
      <p><strong>Step 7:</strong></p>
      <p>After this, your "Juiceswap Earned" balance will update every block. You'll be able to click "Harvest" at any time to bring out your Juiceswap.</p> */}

      <p><strong>We will open Yield Farm at 10:00 February 5th, 2021.</strong></p>
      <ReactFancyBox 
          thumbnail="./ya.png"
          image="./ya.png"/>
      <br/>

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



export default TokenFarm
