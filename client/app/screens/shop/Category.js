import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

const Category = ({ title, onCategorySelect }) => {
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
      <TouchableHighlight onPress={onCategorySelect}>
        <Text>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Category;
