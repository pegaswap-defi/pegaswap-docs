import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Title from '../../components/Title'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Nfts = () => {
  return (
    <Box_home>
      <Title image="ord.png"  title="About NFTs"/>
      <p>These are the most common properties of NFTs, it is good to have them fresh in our minds in order to grasps what we can do with them and how they function:</p>
      <p><strong>Unique</strong> — each NFT has different properties that are usually stored in the token’s metadata.</p>
      <p><strong>Provably Scarce</strong> — there is usually a limited number of NFTs with an extreme example of having only 1 copy, the number of tokens can be verified on the blockchain, hence it’s provability.</p>
      <p><strong>Indivisible</strong> — most NFTs cannot be split into smaller denominations, so you cannot buy or transfer a fraction of your NFT.</p>
      <p><strong>How can NFTs be used in DeFi ?</strong></p>
      <p>NFTs are being promoted as the next big thing in the Decentralised Finance world. NFTs attractive trait is that they can be used as collateral, NFTs may represent other type of financial products such as insurance, bonds or options. A DeFi lending and borrowing platform requires collaterals, this is were NFTs come in and solve that issue. JuiceSwap utilises NFTs in the insurance space, each contract is represented as an NFT which can then be traded on another marketplace</p>
      
      {/* <Pagination
        prev="Lending (BentoBox)"
        linkprev="/lending-bentobox"
        next="The Basics"
        linknext="/the-basics"
      /> */}
    </Box_home>
  );
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;

`



export default Nfts
