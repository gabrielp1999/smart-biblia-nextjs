import React, { useState } from "react";
import Link from "next/link";
import * as S from "./styles";

function ChaptersScroll({ book, capitulo }) {
  const chapter = capitulo || "1";
  return (
    <S.Wrapper>
      <S.Title>Capítulos</S.Title>
      <S.ListChapters>
        {book.capitulos.map((item) => (
          <S.ItemChapter key={`capitulo ${item}`}>
            <Link
              href={{
                pathname: "/livro",
                query: { sigla: book.sigla, capitulo: item },
              }}
            >
              <S.BoxChapters
                className={chapter === item.toString() && "style-chapter"}
              >
                {item.toString()}
              </S.BoxChapters>
            </Link>
          </S.ItemChapter>
        ))}
      </S.ListChapters>
    </S.Wrapper>
  );
}
export default ChaptersScroll;
