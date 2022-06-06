import Image from "next/image";
import * as S from "./styles";
function Loading() {
  return (
    <S.Wrapper>
      <S.BoxImg>
        <Image src="/img/loading.gif" alt="" height={95} width={95} />
      </S.BoxImg>
    </S.Wrapper>
  );
}
export default Loading;
