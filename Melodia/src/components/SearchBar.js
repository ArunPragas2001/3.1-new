import React from "react";
import { TextInput, Text, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import c from "../theme/colors";
export default function SearchBar({ value, onChangeText, onPress }) {
  if (onPress)
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Search instruments"
        onPress={onPress}
        style={{
          minHeight: 54,
          borderRadius: 18,
          backgroundColor: c.surface,
          borderWidth: 1,
          borderColor: c.border,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 17,
          gap: 12,
        }}
      >
        <Ionicons name="search-outline" size={19} color={c.purple} />
        <Text style={{ color: c.muted, flex: 1, fontSize: 13 }}>
          What will you discover?
        </Text>
        <Ionicons name="options-outline" size={18} color={c.muted} />
      </Pressable>
    );
  return (
    <View
      style={{
        minHeight: 54,
        borderRadius: 18,
        backgroundColor: c.surface,
        borderWidth: 1,
        borderColor: c.border,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 16,
        gap: 10,
      }}
    >
      <Ionicons name="search-outline" size={19} color={c.purple} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        accessibilityLabel="Search instruments by name"
        placeholder="Search instruments…"
        placeholderTextColor={c.muted}
        style={{
          flex: 1,
          minWidth: 0,
          minHeight: 52,
          color: c.text,
          fontSize: 14,
        }}
      />
      {value ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Clear search"
          onPress={() => onChangeText("")}
          style={{
            width: 44,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="close-circle" color={c.muted} size={20} />
        </Pressable>
      ) : (
        <View style={{ width: 12 }} />
      )}
    </View>
  );
}
