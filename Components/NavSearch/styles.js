import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-color: #fff;
  justify-content: space-between;
  
  
  @media screen and (min-width: 768px) {
    width:100%;
    justify-content: space-between;
    gap:0;
    background-color: #fff;
  }
`;


export const FieldSearch = styled.input`
  height: 100%;
  width: 70%;
  font-size: 2rem;
  border: none;
  
  &::placeholder{
    color: #aaa;
    font-size: 2rem;
  }
  &:focus{
    outline: 0;
    border-color: rgb(172, 124, 214);
    box-shadow: 0 0.4rem 0.4rem rgb(172, 124, 214 / 30%);
  }
`;


