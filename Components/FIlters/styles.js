import styled from "styled-components";
import Image from 'next/image';

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Span = styled.span`
  color: #172121;
  font-size: 25px;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border: 1px solid;
  background-color:gainsboro; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  font-size: 20px;
  font-weight: bold;
`;

export const ImageArrow = styled(Image)``;
