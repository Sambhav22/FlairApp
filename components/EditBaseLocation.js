import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
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
            onChangeText={(email) => this.setState({ email })}
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 20,
    backgroundColor: "#0B0D0C",
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
