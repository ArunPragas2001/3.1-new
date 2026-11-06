import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import images from "../data/images";
import { useLibrary } from "../storage/LibraryContext";
import { FamilyBadge } from "./UI";
import c from "../theme/colors";
import s from "../theme/styles";
export default function InstrumentCard({
  instrument,
  onPress,
  compact = false,
}) {
  const { favorites, toggleFavorite, saving } = useLibrary();
  const saved = favorites.includes(instrument.id);
  return (
    <View
      style={{
        backgroundColor: c.surface,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: c.border,
        overflow: "hidden",
        flex: 1,
      }}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={"View " + instrument.name}
        onPress={onPress}
        style={({ pressed }) => [
          compact && { flexDirection: "row", alignItems: "center" },
          pressed && { opacity: 0.8 },
        ]}
      >
        <View
          style={{
            backgroundColor: c.image,
            height: compact ? 86 : 152,
            width: compact ? 86 : "100%",
            padding: 12,
          }}
        >
          <Image
            source={images[instrument.id]}
            accessibilityLabel={instrument.name}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View
          style={{
            padding: compact ? 14 : 15,
            gap: 8,
            flex: compact ? 1 : undefined,
          }}
        >
          <FamilyBadge family={instrument.family} />
          <View style={s.between}>
            <Text
              style={{
                color: c.text,
                fontSize: compact ? 15 : 17,
                fontWeight: "700",
                flex: 1,
              }}
            >
              {instrument.name}
            </Text>
            <Ionicons name="arrow-forward" size={15} color={c.muted} />
          </View>
        </View>
      </Pressable>
      {!compact ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            (saved ? "Remove " : "Save ") +
            instrument.name +
            (saved ? " from favourites" : " to favourites")
          }
          accessibilityState={{ selected: saved, disabled: saving }}
          disabled={saving}
          onPress={() => toggleFavorite(instrument.id)}
          style={({ pressed }) => [
            {
              position: "absolute",
              top: 8,
              right: 8,
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#FFFFFFF2",
              alignItems: "center",
              justifyContent: "center",
            },
            pressed && s.pressed,
          ]}
        >
          <Ionicons
            name={saved ? "heart" : "heart-outline"}
            size={19}
            color={saved ? "#7044B4" : c.ink}
          />
        </Pressable>
      ) : null}
    </View>
  );
}
