import React from "react";
import { Text, View, Button } from "react-native";

function AccountScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Prisijungimas"
        color="#0000FF"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => navigation.navigate("LoginForm")}
      >
        Prisijungimas
      </Button>
      <Button
        title="Registracija"
        color="#0000FF"
        onPress={() => navigation.navigate("RegistrationForm")}
      >
        Registracija
      </Button>
    </View>
  );
}

export default AccountScreen;
