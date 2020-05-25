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
              var fullname = res.data.fullName;
              var email = res.data.email;
              var mobile = res.data.mobile;
              var image = res.data.profilePic.imagePaths.path;

              fetch("http://13.233.164.8:3000/bookingdetail/get_info/me", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  authorization: token,
                },
              })
                .then((response) => response.json())
                .then((res) => {
                  if (res.type == "success") {
                    var userId = res.data.userId;
                    var city = res.data.city;
                    var address = res.data.address;
                    var lng = res.data.coordinates.lng;
                    var lat = res.data.coordinates.lat;
                    var eventPrice = res.data.eventPrice;
                    var cabDetails = res.data.cabsPreferences;
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
