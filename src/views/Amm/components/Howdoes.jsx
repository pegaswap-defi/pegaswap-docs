import React from 'react'
import styled from 'styled-components'
import Title from '../../Title'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title>How does an automated market maker (AMM) work?</Title>
            
            <p>An AMM works similarly to an order book exchange in that there are trading pairs – for example, ETH/DAI. However, you don’t need to have a counterparty (another trader) on the other side to make a trade. Instead, you interact with a smart contract that “makes” the market for you.</p>
            <p>On a decentralized exchange like Binance DEX, trades happen directly between user wallets. If you sell BNB for BUSD on Binance DEX, there’s someone else on the other side of the trade buying BNB with their BUSD. We can call this a peer-to-peer (P2P) transaction. </p>
            <p>In contrast, you could think of AMMs as peer-to-contract (P2C). There’s no need for counterparties in the traditional sense, as trades happen between users and contracts. Since there’s no order book, there are also no order types on an AMM. What price you get for an asset you want to buy or sell is determined by a formula instead. Although it’s worth noting that some future AMM designs may counteract this limitation.</p>
            <p>So there’s no need for counterparties, but someone still has to create the market, right? Correct. The liquidity in the smart contract still has to be provided by users called liquidity providers (LPs).</p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 20px;
        margin-top: 20px;
    }
    h2 {
        font-size: 27px;
        margin-top: 20px;
    }
`


export default Introduction