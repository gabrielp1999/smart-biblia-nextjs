import React from "react";
import Image from "next/image";
import * as S from "./styles";
import InputDesktop from "../InputDesktop";
import Link from "next/link";

function NavDefault({ toggleInputWord }) {
  return (
    <S.Wrapper>
      <S.BoxImg>
        <Link href="/">
          <Image alt="biblia" src="/img/logo.png" width={35} height={35} />
        </Link>
        <h3>Smart Biblía</h3>
      </S.BoxImg>
      <div className="div-search-word">
        <InputDesktop />
      </div>
      <S.BoxSearch>
        <Image
          onClick={() => toggleInputWord()}
          src="/img/lupa.png"
          alt=""
          height={30}
          width={30}
        />
      </S.BoxSearch>
    </S.Wrapper>
  );
}

export default NavDefault;
