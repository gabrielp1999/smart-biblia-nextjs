import React from "react";
import Filters from "../FIlters";
import Books from "../Books";

import * as S from "./styles";

function Sidebar({ showbooks, books }) {
  return(
    <S.Wrapper>
      <Filters 
        showbooks={showbooks} 
        books={books} 
      />
      {books && <Books />}
    </S.Wrapper>
  )
}

export default Sidebar;
