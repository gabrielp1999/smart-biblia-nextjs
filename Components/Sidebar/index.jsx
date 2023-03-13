import React, { useState, useEffect } from "react";
import Filters from "../FIlters";
import Books from "../Books";
import { useRouter } from "next/router";

import * as S from "./styles";

function Sidebar({ book }) {
  const router = useRouter();
  const { sigla: siglaBookSelected } = router.query;
  const [showBooks, setShowBooks] = useState(false);


  useEffect(() => {
    setShowBooks(false)

  },[siglaBookSelected])

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
