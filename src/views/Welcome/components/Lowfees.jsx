import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Lowfees = () => {


    return(
        <StyledPage>
            <Title title="Low Fees and Fast Transactions"> </Title>
            <p>One of the growing complaints about projects built on Ethereum are the high fees and slow transactions from the network. PegaSwap doesn’t use the Ethereum network though, it uses the BSC network and BEP-20 tokens. As a result the fees paid are much lower, typically ranging from $0.04 to $0.20, and transactions take less than 5 seconds on average. Compare that with Ethereum, where fees have been above $20 for much of 2021 and transactions take up to 5 minutes to confirm.</p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 1rem;
        margin-top: 20px;
    }
`


export default Lowfees