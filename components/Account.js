import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.route.params.user,
      image: props.route.params.image,
      city: props.route.params.city,
      address: props.route.params.address,
      lng: props.route.params.lng,
      lat: props.route.params.lat,
      eventPrice: props.route.params.eventPrice,
      userId: props.route.params.userId,
      token: props.route.params.token,
    };
    this.props.navigation.addListener("didFocus", (payload) => {
      this.setState({ is_updated: true });
    });
  }
  UpdateStateCity() {
    fetch("http://api-staging.sleeping8.com/bookingdetail/get_info/me", {
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
  UpdateStateAccount() {
    fetch("http://api-staging.sleeping8.com/bookingdetail/get_info/me", {
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
    return (
      <View style={styles.container}>
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
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Ionicons name="ios-notifications" color="blue" size={40} />
            <Text style={styles.notText}>Notifications</Text>
            <Ionicons
              style={styles.arrow}
              name="ios-arrow-forward"
              color="#FFFF"
              size={15}
            />
          </TouchableOpacity>
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
            style={{ marginTop: 5, flexDirection: "row" }}
          >
            <Ionicons name="ios-notifications" color="green" size={40} />
            <Text style={styles.notText}>Base Location</Text>
            <Ionicons
              style={styles.arrow1}
              name="ios-arrow-forward"
              color="#FFFF"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("BasePrice", {
                eventPrice: this.state.eventPrice,
                userId: this.state.userId,
                token: this.state.token,
                UpdateStateAccount: this.UpdateStateAccount.bind(this),
              });
            }}
            style={{ marginTop: 5, flexDirection: "row" }}
          >
            <Ionicons name="ios-pricetag" color="yellow" size={30} />
            <Text style={styles.baseText}>Base Price</Text>
            <Ionicons
              style={styles.arrow2}
              name="ios-arrow-forward"
              color="#FFFF"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: 14, flexDirection: "row" }}
            onPress={() => {
              this.props.navigation.navigate("ArtistProfile");
            }}
          >
            <Ionicons name="md-person" color="red" size={30} />
            <Text style={styles.accountText}>Account</Text>
            <Ionicons
              style={styles.arrow3}
              name="ios-arrow-forward"
              color="#FFFF"
              size={15}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 14, flexDirection: "row" }}>
            <Ionicons name="md-person" color="#56FFFF" size={30} />
            <Text style={styles.accountText}>Support</Text>
            <Ionicons
              style={styles.arrow3}
              name="ios-arrow-forward"
              color="#FFFF"
              size={15}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
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
    marginLeft: 20,
  },
  baseText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "regular",
    marginTop: 10,
    marginLeft: 21,
  },
  accountText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "regular",
    marginTop: 10,
    marginLeft: 24,
  },

  arrow: {
    marginTop: 14,
    marginLeft: 243,
  },
  arrow1: {
    marginTop: 14,
    marginLeft: 234,
  },
  arrow2: {
    marginTop: 14,
    marginLeft: 258,
  },
  arrow3: {
    marginTop: 14,
    marginLeft: 272,
  },
  logoutText: {
    fontSize: 20,
    color: "#FFFF",
    fontFamily: "Semibold",
    marginBottom: 10,
  },
});
