import { ScrollView, Text, Button, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import SingleWorkoutItem from "./SingleWorkoutItem";
import { useIsFocused } from "@react-navigation/native";

function WorkoutListScreen({
  category,
  categoryCreator,
  loggedAs,
  userId,
  navigation,
}) {
  // get workouts
  const [workouts, setWorkouts] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetch("http://localhost:5000/api/workout/programs")
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        })
        .then((result) => {
          setWorkouts(result);
        });
    }
  }, [isFocused]);

  console.log(workouts);

  return (
    <ScrollView>
      <View style={styles.View}>
        <Text style={styles.Text}>Name </Text>
        <Text style={styles.Text}>Difficulty </Text>
        <Text style={styles.Text}>Category </Text>
        <Text style={styles.Text}>Duration </Text>
      </View>
      {workouts &&
        workouts
          .filter(
            (word) =>
              word.tipas === category &&
              (categoryCreator === "admin"
                ? word.fk_Treneriai != null
                : word.fk_Vartotojas == userId)
          )
          .map((workout) => {
            return (
              <SingleWorkoutItem
                key={workout.id_Sporto_Programa}
                loggedAs={loggedAs}
                workoutObj={workout}
                userId={userId}
                creator={categoryCreator}
                navigation={navigation}
              ></SingleWorkoutItem>
            );
          })}
      {(loggedAs != "admin" && categoryCreator === "admin") ||
      (loggedAs == "admin" && categoryCreator === "user") ? (
        <Text>Not available</Text>
      ) : (
        <Button
          title="ADD WORKOUT"
          onPress={() => {
            navigation.navigate("SingleWorkoutCreateScreen", {
              category: category,
              userId: userId,
              workouts: workouts,
              setWorkouts: setWorkouts,
            });
          }}
        ></Button>
      )}
      {/* <Button title="ADD WORKOUT" onPress={() => {navigation.navigate("SingleWorkoutCreateScreen")}}></Button> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  Text: {
    alignItems: "center",
    paddingRight: "6px",
  },
  View: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default WorkoutListScreen;
