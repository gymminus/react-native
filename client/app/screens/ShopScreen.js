import React, { useState } from "react";
import {
  TextInput,
  FlatList,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDimensions } from "@react-native-community/hooks";

function ShopScreen() {
  const [value, onChangeText] = useState("Įveskite paieškos frazę");
  const [category, selectCategory] = useState("Pasirinkite kategoriją");
  const { width } = useDimensions().window;
  const iconSize = width / 5 - 8;

  const items = [
    {
      id: "1",
      title: "Pirma prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "2",
      title: "Antra prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "3",
      title: "Trečia prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "4",
      title: "Ketvirta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "5",
      title: "Penkta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "6",
      title: "Šešta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "7",
      title: "Septinta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "8",
      title: "Aštunta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "9",
      title: "Devinta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "10",
      title: "Dešimta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "11",
      title: "Vienuolikta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "12",
      title: "Dvylikta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "13",
      title: "Trylikta prekė",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const Item = ({ title, description }) => {
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

  const renderItem = ({ item }) => {
    return <Item title={item.title} description={item.description} />;
  };
  return (
    <ScrollView>
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
        <Text
          style={{
            flex: 1,
            backgroundColor: "white",
            fontWeight: "bold",
            textAlign: "center",
            padding: 20,
          }}
        >
          Pasirinkti kategoriją
        </Text>
        <Icon
          style={{
            flex: 0.6,
            padding: 3,
            alignSelf: "center",
            textAlign: "center",
          }}
          name="shopping-cart"
          size={iconSize * 0.6}
          color="#000"
        />
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </ScrollView>
  );
}

export default ShopScreen;
