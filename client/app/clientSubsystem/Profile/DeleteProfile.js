import React from "react";
import { Text, Button, View, TextInput } from "react-native";
import axios from "axios";

function DeleteProfile({ navigation }) {
  const [userId, setuserId] = React.useState(5);
  const handleSet = () => {
    axios
      .post("http://localhost:5000/api/account/deleteUser", {
        userId,
      })
      .then((res) => {});
    navigation.navigate("Profile");
  };
  return (
    <View>
      <Text>Ar tikrai norite trinti?</Text>
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Taip'
        onPress={() => handleSet()}
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Ne'
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default DeleteProfile;
