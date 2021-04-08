import React, { useState, useEffect, } from "react";
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {supportArray} from './Array'

const Nav = () => {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if  ( (window.scrollY > 72)){
        document.body.classList.add("fix");
      }
      else{
        document.body.classList.remove("fix");
      }
    });
    }, []);

    const [isActive, setActive] = useState(false);
    const [isActives, setActives] = useState(false);

    const [isExchang1, setExchang1] = useState(false);
    const [isExchang2, setExchang2] = useState(false);

    const [isFarming1, setFarming1] = useState(false);
    const [isFarming2, setFarming2] = useState(false);
    const [isFarming3, setFarming3] = useState(false);
    
    

    // const handleToggle = (id) => {
    //   supportArray.find(id).document.
    // };
    const handleToggle = (id) => {
      if ( !document.getElementById(id).classList.contains('dark-mode')){
          document.getElementById(id).classList.add("dark-mode");
      }else{
        document.getElementById(id).classList.remove("dark-mode");
      }
    };

    return (
      <BoxSidebar>
        <ul className="sidebar-top">
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/"
          >
            <img className="thum-nav" src="mf.png" alt="Juiceswap" />Welcome to JuiceSwap
          </StyledLink>
          {/* <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/migrating"
          >
            <img className="thum-nav" src="mt.png" alt="Juiceswap" />Migrating JuiceSwap v2 LP tokens
          </StyledLink> */}
        
          {/* <BlankLink href="https://devhub.juiceswap.finance" target="_blank">
            <img className="thum-nav" src="bdd.png" alt="Juiceswap" />Dev Docs
          </BlankLink> */}
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/faq"
          >
            <img className="thum-nav" src="que.png" alt="Juiceswap" />FAQ
          </StyledLink>
        </ul>
        <ul className="sidebar-middle">
          <TitleSide>PRODUCTS</TitleSide>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/amm-exchange"
          >
            <div className="box-childpage">
              <span className="box-title" onClick={() => setActive(true)}>
              <img className="thum-nav" src="amm.png" alt="Juiceswap" />AMM / Exchange
              </span>
              <span
                className={isActive ? "ic-rote" : "ic-right"}
                onClick={() => setActive(!isActive)}
              >
                <i class="fa fa-angle-right"></i>
              </span>
            </div>
            <div className={`${isActive ? "sub-menu-show" : "sub-menu-bar"}`}>
              <ul>
                {/* <li> */}
                  {/* <StyledLink to="/amm-exchange/swapping">
                    <div className="box-childpage">
                      <span
                        className="box-title"
                        onClick={() => setExchang1(true)}
                      >
                        Swapping
                      </span>
                      <span
                        className={isExchang1 ? "ic-rote" : "ic-right"}
                        onClick={() => setExchang1(!isExchang1)}
                      >
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </div>
                  </StyledLink> */}
                  {/* <div  className={`${isExchang1 ? "sub-menu-show" : "sub-menu-bar"}`}>
                    <ul>
                      <li>
                        <StyledLink to="/amm-exchange/swapping/juiceswap">
                          juiceswap
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/amm-exchange/swapping/lite.juiceswap">
                          lite.juiceswap
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/amm-exchange/swapping/how-to-swap-tokens">
                          juiceswapclassic.org
                        </StyledLink>
                      </li>
                    </ul>
                  </div> */}
                {/* </li>
                <li> */}
                  {/* <StyledLink to="/amm-exchange/liquidity-pools">
                    
                    <div className="box-childpage">
                      <span
                        className="box-title"
                        onClick={() => setExchang2(true)}
                      >
                        Liquidity Pools
                      </span>
                      <span
                        className={isExchang2 ? "ic-rote" : "ic-right"}
                        onClick={() => setExchang2(!isExchang2)}
                      >
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </div>
                  </StyledLink> */}
                  {/* <div className={`${isExchang2 ? "sub-menu-show" : "sub-menu-bar"}`}>
                    <ul>
                      <li>
                        <StyledLink to="/amm-exchange/liquidity-pools/juiceswap">
                          juiceswap
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/amm-exchange/liquidity-pools/lite.juiceswap">
                          lite.juiceswap
                        </StyledLink>
                      </li>
                      <li>
                        <StyledLink to="/amm-exchange/liquidity-pools/juiceswapclassic.org">
                          juiceswapclassic.org
                        </StyledLink>
                      </li>
                    </ul>
                  </div> */}
                {/* </li> */}
                {/* <li>
                  <StyledLink to="/amm-exchange/impermanent-loss">
                    Impermanent loss
                  </StyledLink>
                </li> */}
              </ul>
            </div>
          </StyledLink>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/product-pools"
          >
            <img className="thum-nav" src="juspool.png" alt="Juiceswap" />JuiceSwap Pools
          </StyledLink>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/yield-farming"
          >
            <div className="box-childpage">
              <span className="box-title" onClick={() => setActives(true)}>
              <img className="thum-nav" src="yp.png" alt="Juiceswap" />Yield Farming
              </span>
              <span
                className={isActives ? "ic-rote" : "ic-right"}
                onClick={() => setActives(!isActives)}
              >
                <i class="fa fa-angle-right"></i>
              </span>
            </div>
       
          </StyledLink>
          {/* <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/lending-bentobox"
          >
            <img className="thum-nav" src="ldd.png" alt="Juiceswap" />Lending (BentoBox)
          </StyledLink> */}
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/product-staking"
          >
            <img className="thum-nav" src="jusstaking.png" alt="Juiceswap" />JuiceSwap Staking
          </StyledLink>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/reclamation"
          >
            <img className="thum-nav" src="ic-rec.png" alt="Juiceswap" />Reclamation
          </StyledLink>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/about-nfts"
          >
            <img className="thum-nav" src="ord.png" alt="Juiceswap" />NFTs
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
            <img className="thum-nav" src="bss.png" alt="Juiceswap" />The Basics
          </StyledLink>
        </ul>
        <ul className="sidebar-middle">
          <TitleSide>Guides</TitleSide>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/how-to-add-tokens-to-juiceswap-exchange"
          >
              <img className="thum-nav" src="tktoken.png" alt="Juiceswap" /> How to add tokens to JuiceSwap Exchange
          </StyledLink>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/how-to-farm-with-juiceswap-tokens"
          >
              <img className="thum-nav" src="tkfarm.png" alt="Juiceswap" /> How to Farm with Juiceswap Tokens
          </StyledLink>
          {/* <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/how-to-stake-juiceswap-for-xjuiceswap"
          >
              <img className="thum-nav" src="tkstak.png" alt="Juiceswap" /> How to Stake Juiceswap for xJuiceswap
          </StyledLink> */}
        </ul>
        <ul className="sidebar-middle">
          <TitleSide>Governance</TitleSide>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/current-governance-mdoel"
          >
            <img className="thum-nav" src="crr.png" alt="Juiceswap" />Current governance model
          </StyledLink>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/proposals-and-voting"
          >
            <img className="thum-nav" src="pross.png" alt="Juiceswap" /> Proposals &amp; voting
          </StyledLink>
        </ul>
        <ul className="sidebar-middle">
          <TitleSide>Ecosystem</TitleSide>
          <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/all-official-juiceswap-links"
          >
            <img className="thum-nav" src="ll.png" alt="Juiceswap" />Official JuiceSwap links
          </StyledLink>
          {/* <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/how-to-build-on-Juiceswap"
          >
            <img className="thum-nav" src="bbd.png" alt="Juiceswap" />Build on JuiceSwap
          </StyledLink> */}
          {/* <StyledLink
            className="link-mode"
            exact
            activeClassName="active"
            to="/presskit-and-branding-assets"
          >
             <img className="thum-nav" src="cp.png" alt="Juiceswap" />Presskit &amp; Branding Assets
          </StyledLink> */}
        </ul>
      </BoxSidebar>
    );
}




