import styled from "styled-components/native";
import colors from "../../styles/colors";

export const InputContainer = styled.View`
  background-color: ${colors.lightGray};
  width: 100%;
  border-radius: 12px;
  padding: 19px;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  position: relative;
`;
