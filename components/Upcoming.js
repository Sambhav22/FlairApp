import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  AsyncStorage,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Assets } from "@react-navigation/stack";
import Routes from "./Routes";

export default class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      stageName: "",
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("token", (err, result) => {
      if (result != null) {
        this.setState({ token: result });

        fetch("http://13.233.164.8:3000/professionaldetail/get_info/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: this.state.token,
          },
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.type == "success") {
              this.setState({
                stageName: res.data.stageName,
              });
            } else {
              alert("Something went wrong");
            }
          })
          .done();
      }
    });
  }

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
          Hello {this.state.stageName}
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
