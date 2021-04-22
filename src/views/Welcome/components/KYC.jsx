import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'



const KYC = () => {


    return(
        <StyledPage>
            <Title title="No KYC Requirement"> </Title>
            <p>Every centralized exchange we know about follows the requirements for Know Your Customer and Anti-Money laundering (KYC/AML) which removes users’ privacies by requiring them to provide extensive documentation to prove their identity.
            </p>
        </StyledPage>
    )
}


const StyledPage = styled.div`
    p {
        font-size: 1rem;
        margin-top: 20px;
    }
`


export default KYC