// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Upcoming from "./Upcoming";
import Calendar from "./Calendar";
import Account from "./Account";
import Login from "../components/Login";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Upcoming") {
              iconName = "ios-list";
            } else if (route.name === "Calendar") {
              iconName = "ios-calendar";
            } else if (route.name === "Account") {
              iconName = "ios-person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          labelStyle: {
            fontSize: 14,
            margin: 0,
            padding: 0,
            fontFamily: "regular",
          },
          style: styles.container,
          activeTintColor: "#FDB900",
          inactiveTintColor: "#555555",
        }}
      >
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen default name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0D0C",
    borderTopWidth: 0,
  },
});
