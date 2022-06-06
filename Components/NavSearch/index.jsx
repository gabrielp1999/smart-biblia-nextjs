import React, { useState } from "react";
import * as S from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Router from "next/router";

function NavSearch({ toggleInputWord }) {
  const [word, setWord] = useState("");
  const addRouterSearch = (e) => {
    e.preventDefault();
    if (word) {
      Router.push({
        pathname: "/busca",
        query: { palavra: word },
      });
      toggleInputWord();
    } else {
      alert("Digite a palavra que deseja pesquisar :)");
    }
  };

  const valueChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <S.Wrapper onSubmit={addRouterSearch}>
      <AiOutlineArrowLeft fontSize={30} onClick={() => toggleInputWord()} />
      <S.FieldSearch onChange={valueChange} placeholder="Buscar palavra" />
      <BsSearch fontSize={30} onClick={addRouterSearch} />
    </S.Wrapper>
  );
}

export default NavSearch;
