import React from 'react';
import * as S from './styles'
import VerseDay from '../VerseDay/index'
import PageBook from '../PageBook';

function Content() {
  return(
    <S.Wrapper>
      {/* <VerseDay /> */}
      <PageBook />
    </S.Wrapper>
  )
}

export default Content;