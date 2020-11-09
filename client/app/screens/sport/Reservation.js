import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Rezervation({ datetime }) {
  return (
    <TouchableOpacity style={{ flexDirection: "row", margin: 8 }}>
      <Text style={{ flex: 1 }}>{datetime}</Text>
      <TouchableOpacity>
        <Text style={{ color: "red" }}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default Rezervation;
