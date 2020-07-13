import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator,
  BackHandler,
} from "react-native";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicator: true,
    };
  }
  handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);

    AsyncStorage.getItem("token", (err, result) => {
      if (result == null) {
        this.props.navigation.replace("Login");
      }

      if (result != null) {
        var token = result;
        fetch("http://13.233.164.8:3000/user/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.type == "success") {
              this.setState({ indicator: false });

              this.props.navigation.replace("AccountStackScreen", {
                screen: "Account",
                params: {
                  screen: "Upcoming",
                },
              });
            }
          });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={{ flex: 1 }} size="large" color="white" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
  },
});
