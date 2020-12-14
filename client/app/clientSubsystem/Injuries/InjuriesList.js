import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
const moment = require("moment");

function InjuriesList({ navigation }) {
  const [injuries, setInjuries] = useState();
  const isFocused = useIsFocused();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/account/injuries`, {
        params: { userId: 3 },
      })
      .then((res) => {
        setInjuries(res.data);
      });
  }, [isFocused]);
  return (
    <ScrollView>
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Registruoti naują traumą'
        onPress={() => navigation.navigate("InjuriesRegistration")}
      />
      {injuries &&
        injuries.map((injury) => (
          <SafeAreaView>
            <Text>{moment(injury.data).format("YYYY-MM-DD")}</Text>
            <Text>{injury.aprasymas}</Text>
            <Text> </Text>
          </SafeAreaView>
        ))}
    </ScrollView>
  );
}

export default InjuriesList;
