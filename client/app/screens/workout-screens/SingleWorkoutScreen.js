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
  const [selectedValue, setSelectedValue] = useState(1);
  const [workoutExercises, setExercises] = useState([]);
  const [rating, setRating] = useState(1);
  useEffect(() => {
    getRating();
    fetch(
      "http://localhost:5000/api/workout/programs/" +
        route.params.workoutObj.id_Sporto_Programa
    )
      .then((res) => res.json())
      .then((result) => {
        setExercises(result);
      });
  }, [rating]);

  const getRating = () => {
    fetch(
      "http://localhost:5000/api/workout/programs-rating/" +
        route.params.workoutObj.id_Sporto_Programa
    )
      .then((res) => res.json())
      .then((result) => {
        setRating(result[0].average);
      });
  };

  const postRating = (rating) => {
    // console.log(rating);
    const data = {
      userID: route.params.userId,
      workoutID: route.params.workoutObj.id_Sporto_Programa,
      rating: rating,
    };

    fetch("http://localhost:5000/api/workout/programs-rating/", {
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
        Description: {route.params.workoutObj.aprasymas}
      </Text>

      <Text
        style={{ alignSelf: "left", fontSize: "20px", marginBottom: "15px" }}
      >
        Difficulty: {route.params.workoutObj.sunkumas}
      </Text>

      <Text
        style={{ alignSelf: "left", fontSize: "20px", marginBottom: "15px" }}
      >
        Duration: {route.params.workoutObj.trukmeMin} min
      </Text>

      <Text
        style={{ alignSelf: "left", fontSize: "20px", marginBottom: "15px" }}
      >
        Exercises
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
          title="EDIT"
          style={{ marginTop: "15px" }}
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
      {route.params.loggedAs == "admin" ||
      (route.params.loggedAs != "admin" && route.params.creator == "user") ? (
        <Button
          title="DELETE"
          style={{ marginTop: "15px" }}
          onPress={() => {
            route.params.navigation.navigate("SingleWorkoutDeleteScreen", {
              workoutObj: route.params.workoutObj,
            });
          }}
        ></Button>
      ) : (
        ""
      )}

      {route.params.userId != 2 ? (
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => {
            setRating(itemIndex + 1);
            postRating(itemIndex + 1);
            console.log(itemValue, itemIndex);
          }}
        >
          <Picker.Item label="1 star" value="1" />
          <Picker.Item label="2 star" value="2" />
          <Picker.Item label="3 star" value="3" />
          <Picker.Item label="4 star" value="4" />
          <Picker.Item label="5 star" value="5" />
        </Picker>
      ) : (
        <Text>Trainer can not rate!</Text>
      )}

      <Text>Bendras vertinimas: {rating}</Text>
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
