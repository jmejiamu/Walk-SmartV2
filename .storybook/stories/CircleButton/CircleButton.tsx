import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { Spacing, spacing, Pallet, pallet } from "../../../src/themes";

export type ButtonSize = Spacing;
export type ColorPallet = Pallet;

type CircularButtonProps = {
  size: ButtonSize;
  bgColor: ColorPallet;
  iconColor: ColorPallet;
  touchableProps?: TouchableOpacityProps;
  iconElement?: React.ReactNode;
};

export const CircleButton = (props: CircularButtonProps) => {
  const {
    size = "l",
    bgColor = "primary_50",
    iconColor = "primary_100",
    touchableProps,
    iconElement,
  } = props;

  const container: StyleProp<ViewStyle> = {
    height: spacing[size] * 2,
    width: spacing[size] * 2,
    borderRadius: (spacing[size] * 2) / 2,
    backgroundColor: pallet[bgColor],
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <TouchableOpacity style={container} activeOpacity={0.8} {...touchableProps}>
      {iconElement || (
        <Entypo name="plus" size={spacing[size]} color={pallet[iconColor]} />
      )}
    </TouchableOpacity>
  );
};
