import { ScrollView, Text, View, Button } from "react-native";
import React from "react";

function SingleWorkoutDeleteScreen({ route }) {
  const handleDelete = () => {
    const data = { id: route.params.workoutObj.id_Sporto_Programa };
    fetch("http://localhost:5000/api/workout/programs-delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((d) => {
        console.log("Success:", d);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View>
      <Button title="YES" onPress={handleDelete}></Button>
      <Button title="NO"></Button>
    </View>
  );
}
export default SingleWorkoutDeleteScreen;
