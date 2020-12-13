import React from "react";
import { View, Image, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDimensions } from "@react-native-community/hooks";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../state/actions/cart";

const Item = ({ item }) => {
  const { width } = useDimensions().window;
  const iconSize = width / 5 - 8;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const itemRedux = cart
    ? cart.find((itemRedux) => itemRedux.id_E_Preke === item.id_E_Preke)
    : {};
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
        <Text
          style={{ fontWeight: "bold", fontSize: "1.1em" }}
        >{`${item.kaina} €`}</Text>
      </View>
      <View>
        <Icon.Button
          iconStyle={{
            paddingLeft: 10,
            opacity: itemRedux && itemRedux.count > 9 ? 0.2 : 1,
          }}
          name="plus"
          disabled={itemRedux && itemRedux.count > 9}
          size={iconSize * 0.3}
          color="#000"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius={0}
          onPress={() => dispatch(addItem(item))}
        />
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {itemRedux ? itemRedux.count : 0}
        </Text>
        <Icon.Button
          name="minus"
          iconStyle={{
            paddingLeft: 10,
            opacity: !itemRedux ? 0.2 : 1,
          }}
          size={iconSize * 0.3}
          color="#000"
          disabled={!itemRedux}
          backgroundColor="rgb(255, 255, 255)"
          borderRadius={0}
          onPress={() => dispatch(removeItem(item.id_E_Preke))}
        ></Icon.Button>
      </View>
    </View>
  );
};

export default Item;
