import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventPrice: props.route.params.eventPrice,
      userId: props.route.params.userId,
      token: props.route.params.token,
    };
  }

  UpdateState() {
    this.setState({ eventPrice: this.props.route.params.eventPrice });
    alert("Price updated successfully.");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              const UpdateStateAccount = this.props.route.params
                .UpdateStateAccount;
              UpdateStateAccount();
              this.props.navigation.navigate("Account", {
                eventPrice: this.state.eventPrice,
              });
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
        {this.state.eventPrice.map((value) => (
          <View key={value._id}>
            <Text style={styles.addressText}>{value.eventTypeId.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  width: 350,
                  fontSize: 16,
                  color: "#FFFF",
                  fontFamily: "Semibold",
                  paddingLeft: 21,
                  paddingRight: 15,
                  marginTop: 9,
                }}
              >
                {value.eventTypeId.description}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("BasePriceUpdate", {
                    price: value.price,
                    name: value.eventTypeId.name,
                    description: value.eventTypeId.description,
                    userId: this.state.userId,
                    eventId: value.eventTypeId._id,
                    token: this.state.token,
                    UpdateState: this.UpdateState.bind(this),
                    eventPrice: value,
                  });
                }}
              >
                <Text style={styles.editText}>{value.price}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  editText: {
    fontSize: 18,
    color: "#FDB900",
    fontFamily: "bold",
    paddingRight: 4,
    paddingTop: 6,
  },
});
