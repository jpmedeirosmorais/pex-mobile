import { View, Pressable } from "react-native";
import { useCallback, useState } from "react";

import { Button } from "../../../../components/Button";
import * as S from "./styles";
import { Credentials } from "../../../../components/Forms/Credentials";

export const Form = ({ navigation }) => {
  const [payload, setPayload] = useState({});
  const onSubmit = useCallback(() => {
    if (!payload.email || !payload.password) {
      return Alert.alert("Preencha todos os campos!");
    }
    navigation.navigate("Main");
  }, [payload]);

  return (
    <View>
      <Credentials payload={payload} setPayload={setPayload} />

      <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
      <Pressable>
        <Button onPress={() => onSubmit(payload)}>Acessar</Button>
      </Pressable>
    </View>
  );
};
