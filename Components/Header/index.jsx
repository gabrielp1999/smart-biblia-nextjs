import Head from "next/head";
import React, { useState } from "react";
import NavDefault from "../NavDefault";
import NavSearch from "../NavSearch";
import * as S from "./styles";

function Header() {
  const [showInputWord, setShowInputWord] = useState(false);

  const toggleInputWord = () => {
    setShowInputWord(!showInputWord);
  };

  return (
    <>
      <Head>
        <title>Smart Biblía 2.0</title>
        <meta
          name="description"
          content="Smart Bíblia nova versão 2.0 desenvolvida por Gabriel Pereira "
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <S.Wrapper>
        {!showInputWord ? (
          <NavDefault toggleInputWord={toggleInputWord} />
        ) : (
          <NavSearch toggleInputWord={toggleInputWord} />
        )}
      </S.Wrapper>
    </>
  );
}

export default Header;
