import React from "react";
import { Pressable, Text } from "react-native";
import s from "../theme/styles";
export default function CategoryCard({ name, count, onPress }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={s.card}>
      <Text style={s.heading}>{name} →</Text>
      <Text style={s.muted}>{count} instruments</Text>
    </Pressable>
  );
}
