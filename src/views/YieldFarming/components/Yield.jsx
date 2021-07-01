import React from "react";
import styled from "styled-components";
import Title from "../../../components/TitleChild";
import Thumb from "../../../components/Thumb";

const Yield = ({ props }) => {
  return (
    <StyledPage>
      <Title title="How to Yield Farm on Pegaswap"></Title>
      <p>
        Actual farmers measure yield as the total amount of a crop that’s grown.
        Accordingly, DeFi proponents have now latched onto the farming metaphor
        and memed into existence “yield farmers,” i.e. folks who measure yield
        as the amount of interest that’s grown atop underlying crypto assets
        like Dai, USDC, and USDT when put to use in DeFi platforms like
        Compound, Curve, and Aave.
      </p>
      <p>
        Yield farming (or liquidity mining) is a way to generate crypto with
        your existing holdings. Using platforms like PancakeSwap, you can
        generate yield on the Binance Smart Chain. As we'll see with the next
        metric, the fees are extremely low on BSC. This makes it ideal for
        smaller players to enter the yield farming scene and get their fair
        share of the available crops.
      </p>
      <p>
        Yield Farming, or the “Agriculture of Yield”, is an activity carried out
        by users (investors, traders) who have assets in cryptocurrencies to use
        these to invest them and obtain the highest possible return on their
        investment.
      </p>
      <p>
        Similar to traditional agriculture, it is carried out in cycles of
        productivity. The Yield Farmers look for opportunities in the network to
        commit their assets in cryptocurrencies to make loans to other users, or
        to request loans from other users who make a living in the
        cryptocurrency trade, on the platforms that these offer possibilities.
        This activity causes more liquidity to occur, and the more liquidity
        there is in the platform, the greater the number of amounts that can be
        borrowed.{" "}
      </p>
      <p>
        All of this allows Yield Farmers to earn a profit, in the form of
        interest earned on the amount of cryptocurrency deposited on the
        platform. And also, in DeFi farmers can receive implicit governance
        tokens to the platform they are farming. This is part of the earnings
        received from the high-interest rate proposed by the loan protocol of
        the platform itself.{" "}
      </p>
      <p>
        Yield farming is closely related to a model called automated market
        maker (AMM). It typically involves liquidity providers (LPs) and
        liquidity pools. Let’s see how it works.{" "}
      </p>
      <p>
        Liquidity providers deposit funds into a liquidity pool. This pool
        powers a marketplace where users can lend, borrow, or exchange tokens.
        The usage of these platforms incurs fees, which are then paid out to
        liquidity providers according to their share of the liquidity pool. This
        is the foundation of how an AMM works.
      </p>
      <p>
        However, the implementations can be vastly different – not to mention
        that this is a new technology. It’s beyond doubt that we’re going to see
        new approaches that improve upon the current implementations.{" "}
      </p>
      <p>
        On top of fees, another incentive to add funds to a liquidity pool could
        be the distribution of a new token. For example, there may not be a way
        to buy a token on the open market in any substantial numbers, only small
        amounts. But liquidity providers can gain access to and accumulate these
        tokens by providing liquidity to a specific pool.{" "}
      </p>
      <p>
        Yield farming is the practice of staking or locking up cryptocurrencies
        in order to generate rewards. Many decentralized finance (DeFi) projects
        rely on yield farming to incentivize users to contribute to the
        network's liquidity and stability, since these projects do not rely on a
        centralized market facilitator.
      </p>
      <p>
        how to get started farming $PGS on <strong>Pegaswap</strong>
      </p>
      <Thumb path="../images/thumb/farm.png" />
      <ul>
        <li>
          1. Go to the farm page{" "}
          <a href="https://pegaswap.com/#/" target="_blank">
            here
          </a>
          .
        </li>
        <li>
          2. Connect your Binance Smart Chain Wallet (top-right hand corner)
        </li>
        <li>
          3. Pick which farm you want to use. For this example, we will pick the
          PGS-BNB LP farm.
        </li>
        <li>
          4. Go to the exchange page{" "}
          <a href="https://pegaswap.com/#/" target="_blank">
            here
          </a>{" "}
          and click “Add Liquidity”.
        </li>
        <li>
          5. Select the tokens to add, in this case BNB and PGS. You need to
          provide them in a 50/50 ratio vs USD value. For example, you would
          need to add $10 of BNB and $10 of PGS. Once you are done, click
          “farm”.
        </li>
        <li>
          6. Check the details, click “Confirm farm” and then confirm the
          transaction in your wallet.
        </li>
        <li>
          7. You now have liquidity tokens. Next, go back to the farm page{" "}
          <a href="https://pegaswap.com/#/" target="_blank">
            here
          </a>
          .
        </li>
        <li>
          8. Click “Approve Contract” on the farm you want to use and then
          confirm the transaction in your wallet.
        </li>
        <li>9. Click the “Stake LP” button to stake your liquidity tokens.</li>
        <li>
          10. Enter the number of liquidity tokens you want to stake and click
          “Confirm”, then confirm the transaction in your wallet.
        </li>
        <li>
          11. Done! Now you are farming PGS tokens! You can harvest them at any
          time by pressing "Harvest"
        </li>
      </ul>
    </StyledPage>
  );
};

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
`;

export default Yield;
