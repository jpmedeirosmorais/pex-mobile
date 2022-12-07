import { View, Pressable } from "react-native";
import { useCallback, useState } from "react";

import * as S from "./styles";
import { Button } from "../../../../components/Button";
import { Credentials } from "../../../../components/Forms/Credentials";
import colors from "../../../../styles/colors";
import { Checkbox } from "../../../../components/Checkbox";

export const Form = ({ navigation }) => {
  const [payload, setPayload] = useState({});
  const onSubmit = useCallback(() => {
    // if (!payload.email || !payload.password) {
    //   return Alert.alert("Preencha todos os campos!");
    // }
    navigation.navigate("Main");
  }, [payload]);

  return (
    <View>
      <Credentials payload={payload} setPayload={setPayload} />

      <S.TextContainer>
        <Checkbox marginRight={10} />
        <S.Paragraph>
          Li e aceito os
          <S.Paragraph color={colors.primary}> Termos de serviço </S.Paragraph>e
          política de privacidade
        </S.Paragraph>
      </S.TextContainer>
      <Pressable>
        <Button onPress={() => onSubmit(payload)}>Acessar</Button>
      </Pressable>
    </View>
  );
};
