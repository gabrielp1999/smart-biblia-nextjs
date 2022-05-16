import styled from "styled-components";
import Image from 'next/image';

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 1024px) {
  width: 80%;
}
`;

export const Span = styled.span`
  color: #172121;
  font-size: 25px;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  border: 0.1rem solid;
  background-color:#fff; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  font-size: 1.6rem;
  font-weight: bold;
  color: #000;
  box-shadow: 0 0.4rem 0.4rem rgb(0 0 0 / 30%);
`;

export const ImageArrow = styled(Image)``;


