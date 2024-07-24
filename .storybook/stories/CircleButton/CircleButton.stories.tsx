import React from "react";
import { View } from "react-native";
import { Meta, StoryObj } from "@storybook/react";
import { CircleButton } from "./CircleButton";

const CircleButtonMeta: Meta<typeof CircleButton> = {
  title: "CircleButton",
  component: CircleButton,

  decorators: [
    (Story) => (
      <View style={{ marginHorizontal: 20 }}>
        <Story />
      </View>
    ),
  ],
};

export default CircleButtonMeta;

export const DefaultCircleButton: StoryObj<typeof CircleButton> = {};
export const LargeCircleButton: StoryObj<typeof CircleButton> = {
  args: {
    size: "xl",
    bgColor: "tertiary_35",
    iconColor: "primary_100",
  },
};
