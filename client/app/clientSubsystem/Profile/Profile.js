import React from "react";
import { Text, Button, View } from "react-native";

function Profile({ navigation }) {
  return (
    <View>
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Redaguoti profili'
        onPress={() => navigation.navigate("EditProfile")}
      />

      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Rašyti nusiskundimą'
        onPress={() => navigation.navigate("Writecomplaint")}
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Mano traumos'
        onPress={() => navigation.navigate("InjuriesList")}
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Atostogos'
        onPress={() => navigation.navigate("Holidays")}
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Ištrinti profilį'
        onPress={() => navigation.navigate("DeleteProfile")}
      />
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title='Atsijungti'
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

export default Profile;
