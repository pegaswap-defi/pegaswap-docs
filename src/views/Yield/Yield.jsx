import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import styled from 'styled-components'

import Pagination from '../../components/Pagination'
import Title from '../../components/Title'

// import Item from './components/Item'
// import CountUp from 'react-countup';

const Yield = () => {
  return (
    <Box_home>
      <Title image="yp.png"  title="Yield Farming"/>
      <p>The Juiceswap Farms (Menu) are located here:</p>
      <ul>
        <li><a target="_blank" href="https://juiceswap.finance/farms">https://juiceswap.finance/farms</a></li>
      </ul>
      <p>The Farm allows users to yield farm Juiceswap rewards with each new block based on staking JLP tokens they received from exchange.Juiceswapclassic.org/#/pool. </p>
      <p>The Farm previously supported UNI-V2 LP tokens from Uniswap, but it now only works with tokens from Juiceswap pools.</p>
      <ReactFancyBox 
          thumbnail="./ya.png"
          image="./ya.png"/>
      <br/>
      <p>Users enter into the farms of their choice.</p>
      <p>When farming users will receive a new distribution of Juiceswap with every block. In the first two weeks of launch, the rewards were 1000 Juiceswap per block, divided by the proportional share of the pool.
The exception to this was the "Juiceswap Party!" pool which had an additional 2x bonus.</p>
      <p>After the first two weeks, the reward is set to drop to 100 Juiceswap per block.</p>
      <p>The APY calculation is based on the return in ETH to the daily USD value, based on the current block return annualized. It is not a fixed return, it is not a promised return, it is not financial advice. It is based on ETH returns.</p>
      <p><strong>If I am deposited into the "Farm" it says I don't have liquidity on <a target="_blank" href="https://exchange.juiceswap.finance/#/swap">https://exchange.juiceswap.finance/#/swap</a> </strong></p>
      <p>Correct. The <a target="_blank" href="https://exchange.juiceswap.finance/#/swap">https://exchange.juiceswap.finance/#/swap</a> page only scans your wallet for JLP tokens.</p>
      <p>If you have deposited your JLP tokens into a farm (which is a separate contract) then the exchange will not see them.</p>
      <p>However, you ARE still providing liquidity and will still get you a 0.25 JLP trade fee reward when withdrawing.</p>

      <ListMenu>
        <li>
          <StyledLink to="/amm-exchange/swapping">Swapping</StyledLink>
        </li>
        <li>
          <StyledLink to="/amm-exchange/liquidity-pools">
            Liquidity Pools
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/amm-exchange/impermanent-loss">
            Impermanent loss
          </StyledLink>
        </li>
       
      </ListMenu>
      <Pagination
        prev="Impermanent loss"
        linkprev="/amm-exchange/impermanent-loss"
        next="The Juicebar"
        linknext="/yield-farming/the-juicebar"
      />
    </Box_home>
  );
}






const Box_home = styled.section`
  position: relative;
  overflow: hidden;

  #thumpage{
    cursor: pointer;
  }
  .react-fancybox {
    margin-left:100px;

    .thumbnail {
      max-width:500px;

      img{
        width:100%;
      }
    }
  }

  @media(max-width:1025px){
    .react-fancybox{
      margin-left:0;

      .thumbnail {
        margin: 0 auto;
      }
    }  
  }
  @media(max-width:576px){
    .react-fancybox{
      
      .image-box{
        width:90%;

        .close-btn{
          width:auto;
        }
        img{
          width:100%;
        }
      }
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
  display: flex;
  align-items:center;
  justify-content:center;
  transition:ease-in-out .5s all;
  span{
    display:block;
  }
  &:hover {
    color: #805e49;
  }
 
  
`

const ListMenu = styled.ul`
  margin-top:35px;
  position: relative;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  width:100%;
  padding-left:0;
  max-width:600px;
  justify-content: space-between;
  li{
    list-style: none;
    height:45px;
    width: 100%;
    background: #fff;
    text-align: center;
    color: rgb(36, 42, 49);
    border: 1px solid rgb(230, 236, 241);
    margin-bottom: 25px;
    box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
    max-width: 285px;
    transition:ease-in-out .3s all;
    &:hover {
    margin-top:-5px;
    box-shadow: rgb(177 138 80 / 66%) 0px 3px 8px 0px;
  }
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

export default Yield
