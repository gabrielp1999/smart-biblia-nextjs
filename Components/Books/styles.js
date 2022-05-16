import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
   width: 80%;
   margin-top: 1rem;
   }
`;

export const Testament = styled.div`
  margin-top: 2rem;
  border: 0.1rem solid gainsboro;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  border-radius: 2rem;
`;

export const Title = styled.label`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #000;
`;

export const Ul = styled.ul`
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const Li = styled.li`
  list-style: none;
  border: none;
  margin: 0.5rem 0;
  height: 3rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7F7B82;
  border-radius: 1rem;
  color: #fff;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    width: 70%;
    margin: 1rem auto;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    margin: 0.5rem auto;
  }

  .link {
    color: #fff ;
    text-decoration: none;
  }
`

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  font-size: 1.8rem;
  padding: 0 1rem;
  border-right: 0.1rem gainsboro;
  border-top: 0.1rem gainsboro;
  box-shadow: 0 0.4rem 0.4rem rgb(0 0 0 / 30%);

  ::placeholder{
    color: #aaa;
  }

  &:focus{
    transition: 2000ms;
    outline: 0;
    border-color: rgb(172, 124, 214);
    box-shadow: 0 0.4rem 0.4rem rgb(172, 124, 214 / 30%);
  }
`;
