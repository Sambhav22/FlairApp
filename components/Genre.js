import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.maxLength = 100;
    this.state = {
      textLength: 0,
    };
  }
  onChangeText(text) {
    this.setState({
      textLength: text.length,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("ArtistProfile");
            }}
          >
            <Ionicons
              style={{ marginTop: 27, paddingLeft: 25 }}
              name="ios-arrow-back"
              color="white"
              size={35}
            />
          </TouchableOpacity>
          <Text style={styles.price}>Genre(s)</Text>
        </View>
        <Text style={styles.bollywood}>Bollywood</Text>
        <View style={{ backgroundColor: "#FDB900", padding: 6, marginTop: 10 }}>
          <Text style={styles.House}>House</Text>
        </View>
        <Text style={styles.Trance}>Trance</Text>
        <Text style={styles.Dubstep}>Dubstep</Text>

        <View style={{ backgroundColor: "#FDB900", padding: 6, marginTop: 13 }}>
          <Text style={styles.House}>Techno</Text>
        </View>
        <Text style={styles.Trance}>Drum and Bass</Text>
        <Text style={styles.Dubstep}>Trap</Text>
        <Text style={styles.Dubstep}>Future Bass</Text>
        <View style={{ backgroundColor: "#FDB900", padding: 6, marginTop: 13 }}>
          <Text style={styles.House}>Hip-Hop</Text>
        </View>
        <Text style={styles.Trance}>Deep House</Text>
        <Text style={styles.Dubstep}>Tech House</Text>
        <Text style={styles.Dubstep}>Melodic Techno</Text>
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
  bollywood: {
    marginTop: 18,
    marginLeft: 25,
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "regular",
  },
  House: {
    marginLeft: 17,
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "bold",
  },
  Trance: {
    marginTop: 15,
    marginLeft: 25,
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "regular",
  },
  Dubstep: {
    marginTop: 15,
    marginLeft: 25,
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "regular",
  },
});
