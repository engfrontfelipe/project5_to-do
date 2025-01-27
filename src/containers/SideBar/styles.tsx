import styled from "styled-components";

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`;

export const Filters = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;

export const Field = styled.input`
  border-radius: 8px;
  background-color: #fff;
  padding: 8px;
  font-weight: bold;
  color: #666666;
  border: 1px solid #666666;
  width: 100%;
`;
