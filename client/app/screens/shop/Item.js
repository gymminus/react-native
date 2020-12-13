import React from "react";
import { View, Image, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDimensions } from "@react-native-community/hooks";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../state/actions/cart";

const Item = ({ item }) => {
  const { width } = useDimensions().window;
  const iconSize = width / 5 - 8;
  const dispatch = useDispatch();
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
        <Text style={{ fontWeight: "bold" }}>{item.pavadinimas}</Text>
        <Text style={{ flexShrink: 1 }}>{item.aprasymas}</Text>
      </View>
      <View>
        <Icon.Button
          name="plus"
          size={iconSize * 0.3}
          color="#000"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius={0}
          onPress={() => dispatch(addItem(item))}
        />
        <Icon.Button
          name="minus"
          size={iconSize * 0.3}
          color="#000"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius={0}
          onPress={() => dispatch(removeItem(item.id_E_Preke))}
        />
      </View>
    </View>
  );
};

export default Item;
