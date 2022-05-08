import React from "react";

import * as S from "./styles";

function Sidebar({ showbooks, books }) {
  return(
    <S.Wrapper>
      <S.Span>Filtros</S.Span>
      <S.Button onClick={() => showbooks()}>Livros {books ?
        <img src="https://cdn-icons-png.flaticon.com/512/271/271239.png" /> :
        <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png"/>} 
      </S.Button>
    </S.Wrapper>
  )
}

export default Sidebar;
