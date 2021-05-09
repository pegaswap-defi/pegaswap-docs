import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './components/Intro'
import Community from './components/Community'
import PegaswapOn from './components/PegaOnSC'
import Whatcan from './components/Whatcan'
import Whatis from './components/Whatis'
import Roadmap from './components/Roadmap'


const BinanceSmartChange = () => {

    return (
        <StyledPage>
            <Switch>
                <Route exact path="/welcome/introduction">
                    <Intro />
                </Route>
                <Route exact path="/welcome/what-is-pegaswap">
                    <Whatis />
                </Route>
                <Route exact path="/welcome/pegaswap-is-on-the-binance-smart-chain">
                    <PegaswapOn />
                </Route>
                <Route exact path="/welcome/what-can-you-do-on-pegaswao">
                    <Whatcan />
                </Route>
                <Route exact path="/welcome/community-socials">
                    <Community />
                </Route>
                <Route exact path="/welcome/roadmap">
                    <Roadmap />
                </Route>
            </Switch>
        </StyledPage>
    )
}


const StyledPage = styled.div`

`

export default BinanceSmartChange