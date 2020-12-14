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

function SpaProcedureAdd(props) {

  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const User = {role: "user", id: 4};
  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    const [selectedValue, setSelectedValue] = useState("Pasirinkti procedūros tipą");
    const [proceduretext, setEnteredName] = useState('');
   
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

          function SendToApi(type, text) {

            const data = {tipas: type, tekstas: text, admin: User.id};
         
            fetch('http://localhost:5000/api/spa/add-spa-procedure', {
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
                      <Picker.Item label="Pasirinkti procedūros tipą" value="Pasirinkti procedūros tipą" />
                      <Picker.Item label="Masažas" value="Masažas" />
                      <Picker.Item label="Atpalaiduojamas" value="Atpalaiduojamas" />
                    


                      </Picker>
                  </View>
                  </View>
                  
                  
              
                  <View style={styles.rowView2}>
                  <View style2={styles.container}>

                    <View style3={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        value={proceduretext}
                        multiline={true}
                        onChangeText={text => setEnteredName(text)}
                    />
                    </View>

                    </View>
                  </View>

                  <View style={styles.rowView2}>
                  <Button
                  onPress={()=>SendToApi(selectedValue, proceduretext)}
                  title="Pridėti"
                  color="#000"
                  accessibilityLabel="Learn more about this purple button"
                  />
                  </View>
                  
              </View>
  
      );
  }
  
  

export default SpaProcedureAdd;