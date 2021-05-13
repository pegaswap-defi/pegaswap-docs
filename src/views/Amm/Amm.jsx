import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Closing from './components/Closing'
import Liquidity from './components/Liquidity'
import Howdoes from './components/Howdoes.jsx'
import ImpermanentLost from './components/ImpermanentLost'


const Amm = () => {

    return (
        <StyledPage>
            <Switch>
                <Route exact path="/amm/how-does-an-automated-market-maker-amm-work">
                    <Howdoes />
                </Route>
                <Route exact path="/amm/what-is-a-liquidity-pool">
                    <Liquidity />
                </Route>
                <Route exact path="/amm/what-is-impermanent-loss">
                    <ImpermanentLost />
                </Route>
                <Route exact path="/amm/closing-thoughts">
                    <Closing />
                </Route>
            </Switch>
        </StyledPage>
    )
}


const StyledPage = styled.div`

`

export default Amm