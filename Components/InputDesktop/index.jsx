import React from 'react';
import * as S from './styles';
import { BsSearch } from 'react-icons/bs';

function InputDesktop() {
  return(
    <S.Wrapper>
      <S.Input  placeholder='Buscar palavras'/>
      <S.boxImg>
        <BsSearch fontSize={25} />
      </S.boxImg>
    </S.Wrapper>
  )
}

export default InputDesktop;