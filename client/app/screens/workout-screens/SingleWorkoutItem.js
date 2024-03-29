import React, { useState } from "react";
import { useDimensions } from "@react-native-community/hooks";
import {
  Text,
  View,
  Picker,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";

function SingleWorkoutItem({
  userId,
  loggedAs,
  creator,
  workoutObj,
  navigation,
}) {
  const { width, height } = useDimensions().window;

  return (
    // <View style={{width: width, height: height/5, backgroundColor:"black"}}>
    // <TouchableOpacity style={{width: width, height: height/5, backgroundColor:"grey"}}>
    <TouchableOpacity
      style={{
        width: width,
        height: height / 10,
        backgroundColor: "grey",
        paddingTop: 0,
        flex: 1,
        borderColor: "black",
        borderWidth: "1px",
        flexDirection: "row",
      }}
      activeOpacity={1}
      onPress={() =>
        navigation.navigate("SingleWorkoutScreen", {
          workoutObj: workoutObj,
          loggedAs: loggedAs,
          userId: userId,
          creator: creator,
          navigation: navigation,
        })
      }
    >
      <Text style={styles.loremIpsum}>{workoutObj.pavadinimas}</Text>
      <Text style={styles.loremIpsum}>{workoutObj.aprasymas}</Text>
      <Text style={styles.loremIpsum}>{workoutObj.sunkumas}</Text>
      <Text style={styles.loremIpsum}>{workoutObj.tipas}</Text>
      <Text style={styles.loremIpsum}>{workoutObj.trukmeMin} min</Text>
    </TouchableOpacity>
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  Text: {
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: "25px",
    marginTop: 5,
    marginLeft: "auto",
  },
  buttonStack: {
    width: 375,
    height: 200,
  },
});

export default SingleWorkoutItem;
