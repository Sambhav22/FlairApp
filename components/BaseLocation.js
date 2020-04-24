import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Geocoder from "react-native-geocoding";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.route.params.city,
      address: props.route.params.address,
      lng: props.route.params.lng,
      lat: props.route.params.lat,
    };
  }
  getData() {
    Geocoder.init("AIzaSyC44wefq1iYNoxafArYW2-dd-uyAnNOTZU");
    Geocoder.from(this.state.lat, this.state.lng)
      .then((json) => {
        var addressComponent = json.results[0].formatted_address;
        alert(addressComponent);
        var cityComponent = json.result[0].address_components[2];
        this.setState({ address: addressComponent });
        this.setState({ city: cityComponent });
      })
      .catch((error) => console.warn(error));

    // Works as well :
    // ------------

    // location object
  }
  render() {
    if (this.state.city == "") {
      this.getData();
    }
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
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
            onPress={() => this.props.navigation.navigate("EditBaseLocation")}
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            style={{ marginTop: 10, paddingLeft: 25 }}
            name="ios-business"
            color="#ffff"
            size={30}
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
          <Ionicons
            style={{ marginTop: 3, paddingLeft: 25 }}
            name="ios-business"
            color="#ffff"
            size={30}
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
