// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import Forgot from "./ForgotPassword";
import Reset from "./ResetPassword";
import Account from "./Account";
import Calendar from "./Calendar";
import Upcoming from "./Upcoming";
import BasePriceUpdate from "./BasePriceUpdate";
import EditBaseLocation from "./EditBaseLocation";
import BaseLocation from "./BaseLocation";
import BasePrice from "./BasePrice";

const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AccountStack = createStackNavigator();
const AccountTabScreen = ({ navigation, routes }) => {
  return (
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
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
const AccountStackScreen = ({ navigation, routes }) => {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="Account" component={Account} />
      <AccountStack.Screen name="BaseLocation" component={BaseLocation} />
      <AccountStack.Screen name="BasePrice" component={BasePrice} />
      <AccountStack.Screen name="BasePriceUpdate" component={BasePriceUpdate} />
      <AccountStack.Screen
        name="EditBaseLocation"
        component={EditBaseLocation}
      />
    </AccountStack.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={{ headerShown: false }}>
        <AccountStack.Screen name="Login" component={Login} />
        <AccountStack.Screen name="Reset" component={Reset} />
        <AccountStack.Screen name="Forgot" component={Forgot} />
        <AccountStack.Screen
          name="AccountStackScreen"
          component={AccountStackScreen}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0D0C",
    borderTopWidth: 0,
  },
});
