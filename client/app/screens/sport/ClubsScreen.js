import React from "react";
import { Button, View } from "react-native";

import Club from "./Club";

function ClubsScreen({ navigation }) {
  const clubs = ["Baršausko g. 39", "Studentų g. 51"];

  return (
    <View>
      <Button
        title="Pridėti salę"
        onPress={() => navigation.navigate("NewClub")}
      />
      {clubs.map((club, index) => (
        <Club location={club} key={index} />
      ))}
    </View>
  );
}

export default ClubsScreen;
