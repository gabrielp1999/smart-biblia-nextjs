import * as S from './styles';
import Link from "next/link";

function ChapterBox({ chapters }) {
  return(
    <S.Wrapper>
      <S.Title>Capítulos</S.Title>
      <S.Box> 
        {chapters.map(item => (
          <Link key={item} href='/livro' className="link">
            <S.ItemLink>{item.toString()}</S.ItemLink>
          </Link>
        ))}
      </S.Box>
    </S.Wrapper>
  )
}

export default ChapterBox;