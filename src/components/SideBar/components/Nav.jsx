import React, { useState, useEffect, } from "react";
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if ((window.scrollY > 72)) {
        document.body.classList.add("fix");
      }
      else {
        document.body.classList.remove("fix");
      }
    });
  }, []);

  const [isActive, setActive] = useState(false);
  const [binance, setBinance] = useState(false);
  const [amm, setAmm] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [swap, setSwap] = useState(false);

  const openWelcome = () => {
    setWelcome(!welcome);
  }

  const openBinance = () => {
    setBinance(!binance);
  }

  const openAmm = () => {
    setAmm(!amm);
  }

  const openSwap = () => {
    setSwap(!swap)
  }


  return (
    <BoxSidebar>
      <ul className="sidebar-top" style={{ marginTop: "20px" }}>
        <TitleMenuDropdown className="box-childpage">
          <Flex onClick={openWelcome}>
            <span className="box-title" style={{ fontWeight: 'bold', fontSize: '16px' }}>
              Welcome to Pegaswap
              </span>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            </span>
          </Flex>
          <WrapperWelcomeLink>
            <StyledLink activeClassName='active' to='/welcome/introduction'>Introduction</StyledLink>
            <StyledLink activeClassName='active' to='/welcome/what-is-pegaswap'>What Is PegaSwap ? </StyledLink>
            <StyledLink activeClassName='active' to='/welcome/pegaswap-is-on-the-binance-smart-chain'>PegaSwap is on the Binance Smart Chain</StyledLink>
            <StyledLink activeClassName='active' to='/welcome/what-can-you-do-on-pegaswao'>What can you do on PegaSwap?</StyledLink>
            <StyledLink activeClassName='active' to='/welcome/community-socials'>Community & Socials</StyledLink>
            <StyledLink activeClassName='active' to='/welcome/roadmap'>Roadmap</StyledLink>
          </WrapperWelcomeLink>
        </TitleMenuDropdown>
      </ul>
      <ul className="sidebar-middle">
        <TitleSide >General</TitleSide>
        <TitleMenuDropdown className="box-childpage">
          <Flex onClick={openBinance}>
            <img src="../images/icon-docs/yield.svg" />
            <div>
              <span className="box-title" >
                Binance Smart Chain
              </span>
              <i style={{ transform: !binance ? 'rotate(0)' : 'rotate(90deg)', transition: 'all ease-in-out .3s' }} className="fas fa-chevron-right"></i>
            </div>
          </Flex>
          <DropdownMenu style={{ maxHeight: !binance ? '0' : '400px' }} >
            <StyledDropdownLink activeClassName='active' to='/binance/introduction'>Introduction</StyledDropdownLink>
            <StyledDropdownLink activeClassName='active' to='/binance/what-is-binance-smart-chain'>What is Binance Smart Chain?</StyledDropdownLink>
            <StyledDropdownLink activeClassName='active' to='/binance/how-does-binance-smart-chain-work'>How does Binance Smart Chain work?</StyledDropdownLink>
            <StyledDropdownLink activeClassName='active' to='/binance/decentralized-finance-on-binance-smart-chain'>Decentralized Finance on Binance Smart Chain</StyledDropdownLink>
            <StyledDropdownLink activeClassName='active' to='/binance/closing-thoughts'>Closing thoughts</StyledDropdownLink>
          </DropdownMenu>
        </TitleMenuDropdown>
        <TitleMenuDropdown className="box-childpage">
          <Flex onClick={openAmm}>
            <img src="../images/icon-docs/nfts.svg" />
            <div>
              <span className="box-title" >
                AMM / Exchange
              </span>
              <i style={{ transform: !amm ? 'rotate(0)' : 'rotate(90deg)', transition: 'all ease-in-out .3s' }} className="fas fa-chevron-right"></i>
            </div>
          </Flex>
          <DropdownMenu style={{ maxHeight: !amm ? '0' : '400px' }} >
            <StyledDropdownLink activeClassName='active' to='/amm/how-does-an-automated-market-maker-amm-work'>How does an automated market maker &#40;AMM&#41; work?</StyledDropdownLink>
            <StyledDropdownLink activeClassName='active' to='/amm/what-is-a-liquidity-pool'>What is a liquidity pool?</StyledDropdownLink>
            <StyledDropdownLink activeClassName='active' to='/amm/what-is-impermanent-loss'>What is impermanent loss?</StyledDropdownLink>
            <StyledDropdownLink activeClassName='active' to='/amm/closing-thoughts'>Closing thoughts</StyledDropdownLink>
          </DropdownMenu>
        </TitleMenuDropdown>
        <TitleSide style={{ marginTop: '20px' }}>PegaSwap Protocol</TitleSide>

        <TitleMenuDropdown className="box-childpage">
          <FlexSwap
            className="link-mode"
            exact
            activeClassName="active"
            to="/swap" onClick={openSwap}>
            <img src="../images/icon-docs/pool.svg" />
            <div>
              <span className="box-title" >
                Swap
              </span>
              <i style={{ transform: !swap ? 'rotate(0)' : 'rotate(90deg)', transition: 'all ease-in-out .3s' }} className="fas fa-chevron-right"></i>
            </div>
          </FlexSwap>
          <DropdownMenu style={{ maxHeight: !swap ? '0' : '400px' }} >
            <StyledDropdownLink activeClassName='active' to='/swap/How-to-Trade-on-PegaSwap'>How to Trade on PegaSwap</StyledDropdownLink>
            <StyledDropdownLink activeClassName='active' to='/swap/Liquidity-Pools-Adding-Liquidity'>Liquidity Pools & Adding Liquidity</StyledDropdownLink>
          </DropdownMenu>
        </TitleMenuDropdown>


        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/yield-farming"
        ><Flex>
            <img src="../images/icon-docs/yield.svg" />
            <span>Yield Farming</span>
          </Flex>
        </StyledLink>

        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/staking-pools"
        ><Flex>
            <img src="../images/icon-docs/staking.svg" />
            <span>Staking Pools</span>
          </Flex>
        </StyledLink>

        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/none-fungible-token"
        ><Flex>
            <img src="../images/icon-docs/nfts.svg" />
            <span>Non Fungible Token (NFTs)</span>
          </Flex>
        </StyledLink>

        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/gaming"
        ><Flex>
            <img src="../images/icon-docs/yield.svg" />
            <span>Gaming</span>
          </Flex>
        </StyledLink>


      </ul>

      <ul className="sidebar-middle">
        <TitleSide>Guides</TitleSide>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/how-to-use-metamask-for-binance-smart-chain"
        >
          <Flex>
            <img src="../images/icon-docs/guide1.svg" />
            <span>How to use MetaMask For Binance Smart Chain</span>
          </Flex>
        </StyledLink>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/how-to-set-up-and-use-trust-wallet-for-binance-smart-chain"
        >
          <Flex>
            <img src="../images/icon-docs/guide2.svg" />
            <span>How to Set Up and Use Trust Wallet for Binance Smart Chain</span>
          </Flex>
        </StyledLink>
      </ul>

      <ul className="sidebar-middle">
        <TitleSide>Ecosystem</TitleSide>

        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/faq"
        >
          <Flex>
            <img src="../images/icon-docs/faq.svg" />
            <span>FAQ</span>
          </Flex>
        </StyledLink>
      </ul>
    </BoxSidebar>
  );
}


