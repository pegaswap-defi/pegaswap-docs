import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title title="Closing thoughts"></Title>
            <p>Automated market makers are a staple of the DeFi space. They enable essentially anyone to create markets seamlessly and efficiently. While they do have their limitations compared to order book exchanges, the overall innovation they bring to crypto is invaluable.</p>
            <p>AMMs are still in their infancy. The AMMs we know and use today like Uniswap, Curve, and PancakeSwap are elegant in design, but quite limited in features. There are likely many more innovative AMM designs coming in the future. This should lead to lower fees, less friction, and ultimately better liquidity for every DeFi user.</p>
            <p>Still got questions about DeFi and automated market making? Check out our Q&A platform, Ask Academy, where the Binance community will answer your questions.</p>
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