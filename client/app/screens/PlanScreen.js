import React, { useState } from "react";
import { Text, View, Picker, StyleSheet, ScrollView } from "react-native";
import SingleWorkoutScreen from "./workout-screens/SingleWorkoutItem";
import WorkoutListScreen from "./workout-screens/WorkoutListScreen";

function PlanScreen({ props, navigation }) {
  const [selectedValue, setSelectedValue] = useState("biceps");
  const [selectedValueCreator, setSelectedValueCreator] = useState("admin");

  // 2 - treneris
  const user_id = 2;
  let loggedAs;
  if (user_id == 2 || user_id == 4) {
    loggedAs = "admin";
  } else {
    loggedAs = "user";
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.bodyPartSelectionText}>Select body part</Text>

        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Chest" value="chest" />
          <Picker.Item label="Biceps" value="biceps" />
          <Picker.Item label="Triceps" value="triceps" />
          <Picker.Item label="Legs" value="legs" />
          <Picker.Item label="Shoulders" value="shoulders" />
        </Picker>

        <Text style={styles.bodyPartSelectionText}>Select program creator</Text>

        <Picker
          selectedValue={selectedValueCreator}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValueCreator, itemIndex) =>
            setSelectedValueCreator(itemValueCreator)
          }
        >
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="User" value="user" />
        </Picker>

        <WorkoutListScreen
          category={selectedValue}
          categoryCreator={selectedValueCreator}
          navigation={navigation}
          loggedAs={loggedAs}
          userId={user_id}
        ></WorkoutListScreen>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 40,
    alignItems: "center",
  },
  bodyPartSelectionText: {
    color: "black",
    fontSize: 20,
    alignItems: "center",
  },
});

export default PlanScreen;
