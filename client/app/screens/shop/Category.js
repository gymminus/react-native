import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../state/actions/category";

const Category = ({ title, onCategorySelect, id }) => {
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
      <TouchableHighlight
        onPress={
          (onCategorySelect,
          () => {
            dispatch(changeCategory(id));
          })
        }
      >
        <Text>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Category;
