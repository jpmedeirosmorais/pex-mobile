import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 300px;
`;

export const BarContainer = styled.View`
  position: absolute;
  z-index: 2;
  bottom: 40;
  flex-direction: row;
`;

export const Track = styled.View`
  background-color: #ccc;
  overflow: hidden;
  height: 2px;
`;

export const Bar = styled.View`
  background-color: red;
  position: absolute;
  left: 0;
  top: 0;
`;
