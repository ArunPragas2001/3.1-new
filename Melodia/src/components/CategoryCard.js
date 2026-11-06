import React from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import families from "../data/families";
import s from "../theme/styles";
import c from "../theme/colors";
export default function CategoryCard({ name, count, onPress, small = false }) {
  const meta = families[name];
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={name + " →"}
      onPress={onPress}
      style={({ pressed }) => [
        s.card,
        {
          flex: 1,
          backgroundColor: meta.background,
          borderColor: meta.background,
          gap: 16,
          padding: small ? 16 : 22,
        },
        pressed && s.pressed,
      ]}
    >
      <View style={s.between}>
        <View
          style={{
            width: 42,
            height: 42,
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF0C",
          }}
        >
          <Ionicons name={meta.icon} size={22} color={meta.color} />
        </View>
        <Ionicons name="arrow-forward" size={17} color={meta.color} />
      </View>
      <View style={{ gap: 5 }}>
        <Text style={[s.heading, { fontSize: small ? 16 : 22 }]}>{name}</Text>
        {!small ? (
          <Text style={[s.muted, { color: c.text }]}>{meta.description}</Text>
        ) : null}
        <Text style={{ color: meta.color, fontSize: 11, fontWeight: "600" }}>
          {count} instruments
        </Text>
      </View>
    </Pressable>
  );
}
