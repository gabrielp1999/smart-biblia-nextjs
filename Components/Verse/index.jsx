import React from "react";
import * as S from "./styles";
import Link from "next/link";

function Verse({ text, livro, capitulo, versiculo, sigla }) {
  return (
    <Link
      href={{
        pathname: "/livro",
        query: { sigla: sigla, capitulo: capitulo, versiculo: versiculo },
      }}
    >
      <S.Wrapper>
        <S.Text>{text}</S.Text>
        <S.DetailsLink>
          {livro} {capitulo}: {versiculo}
        </S.DetailsLink>
      </S.Wrapper>
    </Link>
  );
}
export default Verse;
