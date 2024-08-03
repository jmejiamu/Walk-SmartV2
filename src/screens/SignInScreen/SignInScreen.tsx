import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Input } from "../../../.storybook/stories/TextInput/Input";
import { MyButton } from "../../../.storybook/stories/Button/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { fontSize, pallet, spacing } from "../../themes";
import { authUser } from "../../redux/auth/authSlice";
import { AppStackParamList } from "../../navigators";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { translate } from "../../i18n";
import { useForm } from "../../hooks";
import { log } from "../../utils";

type SignInScreenNavigationProp = StackNavigationProp<AppStackParamList>;

export const SignInScreen = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const initState = {
    email: "",
    password: "",
  };
  const { formData, handleChange, resetForm } = useForm(initState);

  const handleSubmit = () => {
    try {
      dispatch(
        authUser({
          email: formData.email,
          password: formData.password,
          path: "/signin",
        })
      );
      resetForm();
    } catch (error) {
      log.error(error);
    }
  };
  let logo = require("../../../assets/logo.png");
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <View style={styles.mainContainer}>
        <Image style={styles.img} source={logo} />

        <Text style={styles.titleStyle}>{translate("loginScreen.title")}</Text>
        <Text style={styles.subTitleStyle}>
          {translate("loginScreen.subTitle")}
        </Text>

        <Input
          bgColor="primary_90"
          placeholder={translate("loginScreen.inputEmail")}
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
          placeholder={translate("loginScreen.inputPassword")}
          placeholderTextColor="secondary_35"
          inputTxtColor="primary_15"
          size="md"
          textInputProps={{
            value: formData.password,
            onChangeText: (text) => handleChange("password", text),
            secureTextEntry: true,
          }}
        />

        <MyButton
          text={translate("loginScreen.button")}
          size="md"
          textColor="primary_15"
          bgColor="primary_60"
          containerStyle={{ marginTop: spacing.l }}
          onPress={handleSubmit}
        />
        <View style={styles.container}>
          <Text style={styles.footerTxt}>
            {translate("loginScreen.footerText")}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.innerFooterTxtContainer}
          >
            <Text style={styles.innerTxt}>
              {translate("loginScreen.signUp")}
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
