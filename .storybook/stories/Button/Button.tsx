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
  let defaultSize = "sm";

  let container: StyleProp<ViewStyle> = {
    paddingVertical: spacing[size] || spacing[defaultSize],
    paddingHorizontal: spacing[size] || spacing[defaultSize],
    borderRadius: spacing[size] * 2 || spacing[defaultSize] * 2,
    backgroundColor: pallet[bgColor] || defaultBtnBgColor,
  };

  let textStyle: StyleProp<TextStyle> = {
    fontSize: spacing[size] || spacing[defaultSize],
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
