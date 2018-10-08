import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default class Title extends Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    );
  }
}

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  } //end constructor(props)

  render() {
    return (
      <View style={styles.textBox}>
        <TextInput
          style={{ height: 40 }}
          placeholder="search SOTUs"
          onChangeText={text => this.setState({ text })}
        />
      </View>
    ); // end return
  } //end render
} //end SearchBar

const styles = StyleSheet.create({
  header: {
    backgroundColor: "skyblue",
    width: "100%",
    padding: 15
    //alignItems: "stretch",
    //justifyContent: "center",
    //flex: 1
  },
  title: {
    textAlign: "center",
    color: "gray",
    fontSize: 25
  },
  textbox: {
    textAlign: "left",
    color: "black",
    backgroundColor: "gray"
  }
});
