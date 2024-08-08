module.exports = {
  expo: {
    name: "smart-walk",
    slug: "smart-walk",
    version: "1.0.0",
    extra: {
      storybookEnabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED,
    },
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.smartwalk",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.anonymous.smartwalk",
    },
    plugins: [
      "expo-localization",
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow $(PRODUCT_NAME) to use your location.",
        },
      ],
    ],
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};
