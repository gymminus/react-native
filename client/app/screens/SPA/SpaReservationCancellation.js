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

function SpaReservationCancellation(props) {
    
    
    // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const User = {role: "user", id: 3};
  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    const [selectedValue, setSelectedValue] = useState("Pasirinkti procedūrą");

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

    const styles3 = StyleSheet.create({
        textAreaContainer: {
            borderColor: "#000",
            borderWidth: 1,
            padding: 5
        },
        textArea: {
            height: 150,
            width: 300,
            justifyContent: "flex-start"
        }
        })



        function SendToApi(ids) {

            const data = { id: ids};
            console.log(ids);
            fetch('http://localhost:5000/api/spa/post-spa-reservation', {
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
                     <Text>Dėl ko atšaukiate procedūrą</Text>
                </View>
                <View style={styles.rowView2}>
                <View style3={styles.textAreaContainer} >
                    <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Type something"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    />
                </View>
                </View>
                <View style={styles.rowView2}>
                <Button
                onPress={()=>SendToApi(selectedValue)}
                title="Atšaukti rezervacija"
                color="#000"
                accessibilityLabel="Learn more about this purple button"
                />
                </View>
                
            </View>

    );
}


export default SpaReservationCancellation;