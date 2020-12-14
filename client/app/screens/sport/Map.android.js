import Axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

const height = Dimensions.get("window").height;

function Map(props) {
  const [coords, setCoords] = useState([]);
  useEffect(() => {
    Axios.get("http://192.168.1.127:5000/api/sport/sportclub")
      .then((res) => {
        res.data.map((club) => {
          Axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${club.adresas
              .split(" ")
              .join("%20")}&key=AIzaSyClYWmVEfvuSbY7DnHcEyC96Te993K7AGE`
          )
            .then((res) => {
              const loc = res.data.results[0].geometry.location;
              setCoords((old) => [
                ...old,
                {
                  latitude: loc.lat,
                  longitude: loc.lng,
                  description: club.aprasymas,
                  address: club.adresas,
                },
              ]);
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (coords.length > 0) console.log(coords[0]);
  }, [coords]);

  return (
    <View>
      {coords.length != 0 ? (
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: coords[0].latitude,
            longitude: coords[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {coords.map((coord) => {
            return (
              <MapView.Marker
                coordinate={coord}
                description={coord.address}
                title={coord.description}
              ></MapView.Marker>
            );
          })}
        </MapView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  map: { height },
});

export default Map;
