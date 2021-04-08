import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Title from '../../components/Title';

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Faq = () => {
  return (
    <Box_home>
      <Title image="que.png"  title="FAQ"/>
      <p><strong>What is DeFi?</strong></p>
      <p>DeFi is short for Decentralized Finance. Decentralized Finance includes digital assets, protocols,  smart contracts, and dApps built on a blockchain.</p>
      <p><strong>What is a DeFi token?</strong></p>
      <p>DeFi has created a suite of highly demanded tokens within the larger cryptocurrency ecosystem. With DeFi tokens outperforming BTC in 2020, the ecosystem is quickly turning towards popular protocol tokens as a means of value capture for DeFi’s growth.</p>
      <p><strong>Are their risks for Defi?</strong></p>
      <p>Securely handling cryptocurrencies and finance tools require specialized knowledge, Hence there is a risk factor involved. It is the user’s responsibility to keep their key and holdings secret, use a hardware wallet and multi-factor authentication.</p>
      <p><strong>Why do we need DeFi?</strong></p>
      <p>Crypto is just one of the components that enable Defi to provide transparent and more profitable financial products. On its own, cryptocurrency provides a medium for facilitating transactions without the hassles prevalent with traditional fiat currencies.</p>
      <p><strong>Do I need to unstake and restake?</strong></p>
      <p>If you were deposited before the migration then no.</p>
      <p>If weren't part of juiceswap before the migration, then you'd need to redeem your Uniswap JLP tokens and come deposit them at <a target="_blank" href="https://exchange.juiceswap.finance/#/swap">https://exchange.juiceswap.finance/#/swap</a> to deposit.</p>
      <p><strong>Do I need to approve JLP?</strong></p>
      <p>Yes. JLP is our version of UNI-v2 LP tokens. They need to be approved to interact with the system.</p>
      <p><strong>Why don't I see my tokens on <a target="_blank" href="https://exchange.juiceswap.finance/#/swap">https://exchange.juiceswap.finance/#/swap</a> after migrating?</strong> </p>
      <p><a target="_blank" href="https://exchange.juiceswap.finance/#/swap">https://exchange.juiceswap.finance/#/swap</a>, <a target="_blank" href="https://juiceswap.finance/Staking">https://juiceswap.finance/Staking</a>  are two different smart contracts.</p>
      <p>The exchange.juiceswapclassic.org page looks for JLP tokens that are in your wallet (such as metamask) it cannot see what you have deposited into the farms on the /farms page. So it will show 0, but your LP tokens are still safe in that contract.</p>
      <p><strong>What is xJuiceswap?</strong></p>
      <p>xJuiceswap is what you get when you stake Juiceswap on the new juiceswapclassic.org/staking page - the xJuiceswap staked earns a reward fee of 0.05% of all trades.</p>
      <p><strong>How are xJuiceswap rewards sent?</strong></p>
      <p>When users make trades on the juiceswap Exchange a 0.3% fee is charged.</p>
      <p>0.05% (1/6th of the fee) is added to the JuiceswapBar pool in the form of LP tokens for the relative pool.</p>
      <p>When the rewards contract is called (minimum once per day) all the LP tokens are sold for Juiceswap (on juiceswap Exchange). The newly purchased Juiceswap is then divided up proportionally between the xJuiceswap holders in the pool, meaning their xJuiceswap is now worth more Juiceswap.</p>
      <p>Currently you will not see the gained amount until you have withdrawn.</p>
      <p>It started as 1 Juiceswap = 1 xJuiceswap, but just like LP tokens the price of xJuiceswap changes over time depend on how many Juiceswap rewards are in the pool.</p>
      <p><strong>How do I get trade rewards?</strong></p>
      <p>If you have LP tokens you automatically get 0.25% of all trades in your pool added back to that pool, so you get a proportional share.</p>
      <p>If you have xJuiceswap staked then you continue to get 0.05% of all trade fees from all pools divided proportionally against your stake</p>
      {/* <p><strong>When will we get the 2M migration airdrop?</strong></p>
      <p>As soon as SBFs team is ready. They've had a LONG day with the migration and I assume have passed out right now. Let them sleep.</p>
      <p><strong>What is the APR of the xJuiceswap token?</strong></p>
      <p>No one knows, because it is based on fees and use.</p>
      <p><strong>Do I continue to get new $Juiceswap rewards?</strong></p>
      <p>Yes new $Juiceswap is issued every block for Juiceswap staked in the /farms</p>
      <p><strong>Can I add new pairs to the default list on juiceswap?</strong></p>
      <p>Yes you can add a new pair at the exchange.juiceswapclassic.org/#/pool <a href=""></a> you will be eligible for the 0.25% trade fee on that pair, but it is not eligible to appear on the default list or for the Juiceswap rewards on juiceswapclassic.org/farms</p>
      <p><strong>Are there plans to cap the $Juiceswap distribution, lower the emission, or add burning?</strong></p>
      <p>Yes, all of those are being discussed and proposed.</p>
      <p><strong>Did any pairs not migrate?</strong></p>
      <p>Yes BASED is still using UNI-V2 tokens instead of JLP tokens due to the issues with their rebasing.</p>
      <p><strong>I can't see my LP tokens showing up?</strong></p>
      <p>Make sure to refresh your cache. There are lots of caching issues.</p>
      <p><strong>Is juiceswap now the largest DEX by liquidity?</strong></p>
      <p>Yes.</p>
      <p><strong>Why juiceswapclassic.org?</strong></p>
      <p>This was a backup with a temporary design. A new design is being built for juiceswap.org and will be live soon and that domain will be redirected.</p>
      <p><strong>What is the purpose of $Juiceswap now?</strong></p>
      <p>Now it can be used in yield farming on juiceswapclassic.org/farms or staked as xJuiceswap for trade fee rewards or used in governance voting or added as an LP on exchange.juiceswapclassic.org pools.</p> */}
      {/* <Pagination
        prev="Migrating Uniswap v2 LP tokens"
        linkprev="/migrating"
        next="AMM / Exchange"
        linknext="/amm-exchange"
      /> */}
    </Box_home>
  );
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;
`



export default Faq
