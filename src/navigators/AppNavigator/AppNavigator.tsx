import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationProp } from "@react-navigation/native";
import { RegisterScreen, SignInScreen } from "../../screens";
import { pallet } from "../../themes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { isAuth } from "../../redux/verifyAuthentication/verifyAuthentication";
import { log } from "../../utils";
import { BottomNavigator } from "../BottomNavigator";

export type AppStackParamList = {
  Register: undefined;
  SignIn: undefined;
  BottomNavigator: undefined;
};
// export type Navigation = NavigationProp<RootStacksParams>;
const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.verifyAuth
  );
  useEffect(() => {
    dispatch(isAuth());
  }, [dispatch]);
  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? "BottomNavigator" : "Register"}
    >
      {isAuthenticated ? (
        <Stack.Screen
          options={{
            headerShown: false,
            cardStyle: { backgroundColor: pallet.primary_95 },
          }}
          name="BottomNavigator"
          component={BottomNavigator}
        />
      ) : (
        <>
          <Stack.Screen
            options={{
              headerShown: false,
              cardStyle: { backgroundColor: pallet.primary_95 },
            }}
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              cardStyle: { backgroundColor: pallet.primary_95 },
            }}
            name="SignIn"
            component={SignInScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
