import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

function Activity({ act }) {
  return (
    <View style={{ flexDirection: "row", margin: 8 }}>
      <Text style={{ flex: 1 }}>{act.datetime}</Text>
      <Text style={{ flex: 1 }}>{act.location}</Text>
      <Button title="Rezervuoti"></Button>
      <Button title="X (treneris)" color="red"></Button>
    </View>
  );
}

export default Activity;
