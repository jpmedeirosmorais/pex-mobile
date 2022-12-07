import styled from "styled-components/native";
import colors from "../../../styles/colors";

export const Top = styled.View`
  margin-top: 65px;
  margin-bottom: 43px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Header = styled.View`
  width: 100%;
`;

export const ScrollView = styled.ScrollView`
  margin-top: 32px;
  padding-right: 10px;
  text-align: left;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-weight: 500;
  font-size: ${({ size }) => size};
  margin-bottom: 8px;
`;
export const Paragraph = styled.Text`
  color: ${colors.gray};
  font-size: ${({ size }) => size};
`;
