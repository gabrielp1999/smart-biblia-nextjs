import axios from "axios";

const urlBase = "https://www.abibliadigital.com.br/api/";

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

  const getBook = async (sigla) => {
    const response = await axios.get(`${urlBase}/books/${sigla}`, optionsAPI);
    if (response.data) {
      return response.data;
    }
    return [];
  };

  return { getBooks, getBook };
};

export default useBiblie;
