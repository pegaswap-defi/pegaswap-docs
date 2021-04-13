import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Title from '../../components/Title'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Home = () => {
  return (
    <Box_home>
      <Title image="mnoy.png" title="Welcome to PegaSwap" />
      <ThumPage>
          <img src="./images/thumb1.jpg" alt=""/>
      </ThumPage>
      <H2>What is it?</H2>
      <p>MetaMask was created out of the needs of creating more secure and usable Ethereum-based web sites. In particular, it handles account management and connecting the user to the blockchain. It’s supported in Chrome, Brave, and Safari browsers.</p>
      <H2>Install</H2>
      <p>Example: Install MetaMask in browser</p>
      <ul>
        <li>Open Extension Category in Chrome <a href="https://chrome.google.com/webstore/search/metamask?hl=vi">https://chrome.google.com/webstore/search/metamask?hl=vi</a></li>
        <li>Open Extension Category in Brave:<a href="https://chrome.google.com/webstore/category/extensionsSearch"> https://chrome.google.com/webstore/category/extensionsSearch</a> for MetaMask</li>
      </ul>
      <ThumPage>
          <img src="./images/metamask.png" alt=""/>
      </ThumPage>
      <p>Make sure it’s offered by metamask.io</p>
      <ul>
        <li>Click on “Add to Brave”</li>
      </ul>
      <p>That’s it! You have successfully installed MetaMask extension in Brave!</p>
      <ThumPage>
          <img src="./images/metamask2.png" alt=""/>
      </ThumPage>
      <p>The workflow is the same for all browsers</p>
      <H2>Create an account in MetaMask for Binance Smart Chain</H2>
      <h3>1.	Click on the “Create a wallet” button</h3>
      <ThumPage>
          <img src="./images/metamask3.png" alt=""/>
      </ThumPage>
      <h3>2. Create Password of at least 8 characters</h3>
      <ThumPage>
          <img src="./images/metamask4.png" alt=""/>
      </ThumPage>
      <h3>3. Click on “Create” and then write down your backup phrase.</h3>
      <ThumPage>
          <img src="./images/metamask5.png" alt=""/>
      </ThumPage>
      <h3>4. Select each phrase in order to make sure it is correct then click “Confirm”.</h3>
      <ThumPage>
          <img src="./images/metamask6.png" alt=""/>
      </ThumPage>
      <p>Congratulations! you have create your MetaMask account!</p>
      <H2>Connect Your MetaMask With Binance Smart Chain</H2>
      <h3>1.	Go to setting page</h3>
      <ThumPage>
          <img src="./images/metamask7.png" alt=""/>
      </ThumPage>
      <h3>2.	Add a new network</h3>
      <ThumPage>
          <img src="./images/metamask8.png" alt=""/>
      </ThumPage>
      <p>•	Testnet</p>
      <ul>
        <li>RPC URLs</li>
        <li>ChainID: 0x61, 97 in decimal (if 97 doesn’t work, try 0x61)</li>
        <li>Symbol: BNB</li>
        <li>Block Explorer: <a href="https://testnet.bscscan.com">https://testnet.bscscan.com</a></li>
      </ul>
      <p>•	Mainnet</p>
      <ul>
        <li>RPC URLs</li>
        <li>ChainID: 0x38, 56 in decimal (if 56 doesn’t work, try 0x38)</li>
        <li>Symbol: BNB</li>
        <li>Block Explorer: <a href="https://bscscan.com">https://bscscan.com</a></li>
      </ul>
      <h3>3.	Claim some testnet token to your account Click on your address for copy</h3>
      <ThumPage>
          <img src="./images/metamask10.png" alt=""/>
      </ThumPage>
      <h3>4.  Go to faucet page: <a href="https://testnet.binance.org/faucet-smart">https://testnet.binance.org/faucet-smart</a>, then paste your address in the box and click on “Give me BNB”</h3>
      <ThumPage>
          <img src="./images/metamask11.png" alt=""/>
      </ThumPage>
      <p>After the transfer transaction is sent, you will see an increase of your balance</p>
      <ThumPage>
          <img src="./images/metamask12.png" alt=""/>
      </ThumPage>
      <H2>Transfer BNB to other Binance Smart Chain address</H2>
      <h3>1.	Log in to your MetaMask</h3>
      <ThumPage>
          <img src="./images/metamask13.png" alt=""/>
      </ThumPage>
      <h3>2. Click on Send button</h3>
      <ThumPage>
          <img src="./images/metamask14.png" alt=""/>
      </ThumPage>
      <h3>3.	Copy the receiver’s address in the box</h3>
      <ThumPage>
          <img src="./images/metamask15.png" alt=""/>
      </ThumPage>
      <h3>4. Input the amount</h3>
      <ThumPage>
          <img src="./images/metamask16.png" alt=""/>
      </ThumPage>
      <h3>5.	Go to Advanced Options to modify default gas price when necessary</h3>
      <ThumPage>
          <img src="./images/metamask17.png" alt=""/>
      </ThumPage>
      <h3>6.	Confirm your transaction, then click Next</h3>
      <ThumPage>
          <img src="./images/metamask18.png" alt=""/>
      </ThumPage>
      <ThumPage>
          <img src="./images/metamask19.png" alt=""/>
      </ThumPage>
      <p>Click Confirm to send your transaction</p>

    </Box_home>
  )
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
  .linkpage{
    padding-left:15px;
    li{
      list-style: none;
    }
  }
  h3 {
    font-size: 20px;
  }
`
const Thumb = styled.img`
  max-width: 900px;
  width: auto;
  margin: 20px;

`

const ThumPage = styled.p`
  max-width: 600px;
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


const H2 = styled.h2`

`

export default Home
