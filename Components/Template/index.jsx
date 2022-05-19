import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

import * as S from './styles';

function Template({ children }) {

  return (
    <S.Wrapper>
      <Header 
      />
      <S.Container>
        <S.CardBooks>
        <Sidebar />
        </S.CardBooks>
        <S.CardContent >{children}</S.CardContent>
      </S.Container>
      <Footer/>
    </S.Wrapper>
  )
}

export default Template;