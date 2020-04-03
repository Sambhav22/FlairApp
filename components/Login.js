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
                placeholderTextColor="grey"
                keyboardType="email-address"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
              <Text style={styles.passwordText}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="grey"
                returnKeyType="go"
                secureTextEntry={true}
                autoCorrect={false}
                ref={"txtPassword"}
              />
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}> Login</Text>
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
    backgroundColor: "black"
  },
  loginContainer: {
    marginTop: 20
  },
  loginText: {
    color: "white",
    fontSize: 64,
    padding: 20,
    fontFamily: "light"
  },
  emailText: {
    paddingLeft: 20,
    color: "white",
    fontSize: 15,
    fontFamily: "Semibold"
  },
  input: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    paddingBottom: 10,
    backgroundColor: "black",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    fontSize: 30,
    color: "white",
    fontFamily: "black"
  },
  passwordText: {
    marginTop: 20,
    paddingLeft: 20,
    color: "white",
    fontSize: 15,
    fontFamily: "Semibold"
  },
  forgotText: {
    color: "grey",
    textAlign: "center",
    marginTop: 40,
    fontSize: 12,
    fontFamily: "Italic"
  },
  buttonContainer: {
    backgroundColor: "#FDB900",
    paddingVertical: 6,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "Semibold"
  }
});
