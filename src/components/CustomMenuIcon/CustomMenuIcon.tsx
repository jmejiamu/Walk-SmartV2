import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { pallet } from "../../themes";
import AntDesign from "@expo/vector-icons/AntDesign";

interface DefProps {
  index: number;
  route: any;
  onPress: () => void;
  isFocused: boolean;
}

export const CustomMenuIcon = (props: DefProps) => {
  const { index, route, onPress, isFocused } = props;
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: isFocused ? 1.6 : 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      key={index}
      style={styles.container}
    >
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <AntDesign
          name={
            route.name === "Home"
              ? "home"
              : route.name === "Events"
              ? "bars"
              : route.name === "Profile"
              ? "user"
              : "setting"
          }
          size={25}
          color={isFocused ? pallet.primary_20 : pallet.primary_50}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
