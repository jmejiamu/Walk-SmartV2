import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  EventsScreen,
  HomeScreen,
  ProfileScreen,
  SettingScreen,
} from "../../screens";
import { IslanNavMenu } from "../../components/IslandNavMenu";
export type AppBottomParamList = {
  Home: undefined;
  Events: undefined;
  Profile: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<AppBottomParamList>();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <IslanNavMenu {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
