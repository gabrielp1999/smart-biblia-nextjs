import React from "react";
import Filters from "../FIlters";
import Books from "../Books";

import * as S from "./styles";

function Sidebar({ toggleBooks, books, isDesktop }) {

  return(
    <S.Wrapper>
      {isDesktop && <S.Title><span>Filtros</span></S.Title>}
      {!isDesktop && <Filters 
        toggleBooks={toggleBooks} 
        books={books} 
      />}
     
      {books && <Books />}
    </S.Wrapper>
  )
}

export default Sidebar;
