import React, {useState} from "react";

import * as S from "./styles";

function Filters({showBooks, toggleBooks}) {

  return(
    <S.Filter>
      <S.Span>Filtros</S.Span>
      <S.Button onClick={() => toggleBooks()}>Livros 
        <S.ImageArrow
          width={20}
          height={20}
          alt='Seta'
          src={showBooks ? '/img/top.png' : '/img/baixo.png'}
        />
      </S.Button>
    </S.Filter>
  )
}
export default Filters;