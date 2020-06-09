import React from "react";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
// import { default as theme } from "./src/theme/theme.json";

import { AppNavigator } from "./src/components/Navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Supreme: require("./assets/fonts/supreme.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
        <AppNavigator />
      </ApplicationProvider>
    );
  }
}
