import react, { useState, useEffect } from "react";
import HeadComponent from '../HeadComponent'
import Header from "../Header";
import Container from "../Container";
import { useMediaQuery } from "react-responsive";

import * as S from './styles';

function HomeComponent() {
  const [showInputWord, setShowInputWord] = useState(false);
  const [books, setBooks] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)"});

  const toggleInputWord = () => {
    setShowInputWord(!showInputWord);
  }

  const toggleBooks = () => {
    setBooks(!books);
  }

  useEffect(() => {
    if (isDesktop && !books) {
      setBooks(true);
    }
  }, [isDesktop, books]);

  return (
    <S.Wrapper className="home">
      <HeadComponent />
      <Header 
        toggleInputWord={toggleInputWord} 
        showInputWord={showInputWord}
      />
      <Container
        toggleBooks={toggleBooks}  
        books={books}
        isDesktop={isDesktop}
      />
    </S.Wrapper>
  )
}

export default HomeComponent;