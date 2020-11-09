import React, { useState } from "react";
import { Text, Button, TextInput, View, SafeAreaView } from "react-native";

function Holidays({ navigation }) {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView>
      <Text>Karantino metu atostogų pasiimti negalite! :(</Text>
      <Button
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        title="Atgal į profilį"
        onPress={() => navigation.navigate("Profile")}
      />
    </SafeAreaView>
  );
}

export default Holidays;
