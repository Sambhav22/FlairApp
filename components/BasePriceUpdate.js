import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.route.params.price,
      name: props.route.params.name,
      description: props.route.params.description,
      userId: props.route.params.userId,
      eventId: props.route.params.eventId,
      token: props.route.params.token,
      eventPrice: props.route.params.token,
    };
  }
  myFun = () => {
    const { userId, price, eventId, token } = this.state;
    fetch("http://api-staging.sleeping8.com/bookingdetail/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        userId: userId,
        eventPrice: [{ eventTypeId: eventId, price: price }],
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.type == "success") {
          const UpdateState = this.props.route.params.UpdateState;

          var eventPrice = res.data.eventPrice;
          this.props.navigation.navigate("BasePrice", {
            eventPrice: eventPrice,
          });
          UpdateState();
        } else {
          alert(res.message);
        }
      })
      .done();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("BasePrice");
            }}
          >
            <Ionicons
              style={{ marginTop: 27, paddingLeft: 25 }}
              name="ios-arrow-back"
              color="white"
              size={35}
            />
          </TouchableOpacity>
          <Text style={styles.price}>Base Price</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              paddingTop: 30,
              fontSize: 15,
              color: "#555555",
              fontFamily: "regular",
            }}
          >
            {this.state.name}
          </Text>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 16,
              color: "#FFFFFF",
              fontFamily: "Semibold",
            }}
          >
            {this.state.description}
          </Text>
          <TextInput
            style={styles.input}
            keyboardType={"numeric"}
            returnKeyType="go"
            onChangeText={(price) => this.setState({ price })}
            value={this.state.price}
            placeholderTextColor="#FFFF"
          />
          <TouchableOpacity onPress={this.myFun}>
            <LinearGradient
              colors={["#FDB900", "#B16D00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}> Update</Text>
            </LinearGradient>
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
  price: {
    marginLeft: 120,
    marginTop: 29,
    color: "#FDB900",
    fontSize: 20,
    fontFamily: "black",
  },
  addressText: {
    fontSize: 15,
    color: "#555555",
    paddingTop: 25,
    marginLeft: 20,
    fontFamily: "regular",
  },
  input: {
    marginTop: 32,
    height: 40,
    width: 360,
    padding: 9,
    paddingLeft: 155,
    backgroundColor: "#3E403F",

    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "regular",
  },
  buttonContainer: {
    height: 40,
    width: 360,
    paddingVertical: 6,
    marginTop: 30,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    paddingTop: 3,
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "bold",
  },
});
