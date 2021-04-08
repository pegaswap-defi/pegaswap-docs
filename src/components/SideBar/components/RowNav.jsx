import React, { useState, useEffect, } from "react";
import styled from "styled-components";

const  RowNav =({onRow, name})=>{
    return (
      <StyledRowNav className="box-childpage">
        <span className="box-title" onClick={onRow}>
          {name}
        </span>
        <span
          className={isActives ? "ic-rote" : "ic-right"}
          onClick={onRow}
        >
          <i class="fa fa-angle-right"></i>
        </span>
      </StyledRowNav>
    );
}

const StyledRowNav = styled.div`
    &.box-childpage{
        display: flex;
        .box-title{
        width: 90%;
        }
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
    }.
`;

export default RowNav;