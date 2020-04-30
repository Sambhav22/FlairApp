import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
        <Text style={styles.name}>Martin Garrix</Text>
        <Text style={styles.pdetails}>Personal Details</Text>
        <Text style={styles.emailText}>EMAIL ADDRESS</Text>
        <Text style={styles.emailValue}>artist25@gmail.com</Text>
        <Text style={styles.emailText}>Mobile Number</Text>
        <Text style={styles.emailValue}>+91 - 9977686587</Text>
        <Text style={styles.emailText}>PASSWORD</Text>
        <TouchableOpacity>
          <Text style={styles.emailValue}>********</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 8,
            marginHorizontal: 20,
            marginBottom: 5,
            borderBottomColor: "#707070",
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.pdetails}>Professional Details</Text>
        <Text style={styles.stageText}>STAGE NAME</Text>
        <Text style={styles.stageValue}>Martin Garrix</Text>
        <Text style={styles.stageText}>CATEGORY</Text>
        <Text style={styles.stageValue}>EDM Artist</Text>
        <Text style={styles.stageText}>GENRE(S)</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Genre")}
        >
          <Text style={styles.stageValue}>Click to view</Text>
        </TouchableOpacity>

        <Text style={styles.stageText}>BIOGRAPHY</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Biography")}
        >
          <Text style={styles.stageValue}>Click to view</Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 8,
            marginHorizontal: 20,
            borderBottomColor: "#707070",
            borderBottomWidth: 1,
            marginBottom: 5,
          }}
        />
        <Text style={styles.pdetails}>Booking Details</Text>
        <Text style={styles.stageText}>NUMBER OF CABS</Text>
        <Text style={styles.stageValue}>Sedan(1), Luxury(2), Hatchback(1)</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
  },
  name: {
    marginLeft: 20,
    color: "#FDB900",
    fontSize: 34,
    fontFamily: "black",
  },
  pdetails: {
    fontSize: 17,
    color: "#FFFFFF",
    marginLeft: 22,
    fontFamily: "bold",
    marginTop: 3,
  },
  emailText: {
    fontSize: 15,
    color: "#555555",
    fontFamily: "regular",
    marginTop: 6,
    marginLeft: 70,
  },
  emailValue: {
    fontSize: 16,
    fontFamily: "Semibold",
    marginLeft: 70,
    marginTop: 5,
    color: "#FFFFFF",
  },
  stageText: {
    fontSize: 15,
    color: "#555555",
    fontFamily: "regular",
    marginTop: 6,
    marginLeft: 20,
  },
  stageValue: {
    fontSize: 16,
    fontFamily: "Semibold",
    marginLeft: 20,
    marginTop: 5,
    color: "#FFFFFF",
  },
});
