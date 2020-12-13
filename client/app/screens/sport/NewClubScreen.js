import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

const inputStyle = {
  borderBottomWidth: 1,
  padding: 8,
  flex: 1,
};

const flexStyle = {
  alignItems: "center",
  flexDirection: "row",
  marginBottom: 8,
  marginHorizontal: 16,
};

function NewClubScreen({ navigation }) {
  const addClub = (data) => {
    setDisableSubmit(true);
    axios
      .post("http://localhost:5000/api/sport/sportclub", {
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

  const { handleSubmit, control } = useForm();

  const [disableSubmit, setDisableSubmit] = useState(false);

  return (
    <View>
      <View style={flexStyle}>
        <Text style={{ flex: 0.35 }}>Adresas</Text>
        <Controller
          control={control}
          render={({ onChange }) => (
            <TextInput
              textContentType="addressCity"
              style={inputStyle}
              placeholder="Sporto salės adresas"
              onChangeText={(text) => onChange(text)}
            ></TextInput>
          )}
          name="adresas"
          defaultValue=""
        />
      </View>
      <View style={flexStyle}>
        <Text style={{ flex: 0.35 }}>Vietų</Text>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <TextInput
              keyboardType="numeric"
              style={inputStyle}
              placeholder="Vietų skaičius salėje"
              value={value}
              onChangeText={(text) => {
                onChange(text === "" ? 0 : parseInt(text));
              }}
            ></TextInput>
          )}
          name="vietu_skaicius"
          defaultValue={0}
        />
      </View>
      <View style={[flexStyle, { marginBottom: 16 }]}>
        <Text style={{ flex: 0.35 }}>Aprašymas</Text>
        <Controller
          control={control}
          render={({ onChange }) => (
            <TextInput
              style={[
                inputStyle,
                { borderWidth: 1, textAlignVertical: "top", maxHeight: 120 },
              ]}
              multiline={true}
              numberOfLines={6}
              placeholder="Aprašymas apie salę"
              onChangeText={(text) => onChange(text)}
            ></TextInput>
          )}
          name="aprasymas"
          defaultValue=""
        />
      </View>
      <Button
        disabled={disableSubmit}
        onPress={handleSubmit(addClub)}
        title="Pridėti"
      ></Button>
    </View>
  );
}

export default NewClubScreen;