const WrapperWelcomeLink = styled.div`
  padding-left: 20px;
`

const TitleMenuDropdown = styled.div`
  cursor: pointer;
  .box-childpage{
    display: flex;
    .box-title{
      width: 90%;
    }
  }
  &.no-mp{
    padding: 0;
    margin: 0;
  }

  text-decoration: none!important;
  font-size: 13px;
  font-weight: 500;
  color: black;
  margin-bottom: 7px;
  position:relative;
  // z-index: 5;
  display: block;
  padding: 5px 0;
  // span{
  //   z-index: 10;
  // }
  &:hover {
    color:black;
  }
  &.active {
    color: black;
    font-weight:bold;
  }
  @media (max-width: 400px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  .sub-menu-bar{
    display:none;
  }
  .ic-right{
    width:25px;
    height:25px;
    color:#000;
    // float:right;
    display:flex;
    align-items:center;
    pegatify-content:center;
  }
  .ic-rote{
    width:25px;
    height:25px;
    color:#000;
    // float:right;
    display:flex;
    align-items:center;
    pegatify-content:center;
    i{
      transition:ease-in-out .5s all;
      transform: rotate(-90deg);
    }
  }

  .thum-nav{
    max-width:18px;
    width:100%;
    margin-right:5px;
  }
`

