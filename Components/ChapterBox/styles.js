import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  border: 0.1rem solid #a3a3a3;
  border-radius: 1.5rem;
  margin-top: 1rem;
  padding: 1rem;

  .style-chapter {
    background-color: rgb(53, 83, 173);
  }
`;

export const Title = styled.h4`
  font-size: 2.2rem;
  margin: 1rem 0;
`;

export const Box = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #444554;
  color: #fff;
  height: 3.5rem;
  width: 3.5rem;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.6rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(72, 137, 149, 1.5);
  }
`;
