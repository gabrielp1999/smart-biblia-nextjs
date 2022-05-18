import React, {useState} from "react";
import * as S from './styles';
import Link from "next/link";

function Books() {

  const [newTestament, setNewTestament] = useState([
    {
      nome: "Mateus",
      sigla: "MAT",
    },
    {
      nome: "Pedro",
      sigla: "PED"
    }
  ]);

  const [oldTestament, setOldTestament] = useState([
    {
      nome: "João",
      sigla: "JOA",
    },
    {
      nome: "Amenadiel",
      sigla: "AMN"
    }
  ]);

  return(
    <S.Wrapper>
      <S.Input placeholder="Buscar livro"/>
      
      <S.Testament>
        <S.Title>Antigo Testamento</S.Title>
        <S.Ul>

          {oldTestament.map(book => (
            <S.Li key={book.sigla}> <Link href='/livro' ><a className="link">{book.nome}</a></Link> </S.Li>
          ))}

        </S.Ul>
      </S.Testament>

      <S.Testament>
        <S.Title>Novo Testamento</S.Title>
        <S.Ul>

        {newTestament.map(book => (
            <S.Li key={book.sigla}> <Link href='/livro' ><a className="link">{book.nome}</a></Link> </S.Li>
          ))}

        </S.Ul>
      </S.Testament>
    </S.Wrapper>
  )
}

export default Books;