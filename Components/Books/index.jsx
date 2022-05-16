import React from "react";
import * as S from './styles';
import Link from "next/link";

function Books() {
  return(
    <S.Wrapper>
      <S.Input placeholder="Buscar livro"/>
      
      <S.Testament>
        <S.Title>Antigo Testamento</S.Title>
        <S.Ul>
          <S.Li>
            <Link href=''><a className="link">Gênesis</a></Link>
          </S.Li>
          <S.Li>
            <Link href=''><a className="link">Gênesis</a></Link>
          </S.Li>
          <S.Li>
            <Link href=''><a className="link">Gênesis</a></Link>
          </S.Li>
        </S.Ul>
      </S.Testament>

      <S.Testament>
        <S.Title>Novo Testamento</S.Title>
        <S.Ul>
          <S.Li>
            <Link href=''><a className="link">Apocalipse</a></Link>
          </S.Li>
          <S.Li>
            <Link href=''><a className="link">Apocalipse</a></Link>
          </S.Li>
          <S.Li>
            <Link href=''><a className="link">Apocalipse</a></Link>
          </S.Li>    
        </S.Ul>
      </S.Testament>
    </S.Wrapper>
  )
}

export default Books;