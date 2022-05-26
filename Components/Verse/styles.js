import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 1.5rem auto;
  padding-right: 1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  margin-left: 0.5rem;
  margin-top: 2rem;
`;

export const DetailsLink = styled.span`
  font-size: 1.8rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 75%;
  color: darkblue;
  display: flex;
  font-weight: bolder;

  :hover {
    cursor: pointer;
    color: rgba(72, 137, 149, 1.5);
    text-decoration: underline;
  }
`;
