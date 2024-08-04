import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens";
export type AppBottomParamList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<AppBottomParamList>();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
