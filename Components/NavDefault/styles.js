import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 2rem;
  }
`;
export const BoxSearch = styled.div`
  width: 40px;
  height: 55px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const BoxImg = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  height: 55px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 70%;
  font-size: 2rem;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.1);
  }

  @media screen and (min-width: 1024px) {
    gap: 2rem;
    width: 22%;
    padding: 0 0.5rem;
  }
`;
