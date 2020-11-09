import { ScrollView, Text, View, Button, Picker } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

function SingleWorkoutCreateScreen() {
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Pavadinimas"
      />

      <Picker>
        <Picker.Item label="1 pratimas" value="1" />
        <Picker.Item label="2 pratimas" value="2" />
        <Picker.Item label="3 pratimas" value="3" />
        <Picker.Item label="4 pratimas" value="4" />
        <Picker.Item label="5 pratimas" value="5" />
      </Picker>

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Trukme"
      />
    </View>
  );
}
export default SingleWorkoutCreateScreen;
