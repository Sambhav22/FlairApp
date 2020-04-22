import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class BaseLocation extends React.Component {
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
            Event Category - Type 1
          </Text>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 16,
              color: "#FFFFFF",
              fontFamily: "Semibold",
            }}
          >
            Includes event types such as corporate
          </Text>
          <TextInput
            style={styles.input}
            keyboardType={"numeric"}
            returnKeyType="go"
            onChangeText={(email) => this.setState({ email })}
            autoCorrect={false}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("BasePrice");
            }}
          >
            <LinearGradient
              colors={["#FDB900", "#B16D00"]}
              start={[0, 0.5]}
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
