import React from "react";
import { View, Text, Image } from "react-native";
import * as Linking from "expo-linking";

const LinkScreen = () => {
  // const handlePress = (e) => {
  //   console.log(e);
  //   // Linking.openURL();
  //   // this.props.onPress && this.props.onPress();
  // };

  return (
    <>
      <Image
        source={require("../../assets/foundationlogo.png")}
        style={
          {
            // display: "flex",
            // justifyContent: "center",
          }
        }
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ marginBottom: 20 }}>Link Screen</Text>
        <View
          style={{
            backgroundColor: "aquamarine",
            padding: 20,
            paddingHorizontal: 100,
            borderRadius: 20,
          }}
          onPress={() => {
            Linking.openURL("https://water4.org/");
          }}
        >
          <Text
            style={{
              color: "purple",
            }}
          >
            https://water4.org/
          </Text>
        </View>

        <Text>https://fightfortheforgotten.org/</Text>
      </View>
    </>
  );
};

export default LinkScreen;
