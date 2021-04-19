import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title title="Closing thoughts"> </Title>
            <p>Binance Smart Chain greatly extends the functionality of the original Binance Chain and joins a range of cutting-edge protocols designed to bridge the gap between various blockchains. Though still in its infancy, the promise of BNB staking alongside EVM compatibility makes the platform an ideal engine for developers building powerful decentralized applications. </p>
            <p>Questions about Binance Smart Chain? Head over to Ask Academy, where the community will answer them. A deep dive into the technical side of things can be found in the whitepaper. </p>
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