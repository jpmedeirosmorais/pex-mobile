import { StatusBar } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBar.currentHeight};
  padding-bottom: 32px;
  ${({ bgColor }) => css`
    background-color: ${bgColor};
  `}
`;
