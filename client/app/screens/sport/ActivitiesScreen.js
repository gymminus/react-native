import React from "react";
import { Button, Text, View } from "react-native";

import Activity from "./Activity";

function ActivitiesScreen({ navigation }) {
  const activities = [
    { datetime: "2020-11-10 17:30", location: "Baršausko g. 39" },
    { datetime: "2020-11-11 17:30", location: "Baršausko g. 39" },
  ];

  return (
    <View>
      <Button
        title="Pridėti užsiemimą (treneris)"
        onPress={() => navigation.navigate("NewActivity")}
      ></Button>
      {activities.map((act, index) => (
        <Activity act={act} key={index} />
      ))}
    </View>
  );
}

export default ActivitiesScreen;
