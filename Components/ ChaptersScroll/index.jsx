import React from "react";
import Link from "next/link";
import * as S from "./styles";

function ChaptersScroll({ book }) {
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
              <S.BoxChapters>{item.toString()}</S.BoxChapters>
            </Link>
          </S.ItemChapter>
        ))}
      </S.ListChapters>
    </S.Wrapper>
  );
}
export default ChaptersScroll;
