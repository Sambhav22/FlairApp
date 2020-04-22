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
          <Text style={styles.price}>Base Price</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("BasePriceUpdate");
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.addressText}>Event Category-Type 1</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                width: 350,
                fontSize: 16,
                color: "#FFFF",
                fontFamily: "Semibold",
                paddingLeft: 21,
                paddingRight: 15,
                marginTop: 9,
              }}
            >
              Includes event types such as corporate
            </Text>
            <Text style={styles.editText}>15000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("BasePriceUpdate");
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.addressText}>Event Category-Type 2</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                width: 350,
                fontSize: 16,
                color: "#FFFF",
                fontFamily: "Semibold",
                paddingLeft: 21,
                paddingRight: 15,
                marginTop: 9,
              }}
            >
              Includes event types such as lounges, cafes and nightclubs
            </Text>
            <Text style={styles.editText}>16000</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
  },
  price: {
    marginLeft: 120,
    marginTop: 29,
    color: "#FDB900",
    fontSize: 20,
    fontFamily: "black",
  },
  addressText: {
    fontSize: 15,
    color: "#555555",
    paddingTop: 25,
    marginLeft: 20,
    fontFamily: "regular",
  },
  editText: {
    fontSize: 18,
    color: "#FDB900",
    fontFamily: "bold",
    paddingRight: 4,
    paddingTop: 6,
  },
});
