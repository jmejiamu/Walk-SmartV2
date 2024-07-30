import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Input } from "../../../.storybook/stories/TextInput/Input";
import { fontSize, pallet, spacing } from "../../themes";
import { MyButton } from "../../../.storybook/stories/Button/Button";

export const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const handleTextChange = (text: string) => {
    setUsername(text);
  };

  let logo = require("../../../assets/logo.png");
  return (
    <SafeAreaView style={{}}>
      <StatusBar hidden={true} />
      <View style={{ marginHorizontal: spacing.md }}>
        <Image
          style={{
            height: 175,
            width: 175,
            alignSelf: "center",
          }}
          source={logo}
        />
        <Text style={styles.titleStyle}>Hey,👋{"\n"}Welcome to WalkSmart </Text>
        <Text style={styles.subTitleStyle}>Create your account</Text>
        <Input
          bgColor="primary_90"
          placeholder="Name"
          placeholderTextColor="secondary_35"
          inputTxtColor="primary_15"
          size="md"
          inputStyle={{ marginBottom: spacing.l }}
          textInputProps={{
            value: username,
            onChangeText: handleTextChange,
          }}
        />
        <Input
          bgColor="primary_90"
          placeholder="Email"
          placeholderTextColor="secondary_35"
          inputTxtColor="primary_15"
          size="md"
          inputStyle={{ marginBottom: spacing.l }}
          textInputProps={{
            value: username,
            onChangeText: handleTextChange,
          }}
        />
        <Input
          bgColor="primary_90"
          placeholder="Password"
          placeholderTextColor="secondary_35"
          inputTxtColor="primary_15"
          size="md"
          textInputProps={{
            value: username,
            onChangeText: handleTextChange,
          }}
        />

        <MyButton
          text="Sign Up"
          size="md"
          textColor="primary_15"
          bgColor="primary_60"
          containerStyle={{ marginTop: spacing.l }}
        />
        <View style={styles.container}>
          <Text
            style={{
              color: pallet.primary_15,
              fontSize: fontSize.md,
              marginTop: spacing.l,
            }}
          >
            Do you have an account?
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                color: pallet.primary_15,
                fontSize: fontSize.md,
                fontWeight: "600",
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: fontSize.xxl,
    color: pallet.primary_15,
    marginVertical: "5%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  subTitleStyle: {
    color: pallet.primary_15,
    fontSize: fontSize.lg,
    fontWeight: "500",
    marginBottom: "5%",
  },
});
