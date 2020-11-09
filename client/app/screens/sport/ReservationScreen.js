import React from "react";
import { View } from "react-native";

import Reservation from "./Reservation";

function ReservationScreen(props) {
  const reservations = ["2020-11-10 17:30", "2020-11-11 17:30"];

  return (
    <View>
      {reservations.map((res, index) => (
        <Reservation datetime={res} key={index} />
      ))}
    </View>
  );
}

export default ReservationScreen;
