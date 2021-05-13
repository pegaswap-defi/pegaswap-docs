import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Howto from './components/HowToTrade'
import AddLiquid from './components/AddLiquid'
import Thumb from '../../components/Thumb'


const Swap = () => {

    return (
        <StyledPage>
            <Switch>
                <Route exact path="/swap">
                    {/* <p>Pegaswap is a decentralized exchange for swapping <a href="https://academy.binance.com/en/glossary/bep-20" target="_blank">BEP-20 tokens</a>.</p> */}
                    <p>Pegaswap is a decentralized exchange for swapping <a href="#" >BEP-20 tokens</a>.</p>
                    <Thumb path="../images/thumb/protocol2@2x.JPG" />
                </Route>
                <Route exact path="/swap/How-to-Trade-on-PegaSwap">
                    <Howto />
                </Route>
                <Route exact path="/swap/Liquidity-Pools-Adding-Liquidity">
                    <AddLiquid />
                </Route>
            </Switch>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    a {
        color: #9827ec;
        text-decoration: underline;
    }
`

export default Swap