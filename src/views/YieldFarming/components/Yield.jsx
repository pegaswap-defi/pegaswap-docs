import React from 'react'
import styled from 'styled-components'
import Title from '../../../components/TitleChild'
import Thumb from '../../../components/Thumb'



const Yield = ({ props }) => {


    return (
        <StyledPage>
            <Title title="How to Yield Farm on Pegaswap"></Title>
            <p>how to get started farming $PGS on <strong>Pegaswap</strong></p>
            <Thumb path="../images/thumb/farm.png" />
            <ul>
                <li>1. Go to the farm page <a href="#" target="_blank">here</a>.</li>
                <li>
                    2. Connect your Binance Smart Chain Wallet (top-right hand corner)
</li>
                <li>3. Pick which farm you want to use. For this example, we will pick the PGS-BNB LP farm.</li>
                <li>4. Go to the exchange page <a href="#" target="_blank">here</a> and click “Add Liquidity”.</li>
                <li>5. Select the tokens to add, in this case BNB and PGS. You need to provide them in a 50/50 ratio vs USD value. For example, you would need to add $10 of BNB and $10 of PGS. Once you are done, click “farm”.</li>
                <li>6. Check the details, click “Confirm farm” and then confirm the transaction in your wallet.</li>
                <li>
                    7. You now have liquidity tokens. Next, go back to the farm page <a href="#" target="_blank">here</a>.
</li>
                <li>
                    8. Click “Approve Contract” on the farm you want to use and then confirm the transaction in your wallet.
</li>
                <li>
                    9. Click the “Stake LP” button to stake your liquidity tokens.
</li>
                <li>
                    10. Enter the number of liquidity tokens you want to stake and click “Confirm”, then confirm the transaction in your wallet.
</li>
                <li>
                    11. Done! Now you are farming PGS tokens! You can harvest them at any time by pressing "Harvest"
</li>
            </ul>
        </StyledPage>
    )
}


const StyledPage = styled.div`
p {
    font-size: 1rem;
    margin-top: 20px;
}
ul {
    padding: 0;
    margin-top: 20px;
    li {
        list-style-type: none;
        font-size: 1rem;

    }
    a {
        color: #9827ec;
        text-decoration: underline;
    }
}
`


export default Yield