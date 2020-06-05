import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  // console.log("hello");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="plum" barStyle="dark-content" />
      <Text style={styles.text}>Open up App.js to start working on your new app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C566A",
    // color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
