import Template from "../Components/Template";
import VerseDay from "../Components/VerseDay";

export default function Home({ nome }) {
  return (
    <Template>
      <VerseDay />
    </Template>
  );
}

export function getStaticProps() {
  return {
    props: {
      nome: "FlipGGS",
    },
  };
}
