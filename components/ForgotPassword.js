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
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  myfun = () => {
    Keyboard.dismiss();

    const emailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const { email } = this.state;
    if (email == "") {
      this.setState({
        ErrorEmail: "Please Enter your Email Address",
      });

      setTimeout(() => {
        this.setState({
          ErrorEmail: "",
        });
      }, 3000);
    } else if (!email.match(emailReg)) {
      this.setState({
        ErrorEmail: "Please Enter Valid Email Address.",
      });
      Keyboard.dismiss();
      setTimeout(() => {
        this.setState({
          ErrorEmail: "",
        });
      }, 3000);
    } else {
      fetch("http://35.154.138.192:3000/auth/sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otpType: "reset",
          channel: "email",
          login: this.state.email,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.type == "success") {
            this.props.navigation.navigate("Reset", {
              message: "OTP Sent Successfully. Please Check your Email",
              email: this.state.email,
            });
          } else {
            alert("Entered Email Address is not registered");
          }
        })
        .done();
    }
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
          <Text style={styles.emailText}>What’s your email? </Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            returnKeyType="go"
            onChangeText={(email) => this.setState({ email })}
            autoCorrect={false}
          />
          <Text style={styles.Error}>{this.state.ErrorEmail}</Text>

          <TouchableOpacity onPress={this.myfun}>
            <Text style={styles.forgotText}>Proceed</Text>
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
  emailText: {
    marginTop: 37,
    color: "#ffff",
    fontSize: 15,
    fontFamily: "regular",
    marginLeft: 10,
  },
  input: {
    marginTop: 10,
    marginLeft: 10,
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
  Error: {
    marginTop: 1,
    paddingLeft: 20,
    fontSize: 15,
    fontFamily: "regular",
    color: "red",
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
});
