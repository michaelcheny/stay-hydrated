import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./src/containers/HomeScreen";
import DetailsScreen from "./src/containers/DetailsScreen";
import LinkScreen from "./src/containers/LinkScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="plum" barStyle="dark-content" />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: "#4C566A",
          // width: "75%",
        }}
        overlayColor="transparent"
        // hideStatusBar={true}
        drawerContentOptions={{
          activeTintColor: "plum",
          itemStyle: { marginVertical: 3 },
          labelStyle: {
            padding: 3,
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "supreme",
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <DrawerItem */}
        <Drawer.Screen name="Details" component={DetailsScreen} />
        {/* need to rename details to something else */}
        <Drawer.Screen
          name="Links"
          component={LinkScreen}
          drawerStyle={styles.label}
        />
        {/* <Drawer.Screen name="Details" component={DetailsScreen} /> */}
      </Drawer.Navigator>
      {/* <View style={styles.container}>
          <Text style={styles.text}>Open up App.js to start working on your new app!</Text>
        </View> */}
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: "deez nuts" }} /> */}
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C566A",
    // color: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  label: {
    color: "white",
  },
  custom: {
    fontFamily: "supreme",
    fontSize: 12,
  },
});
