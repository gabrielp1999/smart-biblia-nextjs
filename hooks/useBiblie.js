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
    const response = await axios.get(`${urlBase}/books`, optionsAPI);
    if (response.data) {
      return response.data;
    }
    return [];
  };

  const getBook = async (slug, chapter) => {
    const responseBook = await axios.get(
      `${urlBase}/books/${slug}`,
      optionsAPI
    );
    const responseDetailsBook = await axios.get(
      `${urlBase}/verses/${versionSelected}/${slug}/${chapter}`,
      optionsAPI
    );

    if (!responseBook || !responseDetailsBook) return null;

    return {
      name: responseBook.data.name,
      chapters: responseBook.data.chapters,
      verses: responseDetailsBook.data.verses.map((item) => item.text),
      selectedChapter: responseDetailsBook.data.chapter.number,
    };
  };

  const getVerseRandom = async () => {
    const verse = await axios.get(
      `${urlBase}/verses/${versionSelected}/random`,
      optionsAPI
    );

    if (verse.data) {
      return { verse: verse.data };
    }
  };

  const postSearch = async (search) => {
    const response = await axios.post(
      `${urlBase}/verses/search`,
      search,
      optionsAPI
    );

    if (response.data) {
      return response.data;
    }
    return [];
  };

  return { getBooks, getBook, getVerseRandom, postSearch };
};

export default useBiblie;
