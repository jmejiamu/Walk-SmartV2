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
import { translate } from "../../i18n/i18n";

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

        <Text style={styles.titleStyle}>
          {translate("registerScreen.title")}
        </Text>
        <Text style={styles.subTitleStyle}>
          {translate("registerScreen.subTitle")}
        </Text>
        <Input
          bgColor="primary_90"
          placeholder={translate("registerScreen.inputName")}
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
          placeholder={translate("registerScreen.inputEmail")}
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
          placeholder={translate("registerScreen.inputPassword")}
          placeholderTextColor="secondary_35"
          inputTxtColor="primary_15"
          size="md"
          textInputProps={{
            value: formData.password,
            onChangeText: (text) => handleChange("password", text),
          }}
        />

        <MyButton
          text={translate("registerScreen.button")}
          size="md"
          textColor="primary_15"
          bgColor="primary_60"
          containerStyle={{ marginTop: spacing.l }}
        />
        <View style={styles.container}>
          <Text style={styles.footerTxt}>
            {translate("registerScreen.footerText")}
          </Text>
          <TouchableOpacity style={styles.innerFooterTxtContainer}>
            <Text style={styles.innerTxt}>
              {translate("registerScreen.signIn")}
            </Text>
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
