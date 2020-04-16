import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default class Upcoming extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Upcoming</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
    alignItems: "center",
    justifyContent: "center",
  },
});
