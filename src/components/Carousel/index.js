import { ScrollView, Dimensions, Image } from "react-native";
import * as S from "./styles";

const deviceWidth = Dimensions.get("window").width;

const images = [];

export const Carousel = ({}) => {
  return (
    <S.Container>
      <ScrollView pagingEnabled>
        {images.map((image, i) => (
          <Image
            key={`image${i}`}
            source={{ uri: image }}
            style={{ width: deviceWidth, height: 300 }}
          />
        ))}
      </ScrollView>
    </S.Container>
  );
};
