import React from "react";
import { Text, Button, View, TextInput } from "react-native";

function InjuriesRegistration({ navigation }) {
  const [aboutInjury, SetaboutInjury] = React.useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetaboutInjury(text)}
        value={aboutInjury}
        placeholder="Rašykite traumos apibūdinimą"
      />

      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title="Registruoti traumą"
        onPress={() => navigation.navigate("InjuriesList")}
      />
    </View>
  );
}

export default InjuriesRegistration;
