import React, { useState } from "react";

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
    const [selectedValue, setSelectedValue] = useState("Pasirinkti procedūrą");
    const [selectedValue1, setSelectedValue1] = useState("Ivertinti");
   
  
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
                      <Picker.Item label="Nugaros masažas 2020-10-10 9:00" value="Nugaros masažas" />
                      <Picker.Item label="Pasiplaukiojimas baseine 2020-10-14 10:00" value="Pasiplaukiojimas baseine" />
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
                    </Picker>
                    </View>
                  </View>

                  <View style={styles.rowView2}>
                  <Button
                  onPress={()=>console.log("ivertinta")}
                  title="Ivertinti"
                  color="#000"
                  accessibilityLabel="Learn more about this purple button"
                  />
                  </View>
                  
              </View>
  
      );
  }
  
  

export default SpaRating;