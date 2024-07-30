import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationProp } from "@react-navigation/native";
import { RegisterScreen } from "../../screens";
import { pallet } from "../../themes";

export type AppStackParamList = {
  Register: undefined;
};
// export type Navigation = NavigationProp<RootStacksParams>;
const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: pallet.primary_95 },
        }}
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
