import React from "react";
import { Text, Button, View, TextInput } from "react-native";
import axios from "axios";

function InjuriesRegistration({ navigation }) {
  const [aboutInjury, SetaboutInjury] = React.useState("");
  const [user, Setuser] = React.useState(3);
  const handleSet = () => {
    axios
      .post("http://localhost:5000/api/account/injuries/set", {
        aboutInjury,
        user,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    navigation.navigate("InjuriesList");
  };
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetaboutInjury(text)}
        value={aboutInjury}
        placeholder='Rašykite traumos apibūdinimą'
      />

      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Registruoti traumą'
        onPress={() => handleSet()}
      />
    </View>
  );
}

export default InjuriesRegistration;
