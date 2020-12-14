import React, { useEffect, useState } from "react";
import { Button, Picker, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Moment from "moment";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

function NewActivityScreen({ navigation }) {
  const { handleSubmit, control } = useForm();

  const [coaches, setCoaches] = useState([]);
  const [clubs, setClubs] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchCoaches();
      fetchClubs();
    }
  }, [isFocused]);

  const fetchCoaches = () => {
    axios
      .get("http://192.168.1.127:5000/api/sport/coaches")
      .then((res) => {
        setCoaches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchClubs = () => {
    axios
      .get("http://192.168.1.127:5000/api/sport/sportclub")
      .then((res) => {
        setClubs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [disableSubmit, setDisableSubmit] = useState(false);

  const addActivity = (data) => {
    if (coaches.length === 0 || clubs.length === 0) return;
    console.log(data);
    setDisableSubmit(true);
    axios
      .post("http://localhost:5000/api/sport/activities", {
        data,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
        setDisableSubmit(false);
      });
  };
  return (
    <View>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            placeholder="Kada vyksta užsiemimas (YYYY-MM-DD hh:mm)"
            value={value}
            onChangeText={(text) => {
              onChange(text);
              setDisableSubmit(!Moment(text).isValid());
            }}
          ></TextInput>
        )}
        name="laikas"
        defaultValue={Moment().format("YYYY-MM-DD hh:mm")}
      />
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            placeholder="Užsiemimo pavadinimas"
            value={value}
            onChangeText={(text) => onChange(text)}
          ></TextInput>
        )}
        name="pavadinimas"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            placeholder="Užsiemimo aprašymas"
            value={value}
            onChangeText={(text) => onChange(text)}
          ></TextInput>
        )}
        name="aprasymas"
        defaultValue=""
      />
      {coaches.length != 0 ? (
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => {
                onChange(Number(itemValue));
              }}
            >
              {coaches.map((coach) => {
                return (
                  <Picker.Item
                    label={`${coach.vardas} ${coach.pavarde}`}
                    value={coach.id_Naudotojas}
                    key={coach.id_Naudotojas}
                  ></Picker.Item>
                );
              })}
            </Picker>
          )}
          name="fk_Treneriai"
          defaultValue={coaches[0].id_Naudotojas}
        />
      ) : (
        <Text style={{ color: "red" }}>Nėra trenerių</Text>
      )}

      {clubs.length != 0 ? (
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => {
                onChange(Number(itemValue));
              }}
            >
              {clubs.map((club) => {
                return (
                  <Picker.Item
                    label={club.adresas}
                    value={club.id_sporto_sale}
                    key={club.id_sporto_sale}
                  ></Picker.Item>
                );
              })}
            </Picker>
          )}
          name="fk_sporto_sale"
          defaultValue={clubs[0].id_sporto_sale}
        />
      ) : (
        <Text style={{ color: "red" }}>Pirma pridėkite sporto salių</Text>
      )}

      <Button
        disabled={disableSubmit}
        onPress={handleSubmit(addActivity)}
        title="Išsaugoti"
      ></Button>
    </View>
  );
}

export default NewActivityScreen;
