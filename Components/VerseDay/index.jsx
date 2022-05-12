import React from "react";
import * as S from './styles';

function VerseDay() {
  return(
    <S.Wrapper >
      <S.Title>Versículos do Dia:</S.Title>

      <S.NameBook>João 12:1</S.NameBook>
      <S.Verse>Seis dias antes da Páscoa Jesus chegou a Betânia, onde vivia Lázaro, a quem ressuscitara dos mortos</S.Verse>

      <S.NameBook>Apocalipse 16:3</S.NameBook>
      <S.Verse>O segundo anjo derramou a sua taça no mar, e este se transformou em sangue como de um morto, e morreu toda criatura que vivia no mar.</S.Verse>
    </S.Wrapper>
  )
}

export default VerseDay;