const BoxSidebar = styled.div`
    position:relative;

    .sidebar-middle{
      margin-bottom: 30px;
    }

    @media(min-width:1600px){
    }

    @media(max-width:1025px){
    }
  
`

const LinkParen = styled.a`
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  color: #696868;
  margin-bottom: 7px;
  display: block;
  padding: 5px 0;
  .down-menu{
    font-size:12px;
  }
  &:hover {
    color: #805e49;
  }
  &.active {
    color: #000;
  }
  
`


const TitleSide = styled.h3`
  font-size: 16px;
  color: #696868;
  font-weight: bold;
  margin-bottom: 10px;
  
`

const BlankLink = styled.a`
  text-decoration: none!important;
  font-size: 13px;
  font-weight: 500;
  color: #696868;
  margin-bottom: 7px;
  position:relative;
  display: block;
  padding: 5px 0;
  
  .thum-nav{
    max-width:18px;
    width:100%;
    margin-right:5px;
    margin-top:-5px;
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
  color: #696868;
  margin-bottom: 7px;
  position:relative;
  // z-index: 5;
  display: block;
  padding: 5px 0;
  // span{
  //   z-index: 10;
  // }
  &:hover {
    color: #805e49;
  }
  &.active {
    color: #99378E;
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
    justify-content:center;
  }
  .ic-rote{
    width:25px;
    height:25px;
    color:#000;
    // float:right;
    display:flex;
    align-items:center;
    justify-content:center;
    i{
      transition:ease-in-out .5s all;
      transform: rotate(-90deg);
    }
  }

  .thum-nav{
    max-width:18px;
    width:100%;
    margin-right:5px;
    margin-top:-5px;
  }
`



export default Nav