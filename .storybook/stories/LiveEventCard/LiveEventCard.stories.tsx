import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { LiveEventCard } from "./LiveEventCard";

const LiveEventCardMeta: Meta<typeof LiveEventCard> = {
  title: "LiveEventCard",
  component: LiveEventCard,

  decorators: [
    (Story) => (
      <View style={{ marginHorizontal: 20 }}>
        <Story />
      </View>
    ),
  ],
};

export default LiveEventCardMeta;

export const DefaultLiveEventCard: StoryObj<typeof LiveEventCard> = {};
