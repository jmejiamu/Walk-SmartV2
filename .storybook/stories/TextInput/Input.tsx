import {
  View,
  TextInput,
  TextInputProps,
  TextStyle,
  StyleProp,
} from "react-native";
import React from "react";
import { Spacing, spacing, Pallet, pallet } from "../../../src/themes";

export type SpacingOption = Spacing;
export type ColorPallet = Pallet;

export type InputProps = {
  placeholder: string;
  size: SpacingOption;
  bgColor: ColorPallet;
  textInputProps?: TextInputProps;
  placeholderTextColor?: ColorPallet;
  inputTxtColor?: ColorPallet;
  inputStyle?: StyleProp<TextStyle>;
};

export const Input = (props: InputProps) => {
  const {
    placeholder = "Default Placeholder",
    size = "sm",
    bgColor = "primary_80",
    textInputProps,
    placeholderTextColor = "neutral_50",
    inputTxtColor = "neutral_0",
    inputStyle,
  } = props;

  let container: StyleProp<TextStyle> = {
    padding: spacing[size],
    borderRadius: spacing[size] * 2,
    backgroundColor: pallet[bgColor],
    fontSize: spacing[size],
    color: pallet[inputTxtColor],
  };

  return (
    <View>
      <TextInput
        style={[container, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={pallet[placeholderTextColor]}
        {...textInputProps}
      />
    </View>
  );
};
