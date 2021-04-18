import React from 'react'
import styled from 'styled-components'
import Title from '../../Title'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title>What is Binance Smart Chain?</Title>
            <p>Binance Smart Chain (BSC) is best described as a blockchain that runs in parallel to the Binance Chain. Unlike Binance Chain, BSC boasts smart contract functionality and compatibility with the Ethereum Virtual Machine (EVM). The design goal here was to leave the high throughput of Binance Chain intact while introducing smart contracts into its ecosystem.</p>
            <p>In essence, both blockchains operate side-by-side. It’s worth noting that BSC isn’t a so-called layer two or off-chain scalability solution. It’s an independent blockchain that could run even if Binance Chain went offline. That said, both chains bear a strong resemblance from a design standpoint.</p>
            <p>Because BSC is EVM-compatible, it launched with support for the rich universe of Ethereum tools and DApps. In theory, this makes it easy for developers to port their projects over from Ethereum. For users, it means that applications like MetaMask can be easily configured to work with BSC. Seriously – it’s just a matter of tweaking a couple of settings. Check out Use MetaMask for Binance Smart Chain to get started.</p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 20px;
        margin-top: 20px;
    }
`


export default Introduction