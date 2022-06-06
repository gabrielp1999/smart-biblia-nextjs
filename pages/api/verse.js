import axios from "axios";
const optionsAPI = {
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
};

export default async function handler(req, res) {
  const verse = await axios.get(
    `${process.env.URL_BASE}/verses/nvi/random`,
    optionsAPI
  );
  if (verse.data) {
    res.status(200).json(verse.data);
  } else {
    res.status(200).json([]);
  }
}
