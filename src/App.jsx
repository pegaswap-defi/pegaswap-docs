import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import SideBar from './components/SideBar'


import Home from './views/Home'
import ButtonMenu from './components/ButtonMenu'

import ButtonTotop from './components/ButtonTotop'
import TrustWallet from './views/TrustWallet'

import Binance from './views/BinanceSmartChange'
import Amm from './views/Amm'
import Welcome from './views/Welcome'
import Swap from './views/Swap'
import Yield from './views/YieldFarming'
import Staking from './views/Staking'
import NFTs from './views/NFTs'
import Game from './views/Gaming'




const App = () => {


  return (
    <StyledScreen>
      <Router>
        <Header />
        <div className="main">
          <Layout>
            {/* <Menu /> */}
            <ButtonMenu />
            <BoxSidebar>
              <SideBar />
            </BoxSidebar>
            <BoxContent>
              <Welcome />
              <Amm />
              <Binance />
              <Swap />
              <Yield />
              <Staking />
              <NFTs />
              <Game />
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                Binance Smart Change
                Amm
                <Route path="/how-to-use-metamask-for-binance-smart-chain">
                  <Home />
                </Route>
                <Route path="/how-to-set-up-and-use-trust-wallet-for-binance-smart-chain">
                  <TrustWallet />
                </Route>
              </Switch>
            </BoxContent>
          </Layout>
        </div>
      </Router>
      <ButtonTotop />
    </StyledScreen>
  )
}
const StyledScreen = styled.div`
  height:100vh;
`

const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height:100%;
`
const BoxSidebar = styled.section`
  position: fixed;
  width: 100%;
  top: 53px;
  padding-top: 60px;
  min-width: 298px;
  max-width:300px;
  background: rgb(234 248 250);
  height: auto;
  min-height:100vh;
  overflow:hidden;
  background: linear-gradient(
    90deg
    , rgba(155, 213, 255, 0.7) 0%, rgba(255, 217, 254, 0.73) 100%) !important;  padding: 0;

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
