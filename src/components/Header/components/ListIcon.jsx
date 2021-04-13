import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ListIcon = () => {
  return (
    <BoxIcon className="hide_pc">
      <a target="_blank" href="https://Pegaswap.finance/"><i class="fa fa-home"></i></a>
      <a target="_blank" ><i class="fa fa-twitter"></i></a>
      <a target="_blank"><i class="fa fa-github"></i></a>
    </BoxIcon>
  )
}



const BoxIcon = styled.div`
  max-width: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  i{
    font-size:20px;
    color: white;
    transition: ease-in-out .5s all;

    &:hover{
      transform: scale(1.3);
    }

  }

  @media(max-width:576px){
    display:none;
  }


`






export default ListIcon