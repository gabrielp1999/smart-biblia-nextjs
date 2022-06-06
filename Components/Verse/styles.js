import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;
  background: rgba(224, 224, 224, 0.3);
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  width: 100%;
  line-height: 2.2rem;
`;

export const DetailsLink = styled.span`
  font-size: 1.8rem;
  color: #444584;
  font-weight: bolder;

  :hover {
    cursor: pointer;
    color: rgba(72, 157, 169, 1.5);
    text-decoration: underline;
  }
`;
