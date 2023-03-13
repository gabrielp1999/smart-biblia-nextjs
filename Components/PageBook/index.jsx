import React, { useEffect, useRef } from "react";
import { animateScroll } from "react-scroll";
import * as S from "./styles";
import ChaptersScroll from "../ ChaptersScroll";
import ChapterBox from "../ChapterBox";
import { useRouter } from "next/router";
import Loading from "../Loading";

function PageBook({ book, isLoading }) {
  const router = useRouter();
  const { capitulo, versiculo } = router.query;
  const myVerseRef = useRef();
  console.log(book, "biel")

  useEffect(() => {
    if (!versiculo || !myVerseRef?.current?.offsetTop) return;

    const y = myVerseRef.current.offsetTop;

    animateScroll.scrollTo(y - 10);
  }, [versiculo, myVerseRef.current]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <S.Wrapper>
      <ChaptersScroll book={book} capitulo={capitulo} />
      <S.Title>
        {book.nome}: {book.capituloSelecionado}
      </S.Title>
      <S.List>
        {book.versiculos.map((item, index) => (
          <S.ItemList
            key={`verse-${index}`}
            ref={index + 1 === Number(versiculo) ? myVerseRef : null}
            className={Number(versiculo) === index + 1 ? "verseSelected" : ""}
          >
           {index + 1}- {item}
          </S.ItemList>
        ))}
      </S.List>
      <ChapterBox book={book} capitulo={capitulo} />
    </S.Wrapper>
  );
}

export default PageBook;
