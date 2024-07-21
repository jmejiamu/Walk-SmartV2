import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./Button";

const MyButtonMeta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof MyButton> = {};
export const Medium: StoryObj<typeof MyButton> = {
  args: {
    size: "md",
    text: "Medium Button",
    bgColor: "primary_20",
    textColor: "primary_90",
  },
};
