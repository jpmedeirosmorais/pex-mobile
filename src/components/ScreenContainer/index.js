import colors from "../../styles/colors";
import { Container } from "./styles";

export default function ScreenContainer({
  children,
  bgColor = colors.bgColor2,
  ...rest
}) {
  return (
    <Container bgColor={bgColor} {...rest}>
      {children}
    </Container>
  );
}
