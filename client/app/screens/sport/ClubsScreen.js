import React, { useEffect, useState } from "react";
import { Button, ScrollView, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

import Club from "./Club";

function ClubsScreen({ navigation }) {
  const [clubs, setClubs] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchClubs();
    }
  }, [isFocused]);

  const fetchClubs = () => {
    axios
      .get("http://localhost:5000/api/sport/sportclub")
      .then((res) => {
        setClubs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteClub = (id, disableDelete) => {
    disableDelete(true);
    axios
      .delete("http://localhost:5000/api/sport/sportclub", {
        data: { id },
      })
      .then(() => {
        fetchClubs();
      })
      .catch((err) => {
        console.log(err);
        disableDelete(false);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Pridėti salę"
        onPress={() => navigation.navigate("NewClub")}
      />
      <ScrollView style={{ marginHorizontal: 8 }}>
        {clubs.map((club) => (
          <Club club={club} onPress={deleteClub} key={club.id_sporto_sale} />
        ))}
      </ScrollView>
    </View>
  );
}

export default ClubsScreen;
