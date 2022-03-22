import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import { RestarantsScreen } from "./src/features/restaurants/screens/restaurants.screen";



export default function App() {
  return (
    <>
      <RestarantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}