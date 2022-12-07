import { Image, Text } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

import colors from "../../styles/colors";
import * as S from "./styles";
import { Button } from "../../components/Button";

const OnboardingScreen = ({ navigation }) => {
  return (
    <ScreenContainer bgColor={colors.bgColor}>
      <S.ArrowContainer>
        <Image
          source={require("../../../assets/icons/arrow.png")}
          style={{
            width: 293,
            height: 443,
          }}
        />
      </S.ArrowContainer>
      <S.BodyContainer>
        <Image
          source={require("../../../assets/icons/logo-pex.png")}
          style={{
            width: 224,
            height: 121,
            marginBottom: 122,
          }}
        />
        <Text
          style={{
            marginBottom: 16,
            color: colors.black,
            fontSize: 32,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Bem vindo a PEX
        </Text>
        <Text
          style={{
            color: colors.gray,
            fontSize: 14,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          fskjdhfjkdshkjfhkjsd
        </Text>
        <Button
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 85 }}
          showArrow
          circle
        >
          Continuar
        </Button>
      </S.BodyContainer>
    </ScreenContainer>
  );
};

export default OnboardingScreen;
