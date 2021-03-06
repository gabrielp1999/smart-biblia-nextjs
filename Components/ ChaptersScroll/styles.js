import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;

  .style-chapter {
    background-color: rgb(53, 83, 173);
  }
`;

export const Title = styled.h4`
  font-size: 2.2rem;
`;

export const ListChapters = styled.ol`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  height: 6rem;
`;

export const ItemChapter = styled.li`
  list-style: none;
`;

export const BoxChapters = styled.div`
  background-color: #444554;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.6rem;
  border: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  &:hover {
    cursor: pointer;
    background-color: rgba(72, 137, 149, 0.8);
  }
  :hover,
  :focus {
    transform: scale(1.02);
  }
`;
