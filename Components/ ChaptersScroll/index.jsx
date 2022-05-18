import React from "react";
import Link from "next/link";
import * as S from './styles';

function ChaptersScroll({chapters}) {
  return(
    <S.Wrapper>
      <S.Title>Capítulos</S.Title>
      <S.ListChapters>
        {chapters.map(item => (
          <S.ItemChapter key={item}>
             <Link href='/livro'><S.BoxChapters>{item.toString()}</S.BoxChapters></Link>
          </S.ItemChapter>
        ))}
      </S.ListChapters>
    </S.Wrapper>
  )
}
export default ChaptersScroll;
