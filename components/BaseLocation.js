import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Geocoder from "react-native-geocoding";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.route.params.userId,
      city: props.route.params.city,
      address: props.route.params.address,
      lng: props.route.params.lng,
      lat: props.route.params.lat,
      token: props.route.params.token,
    };
  }
  UpdateCity() {
    fetch("http://13.233.164.8:3000/bookingdetail/get_info/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: this.state.token,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.type == "success") {
          this.setState({ city: res.data.city, address: res.data.address });
        }
      });
  }
  getData() {
    Geocoder.init("AIzaSyC44wefq1iYNoxafArYW2-dd-uyAnNOTZU");
    Geocoder.from(this.state.lat, this.state.lng)
      .then((json) => {
        var addressComponent = json.results[0].formatted_address;
        var cityComponent = json.results[0].address_components[2];
        this.setState({ address: addressComponent });
        this.setState({ city: cityComponent.short_name });
      })
      .catch((error) => console.warn(error));

    // Works as well :
    // ------------

    // location object
  }

  componentDidMount() {
    if (this.state.city == "") {
      this.getData();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              const UpdateStateCity = this.props.route.params.UpdateStateCity;
              UpdateStateCity();

              this.props.navigation.navigate("Account");
            }}
          >
            <Ionicons
              style={{ marginTop: 27, paddingLeft: 25 }}
              name="ios-arrow-back"
              color="white"
              size={35}
            />
          </TouchableOpacity>
          <Text style={styles.account}>Base Location</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.addressText}>ADDRESS</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("EditBaseLocation", {
                userId: this.state.userId,
                token: this.state.token,
                UpdateCity: this.UpdateCity.bind(this),
              })
            }
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ marginTop: 8, marginLeft: 12, height: 32, width: 32 }}
            source={require("../assets/Icons_Images/tab_account/base_location_1/Address.png")}
          />
          <Text
            style={{
              width: 300,
              fontSize: 16,
              color: "#FFFF",
              fontFamily: "Semibold",
              paddingLeft: 18,
              paddingRight: 15,
              marginTop: 8,
            }}
          >
            {this.state.address}
          </Text>
        </View>
        <Text style={styles.addressText}>CITY</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ marginTop: 3, marginLeft: 15, height: 32, width: 32 }}
            source={require("../assets/Icons_Images/tab_account/base_location_1/City.png")}
          />
          <Text
            style={{
              width: 300,
              fontSize: 16,
              color: "#FFFF",
              fontFamily: "Semibold",
              paddingLeft: 14,
              paddingRight: 15,
              marginTop: 8,
            }}
          >
            {this.state.city}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
  },
  account: {
    marginLeft: 105,
    marginTop: 29,
    color: "#FDB900",
    fontSize: 20,
    fontFamily: "black",
  },
  addressText: {
    fontSize: 15,
    color: "#555555",
    paddingTop: 25,
    marginLeft: 60,
    fontFamily: "regular",
  },
  editText: {
    fontSize: 15,
    color: "#FDB900",
    fontFamily: "regular",
    marginLeft: 250,
    paddingTop: 25,
  },
});
