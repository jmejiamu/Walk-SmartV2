import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { CircleButton } from "../../../.storybook/stories/CircleButton/CircleButton";
export const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <CircleButton
        bgColor="primary_40"
        size="xl"
        iconColor="primary_80"
        touchableProps={{ onPress: () => {} }}
        customStyle={styles.btnPosition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnPosition: {
    position: "absolute",
    bottom: 120,
    right: 15,
  },
});
