import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Title from '../../components/TitleChild'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Home = () => {
  return (
    <Box_home>
      <Title title="How to use Metamask For Binance Smart Chain"></Title>
      <ThumPage>
        <img src="./images/thumb1.jpg" alt="" />
      </ThumPage>
      <H2>What is it?</H2>
      <p>MetaMask was created out of the needs of creating more secure and usable Ethereum-based web sites. In particular, it handles account management and connecting the user to the blockchain. It’s supported in Chrome, Brave, and Safari browsers.</p>
      <H2>Install</H2>
      <p>Example: Install MetaMask in browser</p>
      <ul>
        <li>Open Extension Category in Chrome <a href="https://chrome.google.com/webstore/search/metamask?hl=vi">https://chrome.google.com/webstore/search/metamask?hl=vi</a></li>
        <li>Open Extension Category in Brave:<a href="https://chrome.google.com/webstore/category/extensionsSearch"> https://chrome.google.com/webstore/category/extensionsSearch</a> for MetaMask</li>
      </ul>
      <Thumb>
        <img src="./images/metamask.png" alt="" />
      </Thumb>
      <p>Make sure it’s offered by metamask.io</p>
      <ul>
        <li>Click on “Add to Brave”</li>
      </ul>
      <p>That’s it! You have successfully installed MetaMask extension in Brave!</p>
      <Thumb>
        <img src="./images/metamask2.png" alt="" />
      </Thumb>
      <p>The workflow is the same for all browsers</p>
      <H2>Create an account in MetaMask for Binance Smart Chain</H2>
      <h4>1.	Click on the “Create a wallet” button</h4>
      <Thumb>
        <img src="./images/metamask3.png" alt="" />
      </Thumb>
      <h4>2. Create Password of at least 8 characters</h4>
      <Thumb>
        <img src="./images/metamask4.png" alt="" />
      </Thumb>
      <h4>3. Click on “Create” and then write down your backup phrase.</h4>
      <Thumb>
        <img src="./images/metamask5.png" alt="" />
      </Thumb>
      <h4>4. Select each phrase in order to make sure it is correct then click “Confirm”.</h4>
      <Thumb>
        <img src="./images/metamask6.png" alt="" />
      </Thumb>
      <p>Congratulations! you have create your MetaMask account!</p>
      <H2>Connect Your MetaMask With Binance Smart Chain</H2>
      <h4>1.	Go to setting page</h4>
      <Thumb>
        <img src="./images/metamask7.png" alt="" />
      </Thumb>
      <h4>2.	Add a new network</h4>
      <Thumb>
        <img src="./images/metamask8.png" alt="" />
      </Thumb>
      <p>•	Testnet</p>
      <ul>
        <li>RPC URLs: <a href="https://bsc-dataseed.binance.org">https://bsc-dataseed.binance.org</a></li>
        <li>ChainID: 0x61, 97 in decimal (if 97 doesn’t work, try 0x61)</li>
        <li>Symbol: BNB</li>
        <li>Block Explorer: <a href="https://testnet.bscscan.com">https://testnet.bscscan.com</a></li>
      </ul>
      <p>•	Mainnet</p>
      <ul>
        <li>RPC URLs: <a href="https://bsc-dataseed.binance.org">https://bsc-dataseed.binance.org</a></li>
        <li>ChainID: 0x38, 56 in decimal (if 56 doesn’t work, try 0x38)</li>
        <li>Symbol: BNB</li>
        <li>Block Explorer: <a href="https://bscscan.com">https://bscscan.com</a></li>
      </ul>
      <h4>3.	Claim some testnet token to your account Click on your address for copy</h4>
      <Thumb>
        <img src="./images/metamask10.png" alt="" />
      </Thumb>
      <h4>4.  Go to faucet page: <a href="https://testnet.binance.org/faucet-smart">https://testnet.binance.org/faucet-smart</a>, then paste your address in the box and click on “Give me BNB”</h4>
      <Thumb>
        <img src="./images/metamask11.png" alt="" />
      </Thumb>
      <p>After the transfer transaction is sent, you will see an increase of your balance</p>
      <Thumb>
        <img src="./images/metamask12.png" alt="" />
      </Thumb>
      <H2>Transfer BNB to other Binance Smart Chain address</H2>
      <p>1.	Log in to your MetaMask</p>
      <Thumb>
        <img src="./images/metamask13.png" alt="" />
      </Thumb>
      <p>2. Click on Send button</p>
      <Thumb>
        <img src="./images/metamask14.png" alt="" />
      </Thumb>
      <p>3.	Copy the receiver’s address in the box</p>
      <Thumb>
        <img src="./images/metamask15.png" alt="" />
      </Thumb>
      <p>4. Input the amount</p>
      <Thumb>
        <img src="./images/metamask16.png" alt="" />
      </Thumb>
      <p>5.	Go to Advanced Options to modify default gas price when necessary</p>
      <ThumPage>
        <img src="./images/metamask17.png" alt="" />
      </ThumPage>
      <p>6.	Confirm your transaction, then click Next</p>
      <Thumb>
        <img src="./images/metamask18.png" alt="" />
      </Thumb>
      <Thumb>
        <img src="./images/metamask19.png" alt="" />
      </Thumb>
      <p>Click Confirm to send your transaction</p>
      <H2>Connecting Metamask to Binance Smart Chain (BSC) on your phone</H2>

      <h4>Install</h4>
      <p>IOS: <a href="https://metamask.app.link/skAH3BaF99">https://metamask.app.link/skAH3BaF99</a></p>
      <p>Android: <a href="https://metamask.app.link/bxwkE8oF99">https://metamask.app.link/bxwkE8oF99</a></p>

      <h4>The workflow is the same for all phone operating system</h4>
      <strong>Create an account in MetaMask for Binance Smart Chain</strong>
      <p>After you have successfully downloaded apps to your phone, the screen will appear as follows.</p>
      <Thumb>
        <img src="../images/welcome-metamask.png" alt="" />
      </Thumb>
      <p>Then you <strong>select "Get started"</strong> , a screen will show up with options to login/register.</p>
      <p>If you <strong> already have an account</strong> you can log in by <strong>clicking on the button "Sync with Metamask extension".</strong></p>
      <Thumb>
        <img src="../images/wallet-setup.png" alt="" />
      </Thumb>
      <p>If you <strong>already have an account but forgot the password, click "Import using seed phrase"</strong>. However, this command requires you to remember the initial phrase from the registration time given by Matamask.</p>
      <Thumb>
        <img src="../images/metamask-setup-2.png" alt="" />
      </Thumb>
      <p>If you <storng>do not have an account</storng>, you <strong>register by selecting "Create a new wallet"</strong></p>
      <Thumb>
        <img src="../images/metamask-setup-3.png" alt="" />
      </Thumb>
      <p>1.	Create Password of at least 8 characters</p>
      <Thumb>
        <img src="../images/create-password-metamask.png" alt="" />
      </Thumb>
      <p>2.	Click on “Create” and then write down your backup phrase.</p>
      <Thumb>
        <img src="../images/create-password-metamask-2.png" alt="" />
      </Thumb>
      <p>3.	Select each phrase to make sure it is correct then click “Confirm”.</p>
      <Thumb>
        <img src="../images/create-password-metamask-3.png" alt="" />
      </Thumb>
      <p>Congratulations! you have created your MetaMask account!</p>
      <H2>Connect Your MetaMask With Binance Smart Chain</H2>
      <p>1. Go to the setting page</p>
      <Thumb>
        <img src="../images/connect.png" alt="" />
      </Thumb>
      <p>2. Add a new network</p>
      <Thumb>
        <img src="../images/connect-1.png" alt="" />
      </Thumb>
      <Thumb>
        <img src="../images/connect-2.png" alt="" />
      </Thumb>
      <p>•	Testnet</p>
      <ul>
        <li>RPC URLs: <a href="https://bsc-dataseed.binance.org">https://bsc-dataseed.binance.org</a></li>
        <li>ChainID: 0x61, 97 in decimal (if 97 doesn’t work, try 0x61)</li>
        <li>Symbol: BNB</li>
        <li>Block Explorer: <a href="https://testnet.bscscan.com">https://testnet.bscscan.com</a></li>
      </ul>
      <p>•	Mainnet</p>
      <ul>
        <li>RPC URLs: <a href="https://bsc-dataseed.binance.org">https://bsc-dataseed.binance.org</a></li>
        <li>ChainID: 0x38, 56 in decimal (if 56 doesn’t work, try 0x38)</li>
        <li>Symbol: BNB</li>
        <li>Block Explorer: <a href="https://bscscan.com">https://bscscan.com</a></li>
      </ul>
      <p>3. Claim some testnet token to your account <strong>Click on your address for Copy</strong> </p>
      <Thumb>
        <img src="../images/connect-3.png" alt="" />
      </Thumb>
      <p>4. Go to faucet page: <a href="https://testnet.binance.org/faucet-smart">https://testnet.binance.org/faucet-smart</a>, then <strong>paste your address </strong> in the box and <strong>click on “Give me BNB”</strong></p>
      <Thumb>
        <img src="../images/connect-4.png" alt="" />
      </Thumb>
      <p>After the transfer transaction is sent, you will see an increase in your balance</p>
      <Thumb>
        <img src="../images/connect-5.png" alt="" />
      </Thumb>
      <p><strong>The steps to transfer BNB to another Binance Smart Chain address are similar to those on a computer.</strong></p>
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
  h4 {
    font-size: 18px;
  }
  
`
const Thumb = styled.div`
  max-width: 400px;
  width:100%;
  overflow: hidden;

  img{
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  @media (max-width:1025px){
    margin: 0 auto;
    
  }
  @media (max-width:576px){
    margin: 0 auto;
    margin-left: 0;
  }
`

const ThumPage = styled.p`
  max-width: 600px;
  width:100%;
  overflow: hidden;

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
