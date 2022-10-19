import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #815B5B;
  justify-content: center;
`;

export const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: #FFF8EA;
  border: 1px solid #815B5B;
  box-sizing: border-box;
  font-size: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    filter: brightness(0.85);
  }
`;