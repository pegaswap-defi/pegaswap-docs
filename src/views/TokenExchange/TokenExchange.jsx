import React from 'react'
import styled from 'styled-components'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Pagination from '../../components/Pagination'
import TitleChild from '../../components/TitleChild';

// import Item from './components/Item'
// import CountUp from 'react-countup';

const TokenExchange = () => {
  return (
    <Box_home>
      <TitleChild  title="How to add tokens to JuiceswapSwap Exchange"/>
      <p><strong>Step 1:</strong></p>
      <p>Go to <a target="_blank" href="https://exchange.juiceswap.finance/#/swap">https://exchange.juiceswap.finance/#/swap</a></p>
      <p>Click the large "Add Liquidity" button</p>
      <ReactFancyBox 
          thumbnail="./pool.png"
          image="./pool.png"/>
      <br/>
      <p><strong>Step 2:</strong></p>
      <p>Select which token pair you want to add liquidity for:</p>
      <ReactFancyBox 
          thumbnail="./liquis.png"
          image="./liquis.png"/>
      <p><strong>Step 3:</strong></p>
      <p>Fill in the amounts you want to add to the liquidity pool. </p>
      <p>It may ask you to "Approve" the tokens - you will have to send these "approve transactions" first. </p>
      <p>Once you've approved the token you can hit "Supply"</p>
      <p className="thum-page">
        <img src="" alt=""/>
      </p>
      <p>Then a transaction will pop-up for you to sign in to your wallet (like MetaMask) - after the transaction is complete you will have successfully added liquidity.</p>
      <p><strong>Step 4:</strong></p>
      <p>The transaction will provide you with some "JLP" tokens in your wallet. These are Juiceswapswap LP tokens and represent the share you've deposited in the pool. All pools are labeled as JLP but represent different pools.</p>
      <p>When you go back to the <a target="_blank" href="https://exchange.juiceswap.finance/#/swap">https://exchange.juiceswap.finance/#/swap</a>  page you will now see your </p>
      <p className="thum-page"> <img src="" alt=""/> </p>
      <p><strong>Step 5:</strong></p>
      <p>If you click the arrow, the drop-down menu will show you more details about the pool including your shares, and options to add or remove liquidity.</p>
      <p className="thum-page"> <img src="" alt=""/> </p>
      <p>Congratulations, you have successfully staked your tokens as a "Liquidity Provider" in JuiceswapSwap. This means when people make a trade you will be eligible for part of the 0.25% trade reward.</p>
      <p><strong>How does the trade fee reward work?</strong></p>
      <p>Every time a user trades between $Juiceswap and $ETH a 0.3% fee is taken on the trade. 0.25% of that trade goes back to the JLP pool.</p>
      <p>If previously there were 100 JLP tokens representing 100 ETH and 100 Juiceswap each token would be worth 1 ETH & 1 SRM. </p>
      <p>If one user trade 10 ETH for 10 Juiceswap and another traded 10 Juiceswap for 10 ETH, then there would now be 100.025 ETH and 100.025 Juiceswap.</p>
      <p>This means each LP token would be worth 1.00025 ETH and 1.00025 Juiceswap now when it is withdrawn.</p>
      <p> <strong>Does this mean I am also farming new Juiceswap?</strong> </p>
      <p>No. Once you have the JLP tokens you'll need to go to Juiceswapswapclassic.org/farms to also farm them for new Juiceswap rewards for each block.</p>
      {/* <ReactFancyBox 
          thumbnail="./pool.png"
          image="./pool.png"/>
      <br/> */}

      

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



export default TokenExchange
