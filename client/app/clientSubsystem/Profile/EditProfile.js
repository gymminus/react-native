import React from "react";
import { Text, Button, View, TextInput } from "react-native";

function EditProfile({ navigation }) {
  const [username, SetUsername] = React.useState("");
  const [password, SetPassword] = React.useState("");
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetPassword(text)}
        value={password}
        placeholder="Rašykite naują slaptažodį"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetUsername(text)}
        value={username}
        placeholder="Pakartokite slaptažodį"
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title="Išsaugoti"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default EditProfile;
