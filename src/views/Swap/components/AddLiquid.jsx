import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'
import Thumb from '../../../components/Thumb'



const AddLiquid = () => {


    return (
        <StyledPage>
            <Title title="Liquidity Pools & Adding Liquidity"></Title>
            <p>about PegaSwap's Liquidity Pools ( ( coming soon)</p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 1rem;
        margin-top: 20px;
    }
    ul {
        li {
            list-style-type: none;
        }
    }
`


export default AddLiquid