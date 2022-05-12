import React from "react";
import * as S  from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';


function NavSearch({ toggleInputWord }) {
  return(
    <S.Wrapper>
      <AiOutlineArrowLeft 
        fontSize={30} 
        onClick={() => toggleInputWord()}
      />
      <S.FieldSearch placeholder="Buscar palavra"/>
      <BsSearch fontSize={30}/>
    </S.Wrapper>
  )
}

export default NavSearch;