const DropdownMenu = styled.div`
  max-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-left: 1px #A9088E solid;
  padding-bottom: 0;
`
const StyledDropdownLink = styled(NavLink)`
    padding: 5px 15px;
    color: black;
    font-weight: 100px;
    position:relative;
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    text-decoration: none!important;
    text-shadow: 0 0 64px rgb(192 219 255 / 48%), 0 0 16px rgb(65 120 255 / 24%);
    transition: .2s ease-in-out all;
    margin-bottom: 5px;
    cursor: pointer;
    &.active {
      font-weight: bold;
      border-bottom: 1px solid #A9088E;
    }
    :hover {
      color: black;
    }
    &:last-child {
      margin-bottom: 0;
    }


  @media (max-width: 400px) {
    padding-left: 8px;
    padding-right: 8px;
  }

`

const Flex = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    position: relative;
    i {
      position: absolute;
      right: 0;
    }
`
const FlexSwap = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 90%;
  position: relative;
  i {
    position: absolute;
    right: 0;
  }
  &.active {
    font-weight: bold;
  }
  :hover {
    color: black;
    text-decoration: none;
  }
  &:last-child {
    margin-bottom: 0;
  }
  color: black;
`

const BoxSidebar = styled.div`
    position:relative;

    .sidebar-middle{
      margin-bottom: 30px;
    }

    @media(min-width:1600px){
    }

    @media(max-width:1025px){
    }
    img {
      width: 20px;
      margin-right: 5px;
    }
  
`




const TitleSide = styled.h3`
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  
`

const BlankLink = styled.a`
  text-decoration: none!important;
  font-size: 13px;
  font-weight: 500;
  color: black;
  margin-bottom: 7px;
  position:relative;
  display: block;
  padding: 5px 0;
  
  .thum-nav{
    max-width:18px;
    width:100%;
    margin-right:5px;
  }
`


const StyledLink = styled(NavLink)`
  .box-childpage{
    display: flex;
    .box-title{
      width: 90%;
    }
  }
  &.no-mp{
    padding: 0;
    margin: 0;
  }

  text-decoration: none!important;
  font-size: 13px;
  font-weight: 500;
  color: black;
  margin-bottom: 7px;
  position:relative;
  // z-index: 5;
  display: block;
  padding: 5px 0;
  // span{
  //   z-index: 10;
  // }
  &:hover {
    color:black;
  }
  &.active {
    color: black;
    font-weight:bold;
  }
  @media (max-width: 400px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  .sub-menu-bar{
    display:none;
  }
  .ic-right{
    width:25px;
    height:25px;
    color:#000;
    // float:right;
    display:flex;
    align-items:center;
    pegatify-content:center;
  }
  .ic-rote{
    width:25px;
    height:25px;
    color:#000;
    // float:right;
    display:flex;
    align-items:center;
    pegatify-content:center;
    i{
      transition:ease-in-out .5s all;
      transform: rotate(-90deg);
    }
  }

  .thum-nav{
    max-width:18px;
    width:100%;
    margin-right:5px;
  }
`



export default Nav