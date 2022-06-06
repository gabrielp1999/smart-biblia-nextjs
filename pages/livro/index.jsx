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

  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    bookApi.getBook(siglaBookSelected, chapter).then((data) => {
      console.log(data);
      setBook({
        nome: data.name,
        capitulos: makeListChapters(data.chapters),
        sigla: siglaBookSelected,
        versiculos: data.verses,
        capituloSelecionado: data.selectedChapter,
      });
      setIsLoading(false);
    });
  }, [siglaBookSelected, chapter]);

  return (
    <Template>
      <PageBook book={book} isLoading={isLoading} />
    </Template>
  );
};

export default Livro;
