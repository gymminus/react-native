import { ScrollView, Text, Button } from "react-native";
import React from "react";
import SingleWorkoutItem from "./SingleWorkoutItem";

function WorkoutListScreen({ category, navigation}) {
  const workouts = [
    {
      id: 1,
      title: "pirma programa",
      duration: 90,
      category: "biceps",
    },
    {
      id: 2,
      title: "antra programa",
      duration: 30,
      category: "biceps",
    },
    {
      id: 3,
      title: "trecia programa",
      duration: 65,
      category: "triceps",
    },
  ];

  return (
    <ScrollView>
      {workouts
        .filter((word) => word.category === category)
        .map((workout) => {
          return (
            <SingleWorkoutItem
            key={workout.id}
            id={workout.id}
            title={workout.title}
            navigation={navigation}
          ></SingleWorkoutItem>
          );
        })}
    <Button title="ADD WORKOUT" onPress={() => {navigation.navigate("SingleWorkoutCreateScreen")}}></Button>
    </ScrollView>
  );
}
export default WorkoutListScreen;
