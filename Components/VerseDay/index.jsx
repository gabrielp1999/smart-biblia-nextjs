import React, { useState, useEffect } from "react";
import Verse from "../Verse/index";
import * as S from "./styles";
import useBiblie from "../../hooks/useBiblie";
import Loading from "../Loading";

function VerseDay() {
  const verseData = useBiblie();
  const [isLoading, setIsLoading] = useState(false);

  const [verse1, setVerse1] = useState({
    nome: "",
    capitulo: "",
    versiculo: "",
    numeroVersiculo: "",
    sigla: "",
  });

  const [verse2, setVerse2] = useState({
    nome: "",
    capitulo: "",
    versiculo: "",
    numeroVersiculo: "",
    sigla: "",
  });

  useEffect(() => {
    setIsLoading(true);
    verseData.getVerseRandom().then((data) => {
      setVerse1({
        nome: data.verse.book.name,
        capitulo: data.verse.chapter,
        numeroVersiculo: data.verse.number,
        versiculo: data.verse.text,
        sigla: data.verse.book.abbrev.pt,
      });
    });
  }, []);

  useEffect(() => {
    if (!verse1.nome) {
      return;
    }

    verseData.getVerseRandom().then((data) => {
      setVerse2({
        nome: data.verse.book.name,
        capitulo: data.verse.chapter,
        numeroVersiculo: data.verse.number,
        versiculo: data.verse.text,
        sigla: data.verse.book.abbrev.pt,
      });
      setIsLoading(false);
    });
  }, [verse1.nome]);

  if (isLoading) {
    return <Loading />;
  }
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
