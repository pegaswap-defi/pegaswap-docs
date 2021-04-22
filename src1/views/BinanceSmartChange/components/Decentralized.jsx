import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title title="Decentralized Finance on Binance Smart Chain"></Title>
            <p>You may know that a number of digital assets – such as BTC, LTC, ETH, EOS, or XRP – already exist on Binance Chain as “Peggy coins.” These are tokens that are pegged to assets on their native chains. For instance, you might decide to lock up 10 BTC in order to receive 10 BTCB on Binance Chain. At any time, you can trade your 10 BTCB for 10 BTC, meaning that the price of BTCB should closely track that of native BTC. </p>
            <p>By doing this, you effectively port these assets onto Binance Chain. Interested in how this kind of thing can be achieved? Check out Tokenized Bitcoin on Ethereum Explained.</p>
            <p>Because of the flexibility afforded by Binance Smart Chain, assets from a number of different chains can be used in the growing DeFi space. For instance, applications like PancakeSwap allow users to trustlessly exchange assets (much like Uniswap), engage in yield farming, and vote on proposals. Similar projects include BurgerSwap and BakerySwap (if you’re new to crypto, hi! We’re big fans of decentralized exchanges named after foods).</p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 1rem;
        margin-top: 20px;
    }
`


export default Introduction