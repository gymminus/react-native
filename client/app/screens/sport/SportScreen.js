import React from "react";
import { Button, Text, View } from "react-native";

function SportScreen({ test, navigation }) {
  return (
    <View>
      <Button
        title="Rezervacijos"
        onPress={() => navigation.navigate("Reservations")}
      ></Button>
      <Button
        title="Salės"
        onPress={() => navigation.navigate("Clubs")}
      ></Button>
      <Button
        title="Užsiemimai"
        onPress={() => navigation.navigate("Activities")}
      ></Button>
      <Button
        title="Žemėlapis"
        onPress={() => navigation.navigate("Map")}
      ></Button>
    </View>
  );
}

export default SportScreen;
