
import React from "react";
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  Button,
} from "react-native";

function SpaScreen({navigation}) {

   

    const items = [
        {
            id: "1",
            title: "spa proceduros pavadinimas",
            time: "vieta",
            place: "laikas",
            data: "papildoma info",
            rating: "0"
        },
        {
            id: "2",
            title: "spa proceduros pavadinimas",
            time: "vieta",
            place: "laikas",
            data: "papildoma info",
            rating: "10"
        },
    ];

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
       


    return (

        // <View style={styles.columnView}>
        //     <Text>opa</Text>
        // </View>
        
            //  <SafeAreaView style={styles.columnView}>
            //      <View style={styles.rowView2}>

            //      <Text>opa</Text>

            //     </View>
            //  </SafeAreaView>


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
                title="Atšaukti rezervacija"
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






    );
}

export default SpaScreen;