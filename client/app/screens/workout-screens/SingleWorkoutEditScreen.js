import { ScrollView, Text, View, Button, Picker } from "react-native";
import { TextInput } from "react-native";
import React, { useState, useEffect } from "react";

function SingleWorkoutEditScreen({ route }) {
  const [name, onChangeName] = useState(route.params.workoutObj.pavadinimas);
  const [difficulty, onChangeDiff] = useState(route.params.workoutObj.sunkumas);
  const [desc, onChangeDesc] = useState(route.params.workoutObj.aprasymas);
  const [duration, onChangeDur] = useState(route.params.workoutObj.trukmeMin);
  const [exercise1, onChangeE1] = useState("");
  const [exercise2, onChangeE2] = useState("");
  const [exercise3, onChangeE3] = useState("");
  const [exercise4, onChangeE4] = useState("");
  const [exercise5, onChangeE5] = useState("");

  useEffect(() => {
    if (route.params.exercises[0]) {
      onChangeE1(route.params.exercises[0].pavadinimas);
    }
    if (route.params.exercises[1]) {
      onChangeE2(route.params.exercises[1].pavadinimas);
    }
    if (route.params.exercises[2]) {
      onChangeE3(route.params.exercises[2].pavadinimas);
    }
    if (route.params.exercises[3]) {
      onChangeE4(route.params.exercises[3].pavadinimas);
    }
    if (route.params.exercises[4]) {
      onChangeE5(route.params.exercises[4].pavadinimas);
    }
  }, [route]);

  const handleUpdate = () => {
    const data = {
      id_Sporto_Programa: route.params.workoutObj.id_Sporto_Programa,
      pavadinimas: name,
      sunkumas: difficulty,
      aprasymas: desc,
      trukmeMin: duration,
      pratimai: [],
      pratimai_old: [],
    };

    if (exercise1 != "") {
      data.pratimai[0] = exercise1;
      if (route.params.exercises[0]) {
        data.pratimai_old[0] = route.params.exercises[0].pavadinimas;
      }
    }
    if (exercise2 != "") {
      data.pratimai[1] = exercise2;
      if (route.params.exercises[1]) {
        data.pratimai_old[1] = route.params.exercises[1].pavadinimas;
      }
    }
    if (exercise3 != "") {
      data.pratimai[2] = exercise3;
      if (route.params.exercises[2]) {
        data.pratimai_old[2] = route.params.exercises[2].pavadinimas;
      }
    }
    if (exercise4 != "") {
      data.pratimai[3] = exercise4;
      if (route.params.exercises[3]) {
        data.pratimai_old[3] = route.params.exercises[3].pavadinimas;
      }
    }
    if (exercise5 != "") {
      data.pratimai[4] = exercise5;
      if (route.params.exercises[4]) {
        data.pratimai_old[4] = route.params.exercises[4].pavadinimas;
      }
    }

    fetch("http://localhost:5000/api/workout/programs-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((d) => {
        console.log("Success:", d);
        // data.id_Sporto_Programa = d.inserted_id;
        // route.params.workouts.push(data);
        // route.params.setWorkouts(route.params.workouts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // console.log(route.params.exercises);

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
        title="Update"
        style={{ paddingTop: "50px" }}
        onPress={handleUpdate}
      />
    </View>
  );
}
export default SingleWorkoutEditScreen;
