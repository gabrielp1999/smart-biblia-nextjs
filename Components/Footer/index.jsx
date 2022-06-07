import React from "react";
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <S.Wrapper>
      <S.FooterSon>
        <S.Text>Copryght 2022</S.Text>
        <Link target="_blank" href="https://github.com/gabrielp1999">
          <S.BoxImage>
            <S.Text>Desenvolvido por Gabriel Pereira</S.Text>
            <Image src="/img/github.png" alt="" height={35} width={35} />
          </S.BoxImage>
        </Link>
      </S.FooterSon>
    </S.Wrapper>
  );
}

export default Footer;
