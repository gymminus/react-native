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
        setReservations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteReservation = (id, disableDelete) => {
    disableDelete(true);
    axios
      .delete("http://localhost:5000/api/sport/reservations", {
        data: { id },
      })
      .then(() => {
        fetchReservations();
      })
      .catch((err) => {
        console.log(err);
        disableDelete(false);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {reservations.map((res) => (
          <Reservation
            res={res}
            onPressDelete={deleteReservation}
            key={res.id_Rezervacija}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ReservationScreen;
