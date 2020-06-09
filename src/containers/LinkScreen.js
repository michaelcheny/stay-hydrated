import React from "react";
import { View, Text, Image } from "react-native";
import * as Linking from "expo-linking";
import { TextButton, RaisedTextButton } from "react-native-material-buttons";

const LinkScreen = () => {
  // const handlePress = (e) => {
  //   console.log(e);
  //   // Linking.openURL();
  //   // this.props.onPress && this.props.onPress();
  // };

  const links = ["https://water4.org/", "https://fightfortheforgotten.org/"];

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
        <Text style={{ marginBottom: 10 }}>Link Screen</Text>

        {links.map((link) => (
          // <View
          //   style={{
          //     backgroundColor: "aquamarine",
          //     padding: 20,
          //     // paddingHorizontal: 100,
          //     borderWidth: 40,
          //     borderRadius: 20,
          //   }}
          //   onPress={() => {
          //     Linking.openURL("https://water4.org/");
          //   }}
          // >
          //   <Text
          //     style={{
          //       color: "purple",
          //     }}
          //   >
          //     {link}
          //   </Text>
          // </View>
          <RaisedTextButton
            title={link}
            onPress={() => Linking.openURL(link)}
            // titleStyle={{ width: 300, margin: 10 }}
            style={{ marginTop: 7, width: 375, borderRadius: 8 }}
            color="plum"
          />

          // <Button
          //   onPress={() => Linking.openURL(link)}
          //   title={link}
          //   style={{
          //     fontSize: 20,
          //     color: "white",
          //   }}
          //   containerStyle={{
          //     padding: 10,
          //     height: 45,
          //     overflow: "hidden",
          //     borderRadius: 8000,
          //     backgroundColor: "aqua",
          //   }}
          // >
          //   {link}
          // </Button>
        ))}

        {/* <View
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

        <Text>https://fightfortheforgotten.org/</Text> */}
      </View>
    </>
  );
};

export default LinkScreen;
