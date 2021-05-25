import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'
import Thumb from '../../../components/Thumb'



const Howto = () => {


    return (
        <StyledPage>
            <Title title="How to Trade on PegaSwap"></Title>
            <Thumb path="../images/thumb/swap.png" />
            <ul>
                <li>1. Go to the exchange page <a href="https://pegaswap.com/#/" target="_blank">here</a>.</li>
                <li>2. Unlock your Binance Smart Chain Wallet (top right-hand side).</li>
                <li>3. Select the tokens you wish to trade and enter the amount.</li>
                <li>4. Check the details, and click “Swap”.</li>
                <li>5. Check the details and click “Confirm Swap”.</li>
                <li>6. Confirm the transaction in your wallet.</li>
                <li>7. Done! You can click “View on bscscan” to see your transaction details.</li>
            </ul>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 1rem;
        margin-top: 20px;
    }
    ul {
        padding: 0;
        margin-top: 20px;
        li {
            list-style-type: none;
            font-size: 1rem;
        }
        a {
            color: #9827ec;
            text-decoration: underline;
        }
    }
`


export default Howto