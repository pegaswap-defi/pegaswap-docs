import React, { useState } from 'react'
import styled from 'styled-components'
// import Nav from './components/Nav'
import Logo from './components/Logo'
import ListIcon from './components/ListIcon'
import Search from './components/Search'
import ButtonMenu from '../ButtonMenu'




const Header = () => {
  const [Status, setStatus] = useState(false);

  return (
    <StyleHeader>
      <HeaderTop>
      <svg
            onClick={() => setStatus(true)}
            preserveAspectRatio="xMidYMid meet"
            height="1em"
            width="1em"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="currentColor"
            class="icon-7f6730be--text-3f89f380--icon-1f8349b3"
          >
            <g>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </g>
          </svg>
        <div className="container inner">
          <div className="row">
            <Logo />
            <div className="col-5 col-md-6 col-lg-10">
              <HeaderItem>
                <Search />
                <ListIcon />
              </HeaderItem>
            </div>
          </div>
        </div>
      </HeaderTop>
      <StyledButtonMenu className={`${Status ? "active" : ""}`}>
        <ButtonMenu onClose={() => setStatus(false)} status={Status} />
      </StyledButtonMenu>
    </StyleHeader>
  );
}
const StyledButtonMenu = styled.div`
  opacity: 1;
  transition: ease-in-out .5s all;
  &.active{
    opacity: 1;
  }
`

const StyleHeader = styled.header`
  position: fixed;
  width:100%;
  z-index:99;
  top:0;
  left:0;
  box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, rgb(158, 18, 141) 0%, rgb(122, 23, 136) 100%);
    border-bottom: 1px solid rgb(212, 218, 223);
  padding:10px 0;

  .inner{
    @media(min-width:1200px){
      max-width: 1440px;
    }
    @media(min-width:1500px){
      max-width: 1920px;
    }
  }
`

const HeaderItem = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const HeaderTop = styled.section`
  position:relative;
  svg{
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(50%, -50%);
    cursor: pointer;
    z-index: 99;
    color: white;
  }
  @media screen and (min-width: 991px){
    svg{
      display:none;
    }
  }
`



export default Header
