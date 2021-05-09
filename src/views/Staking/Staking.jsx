import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Title from '../../components/Title'


const Staking = () => {

    return (
        <StyledPage>
            <Switch>
                <Route exact path="/staking-pools">
                    <Title title="Staking Pools" />
                    <p>PegaSwap Pools allow Binance Smart Chain projects to bootstrap adoption by distributing a portion of their tokens to PGS token holders. They also allow existing projects to start a relationship with our amazing community.</p>
                </Route>
            </Switch>
        </StyledPage>
    )
}


const StyledPage = styled.div`

`

export default Staking