import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Button,
  AsyncStorage,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Forgot from "./ForgotPassword";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
  }
  componentDidMount() {
    this._loadIntialState().done();
  }
  _loadIntialState = async () => {
    var value = await AsyncStorage.getItem("email");
    if (value != null) {
      this.props.navigation.navigate("Profile");
    }
  };

  myfun = () => {
    Keyboard.dismiss();
    const { email, pass } = this.state;
    var empty = false;
    if (email == "") {
      this.setState({
        ErrorEmail: "Please Enter your Email Address or Mobile Number",
      });
      empty = true;
    }
    if (pass == "") {
      this.setState({
        ErrorPass: "Please Enter your Password",
      });
      empty = true;
    }

    setTimeout(() => {
      this.setState({
        ErrorEmail: "",
        ErrorPass: "",
      });
    }, 3000);
    if (empty == false) {
      fetch("http://35.154.138.192:3000/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: this.state.email,
          password: this.state.pass,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.type == "success") {
            alert(res.message);
          } else {
            alert("Either Email or Password Incorrect");
          }
        })
        .done();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Login</Text>
            </View>
            <View style={styles.baseContainer}>
              <Text style={styles.emailText}>Email Address/Mobile Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Email/Mobile"
                placeholderTextColor="#555555"
                keyboardType="email-address"
                onChangeText={(email) => this.setState({ email })}
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
              <Text style={styles.Error}>{this.state.ErrorEmail}</Text>
              <Text style={styles.passwordText}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#555555"
                onChangeText={(pass) => {
                  this.setState({ pass });
                }}
                returnKeyType="go"
                secureTextEntry={true}
                autoCorrect={false}
                ref={"txtPassword"}
              />
              <Text style={styles.Error}>{this.state.ErrorPass}</Text>

              <TouchableOpacity
                style={{ marginHorizontal: 110 }}
                onPress={() => {
                  this.props.navigation.navigate("Forgot");
                }}
              >
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.myfun}>
                <LinearGradient
                  colors={["#FDB900", "#B16D00"]}
                  style={styles.buttonContainer}
                >
                  <Text style={styles.buttonText}> Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
  },
  loginContainer: {
    marginTop: 20,
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 64,
    padding: 15,
    fontFamily: "light",
  },
  emailText: {
    paddingLeft: 20,
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Semibold",
  },
  input: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    paddingBottom: 10,
    backgroundColor: "#242625",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    fontSize: 30,
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
  passwordText: {
    marginTop: 15,
    paddingLeft: 20,
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Semibold",
  },
  forgotText: {
    color: "#555555",
    textAlign: "center",
    marginTop: 35,
    fontSize: 12,
    fontFamily: "Italic",
  },
  buttonContainer: {
    paddingVertical: 6,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Semibold",
  },
});
