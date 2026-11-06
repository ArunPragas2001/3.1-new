import React from "react";
import { Text, View, Pressable } from "react-native";
import Page from "../components/Page";
import InstrumentCard from "../components/InstrumentCard";
import instruments from "../data/instruments.json";
import s from "../theme/styles";
export default function HomeScreen({ navigation }) {
  const open = (item) => navigation.navigate("Details", { id: item.id });
  return (
    <Page>
      <Text style={s.error}>MELODIA / DISCOVER SOUND</Text>
      <Text style={s.title}>A world of music. In your hands.</Text>
      <Text style={s.muted}>
        Discover 12 instruments, four families and something new. All offline.
      </Text>
      <View style={s.card}>
        <Text style={s.heading}>Find your next fascination</Text>
        <Pressable
          style={s.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={s.buttonText}>Search instruments →</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate("Categories")}>
        <Text style={s.error}>Explore the four families →</Text>
      </Pressable>
      <Text style={s.heading}>Featured instruments</Text>
      {instruments
        .filter((i) => ["guitar", "flute", "piano"].includes(i.id))
        .map((i) => (
          <InstrumentCard key={i.id} instrument={i} onPress={() => open(i)} />
        ))}
      <Text style={s.heading}>Popular picks</Text>
      <Text style={s.muted}>A curated selection for beginners.</Text>
      {instruments
        .filter((i) => ["violin", "drums", "saxophone"].includes(i.id))
        .map((i) => (
          <Pressable key={i.id} style={s.card} onPress={() => open(i)}>
            <Text style={s.text}>{i.name} →</Text>
          </Pressable>
        ))}
    </Page>
  );
}
