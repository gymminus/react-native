import React, { useEffect, useState } from "react";
import {
  TextInput,
  FlatList,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDimensions } from "@react-native-community/hooks";
import Item from "./Item";
import CategoryModal from "./CategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { loadItems } from "../../state/actions/item";

const ShopScreen = ({ navigation }) => {
  const [value, onChangeText] = useState("Įveskite paieškos frazę");
  const [category, selectCategory] = useState("Pasirinkite kategoriją");
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const { width } = useDimensions().window;
  const iconSize = width / 5 - 8;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);

  useEffect(() => {
    dispatch(loadItems());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Item
        title={item.pavadinimas}
        description={item.aprasymas}
        img={item.nuotrauka}
      />
    );
  };

  return items.length !== 0 ? (
    <ScrollView>
      {console.log(items)}
      <CategoryModal
        categoryModalVisible={categoryModalVisible}
        onCategorySelect={() => {
          setCategoryModalVisible(!categoryModalVisible);
        }}
      />
      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          padding: 15,
          marginVertical: 8,
          marginHorizontal: 8,
        }}
        onChangeText={(text) => onChangeText(text)}
        onFocus={() => onChangeText("")}
        value={value}
      ></TextInput>
      <View
        style={{
          flexDirection: "row",
          padding: 8,
          marginHorizontal: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            flex: 1,
            backgroundColor: "white",
            fontWeight: "bold",
            textAlign: "center",
            padding: 20,
          }}
          color={"black"}
          title="Pasirinkti kategoriją"
          onPress={() => setCategoryModalVisible(!categoryModalVisible)}
        ></Button>
        <Icon.Button
          style={{
            flex: 0.6,
            padding: 3,
            alignSelf: "center",
            alignItems: "center",
          }}
          name="shopping-cart"
          size={iconSize * 0.6}
          color="black"
          backgroundColor="0,0,0"
          onPress={() => navigation.navigate("Cart")}
        />
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </ScrollView>
  ) : null;
};

export default ShopScreen;
