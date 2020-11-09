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

function SpaReservationCancellation(props) {
    
    const [selectedValue, setSelectedValue] = useState("Pasirinkti procedūrą");
   
  
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
                onPress={()=>console.log("atsaukia")}
                title="Atšaukti rezervacija"
                color="#000"
                accessibilityLabel="Learn more about this purple button"
                />
                </View>
                
            </View>

    );
}


export default SpaReservationCancellation;