import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { CardList } from "./CardList";

const CardListMeta: Meta<typeof CardList> = {
  title: "CardList",
  component: CardList,

  decorators: [
    (Story) => (
      <View style={{ marginHorizontal: 20 }}>
        <Story />
      </View>
    ),
  ],
};

export default CardListMeta;

export const DefaultCardList: StoryObj<typeof CardList> = {};
