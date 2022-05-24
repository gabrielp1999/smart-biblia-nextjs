import React from "react";
import * as S from "./styles";
import ChaptersScroll from "../ ChaptersScroll";
import ChapterBox from "../ChapterBox";

function PageBook({ book }) {
  const chapters = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  // const book = {
  //   nome: "Salmos",
  //   capitulo: 29,
  //   versiculos: [
  //     "Atribuam ao Senhor, ó seres celestiais, atribuam ao Senhor glória e força.",
  //     "Atribuam ao Senhor a glória que o seu nome merece; adorem o Senhor no esplendor do seu santuário.",
  //     "A voz do Senhor ressoa sobre as águas; o Deus da glória troveja, o Senhor troveja sobre as muitas águas.",
  //     "A voz do Senhor é poderosa; a voz do Senhor é majestosa.",
  //   ],
  // };

  return (
    <S.Wrapper>
      <ChaptersScroll chapters={chapters} />
      <S.Title>
        {book.nome}: {book.capitulo}
      </S.Title>
      <S.List>
        {book.versiculos.map((item, index) => (
          <S.ItemList key={`chapter ${index}`}>{item}</S.ItemList>
        ))}
      </S.List>
      <ChapterBox chapters={chapters} />
    </S.Wrapper>
  );
}

export default PageBook;
