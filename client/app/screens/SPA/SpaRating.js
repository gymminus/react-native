import React, {useEffect, useState} from "react";
import { useIsFocused } from "@react-navigation/native";

import {
  TextInput,
  FlatList,
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  Picker,
} from "react-native";

function SpaRating(props) {

  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const User = {role: "user", id: 3};
  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    const [selectedValue, setSelectedValue] = useState("Pasirinkti procedūrą");
    const [selectedValue1, setSelectedValue1] = useState("Ivertinti");
   
    const [reservations, setReservation] = useState([]);
   

    const isFocused = useIsFocused();
    useEffect(() => {
      if (isFocused) {
        fetch('http://localhost:5000/api/spa/get-spa-reservation')
        .then(res => res.json())
        .then(
          (result) => {
            setReservation(result);
          }
        )
      
      }
    }, [isFocused]);

  
  
    const styles2 = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
      }
    });
  
  
      const styles = {
          rowView: {
              flexDirection: 'row',
              flex: 0,
              borderWidth: 5,
          
          },
          rowView2: {
              flex:0,
              justifyContent: "center",
              alignItems: "center",
          },
          columnView: {
              flexDirection: 'column'  
          }
          }

          function SendToApi(id, ratings, reservations) {




            let data
            reservations.map((reservation) => {

              if (reservation.id_Spa_Rezervacija == id){
                const d = { id: id, P_id: reservation.fk_Spa_Procedura, rating: ratings};
                data = d;
              }
              })

         
            fetch('http://localhost:5000/api/spa/post-spa-rating', {
              method: 'POST', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        
        
          }

      return (
          <View style={styles.columnView}>
                  <View style={styles.rowView2}>
                  <View style2={styles.container}>
                      <Picker
                      selectedValue={selectedValue}
                      style={{ height: 50, width: 350 }}
                      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                      >
                      <Picker.Item label="Pasirinkti procedūrą" value="Pasirinkti procedūrą" />


                      {reservations.map((reservation) => {
// TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// id reiks pakeisti veliau palei user 
                        if (reservation.fk_Vartotojas == User.id ){
// TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            return (
                                <Picker.Item label={reservation.pavadinimas + " " + reservation.savaites_diena.substring(0,10) + " " + reservation.pradzia} value={reservation.id_Spa_Rezervacija} key={reservation.id_Spa_Rezervacija} />
                                );
                        }
                
                        
                    })
                    }


                      </Picker>
                  </View>
                  </View>
                  
                  
              
                  <View style={styles.rowView2}>
                  <View style2={styles.container}>
                    <Picker
                        selectedValue={selectedValue1}
                        style={{ height: 50, width: 350 }}
                        onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue1(itemValue)
                        }
                    >
                        <Picker.Item label="Ivertinti" value="Ivertinti" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                        <Picker.Item label="10" value="10" />
                    </Picker>
                    </View>
                  </View>

                  <View style={styles.rowView2}>
                  <Button
                  onPress={()=>SendToApi(selectedValue, selectedValue1, reservations)}
                  title="Ivertinti"
                  color="#000"
                  accessibilityLabel="Learn more about this purple button"
                  />
                  </View>
                  
              </View>
  
      );
  }
  
  

export default SpaRating;