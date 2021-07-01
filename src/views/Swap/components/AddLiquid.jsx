import React from "react";
import styled from "styled-components";
import Title from "../../../components/TitleChild";
import Thumb from "../../../components/Thumb";

const AddLiquid = () => {
  return (
    <StyledPage>
      <Title title="How to Trade on PegaSwap"></Title>
      <Thumb path="../images/pool-guide-imgs/img-1.png" />
      <ul>
        <li>
          1. Go to the pool page{" "}
          <a href="https://pegaswap.com/#/pool" target="_blank">
            here
          </a>
          .
        </li>
        <li>
          2. Click on button 'Add Liquidity' to add or create new liquidity
          pool.
        </li>
        <ThumbMobile>
          <img
            src="../images/pool-guide-imgs/img-12.png"
            alt="connect wallet"
          />
        </ThumbMobile>
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-2.png" alt="connect wallet" />
        </ThumbMobile>
        <li>
          3. Select the tokens you wish to add liquidity and enter the amount.
        </li>
        <ThumbMobile>
          <img
            src="../images/pool-guide-imgs/img-3a.png"
            alt="swap interface"
          />
        </ThumbMobile>
        <li>4. Check the details, and click “Supply”.</li>
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-3.png" alt="swap interface" />
        </ThumbMobile>
        <li>5. Check the details and click “Confirm Supply”.</li>
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-4.png" alt="swap interface" />
        </ThumbMobile>
        <li>6. Confirm the transaction in your wallet.</li>
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-5.png" alt="swap interface" />
        </ThumbMobile>
        <li>
          7. Click button 'Add PLP to Metamask' to add Pegaswap Liquidity Pool
          token to Metamask.
        </li>
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-6.png" alt="swap interface" />
        </ThumbMobile>
        8. Go back to the pool page to view your pool and manage it.
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-7.png" alt="swap interface" />
        </ThumbMobile>
        9. You can view details, and add liquidity or remove your pool.
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-8.png" alt="swap interface" />
        </ThumbMobile>
        10. If you want to remove your pool, click on button remove in pool to
        direct to remove pool page.
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-9.png" alt="swap interface" />
        </ThumbMobile>
        11. Click on percent amount to enter amount pool you want to remove,
        then click on approve and remove your pool.
        <ThumbMobile>
          <img src="../images/pool-guide-imgs/img-9.png" alt="swap interface" />
        </ThumbMobile>
        12. Check details and confirm.
        <ThumbMobile>
          <img
            src="../images/pool-guide-imgs/img-10.png"
            alt="swap interface"
          />
        </ThumbMobile>
        13. Done! Your pool has been removed.
        <ThumbMobile>
          <img
            src="../images/pool-guide-imgs/img-12.png"
            alt="swap interface"
          />
        </ThumbMobile>
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

const ThumbMobile = styled.div`
  margin: 2rem auto;
  max-width: 400px;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 350px;
  }
  @media (max-width: 576px) {
    max-width: 300px;
  }
`;

export default AddLiquid;
