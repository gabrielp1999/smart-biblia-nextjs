import axios from "axios";

const optionsAPI = {
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
};

export default async function handler(req, res) {
  const search = req.query.q;
  const response = await axios.post(
    `${process.env.URL_BASE}/verses/search`,
    {
      version: "nvi",
      search,
    },
    optionsAPI
  );
  if (response.data) {
    res.status(200).json(response.data);
  } else {
    res.status(200).json([]);
  }
}
