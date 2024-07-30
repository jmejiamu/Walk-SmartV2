import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MyButton } from "../../../.storybook/stories/Button/Button";
import { Input } from "../../../.storybook/stories/TextInput/Input";
import { fontSize, pallet, spacing } from "../../themes";
import { useForm } from "../../hooks";

export const RegisterScreen = () => {
  const initState = {
    name: "",
    email: "",
    password: "",
  };

  const { formData, handleChange, resetForm } = useForm(initState);

  let logo = require("../../../assets/logo.png");
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <View style={styles.mainContainer}>
        <Image style={styles.img} source={logo} />
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
            value: formData.name,
            onChangeText: (text) => handleChange("name", text),
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
            value: formData.email,
            onChangeText: (text) => handleChange("email", text),
          }}
        />
        <Input
          bgColor="primary_90"
          placeholder="Password"
          placeholderTextColor="secondary_35"
          inputTxtColor="primary_15"
          size="md"
          textInputProps={{
            value: formData.password,
            onChangeText: (text) => handleChange("password", text),
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
          <Text style={styles.footerTxt}>Do you have an account?</Text>
          <TouchableOpacity style={styles.innerFooterTxtContainer}>
            <Text style={styles.innerTxt}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: spacing.md,
  },
  innerTxt: {
    color: pallet.primary_15,
    fontSize: fontSize.md,
    fontWeight: "600",
  },
  innerFooterTxtContainer: {
    justifyContent: "flex-end",
  },
  footerTxt: {
    color: pallet.primary_15,
    fontSize: fontSize.md,
    marginTop: spacing.l,
  },
  img: {
    height: 175,
    width: 175,
    alignSelf: "center",
  },
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
