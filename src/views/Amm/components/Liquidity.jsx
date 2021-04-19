import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title title="What is a liquidity pool?"></Title>
            <p>Liquidity providers (LPs) add funds to liquidity pools. You could think of a liquidity pool as a big pile of funds that traders can trade against. In return for providing liquidity to the protocol, LPs earn fees from the trades that happen in their pool. In the case of Uniswap, LPs deposit an equivalent value of two tokens – for example, 50% ETH and 50% DAI to the ETH/DAI pool.</p>
            <p>Hang on, so anyone can become a market maker? Indeed! It’s quite easy to add funds to a liquidity pool. The rewards are determined by the protocol. For example, Uniswap v2 charges traders 0.3% that goes directly to LPs. Other platforms or forks may charge less to attract more liquidity providers to their pool.</p>
            <p>Why is attracting liquidity important? Due to the way AMMs work, the more liquidity there is in the pool, the less slippage large orders may incur. That, in turn, may attract more volume to the platform, and so on.</p>
            <p>The slippage issues will vary with different AMM designs, but it’s definitely something to keep in mind. Remember, pricing is determined by an algorithm. In a simplified way, it’s determined by how much the ratio between the tokens in the liquidity pool changes after a trade. If the ratio changes by a wide margin, there’s going to be a large amount of slippage.</p>
            <p>To take this a bit further, let’s say you wanted to buy all the ETH in the ETH/DAI pool on Uniswap. Well, you couldn’t! You’d have to pay an exponentially higher and higher premium for each additional ether, but still never could buy all of it from the pool. Why? It’s because of the formula x * y = k. If either x or y is zero, meaning there is zero ETH or DAI in the pool, the equation doesn’t make sense anymore.</p>
            <p>But this isn’t the complete story about AMMs and liquidity pools. You’ll need to keep in mind something else when providing liquidity to AMMs – impermanent loss.</p>
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