import axios from "axios";

const useBiblie = () => {
  const getBooks = async () => {
    const response = await axios.get("/api/books");
    if (response.data) {
      return response.data;
    }
    return [];
  };

  const getBook = async (slug, chapter) => {
    const response = await axios.get(
      `/api/books?slug=${slug}&chapter=${chapter}`
    );

    if (response.data) {
      return response.data;
    }
    return null;
  };

  const postSearch = async (search) => {
    const response = await axios.get(`/api/search?q=${search}`);

    if (response.data) {
      return response.data;
    }
    return [];
  };

  return { getBooks, getBook, postSearch };
};

export default useBiblie;

export const getVerseRandom = async () => {
  const verse = await axios.get(
    "https://www.abibliadigital.com.br/api/verses/nvi/random"
  );

  if (verse.data) {
    return { verse: verse.data };
  }
};
