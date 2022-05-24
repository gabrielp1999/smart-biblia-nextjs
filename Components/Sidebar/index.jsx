import React, { useState } from "react";
import Filters from "../FIlters";
import Books from "../Books";

import * as S from "./styles";

function Sidebar({ book }) {
  const [showBooks, setShowBooks] = useState(false);

  const toggleBooks = () => {
    setShowBooks(!showBooks);
  };

  return (
    <S.Wrapper>
      <Filters toggleBooks={toggleBooks} showBooks={showBooks} />
      <Books showBooks={showBooks} book={book} />
    </S.Wrapper>
  );
}

export default Sidebar;
