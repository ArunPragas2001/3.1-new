import React from "react";
import { Text, Image, Pressable } from "react-native";
import Page from "../components/Page";
import instruments from "../data/instruments.json";
import images from "../data/images";
import { useLibrary } from "../storage/LibraryContext";
import s from "../theme/styles";
export default function DetailsScreen({ route }) {
  const item = instruments.find((i) => i.id === route.params?.id);
  const { favorites, toggleFavorite, saving } = useLibrary();
  if (!item)
    return (
      <Page>
        <Text style={s.text}>Instrument not found.</Text>
      </Page>
    );
  const saved = favorites.includes(item.id);
  return (
    <Page>
      <Image
        source={images[item.id]}
        accessibilityLabel={item.name}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 260,
          borderRadius: 20,
          backgroundColor: "white",
        }}
      />
      <Text style={s.error}>{item.family}</Text>
      <Text style={s.title}>{item.name}</Text>
      <Pressable
        style={s.button}
        disabled={saving}
        onPress={() => toggleFavorite(item.id)}
      >
        <Text style={s.buttonText}>
          {saving
            ? "Saving…"
            : saved
              ? "♥ Remove from favourites"
              : "♡ Save to favourites"}
        </Text>
      </Pressable>
      <Text style={s.text}>{item.description}</Text>
      <Text style={s.heading}>Origin</Text>
      <Text style={s.muted}>{item.origin}</Text>
      <Text style={s.heading}>Main components</Text>
      {item.components.map((part) => (
        <Text key={part} style={s.text}>
          • {part}
        </Text>
      ))}
    </Page>
  );
}
