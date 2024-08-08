import React, { useEffect, useMemo, useRef } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { CircleButton } from "../../../.storybook/stories/CircleButton/CircleButton";
import { fontSize, pallet, spacing } from "../../themes";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { translate } from "../../i18n";
import { Input } from "../../../.storybook/stories/TextInput/Input";
import { MyButton } from "../../../.storybook/stories/Button/Button";
import { useForm, useLocation } from "../../hooks";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { log } from "../../utils";
import { useDispatch } from "react-redux";
import { userInfoData } from "../../redux/userDataSlice/userDataSlice";
import { addEvent } from "../../redux/AddEventsSlice/AddEventsSlice";
import { allUsersEvents } from "../../redux/allEventsSlice/allEventsSlice";
export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%"], []);

  const handleClosePress = () => bottomSheetRef?.current?.close();
  const handleOpenPress = () => bottomSheetRef?.current?.expand();

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      style={{ backgroundColor: "rgba(170, 199, 255, 0.7)" }}
    />
  );
  const initialState = {
    title: "",
    description: "",
  };
  const { formData, handleChange, resetForm } = useForm(initialState);

  const { location, errorMsg, status, fetchLocation, loading } = useLocation();

  const dispatch = useDispatch<AppDispatch>();

  const { isAuthenticated } = useSelector(
    (state: RootState) => state.verifyAuth
  );
  const { userInfo } = useSelector((state: RootState) => state.userInfo);
  const { events } = useSelector((state: RootState) => state.eventByUserId);

  const onHandleSubmit = () => {
    try {
      if (status !== "granted") {
        Alert.alert("Error", "Please enable location services");
        return;
      }

      if (
        isAuthenticated &&
        formData.title.length > 0 &&
        formData.description.length > 0
      ) {
        dispatch(
          addEvent({
            event_title: formData.title,
            event_description: formData.description,
            user_id: userInfo.user_id,
            latitude: location!.coords?.latitude,
            longitude: location!.coords?.longitude,
            user_name: userInfo.fullName,
          })
        );
        resetForm();
      } else {
        Alert.alert("Error", "Please fill out the form");
        return;
      }
    } catch (error) {
      log.error(error);
      throw error;
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (status === "granted") {
      dispatch(userInfoData());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (userInfo) {
      dispatch(allUsersEvents());
    }
  }, [userInfo, dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        showsUserLocation
        style={StyleSheet.absoluteFill}
        region={{
          latitude: location?.coords?.latitude || 0,
          longitude: location?.coords?.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {events &&
          events.map((event, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: event.latitude,
                  longitude: event.longitude,
                }}
                title={event.event_title}
                description={event.event_description}
              />
            );
          })}
      </MapView>
      <CircleButton
        bgColor="primary_40"
        size="xl"
        iconColor="primary_80"
        touchableProps={{ onPress: () => handleOpenPress() }}
        customStyle={styles.btnPosition}
      />
      <BottomSheet
        snapPoints={snapPoints}
        index={-1}
        ref={bottomSheetRef}
        enablePanDownToClose
        onClose={handleClosePress}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: pallet.primary_95 }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.txtStyle}>
            {translate("homeScreen.addEventSheet.title")}
          </Text>
          <Input
            bgColor="primary_90"
            placeholder={translate("homeScreen.addEventSheet.inputEventTitle")}
            placeholderTextColor="secondary_35"
            inputTxtColor="primary_15"
            size="md"
            textInputProps={{
              value: formData.title,
              onChangeText: (text) => handleChange("title", text),
            }}
          />
          <Text style={styles.txtStyle}>
            {translate("homeScreen.addEventSheet.subTitle")}
          </Text>
          <Input
            bgColor="primary_90"
            placeholder={translate(
              "homeScreen.addEventSheet.inputEventDescription"
            )}
            placeholderTextColor="secondary_35"
            inputTxtColor="primary_15"
            size="md"
            textInputProps={{
              value: formData.description,
              onChangeText: (text) => handleChange("description", text),
            }}
          />
          <View style={{ flexDirection: "row", marginTop: spacing.md }}>
            <View style={{ flex: 1 }}>
              <MyButton
                text={translate("homeScreen.addEventSheet.submitButton")}
                size="md"
                textColor="primary_15"
                bgColor="primary_60"
                containerStyle={{}}
                onPress={() => onHandleSubmit()}
              />
            </View>
            <View style={styles.btnDivider} />
            <View style={{ flex: 1 }}>
              <MyButton
                text={translate("homeScreen.addEventSheet.cancelButton")}
                size="md"
                textColor="tertiary_20"
                bgColor="tertiary_80"
                containerStyle={{}}
                onPress={() => handleClosePress()}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  txtStyle: {
    fontSize: fontSize.md,
    fontWeight: "700",
    color: pallet.primary_20,
    marginVertical: spacing.md,
  },
  btnDivider: {
    marginHorizontal: spacing.md,
  },
  btnPosition: {
    position: "absolute",
    bottom: 120,
    right: spacing.md,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: spacing.md,
  },
});
