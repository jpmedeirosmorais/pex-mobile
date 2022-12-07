import styled, { css } from "styled-components/native";
import colors from "../../styles/colors";

export const View = styled.View`
  ${({ checked }) => css`
    border: 1.5px solid #f1f0f3;
    width: 16px;
    height: 16px;
    border-radius: 6px;
    background-color: ${checked ? colors.primary : "0"};
  `}
`;
