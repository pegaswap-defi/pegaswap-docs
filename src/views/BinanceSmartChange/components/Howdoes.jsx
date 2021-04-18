import React from 'react'
import styled from 'styled-components'
import Title from '../../Title'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title>How does Binance Smart Chain work?</Title>
            <h2>Consensus</h2>
            <p>Binance Smart Chain achieves ~3 second block times with a Proof-of-Stake consensus algorithm. Specifically, it uses something called Proof of Staked Authority (or PoSA), where participants stake BNB to become validators. If they propose a valid block, they’ll receive transaction fees from the transactions included in it.</p>
            <p>Note that, unlike many protocols, there is no block subsidy of freshly-minted BNB, as BNB is not inflationary. On the contrary, the supply of BNB decreases over time, as the Binance team regularly conducts coin burns.</p>
            <h2>Cross-chain compatibility</h2>
            <p>Binance Smart Chain was envisioned as an independent but complementary system to the existing Binance Chain. Dual-chain architecture is used, with the idea being that users can seamlessly transfer assets from one blockchain to another. In this way, rapid trading can be enjoyed on Binance Chain, while powerful decentralized apps can be built on BSC. With this interoperability, users are exposed to a vast ecosystem that can cater to a myriad of use cases.</p>
            <p>BEP-2 and BEP-8 tokens from Binance Chain can be swapped for BEP-20 tokens, the new standard introduced for Binance Smart Chain. Have you read An Introduction to ERC-20 Tokens? Then you’ll already be familiar with the format of BEP-20. It uses the same functions as its Ethereum counterpart.</p>
            <p>To move tokens from one chain to another (i.e., BEP-2 to BEP-20 or vice versa), the simplest method is perhaps to use the Binance Chain Wallet, available on Chrome and Firefox. Check out Use Binance Chain Extension Wallet for a guide to this.</p>
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