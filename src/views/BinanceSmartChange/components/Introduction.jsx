import React from 'react'
import styled from 'styled-components'
import Title from '../../Title'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title>Introduction</Title>
            <p>Binance Chain was launched by Binance in April 2019. Its primary focus is to facilitate fast, decentralized (or non-custodial) trading. Perhaps unsurprisingly, the biggest decentralized application (or DApp) on it is Binance DEX, one of the friendliest decentralized exchanges out there. You can use it via a web interface at binance.org or through its native integration with Trust Wallet.</p>
            <p>Due to limitations inherent to blockchain systems, however, the chain doesn’t have much flexibility – smart contracts in a system optimized for fast trading could significantly congest the network. Remember CryptoKitties? At the height of its popularity, it brought the Ethereum blockchain to a standstill.</p>
            <p>Scalability remains one of the most challenging hurdles to blockchain development. And that’s where Binance Smart Chain comes in.</p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 22px;
        margin-top: 20px;
    }
`


export default Introduction