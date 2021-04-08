import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'


// import Container from './components/Container';
import Home from './views/Home'
import Migrating from './views/Migrating'
import Faq from './views/Faq'
import Builds from './views/Builds'
import Voting from './views/Voting'
import Presskit from './views/Presskit'
import Official from './views/Official'
import Governance from './views/Governance'
import Lending from './views/Lending'
import Nfts from './views/Nfts'
import Basics from './views/Basics'
import Amm from './views/Amm'
import Yield from './views/Yield'
import Swapping from './views/Amm/PageChild/Swapping/Swapping'
import Impermanent from './views/Amm/PageChild/Impermanent'
import Liquidity from './views/Amm/PageChild/Liquidity/Liquidity'
import Menu from './components/Menu'
import ButtonMenu from './components/ButtonMenu'
import JUSswapS from './views/Amm/PageChild/Swapping/PageChild/JUSswap'
import ClassicS from './views/Amm/PageChild/Swapping/PageChild/Classic'
import LiteS from './views/Amm/PageChild/Swapping/PageChild/Lite'

import JUSswapL from './views/Amm/PageChild/Liquidity/PageChild/JUSswap'
import ClassicL from './views/Amm/PageChild/Liquidity/PageChild/Classic'
import LiteL from './views/Amm/PageChild/Liquidity/PageChild/Lite'

import JUSswapTJB from './views/Yield/PageChild/TheJuiceBar/PageChild/JUSswap'
import ClassicTJB from './views/Yield/PageChild/TheJuiceBar/PageChild/Classic'
import LiteTJB from './views/Yield/PageChild/TheJuiceBar/PageChild/Lite'

import JUSswapTJM from './views/Yield/PageChild/TheJuiceMenu/PageChild/JUSswap'
import ClassicTJM from './views/Yield/PageChild/TheJuiceMenu/PageChild/Classic'

import JUSswapMW from './views/Yield/PageChild/MenuWeek/PageChild/JUSswap'
import ClassicMW from './views/Yield/PageChild/MenuWeek/PageChild/Classic'

import MenuWeek from './views/Yield/PageChild/MenuWeek/MenuWeek'
import TheJuiceBar from './views/Yield/PageChild/TheJuiceBar/TheJuiceBar'
import TheJuiceMenu from './views/Yield/PageChild/TheJuiceMenu/TheJuiceMenu'
import Staking from './views/Staking'
import Pools from './views/Pools'
import TokenExchange from './views/TokenExchange'
import TokenFarm from './views/TokenFarm'
import TokenStak from './views/TokenStak'
import Reclamation from './views/Reclamation'
import ButtonTotop from './components/ButtonTotop'








