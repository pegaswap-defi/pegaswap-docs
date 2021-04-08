import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Title from '../../components/Title'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Home = () => {
  return (
    <Box_home>
      <Title image="pross.png"  title="Proposals & voting"/>
      <p>
        Any member of the community is welcome to post a proposal on our{" "}
        <span className="link">forums</span>, but please try and follow the set-out template that is shown when creating a thread, so that the proposals
        can be easily read through by the prospective voters.
      </p>
      <p>
        If you desire a poll added to your thread, please contact a member of
        the core team or a community team member.
      </p>
      <p>
        Your proposal can gain enough traction to be brought up for voting on
        our Snapshot voting platform by the core team, where the community will
        vote with <span className="bold">JuicePOWAH</span> to decide the
        outcome.{" "}
      </p>
      <p>
        Our Snapshot voting platform can be found at{" "}
        <a className="link" href="/">
          https://snapshot.page/#/Juice
        </a>{" "}
        and you can also read our archived Snapshot (with older proposals) at{" "}
        <a className="link" href="/">
          {" "}
          https://snapshot.page/#/Juicepowah
        </a>
      </p>
      <p>
        {" "}
        <span className="bold">JuicePOWAH</span> is our voting metric, and is
        decided as follows:
      </p>
      <p className="line-height">
        Each Juice token held in the voters wallet is worth{" "}
        <span className="bold">1 JuicePOWAH</span>
        <p className="line-height">
          Each Juice in the Juice-ETH pool is worth{" "}
          <span className="bold">2 JuicePOWAH</span>
        </p>
        <p className="">
          Each Juice held via xJuice tokens equal{" "}
          <span className="bold">3 JuicePOWAH</span>
        </p>
      </p>
      <p>
        For a vote to pass and become binding, it must gain a quorum of at least
        5 million <span className="bold">JuicePOWAH</span>
      </p>

      <p>
        {" "}
        <span className="bold">Please note:</span> To be an eligible voter for
        any proposal on our Snapshot, you must have
        <span className="bold"> JuicePOWAH </span>from any or all of the 3 above
        options{" "}
        <span className="bold">at the time of the vote is started</span>.
        This means that you cannot simply buy Juice tokens to vote on an already
        ongoing vote, and is meant to reduce the risk of influence by whales and
        flash loaders.
      </p>
      <Pagination
        prev="Current governance model"
        next="Official JuiceSwap links"
        linknext="/all-official-Juiceswap-links"
        linkprev="/current-governance-mdoel"
      />
    </Box_home>
  );
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
  line-height: 1.625;

  .unset{
    font-weight: 400;
  }
  .line-height{
    margin-bottom: 0;
  }
  
  h3{
    border-bottom: 2px solid #E6ECF1;
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.5;
  }
  p{
    font-size: 16px;
  }
  .link{
    color: rgb(234, 87, 164);
    font-weight: 400;
  }
  .bold{
    font-weight: 700;
  }
`



export default Home
