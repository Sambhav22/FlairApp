import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Support extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Account");
          }}
        >
          <Ionicons
            style={{ marginTop: 25, paddingLeft: 25 }}
            name="ios-arrow-back"
            color="white"
            size={35}
          />
        </TouchableOpacity>
        <Text style={styles.help}>Need Help?</Text>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.contactText}>Contact us</Text>
          <Text style={styles.email}>support@sleeping8.com</Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
          <Text style={styles.vText}>Version 1.0.0</Text>
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
  help: {
    marginLeft: 20,
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
