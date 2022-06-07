import React from "react";
import Verse from "../Verse/index";
import * as S from "./styles";
import Loading from "../Loading";

function VerseDay({ verse1, verse2 }) {
  return (
    <S.Wrapper>
      <S.Title>Versículos do dia:</S.Title>
      <Verse
        text={verse1.versiculo}
        livro={verse1.nome}
        capitulo={verse1.capitulo}
        versiculo={verse1.numeroVersiculo}
        sigla={verse1.sigla}
      />
      <Verse
        text={verse2.versiculo}
        livro={verse2.nome}
        capitulo={verse2.capitulo}
        versiculo={verse2.numeroVersiculo}
        sigla={verse2.sigla}
      />
    </S.Wrapper>
  );
}

export default VerseDay;
