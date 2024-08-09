import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { allUsersEvents } from "../../redux/allEventsSlice/allEventsSlice";
import { CardList } from "../../../.storybook/stories/CardList/CardList";
import { AnimationWrapper } from "../../components";
import { pallet, spacing } from "../../themes";
import { Input } from "../../../.storybook/stories/TextInput/Input";

export const EventsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userInfo } = useSelector((state: RootState) => state.userInfo);
  const { events } = useSelector((state: RootState) => state.allEvents);

  const scrollY = new Animated.Value(0);

  const inputOpacity = scrollY.interpolate({
    inputRange: [0, 100], // Adjust this range to control when the fade starts and ends
    outputRange: [1, 0], // Fully visible to fully transparent
    extrapolate: "clamp", // Clamp the value so it doesn't go beyond the range
  });

  useEffect(() => {
    if (userInfo) {
      dispatch(allUsersEvents());
    }
  }, [userInfo, dispatch]);
  return (
    <SafeAreaView style={{ backgroundColor: pallet.primary_95, flex: 1 }}>
      <AnimationWrapper duration={1000}>
        <View
          style={{
            marginHorizontal: spacing.md,
            backgroundColor: pallet.primary_95,
          }}
        >
          <Animated.View style={{ opacity: inputOpacity }}>
            <Input
              bgColor="primary_95"
              placeholder="Search Event..."
              size="md"
              textInputProps={{}}
              inputStyle={{
                // Shadow properties for iOS
                shadowColor: pallet.primary_50,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 6,

                // Elevation for Android
                elevation: 6,
                marginBottom: spacing.md,
              }}
            />
          </Animated.View>
          <Animated.FlatList
            data={events}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.event_id.toString()}
            renderItem={({ item }) => {
              return (
                <View key={item.event_id}>
                  <CardList
                    title={item.event_title}
                    customTxtStyle={{ color: pallet.tertiary_30 }}
                    bgColor="tertiary_80"
                    leftElementColor={pallet.tertiary_30}
                    rightElementColor={pallet.tertiary_30}
                  />
                  <View style={{ margin: spacing.s }} />
                </View>
              );
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true } // Enable native driver for smoother animations
            )}
          />
        </View>
      </AnimationWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
