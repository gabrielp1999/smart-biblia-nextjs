import React, { useState } from "react";
import Filters from "../FIlters";
import Books from "../Books";

import * as S from "./styles";

function Sidebar() {
  const [showBooks, setShowBooks] = useState(false);

  const toggleBooks = () => {
    setShowBooks(!showBooks);
  };

  return (
    <S.Wrapper>
      <Filters toggleBooks={toggleBooks} showBooks={showBooks} />
      <Books showBooks={showBooks} />
    </S.Wrapper>
  );
}

export default Sidebar;
