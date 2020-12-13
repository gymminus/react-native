import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  FlatList,
  Button,
  Text,
  ViewBase,
} from "react-native";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let currentPrice = 0;
    for (let i = 0; i < items.length; i++) {
      currentPrice += items[i].kaina * items[i].count;
    }
    setPrice(currentPrice);
  }, [items]);

  const renderItem = ({ item }) => {
    return <CartItem item={item} />;
  };

  return (
    <>
      <ScrollView>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </ScrollView>
      {price > 0 ? (
        <View flexDirection="row" alignItems="stretch">
          <Button
            style={{ textAlign: "center", padding: 20 }}
            color="black"
            title={`Iš viso ${price} €`}
          />
        </View>
      ) : null}
      <View flexDirection="row" alignItems="stretch">
        <Button style={{ padding: 20 }} title="Užsakyti" color="black"></Button>
      </View>
    </>
  );
};

export default Cart;
