import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
export default class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategoryIds: props.route.params.subCategoryIds,
    };
  }

  render() {
    console.log(this.state.subCategoryIds);
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
        <ScrollView>
          {this.state.subCategoryIds.map((value) => (
            <View
              style={{
                marginHorizontal: 20,
                marginBottom: 5,
                borderBottomColor: "#707070",
                borderBottomWidth: 1,
              }}
            >
              <Text style={styles.bollywood}>{value.name}</Text>
            </View>
          ))}
        </ScrollView>
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
    marginBottom: 10,
    marginLeft: 6,
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
