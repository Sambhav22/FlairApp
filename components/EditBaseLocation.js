import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.route.params.userId,
      token: props.route.params.token,
      locationText: "",
      locationValue: [],
    };
  }
  componentWillUnmount() {
    const UpdateCity = this.props.route.params.UpdateCity;
    UpdateCity();
  }
  UpdateLocation = (lat, lng, name, address) => {
    const { userId, token } = this.state;
    const fulladress = name + "," + address;

    fetch("http://api-staging.sleeping8.com/bookingdetail/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        userId: userId,
        address: fulladress,
        coordinates: { lat: lat, lng: lng },
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.type == "success") {
          //    const UpdateState = this.props.route.params.UpdateState;

          //var eventPrice = res.data.eventPrice;
          //  this.props.navigation.navigate("BasePrice", {
          //  eventPrice: eventPrice,
          //});
          // UpdateState();
          alert(res.message);
          this.props.navigation.navigate("BaseLocation");
        } else {
          alert(res.message);
        }
      })
      .done();
  };
  myFun = (key, val) => {
    this.setState({ locationText: val });

    setTimeout(
      () => {
        const text = this.state.locationText;

        fetch(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&key=AIzaSyC44wefq1iYNoxafArYW2-dd-uyAnNOTZU`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: this.state.token,
            },
          }
        )
          .then((response) => response.json())
          .then((res) => {
            if (res.status == "OK")
              this.setState({
                locationValue: res.results,
              });
            else {
              this.setState({ locationValue: [] });
            }
          })
          .done();
      },

      1
    );
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#242625" }}>
        <View style={styles.container}>
          <Image
            style={{
              width: 16,
              height: 16,
              marginTop: 67,
              marginLeft: 25,
              zIndex: 1,
            }}
            source={require("../assets/search.png")}
          />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            returnKeyType="go"
            placeholder="Search Location"
            onChangeText={(val) => this.myFun("LocationText", val)}
            autoCorrect={false}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("BaseLocation");
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 15,
                marginTop: 62,
                paddingLeft: 10,
                fontFamily: "regular",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>

        {this.state.locationValue.slice(0, 10).map((value) => (
          <View key={value.id}>
            <TouchableOpacity
              onPress={() => {
                this.UpdateLocation(
                  value.geometry.location.lat,
                  value.geometry.location.lng,
                  value.name,
                  value.formatted_address
                );
              }}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 14,
                  fontFamily: "regular",
                  paddingLeft: 10,
                  paddingBottom: 15,
                }}
              >
                {value.name + "," + value.formatted_address}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 20,
    backgroundColor: "#0B0D0C",
    marginBottom: 15,
  },
  input: {
    zIndex: 0,
    marginLeft: -25,
    width: 326,

    marginTop: 55,
    height: 40,
    paddingLeft: 32,
    backgroundColor: "#242625",
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "regular",
  },
});
