import React from 'react'
import styled from 'styled-components'


const Thumb = ({ path }) => {

    return (
        <StyledThumb>
            <img src={path}></img>
        </StyledThumb>
    )
}


const StyledThumb = styled.div`
    max-width: 900px;
    width:100%;
    overflow: hidden;

    img{
    width: 100%;
    object-fit: cover;
    }

    @media (max-width:1025px){
    margin: 0 auto;
    
    }
    @media (max-width:576px){
    margin: 0 auto;
    margin-left: 0;
    }
`

export default Thumb