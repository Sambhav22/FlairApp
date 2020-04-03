import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default class Login extends React.Component {
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
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
              <Text style={styles.passwordText}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#555555"
                returnKeyType="go"
                secureTextEntry={true}
                autoCorrect={false}
                ref={"txtPassword"}
              />
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity>
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
    backgroundColor: "#0B0D0C"
  },
  loginContainer: {
    marginTop: 20
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 64,
    padding: 15,
    fontFamily: "light"
  },
  emailText: {
    paddingLeft: 20,
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Semibold"
  },
  input: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    paddingBottom: 10,
    backgroundColor: "#0B0D0C",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    fontSize: 30,
    color: "#FFFFFF",
    fontFamily: "black"
  },
  passwordText: {
    marginTop: 15,
    paddingLeft: 20,
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Semibold"
  },
  forgotText: {
    color: "#555555",
    textAlign: "center",
    marginTop: 40,
    fontSize: 12,
    fontFamily: "Italic"
  },
  buttonContainer: {
    paddingVertical: 6,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Semibold"
  }
});
