import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Head from "next/head";

import * as S from "./styles";

function Template({ children }) {
  return (
    <S.Wrapper>
      <Head>
        
      {/* <style>
        @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap");
      </style> */}

      </Head>
      <Header />
      <S.Container>
        <S.CardBooks>
          <Sidebar />
        </S.CardBooks>
        <S.CardContent>{children}</S.CardContent>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
}

export default Template;
