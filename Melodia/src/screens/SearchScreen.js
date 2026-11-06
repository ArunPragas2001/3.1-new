import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import InstrumentCard from "../components/InstrumentCard";
import { Heading, FamilyChips, EmptyState, useGrid } from "../components/UI";
import instruments from "../data/instruments.json";
import s from "../theme/styles";
export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("All");
  const { columns, cardWidth } = useGrid();
  const results = instruments.filter(
    (i) =>
      i.name.toLowerCase().includes(query.trim().toLowerCase()) &&
      (family === "All" || i.family === family),
  );
  return (
    <View style={s.page}>
      <View style={[s.content, { paddingBottom: 12, gap: 19 }]}>
        <Heading
          eyebrow="FOLLOW YOUR CURIOSITY"
          title="Find your sound."
          description="One instrument could open a whole new world."
        />
        <SearchBar value={query} onChangeText={setQuery} />
        <FamilyChips value={family} onChange={setFamily} />
        <Text style={s.muted}>{results.length} results</Text>
      </View>
      <FlatList
        key={columns}
        numColumns={columns}
        data={results}
        keyExtractor={(i) => i.id}
        columnWrapperStyle={{ gap: 14 }}
        contentContainerStyle={[s.content, { paddingTop: 4, gap: 14 }]}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <EmptyState
            icon="search-outline"
            title="No instruments found."
            description="Try another name or family. Your next discovery is waiting."
            action="Clear filters"
            onPress={() => {
              setQuery("");
              setFamily("All");
            }}
          />
        }
        renderItem={({ item }) => (
          <View style={{ width: cardWidth }}>
            <InstrumentCard
              instrument={item}
              onPress={() => navigation.navigate("Details", { id: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
}
