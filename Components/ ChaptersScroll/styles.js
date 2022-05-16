import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.h4`
  font-size: 2.2rem;
`;

export const Ul = styled.ol`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  height: 6rem;
`;

export const Li = styled.li`
  list-style:none ;
`;

export const A = styled.a`
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
`;