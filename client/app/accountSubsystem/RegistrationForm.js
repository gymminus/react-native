import React from "react";
import { Text, Button, TextInput, View } from "react-native";

function RegistrationForm({ navigation }) {
  const [email, SetEmail] = React.useState("");
  const [password1, SetPassword1] = React.useState("");
  const [password2, SetPassword2] = React.useState("");
  return (
    <View name="LoginForm">
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetEmail(text)}
        value={email}
        placeholder="El pašto adresas"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetPassword1(text)}
        value={password1}
        placeholder="Slaptažodis"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetPassword2(text)}
        value={password2}
        placeholder="Pakartokite slaptažodį"
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Slaptažodis"
        title="Registruotis"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

export default RegistrationForm;
