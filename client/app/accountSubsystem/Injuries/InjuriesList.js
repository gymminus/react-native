import React from "react";
import { Text, Button, TextInput, View } from "react-native";

function InjuriesList({ navigation }) {
  return (
    <View>
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title="Registruoti naują traumą"
        onPress={() => navigation.navigate("InjuriesRegistration")}
      />
      <Text>Pirma trauma</Text>
      <Text>Antra trauma</Text>
      <Text>Trečia trauma</Text>
      <Text>Ketvirta trauma</Text>
      <Text>Penkta trauma</Text>
    </View>
  );
}

export default InjuriesList;
