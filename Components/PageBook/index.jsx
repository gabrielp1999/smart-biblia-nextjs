import React, { useState } from "react";
import * as S from "./styles";
import ChaptersScroll from "../ ChaptersScroll";
import ChapterBox from "../ChapterBox";
import { useRouter } from "next/router";
import Loading from "../Loading";
import Link from "react-scroll";

function PageBook({ book, isLoading }) {
  const router = useRouter();
  const { capitulo, versiculo } = router.query;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <S.Wrapper>
      <ChaptersScroll book={book} capitulo={capitulo} />
      <S.Title>
        {book.nome}: {book.capituloSelecionado}
      </S.Title>
      <S.List>
        {book.versiculos.map((item, index) => (
          <S.ItemList
            id={`#verse-${index + 1}`}
            key={`verse-${index}`}
            className={Number(versiculo) === index + 1 ? "verseSelected" : ""}
          >
            {item}
          </S.ItemList>
        ))}
      </S.List>
      <ChapterBox book={book} capitulo={capitulo} />
    </S.Wrapper>
  );
}

export default PageBook;
