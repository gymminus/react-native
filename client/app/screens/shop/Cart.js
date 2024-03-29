import React, { useEffect, useState } from "react";
import { ScrollView, View, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { makeOrder } from "../../state/actions/cart";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
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
          keyExtractor={(item) => item.id_E_Preke}
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
        <Button
          style={{ padding: 20 }}
          onPress={() => dispatch(makeOrder(items, price))}
          title="Užsakyti"
          color="black"
        ></Button>
      </View>
    </>
  );
};

export default Cart;
