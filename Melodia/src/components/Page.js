import React, { useEffect, useRef } from "react";
import { ScrollView, Text } from "react-native";
import { useLibrary } from "../storage/LibraryContext";
import s from "../theme/styles";
export default function Page({ children, resetKey }) {
  const { error } = useLibrary();
  const scroll = useRef(null);
  useEffect(() => {
    scroll.current?.scrollTo({ y: 0, animated: false });
  }, [resetKey]);
  return (
    <ScrollView
      ref={scroll}
      style={s.page}
      contentContainerStyle={s.content}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
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
