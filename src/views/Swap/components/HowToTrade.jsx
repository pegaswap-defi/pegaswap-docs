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
                <li>1. Go to the exchange page <a href="https://pegaswap.com/#/swap" target="_blank">here</a>.</li>
                <li>2. Unlock your Binance Smart Chain Wallet.</li>
                <ThumbMobile>
                    <img src="../images/swap-guide-imgs/img-1.png" alt="connect wallet" />
                </ThumbMobile>
                <ThumbMobile>
                    <img src="../images/swap-guide-imgs/img-2.png" alt="swap interface" />
                </ThumbMobile>
                <li>3. Select the tokens you wish to trade and enter the amount.</li>
                <ThumbMobile>
                    <img src="../images/swap-guide-imgs/img-3.png" alt="swap interface" />
                </ThumbMobile>
                <li>4. Check the details, and click “Swap”.</li>
                <ThumbMobile>
                    <img src="../images/swap-guide-imgs/img-5.png" alt="swap interface" />
                </ThumbMobile>
                <li>5. Check the details and click “Confirm Swap”.</li>
                <ThumbMobile>
                    <img src="../images/swap-guide-imgs/img-6.png" alt="swap interface" />
                </ThumbMobile>
                <li>6. Confirm the transaction in your wallet.</li>
                <ThumbMobile>
                    <img src="../images/swap-guide-imgs/img-9.png" alt="swap interface" />
                </ThumbMobile>
                <li>7. Done! You can click “View on bscscan” to see your transaction details.</li>
                <ThumbMobile>
                    <img src="../images/swap-guide-imgs/img-7.png" alt="swap interface" />
                </ThumbMobile>
                <ThumbMobile>
                    <img src="../images/swap-guide-imgs/img-8.png" alt="swap interface" />
                </ThumbMobile>
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

const ThumbMobile = styled.div`
    margin: 2rem auto;
    max-width: 400px;
    img {
        width: 100%;
    }
    @media(max-width: 768px) {
        max-width: 350px;
    }
    @media(max-width: 576px) {
        max-width: 300px;
    }
`


export default Howto