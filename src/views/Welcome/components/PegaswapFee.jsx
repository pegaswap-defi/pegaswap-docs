import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const PegaswapFees = () => {


    return(
        <StyledPage>
            <Title title="PegaSwap Fees"> </Title>
            <p>If you’re familiar with other AMM’s like Uniswap and Sushiswap you’ll recognize the system whereby users provide liquidity to pools and receive LP (liquidity provider) tokens in exchange.
            </p>
            <p>These LP tokens give holders the right to collect a portion of the trading fees generated on the platform. The trading fee at PegaSwap is a low 0.2%, with 0.17% going to the liquidity providers and the remaining 0.03% going to the PegaSwap Treasury, where they are burnt to keep supply lower.</p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 1rem;
        margin-top: 20px;
    }
`


export default PegaswapFees