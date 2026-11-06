import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator";
import { LibraryProvider } from "./src/storage/LibraryContext";
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <LibraryProvider>
        <AppNavigator />
      </LibraryProvider>
    </SafeAreaProvider>
  );
}
