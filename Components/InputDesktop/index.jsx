import React, { useState } from "react";
import * as S from "./styles";
import { BsSearch } from "react-icons/bs";
import Router from "next/router";

function InputDesktop() {
  const [word, setWord] = useState("");
  const addRouterSearch = (e) => {
    e.preventDefault();
    if (word) {
      Router.push({
        pathname: "/busca",
        query: { palavra: word },
      });
    } else {
      alert("Digite a palavra que deseja pesquisar :)");
    }
  };

  const valueChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <S.Wrapper onSubmit={addRouterSearch}>
      <S.Input placeholder="Buscar palavras" onChange={valueChange} />
      <S.boxImg>
        <BsSearch fontSize={25} onClick={addRouterSearch} />
      </S.boxImg>
    </S.Wrapper>
  );
}

export default InputDesktop;
