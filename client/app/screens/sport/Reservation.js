import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Moment from "moment";

function Rezervation({ res, onPressDelete }) {
  const [disableDelete, setDisableDelete] = useState(false);
  return (
    <View style={{ flexDirection: "row", margin: 8, borderBottomWidth: 1 }}>
      <TouchableOpacity style={{ flex: 1, flexDirection: "column" }}>
        <Text>{Moment(res.laikas).format("YYYY-MM-DD HH:mm")}</Text>
        <Text>{res.adresas}</Text>
        <Text>{res.pavadinimas}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disableDelete}
        onPress={() => {
          onPressDelete(res.id_Rezervacija, setDisableDelete);
        }}
        style={{ alignSelf: "center" }}
      >
        <Text style={{ color: "red" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Rezervation;
