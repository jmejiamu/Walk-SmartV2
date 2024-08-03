import { Animated, StyleProp, StyleSheet, ViewStyle } from "react-native";
import React, { useCallback, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";

type AnimationWrapperProps = {
  duration: number;
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
};

export const AnimationWrapper = (props: AnimationWrapperProps) => {
  const { duration, children, customStyles } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useFocusEffect(
    useCallback(() => {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim])
  );
  return (
    <Animated.View
      style={[
        customStyles,
        {
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({});
