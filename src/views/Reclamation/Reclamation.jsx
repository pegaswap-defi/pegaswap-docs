import React from 'react'
import styled from 'styled-components'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Pagination from '../../components/Pagination'
import Title from '../../components/Title';




// import Item from './components/Item'
// import CountUp from 'react-countup';

const Reclamation = () => {
  return (
    <Box_home>
      <Title image="ic-rec.png"  title="Reclamation"/>
      <h4 className="title-rec">How to participate in the Reclamation program on Juiceswap?</h4>
      <p><strong>Requirements:</strong></p>
      <p>1. Metamask wallet</p>
      <p>🔅 Tip:If you do not have wallet. You can install Metamask <a  style={{textDecoration: 'underline'}} target="_blank" href="https://docs.matic.network/docs/develop/metamask/hello/#step-2-create-an-account">here.</a></p>
      <p></p>
      <p>2. ERC-20 ETH tokens</p>
      <p>🔅 Tip: How to deposit or receive  ETH tokens to your wallet <a  style={{textDecoration: 'underline'}} target="_blank" href="https://metamask.zendesk.com/hc/en-us/articles/360028141672-">here.</a></p>
      <p></p>
      <p>3: Access JuiceSwap</p>
      <p className="step"><strong>Step by Step Tutorial</strong></p>
      <p>First, you will need ETH in your Metamask wallet and some additional ETH for the gas fees.</p>
      <p className="step"><strong>👉 Step 1. Go to 🌐🌐🌐</strong><a target="_blank" href="https://www.juiceswap.finance/">https://www.juiceswap.finance/</a></p>
      <p>Once you are on the Juiceswap website, connect your Metamask wallet by clicking on the <strong>“🔓 Unlock Wallet”</strong> button in the top right corner, followed by clicking MetaMask.</p>
      <ReactFancyBox 
          thumbnail="./hom.png"
          image="./hom.png"/>
      <br/>
      <p>Then click <strong>“Connect”</strong> to sync your address to Juiceswap.</p>
      <ReactFancyBox 
          thumbnail="./rec2.png"
          image="./rec2.png"/>
      <br/>
      <p className="step"><strong>👉 Step 2. Connecting to the Reclamation click the “Reclamation” tab at the top.</strong></p>
      <ReactFancyBox 
          thumbnail="./rec.png"
          image="./rec.png"/>
      <br/>
      <p className="step"><strong>👉 Step 3: Deposit and join in reclamation</strong></p>
      <p>Enter the amount of ETH you want to join in reclamation. Juiceswap will automatically fill the JUS Token input box with the equivalent amount. Then click the “deposit” button and confirm the transaction.</p>
      <ReactFancyBox 
          thumbnail="./mte.png"
          image="./mte.png"/>
      <br/>
      <ReactFancyBox 
          thumbnail="./repo.png"
          image="./repo.png"/>
      <br/>
      <p className="step"><strong>👉 Step 4: Confirm Supply</strong></p>
      <p>You will then need to confirm the transaction in your Metamask wallet. It will display the gas fee and the total transaction amount. If everything looks correct, click on <strong>“Confirm.”</strong></p>
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

  .title-rec{
    font-size:28px;
    font-weight:bold;
  }

  .step{
    font-size:22px;
    color:#000;
    font-weight:bold;
  }

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



export default Reclamation
