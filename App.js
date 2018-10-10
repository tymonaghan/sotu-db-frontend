import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import Title from "./Title.js";
//import SearchBar from "./Title.js";

let searchString = "hi";

export default class App extends React.Component {
  _onPressButton() {
    this._setSearchString;
    Alert.alert("you pressed the button" + searchString);
  }

  _setSearchString() {
    let searchString = this.setState("yo");
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.titlebar}>
          <Title>Welcome to SOTU-db!</Title>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <TextInput
            style={{ height: 40, width: 250 }}
            placeholder="search SOTUs"
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="Search!" />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  titlebar: {
    alignContent: "flex-start",
    paddingTop: 30 //manually prevent status bar from overlapping titlebar
  },
  buttonContainer: {
    margin: 20
  }
});
