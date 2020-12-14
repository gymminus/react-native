import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

function Activity({ act }) {
  return (
    <View style={{ flexDirection: "column", borderBottomWidth: 1 }}>
      <View
        style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", margin: 8 }}
      >
        <Text style={{ marginRight: 8 }}>{act.laikas.substring(0, 10)}</Text>
        <Text>{act.laikas.substring(11, 16)}</Text>
        <Text style={{ width: "100%" }}>Vietų: {act.vietu_skaicius}</Text>
        <Text style={{ width: "100%" }}>{act.adresas}</Text>
        <Text style={{ width: "100%" }}>{act.pavadinimas}</Text>
        <Text style={{ width: "100%" }}>{act.aprasymas}</Text>
        <Text style={{ width: "100%" }}>
          Treneris: {act.vardas} {act.pavarde}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
        <Button title="Rezervuoti"></Button>
        <Button title="X" color="red"></Button>
      </View>
    </View>
  );
}

export default Activity;
