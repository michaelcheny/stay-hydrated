import React from "react";
// import { StyleSheet, Text, View, StatusBar } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./src/theme/theme.json";

import HomeScreen from "./src/containers/HomeScreen";
import DetailsScreen from "./src/containers/DetailsScreen";
import LinkScreen from "./src/containers/LinkScreen";

// const Drawer = createDrawerNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Supreme: require("./assets/fonts/supreme.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>adsjfhajsdfjsdjf</Text>
        </Layout>
        {/* <NavigationContainer>
        <StatusBar
          backgroundColor="plum"
          barStyle="dark-content"
          translucent={true}
          backgroundColor="#00000000"
          />
        <Drawer.Navigator
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor: "#4C566A",
          }}
          overlayColor="transparent"
          drawerContentOptions={{
            activeTintColor: "plum",
            itemStyle: { marginVertical: 3 },
            labelStyle: {
              padding: 3,
              fontSize: 20,
              fontFamily: "Supreme",
            },
          }}
          >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Details" component={DetailsScreen} />
          <Drawer.Screen name="Links" component={LinkScreen} drawerStyle={styles.label} />
        </Drawer.Navigator>
      </NavigationContainer> */}
      </ApplicationProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#4C566A",
//   },
//   label: {
//     color: "white",
//   },
//   custom: {
//     fontFamily: "supreme",
//     fontSize: 12,
//   },
// });
