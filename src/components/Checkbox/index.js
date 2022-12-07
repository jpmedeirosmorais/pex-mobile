import * as S from "./styles";
import { useState } from "react";
import { Pressable } from "react-native";

export const Checkbox = ({ checkedProp = false, ...props }) => {
  const [checked, setChecked] = useState(checkedProp);
  return (
    <Pressable onPress={() => setChecked(!checked)}>
      <S.View checked={checked} {...props} />
    </Pressable>
  );
};
