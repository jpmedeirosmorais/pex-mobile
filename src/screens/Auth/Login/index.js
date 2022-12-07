import { Image, Text, useWindowDimensions } from "react-native";
import ScreenContainer from "../../../components/ScreenContainer";
import colors from "../../../styles/colors";
import { Form } from "./Form";

import * as S from "./styles";

const LoginScreen = ({ navigation }) => {
  const window = useWindowDimensions();

  return (
    <ScreenContainer bgColor={colors.bgColor2}>
      <S.ImageContainer>
        <Image
          source={require("../../../../assets/images/login-image.png")}
          style={{ width: window.width }}
        />
      </S.ImageContainer>
      <S.BodyContainer>
        <S.Title>Bem vindo a PEX!</S.Title>
        <S.Paragraph>
          Informe os seus dados para ter acesso a um mundo de economia para sua
          obra
        </S.Paragraph>

        <Form navigation={navigation} />

        <S.Footer>
          <Text
            style={{
              color: colors.gray,
            }}
          >
            Não possui uma conta?
          </Text>
          <Text
            style={{
              color: colors.primary,
              marginLeft: 5,
            }}
            onPress={() => navigation.navigate("SignUp")}
          >
            Criar conta
          </Text>
        </S.Footer>
      </S.BodyContainer>
    </ScreenContainer>
  );
};

export default LoginScreen;
