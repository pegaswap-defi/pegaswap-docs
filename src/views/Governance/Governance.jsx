import React from "react";
import styled from "styled-components";
import Pagination from '../../components/Pagination'
import Title from "../../components/Title";

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Governance = () => {
  return (
    <Box_home>
      <Title image="crr.png"  title="Current governance model"/>
      <p>
        JuiceSwap is ultimately governed by its community, via forum discussions
        and, when pertinent, voting on proposals held on the 
        <a href="#" className="link"> JuiceSwap Snapshot</a>. At this time, only
        proposals posted to the Snapshot voting system by CORE can be considered
        binding if passed with a quorum.
      </p>
      <p>
        Major structural changes and use of the dev fund wallet are voted on by
        the community, whereas smaller changes affecting operations, as well as
        changes of JuiceSwap menu farming pairs. The mandate for this
        comes from the following proposal:
      </p>
      <p><a href="#" className="link">
        https://forum.Juiceswapclassic.org/t/governance-reorg-pre-proposal/28
      </a></p>
      <p>
        Any use of the dev fund wallet requires that the{" "}
        <span className="bold">Multisig</span> sign it, which they will only do
        if it is clear by the will of the community and has had a passing vote
        by a quorum. There must be at least 6 out of 9 signatures for a
        transaction to be approved.
      </p>
      <p>
        The <span className="bold">Multisig</span> members have trusted members
        of the DeFi & Ethereum ecosystem:
        <br /> @SBF_Alameda, @rleshner, @0xMaki, @lawmaster, @cmsholdings,
        @mattysino, @mickhagen, @AdamScochran (to be replaced by JiroOno),
        @zippoxe
      </p>
      <p>Any changes that are within the purview of the core team, such as rebalancing and administration of farming pools and use of the growth fund, must pass the <span className="bold">Operations Multisig</span> with at least 3 signatures.</p>
      <p>The <span className="bold">Ops Multisig</span> members are: @0xMaki, @0xCTRL, @LevxApp, @OmakaseBar, @JiroOno
(twitter handles)</p>
      <p>Our goal is to establish a DAO, with working trustless governance. This is not an easy task by any measure and is not something that will be rushed. There are at this time no time estimates for when this can be accomplished, but it will surely take well into 2021.</p>
      <p>All are welcome to discuss how the future DAO should work, as well as how the current governance model works, by participating in our <a href="#" className="link">forums</a> and in the #governance channel on our <a href="#" className="link">Discord</a> server.</p>
      <Pagination
        prev="The Basics"
        next="Proposals & voting"
        linknext="/proposals-and-voting"
        linkprev="/the-basics"
      />
    </Box_home>
  );
};

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
  line-height: 1.625;

  .unset {
    font-weight: 400;
  }
  .line-height {
    margin-bottom: 0;
  }

  h3 {
    border-bottom: 2px solid #e6ecf1;
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.5;
  }
  p {
    font-size: 16px;
  }
  .link {
    color: rgb(234, 87, 164);
    font-weight: 400;
  }
  .bold {
    font-weight: 700;
  }
`;

export default Governance;
