import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = () => {
  return (
    <>
      <View style={{ backgroundColor: "green", width: "100%", height: "10%" }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
