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
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../redux/auth/authSlice";
import { AppDispatch, RootState } from "../../redux";
import { translate } from "../../i18n/i18n";
import { useForm } from "../../hooks";
import { log } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { AppStackParamList } from "../../navigators";
import { StackNavigationProp } from "@react-navigation/stack";
import { AnimationWrapper } from "../../components";

type RegisterScreenNavigationProp = StackNavigationProp<AppStackParamList>;

export const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const initState = {
    name: "",
    email: "",
    password: "",
  };

  const { formData, handleChange, resetForm } = useForm(initState);

  const { user } = useSelector((state: RootState) => state.userAuth);

  const handleSubmit = () => {
    try {
      dispatch(
        authUser({
          fullName: formData.name,
          email: formData.email,
          password: formData.password,
          path: "/register",
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
      <AnimationWrapper duration={1000}>
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
              secureTextEntry: true,
            }}
          />

          <MyButton
            text={translate("registerScreen.button")}
            size="md"
            textColor="primary_15"
            bgColor="primary_60"
            containerStyle={{ marginTop: spacing.l }}
            onPress={handleSubmit}
          />
          <View style={styles.container}>
            <Text style={styles.footerTxt}>
              {translate("registerScreen.footerText")}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={styles.innerFooterTxtContainer}
            >
              <Text style={styles.innerTxt}>
                {translate("registerScreen.signIn")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AnimationWrapper>
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
