import react, { useState } from "react";
import Sidebar from "../Sidebar";
import Content from "../Content";

import * as S from "./styles";

function Container({ toggleBooks, books, isDesktop, book }) {
  return (
    <S.Wrapper>
      <Sidebar
        toggleBooks={toggleBooks}
        books={books}
        isDesktop={isDesktop}
        book={book}
      />
      <Content book={book} />
    </S.Wrapper>
  );
}

export default Container;
