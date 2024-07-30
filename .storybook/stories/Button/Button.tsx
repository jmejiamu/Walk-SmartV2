import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Spacing, spacing, Pallet, pallet } from "../../../src/themes";

export type ButtonSize = Spacing;
export type ColorPallet = Pallet;

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
  size: ButtonSize;
  containerStyle?: StyleProp<ViewStyle>;
  bgColor: ColorPallet;
  textColor: ColorPallet;
  customTxtStyle?: StyleProp<TextStyle>;
};

export const MyButton = (props: MyButtonProps) => {
  const {
    onPress,
    text,
    size,
    containerStyle,
    bgColor,
    textColor,
    customTxtStyle,
  } = props;

  let defaultBtnBgColor = "#5177B8";
  let defaultTxtColor = "#FFFFFF";

  let container: StyleProp<ViewStyle> = {
    paddingVertical: spacing[size] || spacing.sm,
    paddingHorizontal: spacing[size] || spacing.sm,
    borderRadius: spacing[size] * 2 || spacing.sm * 2,
    backgroundColor: pallet[bgColor] || defaultBtnBgColor,
    alignItems: "center",
  };

  let textStyle: StyleProp<TextStyle> = {
    fontSize: spacing[size] || spacing.sm,
    color: pallet[textColor] || defaultTxtColor,
  };

  return (
    <TouchableOpacity
      style={[container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[textStyle, customTxtStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
