import React, { useState } from "react";
import { useDimensions } from "@react-native-community/hooks";
import {
  Text,
  View,
  Picker,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

function SingleWorkoutItem({ id, title, category, navigation}) {
  const { width, height } = useDimensions().window;

  return (

    // <View style={{width: width, height: height/5, backgroundColor:"black"}}>
        // <TouchableOpacity style={{width: width, height: height/5, backgroundColor:"grey"}}>
        <TouchableOpacity style={{width: width, height: height/5, backgroundColor:"grey", paddingTop: 0, flex:1, flexDirection: "row"}} onPress={() => navigation.navigate("SingleWorkoutScreen", {id: id, title: title, navigation: navigation})}>
          <Image
            source={{
              uri:
                "https://cnet1.cbsistatic.com/img/sRejNDr7D67rMcvwI11v6xrJcho=/940x0/2019/11/12/e66cc0f3-c6b8-4f6e-9561-e23e08413ce1/gettyimages-1002863304.jpg",
            }}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.loremIpsum}>{title}</Text>
          <Text style={styles.loremIpsum}>{category}</Text>
        </TouchableOpacity>
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  button: {
    top: 13,
    width: 375,
    height: 169,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    left: 0,
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "black",
    marginTop: 5,
    marginLeft: "auto",
  },
  image: {
    top: 0,
    left: 0,
    width: 110,
    height: 200,
    position: "relative",
  },
  buttonStack: {
    width: 375,
    height: 200,
  },
});

export default SingleWorkoutItem;
