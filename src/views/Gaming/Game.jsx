import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Title from '../../components/Title'
import Thumb from '../../components/Thumb'


const Game = () => {

    return (
        <StyledPage>
            <Switch>
                <Route exact path="/gaming">
                    <Title title="Game" />
                    <p>Pegasu Finance is a purpose built blockchain specifically for the hosting of completely decentralized blockchain game worlds. </p>
                    <Thumb path="../images/thumb/Gaming.png" />
                    <p>We see the blockchain as a transformational technology where games transcend the virtual and take on a life of their own in the real world.</p>
                    <p>With no walled gardens, free markets and natural price discovery are underpinned by censorship resistance, trustless trading, and cryptographic security. </p>
                </Route>
            </Switch>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    
`

export default Game