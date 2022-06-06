import axios from "axios";
const optionsAPI = {
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
};

export default async function handler(req, res) {
  const slug = req.query.slug;
  const chapter = req.query.chapter;
  const urlBase = process.env.URL_BASE;

  if (slug && chapter) {
    const responseBook = await axios.get(
      `${urlBase}/books/${slug}`,
      optionsAPI
    );
    const responseDetailsBook = await axios.get(
      `${urlBase}/verses/nvi/${slug}/${chapter}`,
      optionsAPI
    );

    if (!responseBook || !responseDetailsBook) res.status(200).json(null);

    const result = {
      name: responseBook.data.name,
      chapters: responseBook.data.chapters,
      verses: responseDetailsBook.data.verses.map((item) => item.text),
      selectedChapter: responseDetailsBook.data.chapter.number,
    };
    res.status(200).json(result);
  } else {
    const response = await axios.get(`${urlBase}/books`, optionsAPI);
    if (response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(200).json([]);
    }
  }
}
