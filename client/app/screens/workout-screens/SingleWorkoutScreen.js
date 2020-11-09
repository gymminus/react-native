import { ScrollView, Text, View, StyleSheet, Button, Picker } from "react-native";
import React from "react";


function SingleWorkoutScreen({route}) {

    return (
        <View styles={styles.container}>
            <Text>{route.params.id}</Text>
            <Text>{route.params.title}</Text>
            {/* {console.log(route)} */}
            <Button title="DELETE" onPress={() => {route.params.navigation.navigate("SingleWorkoutDeleteScreen")}}></Button>
            <Button title="EDIT" onPress={() => {route.params.navigation.navigate("SingleWorkoutEditScreen")}}></Button>

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
      justifyContent: "center"
    },
    buttonTxt: {
        color: "black"
    }
});

export default SingleWorkoutScreen;