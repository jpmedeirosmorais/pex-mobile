import styled from "styled-components/native";
import colors from "../../../../styles/colors";

export const Paragraph = styled.Text`
  color: ${({ color }) => (color ? color : colors.gray)};
  font-weight: 500;
  font-size: 14px;
  text-align: left;
`;

export const TextContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 48px;
  align-items: center;
`;
