import Axios from "axios";
import React, { useState } from "react";
import { Text, Button, TextInput, View, SafeAreaView } from "react-native";
import axios from "axios";
function Holidays({ navigation }) {
  const [datefrom, setDatefrom] = useState();
  const [dateto, setDateto] = useState();
  const [user, setUser] = useState(3);
  const handleFrom = (event) => {
    setDatefrom(event.target.value);
    console.log(datefrom);
  };
  const handleTo = (event) => {
    setDateto(event.target.value);
    console.log(datefrom);
  };
  const handleSet = () => {
    axios
      .post("http://localhost:5000/api/account/holidays/set", {
        datefrom,
        dateto,
        user,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    navigation.navigate("Holidays");
  };
  return (
    <SafeAreaView>
      <Text>Nuo </Text>
      <input type='date' onChange={handleFrom}></input>
      <Text>Iki </Text>
      <input type='date' onChange={handleTo}></input>
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Pasiimti atostogas'
        onPress={() => handleSet()}
      />
    </SafeAreaView>
  );
}

export default Holidays;
