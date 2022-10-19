import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 32px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: #FFF8EA;
`;

export const Text = styled.h1`
  text-align: center;
  color: #594545;
  margin-bottom: 16px;
  margin-top: 0px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  align-items: center;
  margin-top: ${({ $mt }) => $mt || '0px'};
`;

export const Label = styled.p`
  padding: 8px;
  border: 1px solid #9E7676;
  font-weight: 600;
  font-size: 16px;
  color: #9E7676;
  margin: 0px;
  border-radius: 8px;
`;

export const Button = styled.div`
  padding: 10px 32px;
  border-radius: 8px;
  background-color: #594545;
  color: #FFF8EA;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`