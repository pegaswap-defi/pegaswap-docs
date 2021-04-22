import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './components/Introduction.jsx'
import Closing from './components/Closing'
import Decentralized from './components/Decentralized'
import Howdoes from './components/Howdoes'
import Whatis from './components/Whatis'


const BinanceSmartChange = () => {

    return(
        <StyledPage>
            <Switch>
                <Route exact path="/binance/introduction">
                    <Intro />
                </Route>
                <Route exact path="/binance/what-is-binance-smart-chain">
                    <Whatis />
                </Route>
                <Route exact path="/binance/how-does-binance-smart-chain-work">
                    <Howdoes />
                </Route>
                <Route exact path="/binance/decentralized-finance-on-binance-smart-chain">
                    <Decentralized />
                </Route>
                <Route exact path="/binance/closing-thoughts">
                    <Closing />
                </Route>
            </Switch>
        </StyledPage>
    )
}


const StyledPage = styled.div`

`

export default BinanceSmartChange