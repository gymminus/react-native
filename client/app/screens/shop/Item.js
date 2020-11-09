import React from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDimensions } from "@react-native-community/hooks";

const Item = ({ title, description }) => {
  const { width } = useDimensions().window;
  const iconSize = width / 5 - 8;
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
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Text style={{ flexShrink: 1 }}>{description}</Text>
      </View>
      <View>
        <Icon
          style={{ flex: 1, padding: 3 }}
          name="plus"
          size={iconSize * 0.3}
          color="#000"
        />
        <Icon
          style={{ flex: 1, padding: 3 }}
          name="minus"
          size={iconSize * 0.3}
          color="#000"
        />
      </View>
    </View>
  );
};

export default Item;
