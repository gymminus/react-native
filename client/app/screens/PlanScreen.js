import React, { useState } from "react";
import { Text, View, Picker, StyleSheet, ScrollView } from 'react-native';
import SingleWorkoutScreen from "./workout-screens/SingleWorkoutItem";
import WorkoutListScreen from "./workout-screens/WorkoutListScreen";


function PlanScreen({props, navigation}) {
    const [selectedValue, setSelectedValue] = useState("biceps");
    return (

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

            
            <WorkoutListScreen category={selectedValue} navigation={navigation} ></WorkoutListScreen>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // paddingTop: 40,
        alignItems: "center"
    },
    bodyPartSelectionText: {
        color: "black",
        fontSize: 20,
        alignItems: "center"
    }
});

export default PlanScreen;