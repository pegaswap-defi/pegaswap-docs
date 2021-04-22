import React from 'react'
import styled from 'styled-components'

const Title = (props) => {

    return(
        <StyledTitle>
            <h1>{props.children}</h1>
        </StyledTitle>
    )
}



const StyledTitle = styled.div`
    h1 {
        font-size: 3rem;
        font-weight:300;
        @media(max-width: 1025px) {
            font-size: 2rem;
        }
        @media(max-width: 768px) {
            font-size: 1.5rem;
        }
    }
    border-bottom: 1px black solid;
`

export default Title