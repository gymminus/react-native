import React from "react";
import { Text, Button, TextInput, View } from "react-native";

function LoginForm({ navigation }) {
  const [username, SetUsername] = React.useState("");
  const [password, SetPassword] = React.useState("");
  return (
    <View name="LoginForm">
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetUsername(text)}
        value={username}
        placeholder="Prisijungimo vardas"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetPassword(text)}
        value={password}
        placeholder="Slaptažodis"
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Slaptažodis"
        title="Prisijungti"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default LoginForm;
