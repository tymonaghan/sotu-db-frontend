import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Title from "./Title.js";
import SearchBar from "./Title.js";

export default class App extends React.Component {
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
          <Button onPress={() => {}} title="Search!" />
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
