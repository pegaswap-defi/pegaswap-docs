import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'
import Thumb from '../../../components/Thumb'



const Roadmap = () => {


    return (
        <StyledPage>
            <Title title="Roadmap"></Title>
            <p>How we plan to evolve  Pegaswap</p>
            <Thumb path="../images/thumb/Screen_Shot_2021-04-13_at_20.12.54.png" />
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 1rem;
        margin-top: 20px;
    }
`


export default Roadmap