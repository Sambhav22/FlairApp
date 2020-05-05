import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Assets } from "@react-navigation/stack";

export default class Support extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 30,
            marginLeft: 20,
            fontSize: 16,
            color: "#FFFFFF",
          }}
        >
          Hello Bass Mafia
        </Text>
        <Text style={styles.upcoming}>Upcoming</Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{ marginTop: -100, width: 350, height: 350 }}
            source={require("../assets/Icons_Images/tab_upcoming/No_Booking_Illustration.png")}
          />
          <Text style={{ color: "#FFFFFF", fontSize: 15 }}>
            No Upcoming Bookings
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
  upcoming: {
    marginLeft: 20,
    marginTop: 10,
    color: "#FDB900",
    fontSize: 34,
    fontFamily: "black",
  },
  contactText: {
    fontSize: 16,
    color: "#717372",
    fontFamily: "regular",
  },
  email: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "bold",
    marginTop: 10,
  },
  vText: {
    fontSize: 16,
    color: "#717372",
    fontFamily: "regular",
    marginBottom: 25,
  },
});
