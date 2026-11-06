import React, { useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import InstrumentCard from "../components/InstrumentCard";
import instruments from "../data/instruments.json";
import s from "../theme/styles";
export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("All");
  const results = instruments.filter(
    (i) =>
      i.name.toLowerCase().includes(query.trim().toLowerCase()) &&
      (family === "All" || i.family === family),
  );
  return (
    <View style={[s.page, s.content]}>
      <Text style={s.title}>Find your sound</Text>
      <SearchBar value={query} onChangeText={setQuery} />
      <View style={s.row}>
        {["All", "Strings", "Wind", "Percussion", "Keyboard"].map((name) => (
          <Pressable
            key={name}
            accessibilityRole="button"
            accessibilityState={{ selected: name === family }}
            style={[s.chip, name === family && s.active]}
            onPress={() => setFamily(name)}
          >
            <Text style={name === family ? s.buttonText : s.text}>{name}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={s.muted}>{results.length} results</Text>
      <FlatList
        data={results}
        keyExtractor={(i) => i.id}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={s.text}>
            No instruments found. Try another name or family.
          </Text>
        }
        renderItem={({ item }) => (
          <InstrumentCard
            instrument={item}
            onPress={() => navigation.navigate("Details", { id: item.id })}
          />
        )}
      />
    </View>
  );
}
