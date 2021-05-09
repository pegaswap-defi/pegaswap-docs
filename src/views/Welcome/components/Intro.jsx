import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'
import Thumb from '../../../components/Thumb'



const Introduction = ({ props }) => {


    return (
        <StyledPage>
            <Title title="Welcome to Pegaswap"></Title>
            <p>The next-gen Decentralized Exchange, Staking, and Farming Protocol on BSC</p>
            <Thumb path="../images/thumb/intro-w@2x.png" />
            <p>PegaSwap is a DeFi protocol running on the Binance Smart Chain (BSC). It allows you to swap between tokens issued on BSC, and earn rewards for providing liquidity to these decentralized markets, with lots of other features that let you earn and win tokens. PegaSwap was built by  Pegasus Finance. We have a dedicated team of experienced Pegasus Finance, who have been in the crypto space for years. PGS is the native currency of our platform. Stake, pool, and earn $PGS  all on PegaSwap.</p>
            <p> PegaSwap works as a decentralized exchange (DEX) that adopts the automated market maker (AMM) model. Similar to PancakeSwap, BakerySwap, and other protocols, it allows users to earn tokens by providing liquidity. </p>
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