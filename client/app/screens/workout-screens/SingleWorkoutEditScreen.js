import { ScrollView, Text, View, Button } from "react-native";
import React from "react";

function SingleWorkoutEditScreen({ route }) {
  return (
    <View>
      <Text>{route.params.workoutObj.id_Sporto_Programa}</Text>
      <Button title="YES"></Button>
      <Button title="NO"></Button>
    </View>
  );
}
export default SingleWorkoutEditScreen;
