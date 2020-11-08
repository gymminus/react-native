import React, {useEffect, useState} from 'react';
import { StyleSheet, View, SafeAreaView, TouchableHighlight } from 'react-native';
import { useDimensions } from '@react-native-community/hooks'
import Icon from 'react-native-vector-icons/FontAwesome5'

import SportScreen from "./app/screens/SportScreen"
import SpaScreen from "./app/screens/SpaScreen"
import ShopScreen from "./app/screens/ShopScreen"
import PlanScreen from "./app/screens/PlanScreen"
import AccountScreen from "./app/screens/AccountScreen"

const App = () => {
  const {width} = useDimensions().window
  const iconSize = width/5-8

  const views = [SportScreen, SpaScreen, ShopScreen, PlanScreen, AccountScreen]

  const [currentView, setCurrentView] = useState(views[0])
  const [currentId, setCurrentId] = useState(0)

  useEffect(() => {
    setCurrentView(views[currentId])
  }, [currentId])

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.iconContainer, {height: width/5}]}>
        <TouchableHighlight style={[{flex: 1, justifyContent: "center", alignItems: "center", 
                width: iconSize, height: iconSize, marginLeft: 8}, currentId == 0 ? styles.iconSelected : ""]}
                onPress={() => setCurrentId(0)}>
          <Icon name="dumbbell" size={iconSize*.6} color="#fff"/>
        </TouchableHighlight>

        <TouchableHighlight style={[{flex: 1, justifyContent: "center", alignItems: "center", 
                width: iconSize, height: iconSize, marginLeft: 8}, currentId == 1 ? styles.iconSelected : ""]}
                onPress={() => setCurrentId(1)}>
          <Icon name="spa" size={iconSize*.6} color="#fff"/>
        </TouchableHighlight>

        <TouchableHighlight style={[{flex: 1, justifyContent: "center", alignItems: "center", 
                width: iconSize, height: iconSize, marginLeft: 8}, currentId == 2 ? styles.iconSelected : ""]}
                onPress={() => setCurrentId(2)}>
          <Icon name="shopping-cart" size={iconSize*.6} color="#fff"/>
        </TouchableHighlight>

        <TouchableHighlight style={[{flex: 1, justifyContent: "center", alignItems: "center", 
                width: iconSize, height: iconSize, marginLeft: 8}, currentId == 3 ? styles.iconSelected : ""]}
                onPress={() => setCurrentId(3)}>
          <Icon name="clipboard-list" size={iconSize*.6} color="#fff"/>
        </TouchableHighlight>

        <TouchableHighlight style={[{flex: 1, justifyContent: "center", alignItems: "center", 
                width: iconSize, height: iconSize, marginLeft: 8}, currentId == 4 ? styles.iconSelected : ""]}
                onPress={() => setCurrentId(4)}>
          <Icon name="bars" size={iconSize*.6} color="#fff"/>
        </TouchableHighlight>
      </View>
      <View style={{alignSelf: "stretch", flex:1, backgroundColor:"#90a4ae", color: "#000"}}>
        {currentView}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#000",
  },
  iconSelected: {
    borderBottomColor: "#fff",
    borderBottomWidth: 4
  }
});

export default App