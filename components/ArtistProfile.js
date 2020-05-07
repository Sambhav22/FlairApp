import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Routes from "./Routes";

export default class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.route.params.user,
      email: props.route.params.email,
      mobile: props.route.params.mobile,
      token: props.route.params.token,
      stageName: "",
      category: "",
      artistInfo: "",
      subCategoryIds: [],
      userId: props.route.params.userId,
      cabDetails: props.route.params.cabDetails,
    };
  }
  UpdateState() {
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
            category: res.data.categoryId.name,
            artistInfo: res.data.artistInfo,
            subCategoryIds: res.data.subCategoryIds,
          });
        } else {
          alert("Something went wrong");
        }
      })
      .done();
  }

  componentDidMount() {
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
            category: res.data.categoryId.name,
            artistInfo: res.data.artistInfo,
            subCategoryIds: res.data.subCategoryIds,
          });
        } else {
          alert("Something went wrong");
        }
      })
      .done();
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
        <Text style={styles.name}>{this.state.user}</Text>
        <Text style={styles.pdetails}>Personal Details</Text>

        <Text style={styles.emailText}>EMAIL ADDRESS</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ marginLeft: 22, height: 32, width: 32 }}
            source={require("../assets/Icons_Images/tab_account/artist_profile_1/Email.png")}
          />

          <Text style={styles.emailValue}>{this.state.email}</Text>
        </View>

        <Text style={styles.emailText}>Mobile Number</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ marginLeft: 22, height: 32, width: 32 }}
            source={require("../assets/Icons_Images/tab_account/artist_profile_1/Mobile.png")}
          />

          <Text style={styles.emailValue}>+91 - {this.state.mobile}</Text>
        </View>

        <Text style={styles.emailText}>PASSWORD</Text>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ marginLeft: 22, height: 32, width: 32 }}
            source={require("../assets/Icons_Images/tab_account/artist_profile_1/Password.png")}
          />

          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text style={styles.emailValue}>********</Text>
            <Ionicons
              style={{ marginTop: 2, marginLeft: 247 }}
              name="ios-arrow-forward"
              color="#FFFF"
              size={15}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 12,
            marginHorizontal: 20,
            marginBottom: 5,
            borderBottomColor: "#707070",
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.pdetails}>Professional Details</Text>
        <Text style={styles.stageText}>STAGE NAME</Text>
        <Text style={styles.stageValue}>{this.state.stageName}</Text>
        <Text style={styles.stageText}>CATEGORY</Text>
        <Text style={styles.stageValue}>{this.state.category}</Text>
        <Text style={styles.stageText}>GENRE(S)</Text>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() =>
            this.props.navigation.navigate("Genre", {
              subCategoryIds: this.state.subCategoryIds,
            })
          }
        >
          <Text style={styles.stageValue}>Click to view</Text>
          <Ionicons
            style={{ marginTop: 8, marginLeft: 266 }}
            name="ios-arrow-forward"
            color="#FFFF"
            size={15}
          />
        </TouchableOpacity>

        <Text style={styles.stageText}>BIOGRAPHY</Text>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() =>
            this.props.navigation.navigate("Biography", {
              artistInfo: this.state.artistInfo,
              token: this.state.token,
              userId: this.state.userId,
              UpdateState: this.UpdateState.bind(this),
            })
          }
        >
          <Text style={styles.stageValue}>Click to view</Text>
          <Ionicons
            style={{ marginTop: 8, marginLeft: 266 }}
            name="ios-arrow-forward"
            color="#FFFF"
            size={15}
          />
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

        <View style={{ flexDirection: "row" }}>
          {this.state.cabDetails.map((value) => (
            <Text key={value._id} style={styles.stageValue}>
              {value.cabTypeId.name + "(" + value.units + ")"}
            </Text>
          ))}
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
    marginLeft: 20,
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
