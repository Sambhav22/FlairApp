import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default class Calender extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Calendar</Text>
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
