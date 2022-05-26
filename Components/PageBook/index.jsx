import React, { useState } from "react";
import * as S from "./styles";
import ChaptersScroll from "../ ChaptersScroll";
import ChapterBox from "../ChapterBox";
import { useRouter } from "next/router";

function PageBook({ book }) {
  const router = useRouter();
  const { capitulo } = router.query;
  return (
    <S.Wrapper>
      <ChaptersScroll book={book} capitulo={capitulo} />
      <S.Title>
        {book.nome}: {book.capituloSelecionado}
      </S.Title>
      <S.List>
        {book.versiculos.map((item, index) => (
          <S.ItemList id={`#verse-${index + 1}`} key={`verse-${index}`}>
            {item}
          </S.ItemList>
        ))}
      </S.List>
      <ChapterBox book={book} capitulo={capitulo} />
    </S.Wrapper>
  );
}

export default PageBook;
