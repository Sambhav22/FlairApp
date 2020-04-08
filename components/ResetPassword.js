import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      message: this.props.navigation.getParam("message", ""),
    };
  }
  myfun = () => {
    const { a, b, c, d, e, f } = this.state;
    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "") {
      this.setState({
        message: "Please Enter Valid OTP.",
      });
    }
    const email = this.props.navigation.getParam("email", "");
    var OTP = "" + a + b + c + d + e + f;
    fetch("http://35.154.138.192:3000/auth/verifyotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: email,
        otp: OTP,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.type == "success") {
          this.props.navigation.navigate("Reset", {
            OTP,
            email,
          });
        } else {
          this.props.navigation.navigate("Reset1", {
            OTP,
            email,
          });

          //          alert(res.message);
        }
      })
      .done();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Icon
            style={{ color: "#FFFFFF", paddingLeft: 374, paddingTop: 25 }}
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
              autoCorrect={false}
              maxLength={1}
              onSubmitEditing={() => this.refs.OTP1.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(b) => this.setState({ b })}
              autoCorrect={false}
              maxLength={1}
              ref={"OTP1"}
              onSubmitEditing={() => this.refs.OTP2.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(c) => this.setState({ c })}
              autoCorrect={false}
              maxLength={1}
              ref={"OTP2"}
              onSubmitEditing={() => this.refs.OTP3.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(d) => this.setState({ d })}
              autoCorrect={false}
              maxLength={1}
              ref={"OTP3"}
              onSubmitEditing={() => this.refs.OTP4.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(e) => this.setState({ e })}
              autoCorrect={false}
              maxLength={1}
              ref={"OTP4"}
              onSubmitEditing={() => this.refs.OTP5.focus()}
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              onChangeText={(f) => this.setState({ f })}
              autoCorrect={false}
              maxLength={1}
              ref={"OTP5"}
            />
          </View>
          <Text style={styles.ErrorText}>{this.state.message}</Text>
          <TouchableOpacity onPress={this.myfun}>
            <Text style={styles.buttonText}> Submit</Text>
          </TouchableOpacity>
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
