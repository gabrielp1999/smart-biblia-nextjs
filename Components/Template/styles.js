import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.main`
  min-height: calc(100vh - 5.5rem - 4.5rem);
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  
  @media screen and (min-width: 1024px) {
    width: 1020px;
    margin: 0 auto;
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const CardBooks = styled.div`
  width: 100%;
  text-align: center;
`
export const CardContent = styled.div`
  width: 100%;
`;