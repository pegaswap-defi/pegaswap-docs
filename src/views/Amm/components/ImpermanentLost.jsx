import React from 'react'
import styled from 'styled-components'
import Title from '../../Title'



const Introduction = ({props}) => {


    return(
        <StyledPage>
            <Title>What is impermanent loss?</Title>
            <p>Impermanent loss happens when the price ratio of deposited tokens changes after you deposited them in the pool. The larger the change is, the bigger the impermanent loss. This is why AMMs work best with token pairs that have a similar value, such as stablecoins or wrapped tokens. If the price ratio between the pair remains in a relatively small range, impermanent loss is also negligible.</p>     
            <p>On the other hand, if the ratio changes a lot, liquidity providers may be better off simply holding the tokens instead of adding funds to a pool. Even so, Pegaswap pools like ETH/DAI that are quite exposed to impermanent loss have been profitable thanks to the trading fees they accrue.</p>
            <p>With that said, impermanent loss isn’t a great way to name this phenomenon. “Impermanence” assumes that if the assets revert to the prices where they were originally deposited, the losses are mitigated. However, if you withdraw your funds at a different price ratio than when you deposited them, the losses are very much permanent. In some cases, the trading fees might mitigate the losses, but it’s still important to consider the risks.</p>
            <p>Be careful when depositing funds into an AMM, and make sure you understand the implications of impermanent loss. If you’d like to get an advanced overview of impermanent loss, read Pintail’s article about it.</p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 20px;
        margin-top: 20px;
    }
    h2 {
        font-size: 27px;
        margin-top: 20px;
    }
`


export default Introduction