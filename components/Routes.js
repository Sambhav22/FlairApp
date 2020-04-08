import React from "react";
import { NavigationContainer, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./Login";
import Forgot from "./ForgotPassword";
import Reset from "./ResetPassword";
import Reset1 from "./ResetPassword1";
const mainNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Forgot: { screen: Forgot },
    Reset: { screen: Reset },
    Reset1: { screen: Reset1 },
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const Routes = createAppContainer(mainNavigator);
export default Routes;
