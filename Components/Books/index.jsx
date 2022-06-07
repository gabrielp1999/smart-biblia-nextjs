import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Link from "next/link";
import useBiblie from "../../hooks/useBiblie";
import { useRouter } from "next/router";

function Books({ showBooks, book }) {
  const [booksFilterVT, setBooksFilterVT] = useState([]);
  const [booksFilterNT, setBooksFilterNT] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [listVT, setListVT] = useState([]);
  const [listNT, setListNT] = useState([]);
  const books = useBiblie();
  const router = useRouter();
  const { sigla: siglaBookSelected } = router.query;

  useEffect(() => {
    const getStorage = localStorage.getItem("data");
    const dataStorage = JSON.parse(getStorage);

    books.getBooks().then((data) => {
      if (!getStorage) {
        localStorage.setItem("data", JSON.stringify(data));
        const booksVT = makeFilter(data, "VT");
        const booksNT = makeFilter(data, "NT");
        setListNT(booksNT);
        setListVT(booksVT);
        setBooksFilterVT(booksVT);
        setBooksFilterNT(booksNT);
      } else {
        const booksVT = makeFilter(dataStorage, "VT");
        const booksNT = makeFilter(dataStorage, "NT");
        setListNT(booksNT);
        setListVT(booksVT);
        setBooksFilterVT(booksVT);
        setBooksFilterNT(booksNT);
      }
    });
  }, []);

  const makeFilter = (listBook, testament) => {
    let filtrar = listBook.filter(function (el) {
      let result = el.testament === testament;
      return result;
    });

    return filtrar;
  };

  const searchBook = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const filterBookNew = listNT.filter((book) => filterBook(book.name, value));
    setBooksFilterNT(filterBookNew);

    const filterBookOld = listVT.filter((book) => filterBook(book.name, value));
    setBooksFilterVT(filterBookOld);
  };

  const filterBook = (name, value) => {
    const nameFormated = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const valuerFormated = value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const result = nameFormated
      .toUpperCase()
      .indexOf(valuerFormated.toUpperCase());
    return result < 0 ? false : true;
  };

  const renderEmptyResult = () => {
    return <p>Nenhum livro encontrado</p>;
  };

  return (
    <S.Wrapper showBooks={showBooks}>
      <S.Input
        value={searchValue}
        placeholder="Buscar livro"
        onChange={searchBook}
      />

      <S.Testament>
        <S.Title>Antigo Testamento</S.Title>
        {booksFilterVT.length === 0 ? (
          renderEmptyResult()
        ) : (
          <S.Ul>
            {booksFilterVT.map((book, index) => (
              <S.Li
                className={siglaBookSelected === book.abbrev.pt && "style-book"}
                key={`VT${index}`}
              >
                <Link
                  href={{
                    pathname: "/livro",
                    query: { sigla: book.abbrev.pt },
                  }}
                >
                  <a className="link">{book.name}</a>
                </Link>
              </S.Li>
            ))}
          </S.Ul>
        )}
      </S.Testament>

      <S.Testament>
        <S.Title>Novo Testamento</S.Title>
        {booksFilterNT.length === 0 ? (
          renderEmptyResult()
        ) : (
          <S.Ul>
            {booksFilterNT.map((book, index) => (
              <S.Li key={`VT${index}`}>
                <Link
                  href={{
                    pathname: "/livro",
                    query: { sigla: book.abbrev.pt },
                  }}
                >
                  <label className="link">{book.name}</label>
                </Link>
              </S.Li>
            ))}
          </S.Ul>
        )}
      </S.Testament>
    </S.Wrapper>
  );
}

export default Books;
