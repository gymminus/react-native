import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";

import Activity from "./Activity";

function ActivitiesScreen({ navigation }) {
  const [activities, setActivities] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchActivities();
    }
  }, [isFocused]);

  const fetchActivities = () => {
    axios
      .get("http://localhost:5000/api/sport/activities", { params: { id: 3 } })
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteActivity = (id, disableDelete) => {
    disableDelete(true);
    axios
      .delete("http://localhost:5000/api/sport/activities", {
        data: { id },
      })
      .then(() => {
        fetchActivities();
      })
      .catch((err) => {
        console.log(err);
        disableDelete(false);
      });
  };

  const reserveActivity = (id_n, id_su, disableReserve) => {
    disableReserve(true);
    axios
      .post("http://localhost:5000/api/sport/reservations", {
        data: { id_n, id_su },
      })
      .then(() => {
        fetchActivities();
      })
      .catch((err) => {
        console.log(err);
        disableReserve(false);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Pridėti užsiemimą"
        onPress={() => navigation.navigate("NewActivity")}
      ></Button>
      <ScrollView>
        {activities.map((act) => (
          <Activity
            act={act}
            onPressDelete={deleteActivity}
            onPressReserve={reserveActivity}
            key={act.id_Sporto_Uzsiemimas}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ActivitiesScreen;
