import React from "react";
import { View, Text, FlatList } from "react-native";
import instruments from "../data/instruments.json";
import InstrumentCard from "../components/InstrumentCard";
import { Heading, EmptyState, useGrid } from "../components/UI";
import { useLibrary } from "../storage/LibraryContext";
import s from "../theme/styles";
export default function FavoritesScreen({ navigation }) {
  const { favorites, error } = useLibrary();
  const { columns, cardWidth } = useGrid();
  const data = instruments.filter((i) => favorites.includes(i.id));
  return (
    <FlatList
      key={columns}
      numColumns={columns}
      style={s.page}
      contentContainerStyle={[s.content, { gap: 14 }]}
      columnWrapperStyle={{ gap: 14 }}
      data={data}
      keyExtractor={(i) => i.id}
      ListHeaderComponent={
        <View style={{ gap: 16, marginBottom: 12 }}>
          <Heading
            eyebrow="A COLLECTION THAT'S ALL YOU"
            title="Your favourites."
            description="Keep the instruments that strike a chord. Come back whenever inspiration calls."
          />
          {data.length ? (
            <Text style={s.muted}>
              {data.length} saved{" "}
              {data.length === 1 ? "instrument" : "instruments"} · Stored on
              this device
            </Text>
          ) : null}
          {error ? (
            <Text accessibilityRole="alert" style={s.error}>
              {error}
            </Text>
          ) : null}
        </View>
      }
      ListEmptyComponent={
        <EmptyState
          icon="heart-outline"
          title="Your collection is waiting."
          description="Tap the heart on an instrument to give it a place in your collection."
          action="Find your first favourite"
          onPress={() => navigation.navigate("Explore", { family: undefined })}
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
  );
}
