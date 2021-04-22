import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title title="Introduction"> </Title>
            <p>Pegaswap is a fairly new decentralized exchange (DEX) that’s been created on the Binance Smart Chain (BSC). The automated market maker (AMM) offers users a number of innovative ways to create income streams from their cryptocurrencies.</p>
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