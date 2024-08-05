import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { pallet } from "../../themes";
import { CustomMenuIcon } from "../CustomMenuIcon";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export const IslanNavMenu = (props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;
  return (
    <View style={styles.container}>
      {state?.routes?.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <CustomMenuIcon
            key={index}
            index={index}
            isFocused={isFocused}
            onPress={onPress}
            route={route}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: pallet.primary_80,
    borderTopWidth: 0,
    marginHorizontal: 15,
    borderRadius: 75 / 2,
    marginBottom: 20,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
