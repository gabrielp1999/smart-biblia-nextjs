import styled from "styled-components";

export const Wrapper = styled.main`
  min-height: calc(100vh - 5.5rem - 4.5rem);
  width: 100%;
  
  @media screen and (min-width: 1024px) {
    width: 1024px;
    margin: auto;
    display: flex;
    padding: 0 2rem;
  }
`;

