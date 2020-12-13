import { ScrollView, Text, View, Button, Picker } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import WorkoutListScreen from "./WorkoutListScreen";

function SingleWorkoutCreateScreen({ route }) {
  const [name, onChangeName] = useState("");
  const [difficulty, onChangeDiff] = useState("");
  const [desc, onChangeDesc] = useState("");
  const [duration, onChangeDur] = useState("");
  const [exercise1, onChangeE1] = useState("");
  const [exercise2, onChangeE2] = useState("");
  const [exercise3, onChangeE3] = useState("");
  const [exercise4, onChangeE4] = useState("");
  const [exercise5, onChangeE5] = useState("");

  const handle = () => {
    let fk_Vartotojas;
    let fk_Treneriai;
    if (route.params.userId == 2 || route.params.userId == 4) {
      fk_Treneriai = route.params.userId;
      fk_Vartotojas = null;
    } else {
      fk_Treneriai = null;
      fk_Vartotojas = route.params.userId;
    }
    const data = {
      fk_Treneriai: fk_Treneriai,
      fk_Vartotojas: fk_Vartotojas,
      pavadinimas: name,
      sunkumas: difficulty,
      aprasymas: desc,
      trukmeMin: duration,
      tipas: route.params.category,
      pratimai: [],
    };
    if (exercise1 != "") {
      data.pratimai[0] = exercise1;
    }
    if (exercise2 != "") {
      data.pratimai[1] = exercise2;
    }
    if (exercise3 != "") {
      data.pratimai[2] = exercise3;
    }
    if (exercise4 != "") {
      data.pratimai[3] = exercise4;
    }
    if (exercise5 != "") {
      data.pratimai[4] = exercise5;
    }
    // console.log(data);

    fetch("http://localhost:5000/api/workout/programs", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((d) => {
        console.log("Success:", d);
        data.id_Sporto_Programa = d.inserted_id;
        route.params.workouts.push(data);
        route.params.setWorkouts(route.params.workouts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Name"
        onChangeText={(text) => onChangeName(text)}
        value={name}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Difficulty"
        onChangeText={(text) => onChangeDiff(text)}
        value={difficulty}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Description"
        onChangeText={(text) => onChangeDesc(text)}
        value={desc}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Duration"
        onChangeText={(text) => onChangeDur(text)}
        value={duration}
      />

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Exercise 1"
        onChangeText={(text) => onChangeE1(text)}
        value={exercise1}
      />

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Exercise 2"
        onChangeText={(text) => onChangeE2(text)}
        value={exercise2}
      />

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Exercise 3"
        onChangeText={(text) => onChangeE3(text)}
        value={exercise3}
      />

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Exercise 4"
        onChangeText={(text) => onChangeE4(text)}
        value={exercise4}
      />

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Exercise 5"
        onChangeText={(text) => onChangeE5(text)}
        value={exercise5}
      />

      <Button
        value="submit"
        title="Submit"
        style={{ paddingTop: "50px" }}
        onPress={handle}
      />
    </View>
  );
}
export default SingleWorkoutCreateScreen;
