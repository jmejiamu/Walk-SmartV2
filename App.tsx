import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Constants from "expo-constants";
import { Provider as ReduxProvider } from "react-redux";
import { AppNavigator } from "./src/navigators";
import { store } from "./src/redux";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
};

let AppEntryPoint = App;

if (Constants!.expoConfig!.extra!.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
