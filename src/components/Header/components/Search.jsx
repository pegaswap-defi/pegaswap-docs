import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Search = () => {
  return (
    <GroupNav>
      <SearchPage>
        <form className="search-fr" method="GET" action="">
          <button type="submit">
            <span className="fa fa-search" />
          </button>
          <input required id="search" type="text" name="q" className="input-text" maxLength={128} />
        </form>
      </SearchPage>
    </GroupNav>
  )
}

const GroupNav = styled.div`
  max-width: 245px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchPage = styled.div`
  position:relative;
  .fa-search {
    color: white;
  }
  form{
    position:relative;
    display: flex;
    button{
      border: none;
      background: transparent;
      color: #7b7b7b;
      outline: none;
      @media screen and (max-width: 576px){
        position: absolute;
        font-size: 12px;
        top: 2px;
    }
      }
      
    input{
      border: none;
      outline: none;
      border-radius:25px;
      padding-left:20px;
      font-size:13px;
      padding:3px 0 3px 20px;
      width: 100%;
    }
  }
`


const LinkParen = styled.a`
  color: #99378E;
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none!important;
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



const StyledLink = styled(NavLink)`
  color: #99378E;
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none!important;
  &:hover {
    color: #805e49;
  }
  &.active {
    color: #000;
  }
  @media (max-width: 400px) {
    padding-left: 8px;
    padding-right: 8px;
  }
  
`

const StyledAbsoluteLink = styled.a`
  color: rgb(31, 199, 212);
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  text-decoration: none;
  &:hover {
    color: #805e49;
  }
  &.active {
    color: green[500];
  }
  @media (max-width: 400px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`

export default Search