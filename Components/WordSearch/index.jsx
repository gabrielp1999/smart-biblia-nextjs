import * as S from "./styles";
import Verse from "../Verse";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useBiblie from "../../hooks/useBiblie";
import Loading from "../Loading";

function WordSearch() {
  const [verses, setVerses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const searchVerse = useBiblie();
  const router = useRouter();
  const { palavra } = router.query;
  useEffect(() => {
    setIsLoading(true);
    searchVerse.postSearch(palavra).then((data) => {
      if (data?.verses.length) {
        setVerses(data.verses);
      } else {
        setIsEmpty(true);
      }
      setIsLoading(false);
    });
  }, [palavra]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Wrapper>
      {isEmpty ? (
        <S.Title>Nenhum resultado encontrado para sua pesquisa</S.Title>
      ) : (
        <>
          <S.Title>Palavra pesquisada:</S.Title>
          {verses?.map((verse) => (
            <Verse
              key={verse?.book.name}
              livro={verse?.book.name}
              versiculo={verse?.number}
              capitulo={verse?.chapter}
              sigla={verse?.book.abbrev.pt}
              text={verse?.text}
              titulo=""
            />
          ))}
        </>
      )}
    </S.Wrapper>
  );
}

export default WordSearch;
