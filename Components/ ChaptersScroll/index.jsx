import React from "react";
import Link from "next/link";
import * as S from './styles';

function ChaptersScroll({chapter}) {
  return(
    <S.Wrapper>
      <S.Title>Capítulos</S.Title>
      <S.Ul>
        {chapter.map(e => (
          <S.Li key={e}>
            <Link href=''><S.A>{e}</S.A></Link>
          </S.Li>
        ))}
      </S.Ul>
    </S.Wrapper>
  )
}
export default ChaptersScroll;
