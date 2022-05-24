import React, { useEffect, useState } from "react";
import Template from "../../Components/Template";
import PageBook from "../../Components/PageBook";
import useBiblie from "../../hooks/useBiblie";
import { useRouter } from "next/router";

const Livro = () => {
  const bookApi = useBiblie();
  const router = useRouter();
  const siglaBook = router.query.sigla;
  const [book, setBook] = useState({
    nome: "",
    capitulo: "",
    versiculos: [],
  });

  useEffect(() => {
    bookApi.getBook(siglaBook).then((data) => {
      // data.map((item) => {
      //   setBook({
      //     nome: item.name,
      //     capitulo: item.chapters,
      //     versiculos: [1, 5],
      //   });
      // });
    });
  }, [siglaBook]);

  return (
    <Template>
      <PageBook book={book} />
    </Template>
  );
};

export default Livro;
