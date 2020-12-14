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

function SpaProcedureEdit(props) {

  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const User = {role: "user", id: 4};
  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    const [selectedValue, setSelectedValue] = useState("Pasirinkti procedūrą");
    const [text, setText] = useState('');
    //selectedValue = "Prasome pasirinkti procedura";
    let first  = selectedValue;
    
    const [procedures, setProcedures] = useState([]);

 

    const isFocused = useIsFocused();
    useEffect(() => {
      if (isFocused) {
        fetch('http://localhost:5000/api/spa/get-spa-procedures')
        .then(res => res.json())
        .then(
          (result) => {
            setProcedures(result);
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

          function SendToApi(changeName, name) {

            const data = {pavadinimas: name, kitasPavadinimas: changeName};

         
            fetch('http://localhost:5000/api/spa/edit-procedure', {
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
                      onValueChange={(itemValue, itemKey) => {setSelectedValue(itemValue),setText(itemValue)}}
                      // onValueChange={(value) => {
                      //   setSelectedValue({value});
                      // }}
                      >
                      <Picker.Item label="Pasirinkti procedūrą" value="Pasirinkti procedūrą" />


                      {procedures.map((procedure) => {
                            return (
                            <Picker.Item label={procedure.pavadinimas} value={procedure.pavadinimas} key={procedure.id_Spa_Procedura} />
                            );
                        })
                        }

                        
                      </Picker>
                  </View>
                  </View>
                  
                  
              
                  <View style={styles.rowView2}>
                  <View style2={styles.container}>
                  <View style3={styles.textAreaContainer} >
                    <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    onChangeText={text => setText(text)}
                    value={text}
                    />
                  </View>
                    </View>
                  </View>

                  <View style={styles.rowView2}>
                  <Button
                  onPress={()=>SendToApi(text,selectedValue)}
                  title="Redaguoti"
                  color="#000"
                  accessibilityLabel="Learn more about this purple button"
                  />
                  </View>
                  
              </View>
  
      );
  }
  
  

export default SpaProcedureEdit;