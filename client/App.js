import React from "react";
import "react-native-gesture-handler";
import { useDimensions } from "@react-native-community/hooks";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SportScreen from "./app/screens/SportScreen";
import SpaScreen from "./app/screens/SpaScreen";
import ShopScreen from "./app/screens/ShopScreen";
import PlanScreen from "./app/screens/PlanScreen";
import AccountScreen from "./app/screens/AccountScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const { width } = useDimensions().window;
  const iconSize = width / 5 - 8;
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#000",
        }}
      >
        <Tab.Screen
          name="SportsStack"
          component={SportsStack}
          options={{
            tabBarLabel: "Sports",
            tabBarIcon: () => (
              <Icon name="dumbbell" size={iconSize * 0.3} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="SpaStack"
          component={SpaStack}
          options={{
            tabBarLabel: "Spa",
            tabBarIcon: () => (
              <Icon name="spa" size={iconSize * 0.3} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="ShopStack"
          component={ShopStack}
          options={{
            tabBarLabel: "Shop",
            tabBarIcon: () => (
              <Icon name="shopping-cart" size={iconSize * 0.3} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="PlanStack"
          component={PlanStack}
          options={{
            tabBarLabel: "Plan",
            tabBarIcon: () => (
              <Icon name="clipboard-list" size={iconSize * 0.3} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="AcountStack"
          component={AccountStack}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: () => (
              <Icon name="bars" size={iconSize * 0.3} color="#000" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function SportsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="sports"
        component={SportScreen}
        options={{ title: "Sporto salės" }}
      />
    </Stack.Navigator>
  );
}

function SpaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Spa"
        component={SpaScreen}
        options={{ title: "SPA" }}
      />
    </Stack.Navigator>
  );
}

function ShopStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Shop"
        component={ShopScreen}
        options={{ title: "Elektroninė parduotuvė" }}
      />
    </Stack.Navigator>
  );
}

function PlanStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Plan"
        component={PlanScreen}
        options={{ title: "Sporto programos" }}
      />
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Profilis" }}
      />
    </Stack.Navigator>
  );
}

export default App;
