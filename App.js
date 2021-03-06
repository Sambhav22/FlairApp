import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";

import Routes from "./components/Routes";

enableScreens();
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      light: require("./assets/fonts/SourceSansPro-Light.ttf"),
      Semibold: require("./assets/fonts/SourceSansPro-Semibold.ttf"),
      black: require("./assets/fonts/SourceSansPro-Black.ttf"),
      Italic: require("./assets/fonts/SourceSansPro-Italic.ttf"),
      regular: require("./assets/fonts/SourceSansPro-Regular.ttf"),
      bold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Routes />
        ) : (
          <ActivityIndicator size="large" style={{ flex: 1 }} color="white" />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242625",
  },
});
export default App;
