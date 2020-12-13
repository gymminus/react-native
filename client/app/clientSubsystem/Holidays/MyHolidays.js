import Axios from 'axios';
import React, { useState,useEffect } from "react";
import { Text, Button, TextInput, View, SafeAreaView } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'
const moment= require('moment')

function MyHolidays({ navigation }) {
    const [holidays, settHolidays] = useState();
    const isFocused = useIsFocused();
  useEffect(() => {
    
  }, [])
  
    useEffect(() => {
        axios.get(`http://localhost:5000/api/account/holidays`,{params:{userId:3}})
        .then(res => {
          console.log(res.data)
          settHolidays(res.data)
        })
    }, [isFocused])

  return (
    <SafeAreaView>
    {holidays&& holidays.map((holiday)=> <SafeAreaView>
        <Text>Atostogos prasideda nuo: </Text>
    <Text>{moment(holiday.pradzia).subtract(10, 'days').calendar()} </Text>
    <Text>Atostogos baigiasi: </Text>
    <Text>{moment(holiday.pabaiga).subtract(10, 'days').calendar()} </Text>
    <Text> </Text>

    </SafeAreaView>)}
     
      <Button  
      title="Pasiimti atostogas"
      
      onPress={() => navigation.navigate("HolidaysForm")}></Button>
    </SafeAreaView>
  );
}

export default MyHolidays;
