import React, { useState, useEffect, } from "react";
import styled from "styled-components";
// import Button from '../../Button';
import Popup from "../../../components/Popup";


const  AccountButton =()=>{

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if  ( (window.scrollY > 82)){
        document.body.classList.add("fix");
      }
      else{
        document.body.classList.remove("fix");
      }
    });
}, []);

const [isActive, setActive] = useState(false);

const handleToggle = () => {
  if ( !document.body.classList.contains('dark-mode')){
      document.body.classList.add("dark-mode");
  }else{
    document.body.classList.remove("dark-mode");
  }
 
  
};


  const [Status, setStatus] = useState(false);
  

    return (
      <Group_setting>
        <Dark_mode onClick={handleToggle}>
          <span className="moon-dark" ><i className="fa fa-moon-o" aria-hidden="true" /></span> 
          <span><i className="fa fa-sun" aria-hidden="true" /></span>
        </Dark_mode>

        <div className="btn-option" 
        onClick={()=>setStatus(true)}
        >
          <Btn_option>Connect</Btn_option>
        </div>
        <div className={`box ${Status?'active':''}`}>
          <Popup onClose={()=> setStatus(false)} />
        </div>
      </Group_setting>
    );
  
}

const Group_setting = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .box{
    display:none;
  }
  .active{
    display:block;
  }
  
`;

const Btn_option = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background: linear-gradient(59deg,rgba(71,122,185,1) 0%,rgba(153,55,142,1) 35%,rgba(222,48,85,1) 64%,rgba(217,128,87,1) 100%);
  background-color: #99378e;
  border-radius: 16px;
  box-shadow: rgba(14, 14, 44, 0.4) 0px -1px 0px inset;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  width: max-content;
  height: 32px;
  letter-spacing: 0.03em;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none !important;
  padding: 0px 16px;
  transition: background-color 0.5s ease 0s;
  border: none;
  &:hover {
    background: #000;
  }
`;

const Dark_mode = styled.div`
  margin-right: 10px;
  font-size: 20px;
  cursor:pointer;
`;

export default AccountButton;
