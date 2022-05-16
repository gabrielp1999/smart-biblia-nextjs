import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 1.5rem auto 0 auto;
  text-align: center;
  text-align: center;

  @media screen and (min-width: 1024px) {
    width: 35%;
    margin: 1.5rem auto 0 auto;
    justify-content: flex-start;
  }

`;

export const Title = styled.div`
  font-size: 2.2rem;
  width: 80%;
  font-weight: bold;
`;
