import React from "react";
import { TextInput } from "react-native";
import c from "../theme/colors";
export default function SearchBar({ value, onChangeText }) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      accessibilityLabel="Search instruments by name"
      placeholder="Search instruments…"
      placeholderTextColor={c.muted}
      style={{
        padding: 16,
        borderRadius: 15,
        backgroundColor: c.surface,
        color: c.text,
        fontSize: 16,
      }}
    />
  );
}
