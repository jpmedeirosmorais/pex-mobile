import * as S from "./styles";
import { useRef } from "react";
import { Carousel } from "../../components/Carousel";
export const Main = ({ navigation }) => {
  const ref = useRef(null);

  const items = {};

  return (
    <S.Container>
      <Carousel />
    </S.Container>
  );
};
