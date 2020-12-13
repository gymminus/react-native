import React from "react";
import { Text, Button, View, TextInput } from "react-native";
import axios from "axios";

function Writecomplaint({ navigation }) {
  const [complaint, SetPaSetComplaintssword] = React.useState("");
  const [userId, setUserID] = React.useState(3);
  const handleSet = () => {
    axios
      .post("http://localhost:5000/api/account/complaint", {
        complaint,
        userId,
      })
      .then((res) => {});
    navigation.navigate("Profile");
  };
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetPaSetComplaintssword(text)}
        value={complaint}
        placeholder='Nusiskundimas'
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Pateikti'
        onPress={() => handleSet()}
      />
    </View>
  );
}

export default Writecomplaint;
