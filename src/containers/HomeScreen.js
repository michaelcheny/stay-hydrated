import React from "react";
import { View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = () => {
  return (
    <>
      <Image
        source={require("../../assets/ghettoWaterLogo.png")}
        style={{
          display: "flex",
          // justifyContent: "center",
          alignSelf: "center",
          // resizeMode: "repeat",
          height: "15%",
          width: "100%",
        }}
      />
      {/* <View style={{ backgroundColor: "green", width: "100%", height: "10%" }} /> */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
