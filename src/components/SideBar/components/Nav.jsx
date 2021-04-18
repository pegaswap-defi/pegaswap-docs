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

  const openBinance = () => {
    setBinance(!binance);
  }

  const openAmm = () => {
    setAmm(!amm);
  }



  return (
    <BoxSidebar>
      <ul className="sidebar-top">
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/"
        >
        </StyledLink>
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
      <ul className="sidebar-middle">
        <TitleSide>PRODUCTS</TitleSide>
       
          <TitleMenuDropdown className="box-childpage">
            <Flex onClick={openBinance}>
              <img src="../images/icon-docs/yield.svg" />
              <div>
              <span className="box-title" >
                Binance Smart Change 
              </span>
              <i style={{transform: !binance ? 'rotate(0)' : 'rotate(90deg)', transition: 'all ease-in-out .3s'}} className="fas fa-chevron-right"></i>
              </div>
            </Flex>
          <DropdownMenu style={{maxHeight: !binance ? '0' : '400px'}} >
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
              <i style={{transform: !amm ? 'rotate(0)' : 'rotate(90deg)', transition: 'all ease-in-out .3s'}} className="fas fa-chevron-right"></i>
              </div>
            </Flex>
          <DropdownMenu style={{maxHeight: !amm ? '0' : '400px'}} >
              <StyledDropdownLink activeClassName='active' to='/amm/how-does-an-automated-market-maker-amm-work'>How does an automated market maker &#40;AMM&#41; work?</StyledDropdownLink>
              <StyledDropdownLink activeClassName='active' to='/amm/what-is-a-liquidity-pool'>What is a liquidity pool?</StyledDropdownLink> 
              <StyledDropdownLink activeClassName='active' to='/amm/what-is-impermanent-loss'>What is impermanent loss?</StyledDropdownLink>
              <StyledDropdownLink activeClassName='active' to='/amm/closing-thoughts'>Closing thoughts</StyledDropdownLink>
          </DropdownMenu>
          </TitleMenuDropdown>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/product-pools"
        ><Flex>
            <img src="../images/icon-docs/pool.svg" />
            <span>PegaSwap Pools</span>
          </Flex>
        </StyledLink>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/yield-farming"
        >
          <div className="box-childpage">
            <Flex>
              <img src="../images/icon-docs/yield.svg" />
              <span className="box-title" >
                Yield Farming
              </span>
            </Flex>
          </div>

        </StyledLink>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/product-staking"
        >
          <Flex>
            <img src="../images/icon-docs/staking.svg" />
            <span> PegaSwap Staking</span>
          </Flex>
        </StyledLink>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/reclamation"
        >
          <Flex>
            <img src="../images/icon-docs/sale.svg" />
            <span>Sale</span>
          </Flex>
        </StyledLink>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/about-nfts"
        >
          <Flex>
            <img src="../images/icon-docs/nfts.svg" />
            <span>NFTs</span>
          </Flex>
        </StyledLink>
      </ul>
      <ul className="sidebar-middle">
        <TitleSide>The Nominations</TitleSide>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/the-basics"
        >
          <Flex>
            <img src="../images/icon-docs/basic.svg" />

            <span> The Basics</span>
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
        <TitleSide>Governance</TitleSide>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/current-governance-mdoel"
        >
          <Flex>
            <img src="../images/icon-docs/Curent.svg" />

            <span>Current governance model</span>
          </Flex>
        </StyledLink>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/proposals-and-voting"
        >
          <Flex>
            <img src="../images/icon-docs/proposal.svg" />

            <span>Proposals &amp; voting</span>
          </Flex>
        </StyledLink>
      </ul>
      <ul className="sidebar-middle">
        <TitleSide>Ecosystem</TitleSide>
        <StyledLink
          className="link-mode"
          exact
          activeClassName="active"
          to="/all-official-pegaswap-links"
        >
          Official PegaSwap links
          </StyledLink>
        {/* <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/how-to-build-on-Pegaswap"
          >
            <img className="thum-nav" src="bbd.png" alt="Pegaswap" />Build on PegaSwap
          </StyledLink> */}
        {/* <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/presskit-and-branding-assets"
          >
             <img className="thum-nav" src="cp.png" alt="Pegaswap" />Presskit &amp; Branding Assets
          </StyledLink> */}
      </ul>
    </BoxSidebar>
  );
}

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