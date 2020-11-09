import React from "react";
import { Button, Text, TextInput, View } from "react-native";

function NewActivityScreen({ navigation }) {
  return (
    <View>
      <TextInput placeholder="Laikas"></TextInput>
      <TextInput placeholder="Vieta"></TextInput>
      <TextInput placeholder="Vietų skaičius"></TextInput>
      <Button title="Išsaugoti"></Button>
    </View>
  );
}

export default NewActivityScreen;
