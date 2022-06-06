import React from "react";
import * as S from "./styles";
import Link from "next/link";

function Verse({ text, livro, capitulo, versiculo, sigla }) {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      <Link
        href={{
          pathname: "/livro",
          query: { sigla: sigla, capitulo: capitulo, versiculo: versiculo },
        }}
      >
        <S.DetailsLink>
          {livro} {capitulo}: {versiculo}
        </S.DetailsLink>
      </Link>
    </S.Wrapper>
  );
}
export default Verse;
