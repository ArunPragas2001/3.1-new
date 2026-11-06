import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import families from "../data/families";
import c from "../theme/colors";
import s from "../theme/styles";

export function Button({
  label,
  icon = "arrow-forward",
  onPress,
  secondary = false,
  disabled = false,
}) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        s.button,
        secondary && { backgroundColor: c.elevated },
        disabled && { opacity: 0.55 },
        pressed && s.pressed,
      ]}
    >
      <Text style={[s.buttonText, secondary && { color: c.text }]}>
        {label}
      </Text>
      {icon ? (
        <Ionicons name={icon} size={18} color={secondary ? c.purple : c.ink} />
      ) : null}
    </Pressable>
  );
}
export function Heading({ eyebrow, title, description }) {
  return (
    <View style={{ gap: 9 }}>
      {eyebrow ? <Text style={s.eyebrow}>{eyebrow}</Text> : null}
      <Text style={s.title}>{title}</Text>
      {description ? <Text style={s.muted}>{description}</Text> : null}
    </View>
  );
}
export function Section({ title, action, onPress }) {
  return (
    <View style={s.between}>
      <Text style={[s.heading, { flex: 1 }]}>{title}</Text>
      {action ? (
        <Pressable
          accessibilityRole="button"
          onPress={onPress}
          style={{
            minHeight: 44,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Text style={{ color: c.purple, fontSize: 12, fontWeight: "700" }}>
            {action}
          </Text>
          <Ionicons name="arrow-forward" size={13} color={c.purple} />
        </Pressable>
      ) : null}
    </View>
  );
}
export function FamilyBadge({ family }) {
  const meta = families[family];
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: meta.color,
        }}
      />
      <Text
        style={{
          color: meta.color,
          fontSize: 10,
          fontWeight: "700",
          letterSpacing: 1,
        }}
      >
        {family.toUpperCase()}
      </Text>
    </View>
  );
}
export function FamilyChips({ value, onChange }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 8, paddingVertical: 2 }}
    >
      {["All", ...Object.keys(families)].map((name) => (
        <Pressable
          key={name}
          accessibilityRole="button"
          accessibilityLabel={name}
          accessibilityState={{ selected: value === name }}
          onPress={() => onChange(name)}
          style={[s.chip, value === name && s.active]}
        >
          {name !== "All" ? (
            <Ionicons
              name={families[name].icon}
              size={14}
              color={value === name ? c.ink : families[name].color}
            />
          ) : null}
          <Text
            style={{
              color: value === name ? c.ink : c.muted,
              fontSize: 12,
              fontWeight: "700",
            }}
          >
            {name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
export function EmptyState({ icon, title, description, action, onPress }) {
  return (
    <View
      style={[s.card, { alignItems: "center", paddingVertical: 36, gap: 15 }]}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 24,
          backgroundColor: c.purpleSoft,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name={icon} size={30} color={c.purple} />
      </View>
      <Text style={[s.heading, { textAlign: "center" }]}>{title}</Text>
      <Text style={[s.muted, { textAlign: "center", maxWidth: 320 }]}>
        {description}
      </Text>
      {action ? <Button label={action} onPress={onPress} /> : null}
    </View>
  );
}
export function Stat({ value, label, icon }) {
  return (
    <View
      style={[s.card, { flex: 1, padding: 14, alignItems: "center", gap: 8 }]}
    >
      <Ionicons name={icon} color={c.purple} size={18} />
      <Text style={s.heading}>{value}</Text>
      <Text
        style={[s.muted, { fontSize: 10, textAlign: "center", lineHeight: 16 }]}
      >
        {label}
      </Text>
    </View>
  );
}
// Two columns on phones, three on larger windows. No external layout library.
export function useGrid() {
  const { width } = useWindowDimensions();
  const columns = width >= 760 ? 3 : 2;
  const cardWidth = (Math.min(width, 1120) - 48 - (columns - 1) * 14) / columns;
  const familyWidth =
    width >= 760 ? (Math.min(width, 1120) - 48 - 42) / 4 : cardWidth;
  return { columns, cardWidth, familyWidth };
}
