import axios from "axios";

const urlBase = "https://www.abibliadigital.com.br/api/";
const versionSelected = "nvi";
const optionsAPI = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1vbiBKYW4gMDMgMjAyMiAyMjoyMDo1MCBHTVQrMDAwMC5mbGlwZ2dzQGdtYWlsLmNvbSIsImlhdCI6MTY0MTI0ODQ1MH0.pUjeniyc77c0NC8z3uKsj0AmggL-i_voe10kVhDZu84",
  },
};

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

  const getVerseRandom = async () => {
    const verse = await axios.get("/api/verse");

    if (verse.data) {
      return { verse: verse.data };
    }
  };

  const postSearch = async (search) => {
    const response = await axios.get(`/api/search?q=${search}`);

    if (response.data) {
      return response.data;
    }
    return [];
  };

  return { getBooks, getBook, getVerseRandom, postSearch };
};

export default useBiblie;
