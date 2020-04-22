import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "flex-start" }}>
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
        </View>
        <View style={{ flex: 1, alignItems: "center", marginLeft: -26 }}>
          <Text style={styles.account}>Base Location</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#242625",
  },
  account: {
    paddingTop: 29,
    color: "#FDB900",
    fontSize: 20,

    fontFamily: "black",
  },
});
