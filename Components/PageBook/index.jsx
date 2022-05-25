import React from "react";
import * as S from "./styles";
import ChaptersScroll from "../ ChaptersScroll";
import ChapterBox from "../ChapterBox";

function PageBook({ book }) {
  return (
    <S.Wrapper>
      <ChaptersScroll book={book} />
      <S.Title>
        {book.nome}: {book.capituloSelecionado}
      </S.Title>
      <S.List>
        {book.versiculos.map((item, index) => (
          <S.ItemList key={`chapter-${index}`}>{item}</S.ItemList>
        ))}
      </S.List>
      <ChapterBox book={book} />
    </S.Wrapper>
  );
}

export default PageBook;
