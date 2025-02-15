import styled, { createGlobalStyle } from "styled-components";

import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Title = styled.h2`
  font-size: 18px;
  display: block;
  margin: 40px 0;
  font-weight: bold;
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
export const PrimaryButton = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;

export const ButtonSave = styled(PrimaryButton)`
  background-color: ${variables.green};
  border-color: ${variables.green};
`;

export default GlobalStyle;
