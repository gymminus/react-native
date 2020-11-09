import React from "react";
import { ScrollView, View, FlatList, Button } from "react-native";
import CartItem from "./CartItem";
import items from "./Items";

const Cart = () => {
  const renderItem = ({ item }) => {
    return <CartItem title={item.title} />;
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
      <View flexDirection="row" alignItems="stretch">
        <Button style={{ padding: 20 }} title="Užsakyti" color="black"></Button>
      </View>
    </>
  );
};

export default Cart;
