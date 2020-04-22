import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
  render() {
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
            DLF Mall of India, Sector 18, Noida, Uttar Pradesh 201301, India
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
            New Delhi
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