const App = () => {
  

  return (
    <StyledScreen>
      <Router>
        <Header/>
        <div className="main">
          <Layout>
              {/* <Menu/> */}
              <ButtonMenu/>
              <BoxSidebar>
                <SideBar/>
              </BoxSidebar>
              <BoxContent>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/migrating" exact>
                    <Migrating />
                  </Route>
                  <Route path="/faq" exact>
                    <Faq />
                  </Route>
                  <Route path="/amm-exchange" exact>
                    <Amm />
                  </Route>
                  <Route path="/amm-exchange/swapping" exact>
                    <Swapping />
                  </Route>
                  <Route path="/amm-exchange/swapping/juiceswap" exact>
                    <JUSswapS/>
                  </Route>
                  <Route path="/amm-exchange/swapping/lite.juiceswap" exact>
                    <LiteS />
                  </Route>
                  <Route path="/amm-exchange/swapping/how-to-swap-tokens" exact>
                    <ClassicS/>
                  </Route>
                  <Route path="/amm-exchange/liquidity-pools" exact>
                    <Liquidity />
                  </Route>
                  <Route path="/amm-exchange/liquidity-pools/juiceswap" exact>
                    <JUSswapL />
                  </Route>
                  <Route path="/amm-exchange/liquidity-pools/lite.juiceswap" exact>
                    <LiteL />
                  </Route>
                  <Route path="/amm-exchange/liquidity-pools/juiceswapclassic.org" exact>
                    <ClassicL />
                  </Route>
                  <Route path="/amm-exchange/impermanent-loss" exact>
                    <Impermanent />
                  </Route>
                  <Route path="/product-pools" exact>
                    <Pools />
                  </Route>
                  <Route path="/yield-farming" exact>
                    <Yield/>
                  </Route>
                  <Route path="/yield-farming/the-juicebar" exact>
                    <TheJuiceBar/>
                  </Route>
                  <Route path="/yield-farming/the-juicebar/juiceswap" exact>
                    <JUSswapTJB />
                  </Route>
                  <Route path="/yield-farming/the-juicebar/lite.juiceswap" exact>
                    <LiteTJB />
                  </Route>
                  <Route path="/yield-farming/the-juicebar/juiceswapclassic.org" exact>
                    <ClassicTJB />
                  </Route>
                  <Route path="/yield-farming/the-juice-menu" exact>
                    <TheJuiceMenu/>
                  </Route>
                  <Route path="/yield-farming/the-juice-menu/juiceswap" exact>
                    <JUSswapTJM />
                  </Route>
                  <Route path="/yield-farming/the-juice-menu/juiceswapclassic.org" exact>
                    <ClassicTJM />
                  </Route>
                  <Route path="/yield-farming/menu-of-the-week" exact>
                    <MenuWeek/>
                  </Route>
                  <Route path="/yield-farming/menu-of-the-week/juiceswap" exact>
                    <JUSswapMW />
                  </Route>
                  <Route path="/yield-farming/menu-of-the-week/juiceswapclassic.org" exact>
                    <ClassicMW />
                  </Route>
                  <Route path="/lending-bentobox" exact>
                    <Lending />
                  </Route>
                  <Route path="/product-staking" exact>
                    <Staking />
                  </Route>
                  <Route path="/reclamation" exact>
                    <Reclamation/>
                  </Route>
                  <Route path="/about-nfts" exact>
                    <Nfts />
                  </Route>
                  <Route path="/the-basics" exact>
                    <Basics />
                  </Route>
                  <Route path="/how-to-add-tokens-to-juiceswap-exchange" exact>
                    <TokenExchange />
                  </Route>
                  <Route path="/how-to-farm-with-juiceswap-tokens" exact>
                    <TokenFarm />
                  </Route>
                  <Route path="/how-to-stake-juiceswap-for-xjuiceswap" exact>
                    <TokenStak />
                  </Route>
                  <Route path="/current-governance-mdoel" exact>
                    <Governance />
                  </Route>
                  <Route path="/proposals-and-voting" exact>
                    <Voting />
                  </Route>
                  <Route path="/all-official-juiceswap-links" exact>
                    <Official />
                  </Route>
                  <Route path="/how-to-build-on-Justswap" exact>
                    <Builds />
                  </Route>
                  <Route path="/presskit-and-branding-assets" exact>
                    <Presskit />
                  </Route>
                </Switch>
              </BoxContent>
          </Layout>
        </div>
      
      </Router>
      <ButtonTotop/>
    </StyledScreen>
  )
}
const StyledScreen = styled.div`
  height:100%;
`

const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height:100%;
`
const BoxSidebar = styled.section`
  position: fixed;
  top: 66px;
  width: 100%;
  padding-top: 16px;
  min-width: 298px;
  max-width:300px;
  background: rgb(234 248 250);
  height: auto;
  min-height:100vh;
  overflow:hidden;

  @media (max-width:1690px){
  }

  @media (max-width:1500px){
    padding-left: 0;
  }

  @media (max-width:991px){
    width:100%;
    min-height:auto;
    display:none;
  }

`

const BoxContent = styled.section`
  position: relative;
  width: 70%;
  padding: 50px;
  max-width:1000px;
 


  @media (min-width:1000px){
    margin-left:300px;
  }


  @media (max-width:991px){
    width:100%;
    padding:15px;
  }
`



export default App;
