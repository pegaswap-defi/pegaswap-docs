import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Introduction = ({ props }) => {


    return (
        <StyledPage>
            <Title title="What is PegaSwap?"> </Title>
            <p>PegaSwap is a decentralized Automated Market Maker (AMM) on the Binance Smart Chain (BSC) network

            PGS is the native token of the PegaSwap platform was released on Binance Smart Chain (BSC). PGS is also a BSC-native BEP-20 token. Currently, the PGS token has been the most preferred amon the traders and performed extremely well in the market.

            The primary function of PGS is to increase liquidity provision to the PegaSwap platform. The token is one of other tokens used within the PegaSwap protocol and facilitates easy token swaps.
            An important feature of PegaSwap is its democratic governance. The PGS token holders can decide via voting to modify the parameters of the exchange. These parameters include trading fees, staking awards, mining activity, etc… Its users can also get staking prizes if they engage in voting!
            </p>
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