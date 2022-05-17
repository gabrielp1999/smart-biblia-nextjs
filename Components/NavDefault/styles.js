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
    padding: 0 1rem;
}
`
export const BoxSearch = styled.div`
  width: 40px;
  height: 55px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: none;
}
`

export const BoxImg = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  height: 55px;
  display: flex;
  align-items: center;
  

  @media screen and (min-width: 1024px) {
    gap: 2rem;
  }
`;


