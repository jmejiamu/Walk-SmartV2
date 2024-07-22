import React from "react";
import { View } from "react-native";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const InputMeta: Meta<typeof Input> = {
  title: "Input",
  component: Input,

  decorators: [
    (Story) => (
      <View style={{ marginHorizontal: 20 }}>
        <Story />
      </View>
    ),
  ],
};

export default InputMeta;

export const DefaultInput: StoryObj<typeof Input> = {};
export const MediumInput: StoryObj<typeof Input> = {
  args: {
    size: "md",
    bgColor: "tertiary_80",
    inputTxtColor: "tertiary_20",
    placeholder: "Medium Input",
    placeholderTextColor: "neutral_50",
  },
};
