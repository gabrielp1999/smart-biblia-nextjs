import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  display: none;
  height: 3rem;
  width: 70%;
  padding: 0 1rem;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
  `;

export const Input = styled.input`
  height: 3rem;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1.8rem;
  padding: 0 1rem;
  border: none;
  ::placeholder{
    color: #aaa;
  }
  &:focus{
    outline: 0;
  }
`;

export const boxImg = styled.div`
  color: black;
  display: flex;
  align-items: center;
`
