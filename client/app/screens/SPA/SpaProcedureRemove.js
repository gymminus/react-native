import React, {useEffect, useState} from "react";

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

function SpaProcedureRemove(props) {

  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const User = {role: "user", id: 4};
  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    const [selectedValue, setSelectedValue] = useState("Pasirinkti tipą");
    const [selectedValue1, setSelectedValue1] = useState("Pasirinkti procedūra");
   
    const [procedures, setProcedures] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/api/spa/get-spa-procedures')
        .then(res => res.json())
        .then(
          (result) => {
            setProcedures(result);
          }
        )
    }, [])
  
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

          function SendToApi(name) {




           

         const data = {pav: name};
            fetch('http://localhost:5000/api/spa/remove-procedure', {
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
                      <Picker.Item label="Pasirinkti tipą" value="Pasirinkti tipą" />


                      {procedures.map((procedure) => {
                          return (
                                <Picker.Item label={procedure.tipas} value={procedure.tipas} key={procedure.id_Spa_Procedura} />
                                );
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
                        <Picker.Item label="Pasirinkti procedūra" value="Pasirinkti procedūra" />
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
                  <Button
                  onPress={()=>SendToApi(selectedValue1)}
                  title="Šalinti"
                  color="#000"
                  accessibilityLabel="Learn more about this purple button"
                  />
                  </View>
                  
              </View>
  
      );
  }
  
  

export default SpaProcedureRemove;