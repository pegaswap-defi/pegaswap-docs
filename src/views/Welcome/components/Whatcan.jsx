import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title title="What can you do on PegaSwap?"> </Title>
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
    )
}


const StyledPage = styled.div`
    font-size: 1rem;
    p {
        margin-top: 20px;
    }
`


export default Introduction