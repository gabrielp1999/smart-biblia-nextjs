import Template from "../Components/Template";
import VerseDay from "../Components/VerseDay";
import { getVerseRandom } from "../hooks/useBiblie";

export default function Home({ verse1, verse2 }) {
  return (
    <Template>
      <VerseDay verse1={verse1} verse2={verse2} />
    </Template>
  );
}

export const getStaticProps = async () => {
  const promises = [getVerseRandom(), getVerseRandom()];
  const [verse1, verse2] = await Promise.all(promises);

  return {
    props: {
      verse1: {
        nome: verse1.verse.book.name,
        capitulo: verse1.verse.chapter,
        numeroVersiculo: verse1.verse.number,
        versiculo: verse1.verse.text,
        sigla: verse1.verse.book.abbrev.pt,
      },
      verse2: {
        nome: verse2.verse.book.name,
        capitulo: verse2.verse.chapter,
        numeroVersiculo: verse2.verse.number,
        versiculo: verse2.verse.text,
        sigla: verse2.verse.book.abbrev.pt,
      },
    },
    revalidate: 86400,
  };
};
