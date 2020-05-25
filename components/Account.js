import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  BackHandler,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      image: "",
      city: "",
      address: "",
      lng: "",
      lat: "",
      eventPrice: [],
      userId: "",
      token: "",
      email: "",
      mobile: "",
      cabDetails: [],
      indicator: false,
    };
  }

  componentDidMount() {
    this.setState({ indicator: true });

    AsyncStorage.getItem("token", (err, result) => {
      if (result != null) {
        var token = result;
        fetch("http://13.233.164.8:3000/user/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.type == "success") {
              var fullname = res.data.fullName;
              var email = res.data.email;
              var mobile = res.data.mobile;
              var image = res.data.profilePic.imagePaths.path;

              fetch("http://13.233.164.8:3000/bookingdetail/get_info/me", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  authorization: token,
                },
              })
                .then((response) => response.json())
                .then((res) => {
                  if (res.type == "success") {
                    var userId = res.data.userId;
                    var city = res.data.city;
                    var address = res.data.address;
                    var lng = res.data.coordinates.lng;
                    var lat = res.data.coordinates.lat;
                    var eventPrice = res.data.eventPrice;
                    var cabDetails = res.data.cabsPreferences;
                    this.setState({ user: fullname });
                    this.setState({ image: image });
                    this.setState({ city: city });
                    this.setState({ address: address });
                    this.setState({ lng: lng });
                    this.setState({ lat: lat });
                    this.setState({ eventPrice });
                    this.setState({ userId });
                    this.setState({ token });

                    this.setState({ mobile });
                    this.setState({ email });
                    this.setState({ cabDetails });
                    this.setState({ indicator: false });
                  }
                });
            }
          });
      }
    });
  }

  UpdateStateCity() {
    fetch("http://13.233.164.8:3000/bookingdetail/get_info/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: this.state.token,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.type == "success") {
          this.setState({ city: res.data.city, address: res.data.address });
        }
      });
  }
  async UpdateStateAccount() {
    await fetch("http://13.233.164.8:3000/bookingdetail/get_info/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: this.state.token,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.type == "success") {
          this.setState({ eventPrice: res.data.eventPrice });
        }
      })
      .done();
  }

  render() {
    //  console.log(this.state.eventPrice);
    return (
      <View style={styles.container}>
        {this.state.indicator ? (
          <ActivityIndicator style={{ flex: 1 }} size="large" color="white" />
        ) : (
          <View style={{ flex: 1 }}>
            <Text style={styles.account}>Account</Text>
            <View style={styles.imgContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: this.state.image,
                }}
                placeholderSource={require("../assets/Placeholder-256.png")}
              />
              <Text style={styles.nameText}>{this.state.user}</Text>
            </View>
            <View style={styles.notContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginTop: 5, height: 32, width: 32 }}
                  source={require("../assets/Icons_Images/tab_account/Notification-64.png")}
                />

                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <View style={{ width: 200 }}>
                    <Text style={styles.notText}>Notifications</Text>
                  </View>
                  <Ionicons
                    style={styles.arrow}
                    name="ios-arrow-forward"
                    color="#FFFF"
                    size={15}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginTop: 10, height: 32, width: 32 }}
                  source={require("../assets/Icons_Images/tab_account/Location-64.png")}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("BaseLocation", {
                      city: this.state.city,
                      address: this.state.address,
                      lat: this.state.lat,
                      lng: this.state.lng,
                      userId: this.state.userId,
                      token: this.state.token,
                      UpdateStateCity: this.UpdateStateCity.bind(this),
                    });
                  }}
                  style={{ marginTop: 8, flexDirection: "row" }}
                >
                  <View style={{ width: 200 }}>
                    <Text style={styles.notText}>Base Location</Text>
                  </View>
                  <Ionicons
                    style={styles.arrow1}
                    name="ios-arrow-forward"
                    color="#FFFF"
                    size={15}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginTop: 10, height: 32, width: 32 }}
                  source={require("../assets/Icons_Images/tab_account/Price-64.png")}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("BasePrice", {
                      eventPrice: this.state.eventPrice,
                      userId: this.state.userId,
                      token: this.state.token,
                      UpdateStateAccount: this.UpdateStateAccount.bind(this),
                    });
                  }}
                  style={{ marginTop: 10, flexDirection: "row" }}
                >
                  <View style={{ width: 200 }}>
                    <Text style={styles.baseText}>Base Price</Text>
                  </View>
                  <Ionicons
                    style={styles.arrow2}
                    name="ios-arrow-forward"
                    color="#FFFF"
                    size={15}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginTop: 10, height: 32, width: 32 }}
                  source={require("../assets/Icons_Images/tab_account/Account-64.png")}
                />

                <TouchableOpacity
                  style={{ marginTop: 10, flexDirection: "row" }}
                  onPress={() => {
                    this.props.navigation.navigate("ArtistProfile", {
                      user: this.state.user,
                      mobile: this.state.mobile,
                      email: this.state.email,
                      token: this.state.token,
                      userId: this.state.userId,
                      cabDetails: this.state.cabDetails,
                    });
                  }}
                >
                  <View style={{ width: 200 }}>
                    <Text style={styles.accountText}>Account</Text>
                  </View>
                  <Ionicons
                    style={styles.arrow3}
                    name="ios-arrow-forward"
                    color="#FFFF"
                    size={15}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ marginTop: 10, height: 32, width: 32 }}
                  source={require("../assets/Icons_Images/tab_account/Support-64.png")}
                />

                <TouchableOpacity
                  style={{ marginTop: 10, flexDirection: "row" }}
                  onPress={() => {
                    this.props.navigation.navigate("Support");
                  }}
                >
                  <View style={{ width: 200 }}>
                    <Text style={styles.accountText}>Support</Text>
                  </View>
                  <Ionicons
                    style={styles.arrow3}
                    name="ios-arrow-forward"
                    color="#FFFF"
                    size={15}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  AsyncStorage.clear();
                  this.props.navigation.replace("Login");
                }}
              >
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
  },
  account: {
    color: "#FDB900",
    fontSize: 34,
    marginTop: 45,
    marginLeft: 16,
    fontFamily: "black",
  },
  imgContainer: {
    flexDirection: "row",
  },
  image: {
    marginTop: 20,
    marginLeft: 16,
    borderRadius: 60,
    height: 100,
    width: 100,
  },
  nameText: {
    marginTop: 65,
    marginLeft: 45,
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "bold",
  },
  notContainer: {
    marginTop: 20,
    marginLeft: 16,
  },
  notText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "regular",
    marginTop: 10,
    marginLeft: 18,
  },
  baseText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "regular",
    marginTop: 10,
    marginLeft: 19,
  },
  accountText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "regular",
    marginTop: 10,
    marginLeft: 19,
  },

  arrow: {
    marginTop: 14,
    marginLeft: 150,
  },
  arrow1: {
    marginTop: 14,
    marginLeft: 150,
  },
  arrow2: {
    marginTop: 14,
    marginLeft: 150,
  },
  arrow3: {
    marginTop: 14,
    marginLeft: 150,
  },
  logoutText: {
    fontSize: 20,
    color: "#FFFF",
    fontFamily: "Semibold",
    marginBottom: 10,
  },
});
