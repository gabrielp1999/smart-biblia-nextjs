import styled from "styled-components";

export const Wrapper = styled.div`
  bottom: 0;
  width: 100%;
  height: 6rem;
  background-color: #444554;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterSon = styled.footer`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 75%;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #a9a9a8;
`;
