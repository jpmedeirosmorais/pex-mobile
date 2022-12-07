import { Image } from "react-native";
import * as S from "./styles";

export const TextField = ({ iconPath, inputProps, ...rest }) => {
  return (
    <S.InputContainer {...rest}>
      {iconPath && (
        <Image
          source={iconPath}
          style={{
            marginRight: 10,
          }}
        />
      )}
      <S.Input {...inputProps} />
    </S.InputContainer>
  );
};
