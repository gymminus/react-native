import React from "react";
import "react-native-gesture-handler";
import { useDimensions } from "@react-native-community/hooks";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SportScreen from "./app/screens/sport/SportScreen";
import SpaScreen from "./app/screens/SpaScreen";
import PlanScreen from "./app/screens/PlanScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ShopStack from "./app/screens/shop/ShopStack";
import LoginForm from "./app/accountSubsystem/Login/LoginForm";
import Profile from "./app/accountSubsystem/Profile/Profile";
import Writecomplaint from "./app/accountSubsystem/Complaints/Writecomplaint";
import EditProfile from "./app/accountSubsystem/Profile/EditProfile";
import InjuriesList from "./app/accountSubsystem/Injuries/InjuriesList";
import InjuriesRegistration from "./app/accountSubsystem/Injuries/InjuriesRegistration";
import RegistrationForm from "./app/accountSubsystem/RegistrationForm";
import Holidays from "./app/accountSubsystem/Holidays";
import DeleteProfile from "./app/accountSubsystem/Profile/DeleteProfile";
import SingleWorkoutScreen from "./app/screens/workout-screens/SingleWorkoutScreen"
import SingleWorkoutDeleteScreen from "./app/screens/workout-screens/SingleWorkoutDeleteScreen"
import SingleWorkoutEditScreen from "./app/screens/workout-screens/SingleWorkoutEditScreen"
import SingleWorkoutCreateScreen from "./app/screens/workout-screens/SingleWorkoutCreateScreen"

import SpaRating from "./app/screens/SPA/SpaRating";
import SpaReservation from "./app/screens/SPA/SpaReservation";
import SpaReservationCancellation from "./app/screens/SPA/SpaReservationCancellation";
import SpaProcedureAdd from "./app/screens/SPA/SpaProcedureAdd";
import SpaProcedureEdit from "./app/screens/SPA/SpaProcedureEdit";
import SpaProcedureRemove from "./app/screens/SPA/SpaProcedureRemove";

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
          component={() => <ShopStack Stack={Stack} />}
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

import ReservationScreen from "./app/screens/sport/ReservationScreen";
import ClubsScreen from "./app/screens/sport/ClubsScreen";
import MapScreen from "./app/screens/sport/MapScreen";
import ActivitiesScreen from "./app/screens/sport/ActivitiesScreen";
import NewActivityScreen from "./app/screens/sport/NewActivityScreen";
import NewClubScreen from "./app/screens/sport/NewClubScreen";

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
      <Stack.Screen
        name="Reservations"
        options={{ title: "Rezervacijos" }}
        component={ReservationScreen}
      />
      <Stack.Screen
        name="Clubs"
        options={{ title: "Sporto salės" }}
        component={ClubsScreen}
      />
      <Stack.Screen
        name="NewClub"
        options={{ title: "Nauja salė" }}
        component={NewClubScreen}
      />
      <Stack.Screen
        name="Activities"
        options={{ title: "Užsiemimai" }}
        component={ActivitiesScreen}
      />
      <Stack.Screen
        name="NewActivity"
        options={{ title: "Naujas užsiemimas" }}
        component={NewActivityScreen}
      />
      <Stack.Screen
        name="Map"
        options={{ title: "Žemėlapis" }}
        component={MapScreen}
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
      <Stack.Screen
        name="SpaRating"
        component={SpaRating}
      />
      <Stack.Screen
        name="SpaReservation"
        component={SpaReservation}
      />
       <Stack.Screen
        name="SpaReservationCancellation"
        component={SpaReservationCancellation}
      />
      <Stack.Screen
        name="SpaProcedureAdd"
        component={SpaProcedureAdd}
      />
      <Stack.Screen
        name="SpaProcedureEdit"
        component={SpaProcedureEdit}
      />
      <Stack.Screen
        name="SpaProcedureRemove"
        component={SpaProcedureRemove}
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
      <Stack.Screen name="SingleWorkoutScreen" component={SingleWorkoutScreen}></Stack.Screen>
      <Stack.Screen name="SingleWorkoutDeleteScreen" component={SingleWorkoutDeleteScreen}></Stack.Screen>
      <Stack.Screen name="SingleWorkoutEditScreen" component={SingleWorkoutEditScreen}></Stack.Screen>
      <Stack.Screen name="SingleWorkoutCreateScreen" component={SingleWorkoutCreateScreen}></Stack.Screen>

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
        options={{ title: "Prisijungimas/Registracija" }}
      />
      <Stack.Screen
        name="LoginForm"
        component={LoginForm}
        options={{ title: "Prisijungimas" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profilis" }}
      />
      <Stack.Screen
        name="Writecomplaint"
        component={Writecomplaint}
        options={{ title: "Naujas skundas" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "Profilio redagavimas" }}
      />
      <Stack.Screen
        name="InjuriesList"
        component={InjuriesList}
        options={{ title: "Traumų sąrašas" }}
      />
      <Stack.Screen
        name="InjuriesRegistration"
        component={InjuriesRegistration}
        options={{ title: "Registruoti naują traumą" }}
      />
      <Stack.Screen
        name="RegistrationForm"
        component={RegistrationForm}
        options={{ title: "Registracija" }}
      />
      <Stack.Screen
        name="Holidays"
        component={Holidays}
        options={{ title: "Pasiimti atostogas" }}
      />
      <Stack.Screen
        name="DeleteProfile"
        component={DeleteProfile}
        options={{ title: "Trinti profilį" }}
      />
    </Stack.Navigator>
  );
}

export default App;
