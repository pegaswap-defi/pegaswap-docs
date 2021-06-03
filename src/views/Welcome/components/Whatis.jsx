import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'
import Thumb from '../../../components/Thumb'



const Introduction = ({ props }) => {


    return (
        <StyledPage>
            <Title title="What is PegaSwap?"> </Title>
            <Thumb path="../images/thumb/Binane-Pegaswap.jpg" />
            <p>PegaSwap is a decentralized Automated Market Maker (AMM) on the Binance Smart Chain (BSC) network PGS is the native token of the PegaSwap platform was released on Binance Smart Chain (BSC). PGS is also a BSC-native BEP-20 token. Currently, the PGS token has been the most preferred amon the traders and performed extremely well in the market. The primary function of PGS is to increase liquidity provision to the PegaSwap platform. The token is one of other tokens used within the PegaSwap protocol and facilitates easy token swaps. An important feature of PegaSwap is its democratic governance. The PGS token holders can decide via voting to modify the parameters of the exchange. These parameters include trading fees, staking awards, mining activity, etc… Its users can also get staking prizes if they engage in voting!
            </p>

            <p>
                Pegaswap’s token (PGS) is a BEP-20 token standard, native to the Binance Smart Chain. Pegaswap offers great utility within the Pegaswap ecosystem, including representing governance rights in votes on updates or proposals to the protocol. Additionally, Pegaswap tokens (PGS) are used as liquidity rewards.
            </p>
            <p>
                Max Total Supply : 180,000,000 PGS
            </p>
            <ul>
                <li>
                    BEP20 – Pegaswap token : PGS
                </li>
                <li>
                    Max Total Supply : 180,000,000 PGS
                </li>
                <li>
                    PGS : 180,000,000 PGS
                </li>
                <li>
                    PGS the Pegaswap Protocol token, is live!
                </li>
                <li>
                    PGS contract address: 0x1ed18b0930fa099ebe8228ea858dab1d23b7f2f5
                </li>
                <li>
                    78% of the PGS genesis supply is allocated to Pegaswap community members
                </li>
                <li>
                    To start, PGS is available through four liquidity mining pools:
                </li>
            </ul>
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