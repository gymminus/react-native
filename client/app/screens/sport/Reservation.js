import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Moment from "moment";

function Rezervation({ res }) {
  return (
    <View style={{ flexDirection: "row", margin: 8, borderBottomWidth: 1 }}>
      <TouchableOpacity style={{ flex: 1, flexDirection: "column" }}>
        <Text>{Moment(res.laikas).format("YYYY-MM-DD HH:mm")}</Text>
        <Text>{res.adresas}</Text>
        <Text>{res.pavadinimas}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignSelf: "center" }}>
        <Text style={{ color: "red" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Rezervation;
