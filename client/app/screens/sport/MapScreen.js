import React from "react";
import { Platform, View, StyleSheet } from "react-native";
import Map from "./Map";

function MapScreen(props) {
  return <View>{Platform.OS !== "web" ? <Map /> : null}</View>;
}

export default MapScreen;
