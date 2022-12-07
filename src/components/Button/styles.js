import styled, { css } from "styled-components/native";
import colors from "../../styles/colors";

export const Area = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  background-color: ${colors.primary};
  ${({ circle }) => css`
    border-radius: ${circle ? "50px" : "12px"};
  `}
`;

export const TextStyle = {
  color: colors.white,
  fontSize: 14,
  fontWeight: "500",
};
