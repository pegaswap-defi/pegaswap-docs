import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Yield from './components/Yield'


const YieldFarming = () => {

    return (
        <StyledPage>
            <Switch>
                <Route exact path="/yield-farming">
                    <Yield />
                </Route>
            </Switch>
        </StyledPage>
    )
}


const StyledPage = styled.div`

`

export default YieldFarming