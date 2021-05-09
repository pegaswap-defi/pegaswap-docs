import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'
import Thumb from '../../../components/Thumb'
import TitleChild from '../../../components/TitleChild'



const Introduction = ({ props }) => {


    return (
        <>
            <StyledPage>
                <Title title="What can you do on PegaSwap?"> </Title>
                <Thumb path="../images/thumb/Trade.jpg" />
                <p>PegaSwap can be used to trade BEP20 tokens and earn cryptocurrencies through PGS staking and providing liquidity.
            </p>
                <p>You can do the following on PegaSwap:</p>
                <ul>
                    <li>Trade BEP20 tokens</li>
                    <li>Provide liquidity to the exchange and earn fees</li>
                    <li>Stake your LP (liquidity provider) tokens to earn PGS token</li>
                    <li>Stake PGS to earn PGS token</li>
                    <li>Stake PGS to earn more PGS</li>
                    <li>Farm earn PGS to earn tokens ( liquidity pool)</li>
                </ul>
            </StyledPage>
            <StyledPage>
                <TitleChild title="Low Fees and Fast Transactions"> </TitleChild>
                <p>One of the growing complaints about projects built on Ethereum are the high fees and slow transactions from the network. PegaSwap doesn’t use the Ethereum network though, it uses the BSC network and BEP-20 tokens. As a result the fees paid are much lower, typically ranging from $0.04 to $0.20, and transactions take less than 5 seconds on average. Compare that with Ethereum, where fees have been above $20 for much of 2021 and transactions take up to 5 minutes to confirm.</p>
            </StyledPage>
            <StyledPage>
                <TitleChild title="No KYC Requirement"> </TitleChild>
                <Thumb path="../images/thumb/KYC.jpg" />
                <p>Every centralized exchange we know about follows the requirements for Know Your Customer and Anti-Money laundering (KYC/AML) which removes users’ privacies by requiring them to provide extensive documentation to prove their identity.
                </p>
            </StyledPage>
            <StyledPage>
                <TitleChild title="PegaSwap Fees"> </TitleChild>
                <p>If you’re familiar with other AMM’s like Uniswap and Sushiswap you’ll recognize the system whereby users provide liquidity to pools and receive LP (liquidity provider) tokens in exchange.
                </p>
                <Thumb path="../images/thumb/Feee.jpg" />
                <p>These LP tokens give holders the right to collect a portion of the trading fees generated on the platform. The trading fee at PegaSwap is a low 0.2%, with 0.17% going to the liquidity providers and the remaining 0.3% going to the PegaSwap Treasury, where they are burnt to keep supply lower.</p>
            </StyledPage>

        </>
    )
}


const StyledPage = styled.div`
    font-size: 1rem;
    p {
        margin-top: 20px;
    }
`


export default Introduction