import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Title from '../../components/Title'
// import Item from './components/Item'
// import CountUp from 'react-countup';

const Official = () => {
  return (
    <Box_home>
      <Title image="ll.png"  title="Official JuiceSwap links"/>
      <p>
        JuiceSwap’s shiny new UI (recommended)
        <a href="#" className="link">
          {" "}
          https://Juiceswap.fi/
        </a>
      </p>
      <p>
        JuiceSwap’s OG website (soon to be discontinued)
        <a href="#" className="link">
          {" "}
          https://Juiceswapclassic.org/
        </a>
      </p>
      <p>
        JuiceSwap Lite
        <a href="#" className="link">
          {" "}
          https://lite.Juiceswap.fi/
        </a>
      </p>
      <p className="bold line-height">
        See which proposals are being discussed and contribute to the
        conversation on JuiceSwap’s development and vision.
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://forum.Juiceswapclassic.org/
        </a>
      </p>
      <p className="bold">
        Vote on key proposals
        <br />
        <a href="#" className="link">
          {" "}
          https://snapshot.page/#/Juice
        </a>
        <p className="unset">
          (Our old Snapshot is archived at{" "}
          <a href="#" className="link">
            https://snapshot.page/#/Juicepowah
          </a>{" "}
          )
        </p>
      </p>
      <p className="bold line-height">
        Keep track of upcoming updates and features the core JuiceSwap team is
        working on.
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://trello.com/b/ZpcRUpis/main-projects
        </a>
      </p>
      <p className="bold line-height">
        Track your accumulated xJuice, check the timelock and more
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://app.boring.finance/
        </a>
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://Juiceview.vercel.app/timelock
        </a>
      </p>
      <p className="bold line-height">
        For Juicebar APY
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://Juice.zippo.io/Juicebar
        </a>
      </p>
      <p className="bold line-height">
        Keep track of OmakaseBar’s UI developments
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://trello.com/b/qlCpmFz2/Juiceswap-frontend-bugs-enhancements{" "}
        </a>
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://www.notion.so/Juiceswap-Shiny-Frontend-38629fec29bd41a3bbe0fa52d404c921
        </a>
      </p>
      <p className="bold line-height">
        Track JuiceSwap’s performance in the DEX space (TVL, Volume)
        <a href="#" className="link">
          {" "}
          https://www.tokenterminal.com/{" "}
        </a>
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://Juice.zippo.io/Juicebar
        </a>
      </p>
      <p className="bold line-height">
        Social Media
        <br /> <p className="unset">JuiceSwap Medium</p>{" "}
        <a href="#" className="link">
          {" "}
          https://app.boring.finance/
        </a>
        <br /> <p className="unset">JuiceSwap Twitter</p>{" "}
        <a href="#" className="link">
          {" "}
          https://Juiceview.vercel.app/timelock
        </a>
      </p>
      <p className="bold line-height">
        Check how your portfolio is doing and manage your investments
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://zapper.fi/{" "}
        </a>
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://debank.com/
        </a>
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://apy.vision/{" "}
        </a>
        <p className="unset"> (excellent tool to track impermanent loss)</p>
      </p>
      <p className="bold line-height">
        Track gas prices
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://ethgasstation.info/{" "}
        </a>
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://www.gasnow.org/
        </a>
      </p>
      <p className="bold line-height">
        Track history of transactions + more with nice UI
        <br />{" "}
        <a href="#" className="link">
          {" "}
          https://app.zerion.io/{" "}
        </a>
      </p>
      <Pagination
        prev="Proposals & voting"
        next="Build on JuiceSwap"
        linknext="/how-to-build-on-Justswap"
        linkprev="/proposals-and-voting"
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



export default Official
