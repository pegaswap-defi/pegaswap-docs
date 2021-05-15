import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'
import Thumb from '../../../components/Thumb'


const Introduction = ({ props }) => {


    return (
        <StyledPage>
            <Title title="PegaSwap is on the Binance Smart Chain"> </Title>
            <Thumb path="../images/thumb/PEGA-NFT.jpg" />
            <p>As mentioned earlier, PegaSwap will launch on the Binance Smart Chain instead of Ethereum, the more classical choice for most DeFi projects. The Binance Smart Chain is a “parallel blockchain” that delivers programmability to the Binance Chain, basically building a dual-chain system. This allows Binance to make use of smart contracts, giving it full adaptability with the Ethereum Virtual Machine (EVM), all while maintaining the fast execution capabilities of the original Binance Chain. From a user point of view, the two parallel chains work in an identical style, they are merely distinct in their framework.</p>
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