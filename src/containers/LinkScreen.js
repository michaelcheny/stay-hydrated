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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../../assets/foundationlogo.png")}
          style={{
            display: "flex",
            // justifyContent: "center",
            alignSelf: "center",
            resizeMode: "repeat",
            marginBottom: 100,
            height: 200,
            width: 200,
          }}
        />
        <Text style={{ marginBottom: 10 }}>Link Screen</Text>

        {links.map((link) => (
          <RaisedTextButton
            title={link}
            onPress={() => Linking.openURL(link)}
            titleStyle={{ fontWeight: "bold" }}
            style={{ marginTop: 7, width: 375, borderRadius: 8 }}
            color="plum"
          />
        ))}
      </View>
    </>
  );
};

export default LinkScreen;
