import React from "react";
import { View, Image, Text } from "react-native";

const CartItem = ({ title, description }) => {
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
        source={{ uri: "https://picsum.photos/120/90" }}
        style={{ width: 120, height: 90, flex: 3 }}
      ></Image>
      <View style={{ flex: 5, padding: 3 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          {title}
        </Text>
        <Text style={{ flexShrink: 1 }}>{description}</Text>
      </View>
    </View>
  );
};

export default CartItem;
