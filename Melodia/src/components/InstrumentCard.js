import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import images from "../data/images";
import s from "../theme/styles";
export default function InstrumentCard({ instrument, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={"View " + instrument.name}
      onPress={onPress}
      style={[s.card, { padding: 0, overflow: "hidden", marginBottom: 14 }]}
    >
      <Image
        source={images[instrument.id]}
        accessibilityLabel={instrument.name}
        resizeMode="contain"
        style={{ height: 185, width: "100%", backgroundColor: "white" }}
      />
      <View style={{ padding: 16, gap: 5 }}>
        <Text style={s.error}>{instrument.family}</Text>
        <Text style={s.heading}>{instrument.name} →</Text>
      </View>
    </Pressable>
  );
}
