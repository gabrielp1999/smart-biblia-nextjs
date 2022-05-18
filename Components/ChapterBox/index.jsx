import react from "react";
import * as S from './styles';
import Link from "next/link";

function ChapterBox({ chapter}) {
  return(
    <S.Wrapper>
      <S.Title>Capítulos</S.Title>
      <S.Box> 
        {chapter.map(e => (
          <Link key={e} href=''><S.A>{e}</S.A></Link>
        ))}
      </S.Box>
    </S.Wrapper>
  )
}

export default ChapterBox;