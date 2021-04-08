import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Title from '../../components/Title'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Home = () => {
  return (
    <Box_home>
            <Title image="mf.png"  title="Welcome to JuiceSwap"/>
            <p>Automated market makers (AMMs) have become all the buzz, largely for replacing the traditional exchange-listing process and limit-order books with a permissionless liquidity pool run by algorithms.</p>
            <p>Automated market makers are smart contracts that create a liquidity pool of ERC20 tokens, which are automatically traded by an algorithm rather than an order book. This effectively replaces a traditional limit order-book with a system where assets can be automatically swapped against the pool’s latest price.</p>
            <p>JuiceSwap is an automated market-making (AMM) decentralized exchange (DEX) currently on the Ethereum blockchain. JuiceSwap is an Ethereum-based decentralized exchange that allows its users to both supply liquidity to earn passive income or exchange between various assets</p>
            <p>There are a few core products of JuiceSwap's ecosystem:</p>
            <ul className="linkpage">
              <li><a target="_blank" href="https://exchange.juiceswap.finance/#/swap">🔹 JuiceSwap Exchange</a></li>
              <li><a target="_blank" href="https://exchange.juiceswap.finance/#/add/ETH">🔹 JuiceSwap Liquidity Pools</a></li>
              <li><a target="_blank" href="https://juiceswap.finance/Reclamation">🔹 JuiceSwap Reclamation</a></li>
              <li><a target="_blank" href="https://juiceswap.finance/farms">🔹 JuiceSwap Yield Farms</a></li>
              <li><a target="_blank" href="https://juiceswap.finance/Staking">🔹 JuiceSwap Staking.</a></li>
              <li><a target="_blank" href="https://nfts.juiceswap.finance/">🔹 JuiceSwap NFTs</a></li>
            </ul>
            <p><strong><img width="20" src="./nw.svg" alt=""/> Community Networks</strong></p>
            <ul>
              <li>Website: <a target="_blank" href="https://juiceswap.finance/">https://juiceswap.finance/</a></li>
              <li>Twitter: <a target="_blank" href="https://twitter.com/Juice_Swap">https://twitter.com/Juice_Swap</a> </li>
              <li>Telegram Announcement: <a target="_blank" href="https://t.me/JuiceSwap_Prot0col">https://t.me/JuiceSwap_Prot0col</a></li>
              <li>Telegram Discussion: <a target="_blank" href="https://t.me/Juiceswap_Finance">https://t.me/Juiceswap_Finance</a></li>
              <li>Medium: <a target="_blank" href="https://juiceswap.medium.com/">https://juiceswap.medium.com/</a></li>
              <li>Linkedin:<a target="_blank" href="https://www.linkedin.com/company/juiceswap-finance/">https://www.linkedin.com/company/juiceswap-finance/</a></li>
            </ul>
            {/* <p><strong>NETWORKS:</strong></p> */}
           
            <p><strong>🍓   Resource:</strong></p>
            <ul>
              <li><a target="_blank" href="https://github.com/Juiceswap-defi">https://github.com/Juiceswap-defi</a></li>
              <li><a target="_blank" href="https://github.com/Juiceswap-finance">https://github.com/Juiceswap-finance</a></li>
              {/* <li><a target="_blank" href="https://github.com/LiamJohnson99">https://github.com/LiamJohnson99</a></li>
              <li><a target="_blank" href="https://github.com/JosephMiller-Jus">https://github.com/JosephMiller-Jus</a></li> */}
            </ul>

            {/* <BoxPagination>
              <BoxButton className="next">
                  <StyledLink to="/migrating">
                      <span>Next</span>
                      Migrating JuiceSwap v2 JLP tokens
                  </StyledLink>
                  <p><i class="fa fa-arrow-right"></i></p>
              </BoxButton>
            </BoxPagination> */}
  </Box_home>
  )
}

const Box_home = styled.section`
  position: relative;
  overflow: hidden;

  .linkpage{
    padding-left:15px;
    li{
      list-style: none;
    }
  }
`
const BoxPagination = styled.div`
  display: flex;
  margin-top: 25px;
  width: 100%;
  max-width:600px;
  justify-content: space-between;
`

const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #E6ECF1;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  border-radius: 3px;
  background-color: #FFFFFF;
  transition: ease-in-out .5s all;
  cursor: pointer;
  padding: 10px 25px;
  max-width: 400px;
  width: 100%;
  p{
    margin-bottom:0;
    span{
      display:block;
    }
  }
  &:before,
  &:after {
    width: 0%;
    height: 2px;
    position: absolute;
    background: #23d8f3;
    transition: width .4s ease-in-out;
    content: " ";
  }

  &:before {
    left: 0;
    top: -2px;
  }

  &:after {
    bottom: -2px;
    right: 0;
  }

  &:hover {
    opacity:.5;
    border-color: #23d8f3;
    color: #23d8f3;

    &:before,
    &:after {
      width: 100%;
    }
  }
`

const StyledLink = styled(NavLink)`
  text-decoration: none!important;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  width:100%;
  height:100%;
  display: block;
  align-items:center;
  justify-content:center;
  transition:ease-in-out .5s all;
  span{
    display: block;
    width: 100%;
    color: #c3c3c3;
  }
  &:hover {
    color: #805e49;
  }
  
`
const TitlePage = styled.h3`
  max-width:${(props) => props.width};
  margin-bottom:25px;
  font-size:${(props) => props.size};
  font-weight:bold;
  width:100%;
  padding-bottom:20px;
  border-bottom: 2px solid #E6ECF1;
`

export default Home
