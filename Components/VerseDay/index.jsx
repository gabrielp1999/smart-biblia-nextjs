import React, { useState, useEffect } from "react";
import * as S from "./styles";
import useBiblie from "../../hooks/useBiblie";

function VerseDay() {
  const verseData = useBiblie();

  const [verse1, setVerse1] = useState({
    nome: "",
    capitulo: "",
    versiculo: "",
    numeroVersiculo: "",
  });
  const [verse2, setVerse2] = useState({
    nome: "",
    capitulo: "",
    versiculo: "",
    numeroVersiculo: "",
  });

  useEffect(() => {
    verseData.getVerseRandom().then((data) => {
      setVerse1({
        nome: data.verse.book.name,
        capitulo: data.verse.chapter,
        numeroVersiculo: data.verse.number,
        versiculo: data.verse.text,
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
      });
    });
  }, [verse1.nome]);

  return (
    <S.Wrapper>
      <S.Title>Versículos do Dia:</S.Title>

      <S.NameBook>
        {verse1.nome} {verse1.capitulo}: {verse1.numeroVersiculo}
      </S.NameBook>
      <S.Verse>{verse1.versiculo}</S.Verse>

      <S.NameBook>
        {verse2.nome} {verse2.capitulo}: {verse2.numeroVersiculo}
      </S.NameBook>
      <S.Verse>{verse2.versiculo}</S.Verse>
    </S.Wrapper>
  );
}

export default VerseDay;
