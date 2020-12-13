import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
  Picker,
} from "react-native";
import React, { useEffect, useState } from "react";

function SingleWorkoutScreen({ route }) {
  // get workouts
  const [workoutExercises, setExercises] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:5000/api/workout/programs/" +
        route.params.workoutObj.id_Sporto_Programa
    )
      .then((res) => res.json())
      .then((result) => {
        setExercises(result);
      });
  }, []);

  console.log(workoutExercises);

  return (
    <View styles={styles.container}>
      {/* <Text>{route.params.workoutObj.id_Sporto_Programa}</Text> */}
      <Text
        style={{
          fontWeight: "bold",
          alignSelf: "center",
          fontSize: "25px",
          marginBottom: "25px",
        }}
      >
        {route.params.workoutObj.pavadinimas}
      </Text>
      <Text
        style={{ alignSelf: "left", fontSize: "20px", marginBottom: "15px" }}
      >
        PRATIMAI
      </Text>
      {workoutExercises.map((exercise) => {
        return (
          <Text key={exercise.id} style={{ fontSize: "20px" }}>
            {exercise.pavadinimas}
          </Text>
        );
      })}
      {/* {console.log(route)} */}

      {route.params.loggedAs == "admin" ||
      (route.params.loggedAs != "admin" && route.params.creator == "user") ? (
        <Button
          title="DELETE"
          onPress={() => {
            route.params.navigation.navigate("SingleWorkoutDeleteScreen", {
              workoutObj: route.params.workoutObj,
            });
          }}
        ></Button>
      ) : (
        ""
      )}
      {route.params.loggedAs == "admin" ||
      (route.params.loggedAs != "admin" && route.params.creator == "user") ? (
        <Button
          title="EDIT"
          onPress={() => {
            route.params.navigation.navigate("SingleWorkoutEditScreen", {
              workoutObj: route.params.workoutObj,
              exercises: workoutExercises,
            });
          }}
        ></Button>
      ) : (
        ""
      )}

      <Picker>
        <Picker.Item label="1 star" value="1" />
        <Picker.Item label="2 star" value="2" />
        <Picker.Item label="3 star" value="3" />
        <Picker.Item label="4 star" value="4" />
        <Picker.Item label="5 star" value="5" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  buttonTxt: {
    color: "black",
  },
});

export default SingleWorkoutScreen;
