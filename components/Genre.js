import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Modal,
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
let sub = [];
let check = true;
export default class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategoryIds: props.route.params.subCategoryIds,
      category: props.route.params.category,
      categoryName: [],
      show: true,
      token: props.route.params.token,
      userId: props.route.params.userId,
      indicator: false,
    };
  }
  updateTheGenre = () => {
    this.setState({ indicator: true });
    fetch("http://13.233.164.8:3000/professionaldetail/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: this.state.token,
      },
      body: JSON.stringify({
        userId: this.state.userId,
        subCategoryIds: sub,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({ indicator: false });

        if (res.type == "success") {
        } else {
          alert("Something went wrong");
        }
      })
      .done();
  };
  componentDidMount() {
    if (check === true) {
      this.state.subCategoryIds.map((values) => {
        if (sub.indexOf(values.id) === -1) {
          sub.push(values.id);
        }
      });
    }
    check = false;
    fetch(
      "http://13.233.164.8:3000/subcategory/getall/" + this.state.category._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.type == "success") {
          this.setState({ categoryName: res.data });
        } else {
          alert("Something went wrong");
        }
      })
      .done();
  }
  removeElement = (removeId) => {
    let a;
    a = sub.indexOf(removeId);

    if (a != -1) {
      sub.splice(a, 1);
      this.updateTheGenre();
    }
  };

  addElement = (addId) => {
    sub.push(addId);
    this.updateTheGenre();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.indicator ? (
          <Modal
            transparent={true}
            animationType={"none"}
            visible={this.state.indicator}
            onRequestClose={() => {
              console.log("close modal");
            }}
          >
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator
                  style={{ flex: 1 }}
                  size="large"
                  animating={this.state.indicator}
                />
              </View>
            </View>
          </Modal>
        ) : null}
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
          {this.state.categoryName.map((value) =>
            sub.includes(value.id) ? (
              <TouchableOpacity
                onPress={() => {
                  this.removeElement(value.id);
                }}
              >
                <View
                  style={{
                    marginHorizontal: 20,
                    marginBottom: 2,
                    marginTop: -1.5,
                    backgroundColor: "#FDB900",
                  }}
                >
                  <Text style={styles.bollywood}>{value.name}</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.addElement(value.id);
                }}
              >
                <View
                  style={{
                    marginHorizontal: 20,
                    marginBottom: 2,
                    borderBottomColor: "#707070",
                    borderBottomWidth: 1,
                    backgroundColor: "#242625",
                  }}
                >
                  <Text style={styles.bollywoods}>{value.name}</Text>
                </View>
              </TouchableOpacity>
            )
          )}
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
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 6,
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "bold",
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bollywoods: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 6,
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "regular",
  },
});
