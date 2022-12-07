import { TextField } from "../../TextField";
import * as S from "./styles";

export const Credentials = ({ payload, setPayload }) => {
  return (
    <S.View>
      <TextField
        inputProps={{
          placeholder: "Email",
          onChangeText: (text) => setPayload({ ...payload, email: text }),
        }}
        iconPath={require("../../../../assets/icons/mail.png")}
        marginBottom={16}
      />
      <TextField
        inputProps={{
          placeholder: "Senha",
          onChangeText: (text) => setPayload({ ...payload, password: text }),
        }}
        iconPath={require("../../../../assets/icons/lock.png")}
        marginBottom={24}
      />
    </S.View>
  );
};
