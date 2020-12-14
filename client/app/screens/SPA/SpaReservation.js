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

function SpaReservation(props, { navigation }) {

  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const User = {role: "user", id: 3};
  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const [selectedValue0, setSelectedValue0] = useState("Pasirinkti tipą");
  const [selectedValue, setSelectedValue] = useState("Pasirinkti procedūrą");
  const [selectedValue1, setSelectedValue1] = useState("Pasirinkti data");
  const [selectedValue2, setSelectedValue2] = useState("Pasirinkti laiką");

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

  console.log(procedures);


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


  function SendToApi(procedure, date, time) {

    // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // id reiks pakeisti veliau palei user 
    const data = { procedura: procedure, data: date, laikas: time, id: User.id };
    // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    fetch('http://localhost:5000/api/spa/post-spa-procedure', {
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
            selectedValue={selectedValue0}
            style={{ height: 50, width: 350 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue0(itemValue)
            }
          >
            <Picker.Item
              label="Pasirinkti tipą"
              value="Pasirinkti tipą"
            />
            {procedures.map((procedure) => {
                
                return (
                <Picker.Item label={procedure.tipas} value={procedure.id_Spa_Procedura} key={procedure.id_Spa_Procedura} />
                );
            })
            }
          </Picker>




        </View>
      </View>
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
            {procedures.map((procedure) => {
                return (
                <Picker.Item label={procedure.pavadinimas} value={procedure.id_Spa_Procedura} key={procedure.id_Spa_Procedura} />
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
            <Picker.Item label="Pasirinkti data" value="Pasirinkti data" />
            <Picker.Item label="2020-10-10" value="2020-10-10" />
            <Picker.Item label="2020-10-11" value="2020-10-11" />
            <Picker.Item label="2020-10-12" value="2020-10-12" />
            <Picker.Item label="2020-10-13" value="2020-10-13" />
            <Picker.Item label="2020-10-14" value="2020-10-14" />
            <Picker.Item label="2020-10-15" value="2020-10-15" />
            <Picker.Item label="2020-10-16" value="2020-10-16" />
            <Picker.Item label="2020-10-17" value="2020-10-17" />
            <Picker.Item label="2020-10-18" value="2020-10-18" />
            <Picker.Item label="2020-15-19" value="2020-15-19" />
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
            <Picker.Item label="8:00" value="8:00" />
            <Picker.Item label="9:00" value="9:00" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="11:00" value="11:00" />
            <Picker.Item label="12:00" value="12:00" />
            <Picker.Item label="14:00" value="14:00" />
            <Picker.Item label="15:00" value="15:00" />
            <Picker.Item label="16:00" value="16:00" />
            <Picker.Item label="17:00" value="17:00" />
            <Picker.Item label="18:00" value="18:00" />

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
          onPress={() => SendToApi(selectedValue,selectedValue1,selectedValue2)}
        />
      </View>
    </View>
  );
}

export default SpaReservation;
