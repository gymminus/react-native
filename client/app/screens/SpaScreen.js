
import React, {useEffect, useState} from "react";
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";

function SpaScreen({navigation}) {

  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const User = {role: "admin", id: 3};
  // TO:DO /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [reservations, setReservation] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/spa/get-spa-reservation')
      .then(res => res.json())
      .then(
        (result) => {
          setReservation(result);
        }
      )
  }, [])



let items = [];
reservations.map((reservation) => {



  if (reservation.fk_Vartotojas == User.id ){
    const items2 = 
    {
    
        id: String(reservation.id_Spa_Rezervacija),
        title: reservation.pavadinimas,
        time: reservation.pradzia,
        place: "laikas",
        data: reservation.savaites_diena.substring(0,10),
        rating: ""
    };
    
    items.push(items2);
  }
    
      //return items2;
                
  
  })
  console.log(items);

    const Item = ({ title, time, place, data, rating}) => {
        return (
            <SafeAreaView>
          <View
            style={{
              backgroundColor: "white",
              padding: 5,
              flexDirection: "row",
              textAlign: 'center',
            }}
          >
            
            <View style={{ padding: 3 }}>
              <Text style={{ fontWeight: "bold" }}>{title}</Text>
              <Text style={{ flexShrink: 1 }}>{time} {place}</Text>
            </View>
            <View style={{ padding: 3 }}>
          
             <Text style={{}}>{data}</Text>
             </View>
             <View style={{ padding: 3 }}>
          
            <Text style={{}}>{rating}</Text>
             </View>
            
          </View>
          </SafeAreaView>
        );
      };
     

      const renderItem = ({ item }) => {
        return <Item title={item.title} time={item.time} place={item.place} data={item.data} rating={item.rating}  />;
      };

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
       

    function UserView(){
      
      return (
      <ScrollView>
            <SafeAreaView style={styles.columnView}>
                <View style={styles.rowView2}>
                <Button
                title="Rezervuoti"
                color="#000000"
                onPress={() => navigation.navigate('SpaReservation')}
                accessibilityLabel="Learn more about this purple button"
                />

                </View>
                <View style={styles.rowView}>
                    <Text>
                    <FlatList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    ></FlatList>
                    </Text>
                </View>
                <View style={styles.rowView2}>
                <Button
                onPress={() => navigation.navigate('SpaReservationCancellation')}
                title="Atšaukti rezervacijaa"
                color="#000"
                accessibilityLabel="Learn more about this purple buttons"
                />
                </View>
            
                <View style={styles.rowView2}>
                <Button
                onPress={() => navigation.navigate('SpaRating')}
                title="Vertinti (palikti atsiliepima)"
                color="#000"
                accessibilityLabel="Learn more about this purple buttona"
                />
              
                </View>
            </SafeAreaView>
          </ScrollView>
      );
      
    }
    
    function AdminView() {

      return (
      <ScrollView>
            <SafeAreaView style={styles.columnView}>
                <View style={styles.rowView2}>
                <Button
                title="Pridėti procedūra"
                color="#000000"
                onPress={() => navigation.navigate('SpaProcedureAdd')}
                accessibilityLabel="Learn more about this purple button"
                />

                </View>
                {/* <View style={styles.rowView}>
                    <Text>
                    <FlatList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    ></FlatList>
                    </Text>
                </View> */}
                <View style={styles.rowView2}>
                <Button
                onPress={() => navigation.navigate('SpaProcedureEdit')}
                title="Redaguoti procedūrs"
                color="#000"
                accessibilityLabel="Learn more about this purple buttons"
                />
                </View>
            
                <View style={styles.rowView2}>
                <Button
                onPress={() => navigation.navigate('SpaProcedureRemove')}
                title="Šalinti procedūra"
                color="#000"
                accessibilityLabel="Learn more about this purple buttona"
                />
              
                </View>
            </SafeAreaView>
          </ScrollView>
      );

    }
      ////userio dalins
  

    if(User.role == "user"){
      return (UserView());
    }
    if(User.role == "admin"){
      return (AdminView());
    }
    // return (

    //     // <View style={styles.columnView}>
    //     //     <Text>opa</Text>
    //     // </View>
        
    //         //  <SafeAreaView style={styles.columnView}>
    //         //      <View style={styles.rowView2}>

    //         //      <Text>opa</Text>

    //         //     </View>
    //         //  </SafeAreaView>


        
    //       //UserView()

    //       AdminView()


    // );
}

export default SpaScreen;