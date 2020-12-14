import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

import Activity from "./Activity";

function ActivitiesScreen({ navigation }) {
  const [activities, setActivities] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchClubs();
    }
  }, [isFocused]);

  const fetchClubs = () => {
    axios
      .get("http://localhost:5000/api/sport/activities")
      .then((res) => {
        console.log(res.data);
        setActivities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Button
        title="Pridėti užsiemimą"
        onPress={() => navigation.navigate("NewActivity")}
      ></Button>
      {activities.map((act, index) => (
        <Activity act={act} key={index} />
      ))}
    </View>
  );
}

export default ActivitiesScreen;
