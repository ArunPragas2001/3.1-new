import React from "react";
import { Text, Image, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Page from "../components/Page";
import { Button, FamilyBadge } from "../components/UI";
import instruments from "../data/instruments.json";
import images from "../data/images";
import { useLibrary } from "../storage/LibraryContext";
import s from "../theme/styles";
import c from "../theme/colors";
export default function DetailsScreen({ route, navigation }) {
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
      <View
        style={{
          backgroundColor: c.image,
          borderRadius: 28,
          padding: 26,
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            color: "#645A70",
            fontSize: 10,
            letterSpacing: 2,
            fontWeight: "700",
          }}
        >
          THE INSTRUMENT COLLECTION
        </Text>
        <Image
          source={images[item.id]}
          accessibilityLabel={item.name}
          resizeMode="contain"
          style={{ width: "100%", height: 260, marginVertical: 18 }}
        />
        <Text style={{ color: "#645A70", fontSize: 11 }}>
          A closer look at {item.name.toLowerCase()}
        </Text>
      </View>
      <View style={{ gap: 12 }}>
        <FamilyBadge family={item.family} />
        <Text style={[s.title, { fontSize: 40, lineHeight: 48 }]}>
          {item.name}
        </Text>
        <Text style={s.muted}>{item.description}</Text>
      </View>
      <Button
        label={
          saving
            ? "Saving…"
            : saved
              ? "Remove from favourites"
              : "Save to favourites"
        }
        icon={saved ? "heart" : "heart-outline"}
        disabled={saving}
        onPress={() => toggleFavorite(item.id)}
      />
      <View style={s.card}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons name="earth-outline" size={22} color={c.orange} />
          <Text style={s.heading}>Where it began</Text>
        </View>
        <Text style={s.muted}>{item.origin}</Text>
      </View>
      <View style={{ gap: 15 }}>
        <Text style={s.heading}>Meet the main components</Text>
        <Text style={s.muted}>
          The parts that work together to create its sound.
        </Text>
        <View style={s.row}>
          {item.components.map((part, index) => (
            <View
              key={part}
              style={[s.chip, { backgroundColor: c.surface, gap: 10 }]}
            >
              <Text
                style={{ color: c.purple, fontSize: 10, fontWeight: "700" }}
              >
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Text style={s.text}>{part}</Text>
            </View>
          ))}
        </View>
      </View>
      <Button
        secondary
        label={"Explore the " + item.family.toLowerCase() + " family"}
        onPress={() =>
          navigation.navigate("Main", {
            screen: "Explore",
            params: { family: item.family },
          })
        }
      />
    </Page>
  );
}
