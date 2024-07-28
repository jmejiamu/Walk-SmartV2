import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { pallet, fontSize, spacing } from "../../../src/themes";

export type LiveEventCardProps = {
  title: string;
  join: number;
  likes: number;
  date: string;
  live: boolean;
  containerCustomeStyles: StyleProp<ViewStyle>;
};

export const LiveEventCard = (props: LiveEventCardProps) => {
  const {
    title = "Default title",
    join = 0,
    likes = 0,
    date = "today",
    live = false,
    containerCustomeStyles,
  } = props;

  const container: StyleProp<ViewStyle> = {
    borderWidth: live ? 1 : 0,
    padding: 20,
    borderRadius: 15,
    backgroundColor: pallet.tertiary_95,
    borderColor: live ? pallet.tertiary_70 : pallet.tertiary_95,
  };
  return (
    <View style={[container, containerCustomeStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.footerTxtContainer}>
          <Text style={styles.txtStyle}>Joined {join} 🙂 </Text>
          <Text style={styles.txtStyle}>Liked {likes}</Text>
        </View>
        <View>
          <Text style={styles.txtStyle}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtStyle: {
    color: pallet.neutral_50,
    fontSize: fontSize.sm,
  },
  footerTxtContainer: {
    flexDirection: "row",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: pallet.neutral_40,
    marginBottom: spacing.sm,
  },
});
