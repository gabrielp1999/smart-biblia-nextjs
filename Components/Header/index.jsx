import React from "react";
import NavDefault from "../NavDefault";
import NavSearch from "../NavSearch";
import * as S  from "./styles";


function Header({ toggleInputWord, showInputWord }) {

  const mountedStyle = {
    animation: "inAnimation 250ms ease-in"
  };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };
  

  return (
    <S.Wrapper>
      {!showInputWord ? 
        <NavDefault toggleInputWord={toggleInputWord} /> : 
        <NavSearch toggleInputWord={toggleInputWord} />
      }
    </S.Wrapper>
  )
}

export default Header;