import React, { useEffect, useState } from "react";
import Template from "../../Components/Template";
import PageBook from "../../Components/PageBook";
import useBiblie from "../../hooks/useBiblie";
import { useRouter } from "next/router";

const Livro = () => {
  const bookApi = useBiblie();
  const router = useRouter();
  const { sigla: siglaBookSelected, capitulo } = router.query;

  const chapter = capitulo || "1";

  const [book, setBook] = useState({
    nome: "",
    capitulos: [],
    sigla: "",
    versiculos: [],
    capituloSelecionado: "",
  });

  const makeListChapters = (value) =>
    Array.from({ length: value }, (_, i) => i + 1);

  useEffect(() => {
    if (!siglaBookSelected) return;

    bookApi.getBook(siglaBookSelected, chapter).then((data) => {
      setBook({
        nome: data.name,
        capitulos: makeListChapters(data.chapters),
        sigla: siglaBookSelected,
        versiculos: data.verses,
        capituloSelecionado: data.selectedChapter,
      });
    });
  }, [siglaBookSelected, chapter]);

  return (
    <Template>
      <PageBook book={book} />
    </Template>
  );
};

export default Livro;
