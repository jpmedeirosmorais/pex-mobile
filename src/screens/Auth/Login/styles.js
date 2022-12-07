import styled from "styled-components/native";
import colors from "../../../styles/colors";

export const ImageContainer = styled.View`
  width: 100%;
`;

export const BodyContainer = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 24px;
  text-align: left;
`;

export const Paragraph = styled.Text`
  color: ${colors.gray};
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 32px;
`;

export const Footer = styled.View`
  font-weight: 500;
  font-size: 14px;
  justify-content: center;
  flex-direction: row;
  margin-top: 24px;
  padding-bottom: 32px;
`;
