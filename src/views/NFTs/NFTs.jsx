import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "../../components/Title";
import Thumb from "../../components/Thumb";

const NFTs = () => {
  return (
    <StyledPage>
      <Switch>
        <Route exact path="/none-fungible-token">
          <Title title="Non Fungible Token (NFTs)" />
          <p>
            A Non-Fungible Token or NFT is a special kind of cryptographic token
            that represents any unique asset. These NFTs operate as verifiable
            proofs of authenticity and ownership inside the blockchain network.
            The NFTs are not interchangeable which introduces scarcity in the
            digital world of assets.
          </p>
          <p>
            NFTs are the building blocks of a blockchain-powered or distributed
            ledger powered world. These NFTs find application in several digital
            items and processes such as crypto gaming.The notable and first
            usecase of NFTs in the crypto-collectible trading card gaming.
          </p>
          <strong>What is Fungibility?</strong>
          <p>
            The term Fungibility refers to the equal value among the assets. It
            implies the right to exchange a product or assets with other
            products or assets of the same kind. These Fungible assets simplify
            the process of trade and exchange of assets.
          </p>
          <p>
            Thus any two objects are equivalent in design and their individual
            units can be replaced mutually is referred to as Fungibility.
          </p>
          <strong>Major Use-cases of NFTs</strong>
          <p>
            Let us deeply look at the top use-cases of non fungible tokens in
            the digital economy.
          </p>
          <strong>Gaming</strong>
          <p>
            The most and popular use-cases of Non-fungible tokens is Gaming.
            Blockchain gaming allows players to securely trade assets and offer
            a layer of authenticity and verifiability to all the players.
          </p>
          <p>
            NFTs provides a compelling solution for all digital ownership of
            game items and allows users to generate real-time revenue by
            utilizing their gaming skills.
          </p>
          <p>
            Users have the way to decide the direction of future developments
            within the games.These gives the opportunity to design their own
            virtual world & operate in verifiable gaming marketplaces.
          </p>
          <p>Our first collectible Non Fungible Token Initiative!</p>
          <p>
            Non Fungible Token (NFTs) are a cryptographically generated set of
            1,000 unique, rare, immutable, digital apes. Each ape is created by
            hashing a string{" "}
          </p>
          <Thumb path="../images/thumb/NFTT.png" />
          <p>How were NFTs Pegasus generated?</p>
          <p>
            Each characteristic has a different likelihood of occurring in each
            Pegasus Angel generation, making some characteristics much rarer
            than others
          </p>
          <Thumb path="../images/thumb/NFTTTS.png" />
        </Route>
      </Switch>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  p {
    font-size: 1rem;
  }
`;

export default NFTs;
