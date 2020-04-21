import React from "react";
import { NavigationContainer, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./Login";
import Forgot from "./ForgotPassword";
import Reset from "./ResetPassword";
import Account from "../tabComponents/Account";
const mainNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Forgot: { screen: Forgot },
    Reset: { screen: Reset },
    Account: { screen: Account },
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
