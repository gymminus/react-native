import React from "react";
import { Text, Button, View, TextInput } from "react-native";

function DeleteProfile({ navigation }) {
  return (
    <View>
      <Text>Ar tikrai norite trinti?</Text>
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title="Taip"
        onPress={() => navigation.navigate("Account")}
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title="Ne"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default DeleteProfile;
