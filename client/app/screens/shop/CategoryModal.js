import React from "react";
import { Modal, StyleSheet, View, FlatList } from "react-native";
import Category from "./Category";

const CategoryModal = ({
  categoryModalVisible,
  onCategorySelect,
  categories,
}) => {
  const renderCategory = ({ item }) => {
    return (
      <Category
        title={item.pavadinimas}
        id={item.id_E_Kategorija}
        onCategorySelect={onCategorySelect}
      />
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={categoryModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={(category) => category.id_E_Kategorija}
            ></FlatList>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default CategoryModal;
