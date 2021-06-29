import React from "react";
import styled from "styled-components";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Title from "../../components/Title";
// import Thumb from "../../components/Thumb";

const Governance = () => {
  return (
    <StyledPage>
      <Switch>
        <Route exact path="/governance">
          <Title title="Governance" />
          <p>
            Governance is a very important aspect to run a Decentralized
            Protocol. All developments in the protocol are decided based on the
            results of the voting. Voting can be done by holders of the
            protocol’s governance tokens. It is to be noted that though voting
            is decentralized the there are only a few major whales who hold
            these governance tokens and therefore take the majority of the
            decisions. In return for the voting, the voters are rewarded with
            the Protocol’s Governance tokens.
          </p>
          <p>
            Once governance tokens have been distributed, the hard work of
            actually governing a platform begins. The most popular DeFi
            governance structures all follow the same general process:
          </p>
          <p>
            <strong>Discussion r</strong>: Discussion is the first step of DeFi
            governance, as stakeholders attempt to gauge the sentiments of the
            community around specific issues and potential changes. Discussions
            happen across a 13 platform’s official governance forum and informal
            communication channels. Ideas and policies are ideally the center of
            conversation, but politicking often occurs as users try to convince
            others in the community to support their ideas or proposals.
          </p>
          <p>
            <strong>Improvement proposal: </strong>Improvement proposals are an
            attempt to systematically and transparently put forward new changes
            to the system by using a generalized template consisting of the
            proposal’s context, description, and potential code change. For now,
            most improvement proposals are technical, quantitative, and mainly
            submitted by developers. Once a code change is proposed, it can be
            discussed and reviewed by the community — then changed further if
            necessary.{" "}
          </p>
          <p>
            <strong>Quorum: </strong>A quorum is the minimum amount of
            participation required to pass a vote. For example, a proposal may
            have 100% support from voters, but if the number of token holders
            who vote fails to meet the minimum percentage required, then the
            vote is often automatically cancelled. One of the biggest problems
            in DeFi governance is low participation. People often want to hold
            tokens for speculative purposes and may not want to participate in
            governance because it is timeconsuming, less instantly gratifying,
            and/or they do not have a strong view — or any view at all — on the
            proposed change to the protocol.
          </p>
          <p>
            <strong>On-chain vote:</strong> For most DeFi protocols, one token
            equals one vote, and a simple majority of more than 50% is enough to
            execute a new proposal. The more tokens an entity holds, the more
            weight their vote carries. If a token holder does not want to vote
            directly, their voting power can be delegated to another address.
            Once a vote is passed, the proposal can be executed.
          </p>
          <p>
            <strong>Implementation:</strong>: Since proposals are usually
            software changes, the final step in the decentralized governance
            process is changing the code.
          </p>
        </Route>
      </Switch>
    </StyledPage>
  );
};

const StyledPage = styled.div``;

export default Governance;
