import Sidebar from "../Sidebar";
import Content from "../Content";

import * as S from './styles';

function Container({ toggleBooks, books, isDesktop}) {
  return (
    <S.Wrapper>
      <Sidebar
        toggleBooks={toggleBooks}  
        books={books} 
        isDesktop={isDesktop}
      />
      <Content />
    </S.Wrapper>
  )
}

export default Container;