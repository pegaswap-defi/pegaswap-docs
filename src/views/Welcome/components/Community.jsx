import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const Community = () => {


    return (
        <StyledPage>
            <Title title="Community & Socials"> </Title>
            <ul>
                <li>📌 Follow Twitter : <a href="https://twitter.com/PegaSwap" target="_blank">https://twitter.com/PegaSwap</a></li>
                <li>📌 Follow Medium : <a href="https://pegaswap.medium.com/" target="_blank">https://pegaswap.medium.com/</a></li>
                <li>📌 Channel Telegram Global : <a href="https://t.me/PegaSwapOfficial" target="_blank"> https://t.me/PegaSwapOfficial</a></li>
                <li>📌 Group Telegram Community : <a href="https://t.me/PegaSwapDefi" target="_blank">https://t.me/PegaSwapDefi</a></li>
                <li>🌐 Website : <a href="https://pegaswap.com/#/pgstokens" target="_blank">https://pegaswap.com/#/pgstokens</a></li>
            </ul>
        </StyledPage>
    )
}


const StyledPage = styled.div`
     font-size: 1rem;
     li {
         list-style-type: none;
     }
`


export default Community