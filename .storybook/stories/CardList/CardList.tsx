import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { Pallet, pallet, fontSize, FontSize } from "../../../src/themes";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export type ColorPallet = Pallet;

export type CardListProps = {
  leftElement?: React.ReactNode;
  title: string;
  rightElement?: React.ReactNode;
  bgColor: ColorPallet;
  customTxtStyle?: StyleProp<TextStyle>;
  rightElementColor?: string;
  leftElementColor?: string;
};

export const CardList = (props: CardListProps) => {
  const {
    leftElement,
    title = "Default title ",
    rightElement,
    customTxtStyle,
    bgColor = "secondary_95",
    leftElementColor,
    rightElementColor,
  } = props;

  const container: StyleProp<ViewStyle> = {
    backgroundColor: pallet[bgColor],
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20 * 2,
    alignItems: "center",
  };

  const textStyle: StyleProp<TextStyle> = {
    fontSize: fontSize["sm"],
    color: pallet["secondary_40"],
    marginLeft: 10,
  };

  return (
    <TouchableOpacity activeOpacity={0.8} style={container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {leftElement || (
          <MaterialIcons
            name="event-available"
            size={36}
            color={(pallet["secondary_40"], leftElementColor)}
          />
        )}
        <Text style={[textStyle, customTxtStyle]}>{title}</Text>
      </View>
      {rightElement || (
        <AntDesign
          name="right"
          size={25}
          color={(pallet["secondary_40"], rightElementColor)}
        />
      )}
    </TouchableOpacity>
  );
};
