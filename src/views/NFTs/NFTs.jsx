import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Title from '../../components/Title'
import Thumb from '../../components/Thumb'


const NFTs = () => {

    return (
        <StyledPage>
            <Switch>
                <Route exact path="/none-fungible-token">
                    <Title title="Non Fungible Token (NFTs)" />
                    <p>Our first collectible Non Fungible Token Initiative!</p>
                    <p>Non Fungible Token (NFTs) are a cryptographically generated set of 1,000 unique, rare, immutable, digital apes. Each ape is created by hashing a string </p>
                    <Thumb path="../images/thumb/NFTT.png" />
                    <p>How were NFTs Pegasus generated?</p>
                    <p>Each characteristic has a different likelihood of occurring in each Pegasus Angel generation, making some characteristics much rarer than others</p>
                    <Thumb path="../images/thumb/NFTTTS.png" />
                </Route>
            </Switch>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 1rem;
    }
`

export default NFTs