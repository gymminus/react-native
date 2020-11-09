import ShopScreen from "./ShopScreen";
import Cart from "./Cart";
import React from "react";

function ShopStack({ Stack }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Shop"
        component={ShopScreen}
        options={{ title: "Elektroninė parduotuvė" }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Prekių krepšelis" }}
      />
    </Stack.Navigator>
  );
}

export default ShopStack;
