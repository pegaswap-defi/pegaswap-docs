import React from 'react'
import styled from 'styled-components'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Pagination from '../../components/Pagination'
import TitleChild from '../../components/TitleChild';

// import Item from './components/Item'
// import CountUp from 'react-countup';

const TokenStak = () => {
  return (
    <Box_home>
      <TitleChild  title="How to Stake Juiceswap for xJuiceswap"/>
      <p><strong>Step 1:</strong></p>
      <p>Go to <a target="_blank" href="https://juiceswap.finance/Staking">https://juiceswap.finance/Staking</a> - and unlock your wallet.</p>
      <p><strong>Step 2:</strong></p>
      <p>From there you'll be able to see the "Grow Up Staking" where you can stake Juiceswap (turning it into xJuiceswap) in order to earn part of the 0.05% trade fee from all pools on the exchange.</p>
      <ReactFancyBox 
          thumbnail="./stack.png"
          image="./stack.png"/>
      <br/>
      <p><strong>Step 3:</strong></p>
      <p>First, you may need to "Approve" the Juiceswap token before you are able to use it. Simply hit the "Approve Juiceswap" button and sign the transaction with your wallet or MetaMask.</p>
      <p><strong>Step 4:</strong></p>
      <p>Once the Juiceswap token is approved you'll be able to hit "Convert to xJuiceswap" to stake your Juiceswap.</p>
      <ReactFancyBox 
          thumbnail="./stack.png"
          image="./stack.png"/>
      <br/>
      <p><strong>Step 5:</strong></p>
      <p>Then a new window prompt will pop-up letting you select how much Juiceswap you want to stake. Select the amount, hit confirm and send the transaction.</p>
      <ReactFancyBox 
          thumbnail="./stack.png"
          image="./stack.png"/>
      <br/>
      <p><strong>Step 6:</strong></p>
      <p>After that you will see the xJuiceswap available in the bar.</p>
      <ReactFancyBox 
          thumbnail="./stack.png"
          image="./stack.png"/>
      <br/>
      <p>The amount of xJuiceswap in the JuiceswapBar will not change. But the amount of Juiceswap it represents will.</p>
      <p>As fees are collected they are converted to $Juiceswap and distributed proportionally across holders in the xJuiceswap pool. So when you withdraw your xJuiceswap back into $Juiceswap it will be worth more $Juiceswap than when you put in.</p>
      <p>These rewards are slower to update (because they cost a lot of gas) and so you should expect them to update, on average, once per day.</p>
      <p>Currently there is no way in the UI to see the level of rewards until you withdraw. The team is working to fix this.</p>
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



export default TokenStak
