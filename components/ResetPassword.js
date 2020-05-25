import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      indicator: false,
      message: props.route.params.message,
      message1: "",
      pass: "",
      Error: "",
      show: false,
    };
  }

  function() {
    $("#myInput").on("input", function () {
      // Print entered value in a div box
      $("#result").text($(this).val());
    });
  }
  myFun = () => {
    this.setState({
      message: "",
    });
    const { a, b, c, d, e, f } = this.state;
    var empty = false;

    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "") {
      this.setState({
        Error: "Please Enter Valid OTP.",
      });
      empty = true;
    }
    const email = this.props.navigation.getParam("email", "");
    var OTP = "" + a + b + c + d + e + f;
    const newPassword = this.state.pass;
    if (newPassword == "") {
      this.setState({
        Error1: "Please Enter New Password.",
      });
      empty = true;
    }
    if (newPassword.length >= 1) {
      if (newPassword.length < 6 || newPassword.length > 14) {
        this.setState({
          Error1: "Password Length Should be 6-14 Characters.",
        });
        empty = true;
      }
    }

    setTimeout(() => {
      this.setState({
        Error1: "",
        Error: "",
      });
    }, 3000);

    if (empty == false) {
      this.setState({ indicator: true });

      fetch("http://13.233.164.8:3000/auth/resetpassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: email,
          newPassword: newPassword,
          otp: OTP,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          this.setState({ indicator: false });

          if (res.type == "success") {
            alert("New Updated Successfully.");
            this.props.navigation.navigate("Login");
          } else {
            this.setState({
              Error: "Incorrect OTP",
            });
          }
        })
        .done();
    }
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {this.state.indicator ? (
            <ActivityIndicator style={{ flex: 1 }} size="large" color="white" />
          ) : (
            <View>
              <Icon
                style={{
                  paddingLeft: 374,
                  paddingTop: 25,
                  color: "#FFFFFF",
                  paddingTop: 25,
                }}
                name="close"
                size={25}
                onPress={() => {
                  this.props.navigation.navigate("Login");
                }}
              />

              <Text style={styles.rpText}>Reset Password</Text>
              <Text style={styles.OTP}>Enter One Time Password (OTP) </Text>
              <View style={styles.OTPContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onChangeText={(a) => this.setState({ a })}
                  onChange={() => this.refs.OTP1.focus()}
                  autoCorrect={false}
                  maxLength={1}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onChangeText={(b) => this.setState({ b })}
                  onChange={() => this.refs.OTP2.focus()}
                  autoCorrect={false}
                  maxLength={1}
                  ref={"OTP1"}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onChangeText={(c) => this.setState({ c })}
                  onChange={() => this.refs.OTP3.focus()}
                  autoCorrect={false}
                  maxLength={1}
                  ref={"OTP2"}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onChangeText={(d) => this.setState({ d })}
                  onChange={() => this.refs.OTP4.focus()}
                  autoCorrect={false}
                  maxLength={1}
                  ref={"OTP3"}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onChangeText={(e) => this.setState({ e })}
                  onChange={() => this.refs.OTP5.focus()}
                  autoCorrect={false}
                  maxLength={1}
                  ref={"OTP4"}
                />

                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onChangeText={(f) => this.setState({ f })}
                  onChange={() => {
                    this.setState({ show: true });
                  }}
                  autoCorrect={false}
                  maxLength={1}
                  ref={"OTP5"}
                />
              </View>
              <Text style={styles.Error}>
                {this.state.message}
                {this.state.Error}
              </Text>

              {this.state.show ? (
                <View>
                  <Text style={styles.newPassText}>Enter new password </Text>
                  <TextInput
                    style={styles.email}
                    returnKeyType="go"
                    onChangeText={(pass) => {
                      this.setState({ pass });
                    }}
                    secureTextEntry={true}
                    autoCorrect={false}
                  />
                  <Text style={styles.Error}>{this.state.Error1}</Text>

                  <TouchableOpacity onPress={this.myFun}>
                    <Text style={styles.forgotText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
  },
  rpText: {
    color: "#FDB900",
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
    fontFamily: "Semibold",
  },
  Error: {
    marginTop: 3,
    textAlign: "center",
    fontSize: 17,
    fontFamily: "regular",
    color: "red",
  },

  OTP: {
    marginTop: 37,
    color: "#ffff",
    fontSize: 15,
    fontFamily: "regular",
    textAlign: "center",
  },
  OTPContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 50,
  },
  ErrorText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 17,
    fontFamily: "regular",
    color: "red",
  },
  input: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 11,
    width: 40,
    height: 50,
    backgroundColor: "#242625",
    borderBottomColor: "#FDB900",
    borderBottomWidth: 1,
    fontSize: 30,
    color: "#FFFFFF",
    fontFamily: "black",
  },
  newPassText: {
    marginTop: 37,
    color: "#ffff",
    fontSize: 15,
    fontFamily: "regular",
    textAlign: "center",
  },
  email: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    padding: 4,
    backgroundColor: "#555555",
    borderBottomColor: "#FFFFFF",
    borderRadius: 5,
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "black",
  },
  forgotText: {
    color: "#FFFF",
    textAlign: "center",
    marginTop: 40,
    fontSize: 17,
    fontFamily: "Semibold",
    borderWidth: 2,
    borderColor: "#ffff",
    marginHorizontal: 138,
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  buttonText: {
    marginTop: 20,
    textAlign: "center",
    color: "#FDB900",
    fontSize: 18,
    fontFamily: "Semibold",
  },
});
