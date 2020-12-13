import Axios from "axios";
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

function MyHolidays({ navigation }) {
  const [holidays, settHolidays] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/account/holidays`, {
        params: { userId: 3 },
      })
      .then((res) => {
        settHolidays(res.data);
      });
  }, [isFocused]);

  return (
    <ScrollView>
      {holidays &&
        holidays.map((holiday) => (
          <SafeAreaView>
            <Text>Atostogos prasideda nuo: </Text>
            <Text>{moment(holiday.pradzia).format("YYYY-MM-DD")} </Text>
            <Text>Atostogos baigiasi: </Text>
            <Text>{moment(holiday.pabaiga).format("YYYY-MM-DD")} </Text>
            <Text> </Text>
          </SafeAreaView>
        ))}
      <Button
        title='Pasiimti atostogas'
        onPress={() => navigation.navigate("HolidaysForm")}
      ></Button>
    </ScrollView>
  );
}

export default MyHolidays;
