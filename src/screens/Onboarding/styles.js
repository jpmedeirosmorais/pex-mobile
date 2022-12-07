import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const ArrowContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: ${StatusBar.currentHeight}px;
`;

export const BodyContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 241px;
  padding-right: 32px;
  padding-bottom: 32px;
`;
