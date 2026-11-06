import React from "react";
import { ScrollView, Text } from "react-native";
import { useLibrary } from "../storage/LibraryContext";
import s from "../theme/styles";
export default function Page({ children }) {
  const { error } = useLibrary();
  return (
    <ScrollView
      style={s.page}
      contentContainerStyle={s.content}
      keyboardShouldPersistTaps="handled"
    >
      {error ? (
        <Text accessibilityRole="alert" style={s.error}>
          {error}
        </Text>
      ) : null}
      {children}
    </ScrollView>
  );
}
