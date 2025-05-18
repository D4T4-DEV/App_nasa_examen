import { ExpoConfig, ConfigContext } from "@expo/config";
import 'dotenv/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "App_nasa_examen",
  slug: "App_nasa_examen",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  extra: {
    apiConfig: {
      API_KEY_NASA: process.env.API_KEY_NASA,
      BASE_API_URL_NASA: process.env.BASE_API_URL_NASA,
      TIMEOUT_API: process.env.TIMEOUT_API
    },
    keyStorages: {
      APOD_STORAGE_KEY: process.env.APOD_STORAGE_KEY,
      EARTH_STORAGE_KEY: process.env.EARTH_STORAGE_KEY,
      EPIC_STORAGE_KEY: process.env.EPIC_STORAGE_KEY,
      NEOWS_STORAGE_KEY: process.env.NEOWS_STORAGE_KEY,
      ROVER_STORAGE_KEY: process.env.ROVER_STORAGE_KEY,
      NAVIGATION_PERSISTENCE_KEY: process.env.NAVIGATION_PERSISTENCE_KEY,
      THEME_PERSISTENCE_KEY: process.env.THEME_PERSISTENCE_KEY,
    }
  }
});


// Configuracion en modo ts tomado en https://docs.expo.dev/workflow/configuration/ (consultado el 20/04/25)