import React from "react";
import { View, Image, Text } from "react-native";

const CartItem = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        flex: 1,
        flexDirection: "row",
      }}
    >
      <Image
        source={{ uri: item.nuotrauka }}
        style={{ width: 120, height: 90, flex: 3 }}
      ></Image>
      <View style={{ flex: 5, padding: 3 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "left",
            textAlignVertical: "center",
          }}
        >
          {item.pavadinimas}
        </Text>
        <Text style={{ flexShrink: 1, fontWeight: "bold" }}>
          {`Kiekis: ${item.count} Kaina: ${item.kaina} €`}
        </Text>
        <Text style={{ flexShrink: 1 }}>{item.aprasymas}</Text>
      </View>
    </View>
  );
};

export default CartItem;
