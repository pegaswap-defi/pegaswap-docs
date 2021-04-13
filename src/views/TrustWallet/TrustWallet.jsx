import React from 'react'
import styled from 'styled-components'


const TrustWallet = () => {

    return (
        <StyledPage>
            <h1>How to Set Up and Use Trust Wallet for Binance Smart Chain</h1>
            <p>Here’s how you can get set up on Trust Wallet and start using Binance Smart Chain in just a couple of minutes.</p>
            <h2>Setting up your wallet for Binance Smart Chain</h2>
            <p>1) <a href="https://share.trustwallet.com/H6U8pDHOMab">Download Trust Wallet here</a>. If you already have Trust Wallet, make sure your app is up to date. </p>
            <p>2) Complete <a href="https://community.trustwallet.com/t/how-to-create-a-multi-coin-wallet/41">basic setup of a multi-coin wallet</a>. Remember to save your backup phrases.</p>
            <p>3) Go to your Smart Chain wallet and press receive to find your address.</p>
            <ThumPage>
                <img src="./images/trustwallet1.png" alt=""/>
            </ThumPage>
            <p>4) Deposit BEP20 assets to your wallet. The easiest way to do this is with Binance. Choose an asset on Binance that supports BEP20 withdrawals and withdraw to your Trust Wallet Binance Smart Chain address. Keep in mind that BNB is required to make any transactions on Binance Smart Chain.</p>
            <ThumPage>
                <img src="./images/trustwallet2.png" alt=""/>
            </ThumPage>
            <p>5) That’s it! You’re ready to start using Binance Smart Chain. </p>
            <p>6) Once you’ve received a BEP20 token, to view your transaction ID you can click on the transaction, press the share button in the top right and then copy the transaction ID.</p>
            <ThumPage>
                <img src="./images/trustwallet3.png" alt=""/>
            </ThumPage>
            <h2>Using Binance Smart Chain Dapps</h2>
            <p>7) For this part, iOS users will need the Dapp browser, which <a href="https://community.trustwallet.com/t/enable-dapp-browser-on-trust-wallet-ios-version/">you can get by following this guide</a>. Android users have the Dapp browser by default. </p>
            <p>8) Once you’ve topped up your wallet, open the Dapp browser by pressing on the four squares at the bottom of the app.</p>
            <p>9) Navigate to a Binance Smart Chain Dapp like PancakeSwap or BurgerSwap.</p>
            <ThumPage>
                <img src="./images/trustwallet4.png" alt=""/>
            </ThumPage>
            <p>10) Use the Dapp and have fun!</p>
            <p>Here are some more detailed guides on how to interact with Binance Smart Chain Dapps with Trust Wallet:</p>
            <ul>
                <li>
                    <a href="https://community.trustwallet.com/t/how-to-send-and-receive-bnb-on-smart-chain/67430">How to send and receive BNB on Smart Chain with Trust Wallet</a>
                </li>
                <li>
                    <a href="https://community.trustwallet.com/t/how-to-earn-farm-and-stake-cake-on-pancakeswap-with-trust-wallet/70964">How to Earn, Farm and Stake CAKE on PancakeSwap with Trust Wallet</a>
                </li>
                <li>
                    <a href="https://community.trustwallet.com/t/how-to-swap-twt-bep2-to-twt-bep20/72718">Swapping BEP2 to BEP20</a>
                </li>
            </ul>
        </StyledPage>
    )
}

const StyledPage = styled.div`

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

export default TrustWallet