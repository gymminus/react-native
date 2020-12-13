import React from "react";
import { Text, Button, View, TextInput } from "react-native";

function Writecomplaint({ navigation }) {
  const [complaint, SetPaSetComplaintssword] = React.useState("");
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetPaSetComplaintssword(text)}
        value={complaint}
        placeholder="Nusiskundimas"
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title="Pateikti"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default Writecomplaint;
