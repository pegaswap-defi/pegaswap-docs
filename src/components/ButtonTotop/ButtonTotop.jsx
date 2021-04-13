import React, { useEffect, useState } from "react";
import styled from "styled-components";
import '../../fontawesome-free-5.15.2-web/css/all.css'


const ButtonTotop = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ToTop>
      {isVisible && (
        <div className="itemtop" onClick={scrollToTop}>
          <i className="fas fa-chevron-up" />
        </div>
      )}
    </ToTop>
  );
};


const ToTop = styled.div`


  .itemtop{
    font-size: 22px;
    position: fixed;
    bottom: 80px;
    right: 20px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: #00000033;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    transition: ease-in-out .5s all;
    color: white;

    &:hover{
      background: #082844;
    }
  }
`






export default ButtonTotop;
