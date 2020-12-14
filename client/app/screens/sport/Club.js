import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Club = ({ club, onPress }) => {
  const [disable, setDisable] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <TouchableOpacity
      style={[
        {
          flex: 1,
          flexDirection: "row",
          marginBottom: 8,
          borderBottomWidth: 0.5,
          padding: 4,
        },
        expanded ? { paddingBottom: 8 } : {},
      ]}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
    >
      <View
        style={[
          { flex: 1, flexDirection: "row" },
          expanded ? { alignSelf: "flex-start", flexDirection: "column" } : {},
        ]}
      >
        <Text
          style={[
            { flex: 1, maxWidth: "50%" },
            expanded ? { fontWeight: "bold", maxWidth: "100%" } : {},
          ]}
          numberOfLines={1}
        >
          {club.adresas}
        </Text>
        <Text
          style={[
            { flex: 1 },
            expanded ? { fontWeight: "bold", marginBottom: 4 } : {},
          ]}
        >
          Vietų: {club.vietu_skaicius}
        </Text>
        <Text numberOfLines={expanded ? null : 3} style={{ flex: 1 }}>
          {club.aprasymas}
        </Text>
      </View>
      <TouchableOpacity
        style={{ flex: 0.05 }}
        disabled={disable}
        onPress={() => {
          onPress(club.id_sporto_sale, setDisable);
        }}
      >
        <Text style={{ color: "red", alignSelf: "flex-end" }}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Club;
