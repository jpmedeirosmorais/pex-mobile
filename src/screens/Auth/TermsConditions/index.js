import ScreenContainer from "../../../components/ScreenContainer";
import * as S from "./styles.js";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const TermsConditions = () => {
  return (
    <ScreenContainer style={{ padding: 32 }}>
      <S.Top>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Feather name="share" size={24} color="black" />
      </S.Top>
      <S.Header>
        <S.Paragraph size={"12px"} style={{ marginBottom: 8 }}>
          Última atualização: Outubro/2022
        </S.Paragraph>
        <S.Title size={"24px"}>Termos de uso</S.Title>
      </S.Header>
      <S.ScrollView>
        <S.Title size={"14px"}>1. Termos</S.Title>
        <S.Paragraph size={"14px"} style={{ marginBottom: 24 }}>
          Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet
          enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat,
          eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed
          sapien ut convallis fringilla. Augue arcu sit odio proin cras purus,
          nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat
          aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.{" "}
        </S.Paragraph>
        <S.Title size={"14px"}>2. Licença de uso</S.Title>
        <S.Paragraph size={"14px"}>
          Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet
          enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat,
          eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed
          sapien ut convallis fringilla. Augue arcu sit odio proin cras purus,
          nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat
          aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.
          Lorem malesuada tempor imperdiet nulla nulla integer et. Tincidunt sit
          mauris fringilla nunc nibh erat quis auctor. Urna auctor molestie
          lectus sagittis fringilla tincidunt. Eget justo, odio sit vulputate
          velit cursus.
        </S.Paragraph>
      </S.ScrollView>
    </ScreenContainer>
  );
};
