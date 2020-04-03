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
export default class ForgotPassword extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.rpText}>Reset Password</Text>
          <Text style={styles.OTP}>Enter One Time Password (OTP) </Text>
          <View style={styles.OTPContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              autoCorrect={false}
              maxLength={1}
              onSubmitEditing={() => this.refs.OTP1.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              autoCorrect={false}
              maxLength={1}
              ref={"OTP1"}
              onSubmitEditing={() => this.refs.OTP2.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              autoCorrect={false}
              maxLength={1}
              ref={"OTP2"}
              onSubmitEditing={() => this.refs.OTP3.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              autoCorrect={false}
              maxLength={1}
              ref={"OTP3"}
              onSubmitEditing={() => this.refs.OTP4.focus()}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              autoCorrect={false}
              maxLength={1}
              ref={"OTP4"}
              onSubmitEditing={() => this.refs.OTP5.focus()}
            />

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              returnKeyType="next"
              autoCorrect={false}
              maxLength={1}
              ref={"OTP5"}
            />
          </View>
          <Text style={styles.newPassText}>Enter new password </Text>

          <TextInput
            style={styles.email}
            keyboardType="email-address"
            returnKeyType="go"
            autoCorrect={false}
          />

          <TouchableOpacity>
            <Text style={styles.forgotText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0D0C"
  },
  rpText: {
    color: "#FDB900",
    fontSize: 18,
    textAlign: "center",
    marginTop: 55,
    fontFamily: "Semibold"
  },
  OTP: {
    marginTop: 37,
    color: "#ffff",
    fontSize: 15,
    fontFamily: "regular",
    textAlign: "center"
  },
  OTPContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 50
  },
  input: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 11,
    width: 40,
    height: 50,
    backgroundColor: "#0B0D0C",
    borderBottomColor: "#FDB900",
    borderBottomWidth: 1,
    fontSize: 30,
    color: "#FFFFFF",
    fontFamily: "black"
  },
  newPassText: {
    marginTop: 37,
    color: "#ffff",
    fontSize: 15,
    fontFamily: "regular",
    textAlign: "center"
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
    fontFamily: "black"
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
    borderRadius: 10
  }
});
