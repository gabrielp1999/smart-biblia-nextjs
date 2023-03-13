import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  line-height: 2.2rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  .verseSelected {
    font-weight: bold;
    background-color: rgba(224, 224, 224, 0.3);
    color: #444584;
  }
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  margin-top: 2rem;
`;

export const List = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
`;

export const ItemList = styled.li`
  font-size: 1.5rem;
  margin-top: 1rem;
  width: 100%;
`;
