import React from "react";
import * as S from './styles';
import ChaptersScroll from "../ ChaptersScroll";
import ChapterBox from "../ChapterBox";

function PageBook() {
  const chapter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const book = {
    nome: "Salmos",
    capitulo: 29 ,
    versiculos: ["1. Atribuam ao Senhor, ó seres celestiais, atribuam ao Senhor glória e força.", "2. Atribuam ao Senhor a glória que o seu nome merece; adorem o Senhor no esplendor do seu santuário.", "3. A voz do Senhor ressoa sobre as águas; o Deus da glória troveja, o Senhor troveja sobre as muitas águas.", "4. A voz do Senhor é poderosa; a voz do Senhor é majestosa."]
  }

 return(
  <S.Wrapper>
    <ChaptersScroll chapter={chapter} />
    <S.Title>{book.nome}: {book.capitulo}</S.Title>
    <S.Ul>
      {book.versiculos.map(e => (
        <S.Paragraph key={book.capitulo}>{e}</S.Paragraph> 
      ))}
    </S.Ul>
    <ChapterBox chapter={chapter}/>
  </S.Wrapper>
 ) 
}

export default PageBook;
