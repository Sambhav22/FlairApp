import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Switch,
  Modal,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventPrice: props.route.params.eventPrice,
      userId: props.route.params.userId,
      token: props.route.params.token,
      category0: props.route.params.eventPrice[0].price != 0 ? true : false,
      category1: props.route.params.eventPrice[1].price != 0 ? true : false,
      category2: props.route.params.eventPrice[2].price != 0 ? true : false,
      category3: props.route.params.eventPrice[3].price != 0 ? true : false,
      check0: props.route.params.eventPrice[0].price != 0 ? true : false,
      check1: props.route.params.eventPrice[1].price != 0 ? true : false,
      check2: props.route.params.eventPrice[2].price != 0 ? true : false,
      check3: props.route.params.eventPrice[3].price != 0 ? true : false,
      indicator: false,
    };
  }
  componentWillUnmount() {
    const UpdateStateAccount = this.props.route.params.UpdateStateAccount;
    UpdateStateAccount();
  }

  checkPrice(index) {
    this.state.eventPrice[index].price != 0
      ? null
      : this.setState({ ["category" + index]: false });
  }
  UpdateState(index) {
    this.setState({ eventPrice: this.props.route.params.eventPrice });
    this.setState({ ["check" + index]: true });

    alert("Price updated successfully.");
  }

  async changeValue(valueChange, index, value, info) {
    await this.setState({ ["category" + index]: valueChange });

    this.state["category" + index] === true
      ? this.props.navigation.navigate("BasePriceUpdate", {
          price: 0,
          name: value.eventTypeId.name,
          description: value.eventTypeId.description,
          userId: this.state.userId,
          eventId: value.eventTypeId._id,
          token: this.state.token,
          UpdateState: this.UpdateState.bind(this),
          eventPrice: value,
          info,
          index,
          checkPrice: this.checkPrice.bind(this),
        })
      : ((info[index].price = 0),
        this.setState({ indicator: true }),
        fetch("http://13.233.164.8:3000/bookingdetail/update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: this.state.token,
          },
          body: JSON.stringify({
            userId: this.state.userId,
            eventPrice: info,
          }),
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.type == "success") {
              this.setState({ ["check" + index]: false });
            } else {
              alert(res.message);
            }
            this.setState({ indicator: false });
          })
          .done());
  }

  render() {
    var info = [];
    for (var i = 0; i < this.state.eventPrice.length; i++) {
      info.push({
        eventTypeId: this.state.eventPrice[i].eventTypeId._id,
        price: this.state.eventPrice[i].price,
      });
    }
    console.log(JSON.stringify(info));

    return (
      <View style={styles.container}>
        {this.state.indicator ? (
          <Modal
            transparent={true}
            animationType={"none"}
            visible={this.state.indicator}
            onRequestClose={() => {
              console.log("close modal");
            }}
          >
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator
                  style={{ flex: 1 }}
                  size="large"
                  animating={this.state.indicator}
                />
              </View>
            </View>
          </Modal>
        ) : null}

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              const UpdateStateAccount = this.props.route.params
                .UpdateStateAccount;
              UpdateStateAccount();
              this.props.navigation.navigate("AccountStackScreen", {
                screen: "Account",
                params: {
                  screen: "Account",
                  params: {
                    eventPrice: this.state.eventPrice,
                  },
                },
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
        {this.state.eventPrice.map((value, index) => (
          <View key={value._id}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.addressText}>{value.eventTypeId.name}</Text>
              <Switch
                trackColor={{ false: "black", true: "#FDB900" }}
                thumbColor={"#ffffff"}
                style={{ marginTop: 25 }}
                value={this.state["category" + index]}
                onValueChange={(valueChange) =>
                  this.changeValue(valueChange, index, value, info)
                }
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  width: "80%",
                  fontSize: 16,
                  color: "#FFFF",
                  fontFamily: "Semibold",
                  marginLeft: "5%",
                  marginTop: 9,
                }}
              >
                {value.eventTypeId.description}
              </Text>
              {this.state["check" + index] == true ? (
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
                      info,
                    });
                  }}
                >
                  <Text style={styles.editText}>{value.price}</Text>
                </TouchableOpacity>
              ) : null}
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
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  addressText: {
    fontSize: 15,
    color: "#555555",
    paddingTop: 25,
    marginLeft: "5%",
    fontFamily: "regular",
  },
  editText: {
    marginRight: "3%",
    fontSize: 18,
    color: "#FDB900",
    fontFamily: "bold",
    paddingTop: 6,
  },
});
