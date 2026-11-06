import React from "react";
import { Text, View, Pressable, FlatList } from "react-native";
import instruments from "../data/instruments.json";
import InstrumentCard from "../components/InstrumentCard";
import { useLibrary } from "../storage/LibraryContext";
import s from "../theme/styles";
export default function FavoritesScreen({ navigation }) {
  const { favorites, toggleFavorite, saving, error } = useLibrary();
  return (
    <FlatList
      style={s.page}
      contentContainerStyle={{ padding: 20 }}
      data={instruments.filter((i) => favorites.includes(i.id))}
      keyExtractor={(i) => i.id}
      ListHeaderComponent={
        <View style={{ gap: 12, marginBottom: 20 }}>
          <Text style={s.title}>Your favourites</Text>
          <Text style={s.muted}>A collection stored on this device.</Text>
          {error ? <Text style={s.error}>{error}</Text> : null}
        </View>
      }
      ListEmptyComponent={
        <Text style={s.text}>
          Your collection is waiting. Save an instrument from its details.
        </Text>
      }
      renderItem={({ item }) => (
        <View style={{ marginBottom: 20 }}>
          <InstrumentCard
            instrument={item}
            onPress={() => navigation.navigate("Details", { id: item.id })}
          />
          <Pressable disabled={saving} onPress={() => toggleFavorite(item.id)}>
            <Text style={s.error}>Remove {item.name}</Text>
          </Pressable>
        </View>
      )}
    />
  );
}
