import { Pressable, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import colors from "../../styles/colors";

export const Button = ({
  children,
  showArrow = false,
  circle = false,
  ...props
}) => {
  return (
    <Pressable {...props}>
      <S.Area circle={circle}>
        <Text style={S.TextStyle}>{children && children}</Text>
        {showArrow && (
          <AntDesign
            name="arrowright"
            size={24}
            color={colors.secondary}
            style={{
              marginLeft: children ? 10 : 0,
            }}
          />
        )}
      </S.Area>
    </Pressable>
  );
};
