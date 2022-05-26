import * as S from "./styles";
import Link from "next/link";

function ChapterBox({ book, capitulo }) {
  const chapter = capitulo || "1";
  return (
    <S.Wrapper>
      <S.Title>Capítulos</S.Title>
      <S.Box>
        {book.capitulos.map((item) => (
          <Link
            key={`capitulo ${item}`}
            href={{
              pathname: "/livro",
              query: { sigla: book.sigla, capitulo: item },
            }}
            className="link"
          >
            <S.ItemLink
              className={chapter === item.toString() && "style-chapter"}
            >
              {item.toString()}
            </S.ItemLink>
          </Link>
        ))}
      </S.Box>
    </S.Wrapper>
  );
}

export default ChapterBox;
