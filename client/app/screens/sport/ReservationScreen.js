import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Reservation from "./Reservation";
import axios from "axios";

function ReservationScreen(props) {
  const [reservations, setReservations] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchReservations();
    }
  }, [isFocused]);

  const fetchReservations = () => {
    axios
      .get("http://localhost:5000/api/sport/reservations", {
        params: { id: 3 },
      })
      .then((res) => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {reservations.map((res) => (
          <Reservation res={res} key={res.id_Rezervacija} />
        ))}
      </ScrollView>
    </View>
  );
}

export default ReservationScreen;
