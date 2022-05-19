import React, { useState } from "react";
import * as S from "./styles";
import Link from "next/link";

function Books({ showBooks }) {
  const [booksFilterVT, setBooksFilterVT] = useState([]);
  const [booksFilterNT, setBooksFilterNT] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [newTestament, setNewTestament] = useState([
    {
      nome: "Mateus",
      sigla: "MAT",
    },
    {
      nome: "Pedro",
      sigla: "PED",
    },
  ]);

  const [oldTestament, setOldTestament] = useState([
    {
      nome: "João",
      sigla: "JOA",
    },
    {
      nome: "Amenadiel",
      sigla: "AMN",
    },
  ]);

  const searchBook = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const filterBookNew = newTestament.filter((book) => {
      const result = book.nome.indexOf(value);
      const resp = result < 0 ? false : true;
      return resp;
    });
    setBooksFilterNT(filterBookNew);

    const filterBookOld = oldTestament.filter((book) => {
      const result = book.nome.indexOf(value);
      const resp = result < 0 ? false : true;
      return resp;
    });

    setBooksFilterVT(filterBookOld);
  };

  return (
    <S.Wrapper showBooks={showBooks}>
      <S.Input placeholder="Buscar livro" onChange={searchBook} />

      <S.Testament>
        <S.Title>Antigo Testamento</S.Title>
        <S.Ul>
          {booksFilterVT.map((book) => (
            <S.Li key={book.sigla}>
              <Link href="/livro">
                <a className="link">{book.nome}</a>
              </Link>
            </S.Li>
          ))}
        </S.Ul>
      </S.Testament>

      <S.Testament>
        <S.Title>Novo Testamento</S.Title>
        <S.Ul>
          {booksFilterNT.map((book) => (
            <S.Li key={book.sigla}>
              <Link href="/livro">
                <a className="link">{book.nome}</a>
              </Link>
            </S.Li>
          ))}
        </S.Ul>
      </S.Testament>
    </S.Wrapper>
  );
}

export default Books;
