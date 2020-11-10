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

function SpaReservation(props, { navigation }) {
  const [selectedValue, setSelectedValue] = useState("Pasirinkti procedūrą");
  const [selectedValue1, setSelectedValue1] = useState("Pasirinkti data");
  const [selectedValue2, setSelectedValue2] = useState("Pasirinkti laiką");

  const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center",
    },
  });

  const styles = {
    rowView: {
      flexDirection: "row",
      flex: 0,
      borderWidth: 5,
    },
    rowView2: {
      flex: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    columnView: {
      flexDirection: "column",
    },
  };

  const styles3 = StyleSheet.create({
    textAreaContainer: {
      borderColor: "#000",
      borderWidth: 1,
      padding: 5,
    },
    textArea: {
      height: 150,
      width: 300,
      justifyContent: "flex-start",
    },
  });

  return (
    <View style={styles.columnView}>
      <View style={styles.rowView2}>
        <View style2={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 350 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item
              label="Pasirinkti procedūrą"
              value="Pasirinkti procedūrą"
            />
            <Picker.Item label="Nugaros masažas" value="Nugaros masažas" />
            <Picker.Item
              label="Pasiplaukiojimas baseine"
              value="Pasiplaukiojimas baseine"
            />
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
            <Picker.Item label="Pasirinkti data" value="Pasirinkti data" />
            <Picker.Item label="2020-10-10" value="2020-10-10" />
            <Picker.Item label="2020-15-14" value="2020-15-14" />
          </Picker>
        </View>
      </View>
      <View style={styles.rowView2}>
        <View style2={styles.container}>
          <Picker
            selectedValue={selectedValue2}
            style={{ height: 50, width: 350 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue2(itemValue)
            }
          >
            <Picker.Item label="Pasirinkti laika" value="Pasirinkti laika" />
            <Picker.Item label="9:00" value="9:00" />
            <Picker.Item label="10:00" value="10:00" />
          </Picker>
        </View>
      </View>

      <View style={styles.rowView2}>
        <Text>Papildoma informacija Spa paslaugas teikiančiam personalui</Text>
      </View>
      <View style={styles.rowView2}>
        <View style3={styles.textAreaContainer}>
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
          title="Rezervuoti"
          color="#000"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => console.log("Rezervuoja")}
        />
      </View>
    </View>
  );
}

export default SpaReservation;
