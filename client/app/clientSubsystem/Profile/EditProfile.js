import React, { useEffect } from "react";
import { Text, Button, View, TextInput } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
const moment = require("moment");

function EditProfile({ navigation }) {
  const [name, SetName] = React.useState();
  const [surname, Setsurname] = React.useState();
  const [bornDate, SetDate] = React.useState();
  const [email, Setemail] = React.useState();
  const [userId, SetUserId] = React.useState(3);
  const isFocused = useIsFocused();

  const handleSet = () => {
    axios
      .post("http://localhost:5000/api/account/user/set", {
        name,
        surname,
        bornDate,
        email,
        userId,
      })
      .then((res) => {});
    navigation.navigate("Profile");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/account/user`, {
        params: { userId: 3 },
      })
      .then((res) => {
        SetName(res.data[0].vardas);
        Setsurname(res.data[0].pavarde);
        SetDate(moment(res.data[0].gimimo_data).format("YYYY-MM-DD"));
        Setemail(res.data[0].el_pastas);
      });
  }, [isFocused]);
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetName(text)}
        value={name}
        placeholder='Vardas'
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => Setsurname(text)}
        value={surname}
        placeholder='Pavarde'
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => SetDate(text)}
        value={bornDate}
        placeholder='Gimimo data'
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => Setemail(text)}
        value={email}
        placeholder='Elektroninis paštas'
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Išsaugoti'
        onPress={() => handleSet()}
      />
    </View>
  );
}

export default EditProfile;
