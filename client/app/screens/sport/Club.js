import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Club({ location }) {
  return (
    <TouchableOpacity style={{ flexDirection: "row", margin: 8 }}>
      <Text style={{ flex: 1 }}>{location}</Text>
      <TouchableOpacity>
        <Text style={{ color: "red" }}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default Club;
