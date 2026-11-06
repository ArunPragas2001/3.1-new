import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Page from "../components/Page";
import { Heading, Section, Stat, EmptyState } from "../components/UI";
import { useLibrary } from "../storage/LibraryContext";
import credits from "../../assets/image-credits.json";
import s from "../theme/styles";
import c from "../theme/colors";
export default function ProfileScreen({ navigation }) {
  const { favorites, scores } = useLibrary();
  const [showCredits, setShowCredits] = useState(false);
  const best = scores.length
    ? Math.max(...scores.map((i) => Math.round((i.score / i.total) * 100)))
    : 0;
  return (
    <Page>
      <View style={s.between}>
        <View style={{ flex: 1 }}>
          <Heading
            eyebrow="YOUR OWN LITTLE MUSIC CORNER"
            title="Your music journey."
          />
        </View>
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 24,
            backgroundColor: c.purpleSoft,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="headset-outline" color={c.purple} size={30} />
        </View>
      </View>
      <Text style={s.muted}>
        A curious mind. A growing collection. All yours.
      </Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Stat
          value={favorites.length}
          label="FAVOURITES"
          icon="heart-outline"
        />
        <Stat
          value={scores.length}
          label="SAVED QUIZZES"
          icon="albums-outline"
        />
        <Stat value={best + "%"} label="PERSONAL BEST" icon="trophy-outline" />
      </View>
      <View style={{ gap: 15 }}>
        <Section title="Your latest performances" />
        {scores.length ? (
          scores.map((result, i) => (
            <View
              key={result.date + i}
              style={[
                s.card,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                  padding: 16,
                },
              ]}
            >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 15,
                  backgroundColor: c.purpleSoft,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="musical-notes-outline"
                  color={c.purple}
                  size={20}
                />
              </View>
              <View style={{ flex: 1, gap: 3 }}>
                <Text style={[s.text, { fontWeight: "700" }]}>Music quiz</Text>
                <Text style={[s.muted, { fontSize: 11 }]}>
                  {new Date(result.date).toLocaleString()}
                </Text>
              </View>
              <Text
                style={{ color: c.purple, fontWeight: "800", fontSize: 19 }}
              >
                {result.score} / {result.total}
              </Text>
            </View>
          ))
        ) : (
          <EmptyState
            icon="sparkles-outline"
            title="Your first score awaits."
            description="A few questions today. A little more music knowledge tomorrow."
            action="Take the quiz"
            onPress={() => navigation.navigate("Quiz")}
          />
        )}
      </View>
      <View style={s.card}>
        <View style={s.between}>
          <Text style={s.heading}>Made for discovery.</Text>
          <Ionicons name="cloud-offline-outline" color={c.green} size={24} />
        </View>
        <Text style={s.muted}>
          Melodia is your offline guide to musical instruments. No account, no
          connection. Just curiosity.
        </Text>
        <View style={s.divider} />
        <Text style={[s.muted, { fontSize: 11 }]}>
          MELODIA 1.2 · 12 INSTRUMENTS · 4 FAMILIES
        </Text>
        <Text style={[s.muted, { fontSize: 12 }]}>
          Your favourites and latest 50 saved quiz scores stay on this device.
          An unfinished quiz resets after closing the app. Clearing app data or
          uninstalling removes saved progress.
        </Text>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: showCredits }}
        onPress={() => setShowCredits(!showCredits)}
        style={[s.between, { minHeight: 48 }]}
      >
        <Text style={s.muted}>Image credits & licences</Text>
        <Ionicons
          name={showCredits ? "chevron-up" : "chevron-down"}
          color={c.muted}
          size={18}
        />
      </Pressable>
      {showCredits
        ? credits.map((image) => (
            <View key={image.id} style={s.card}>
              <Text style={s.text}>
                {image.id} · {image.license}
              </Text>
              <Text style={s.muted}>{image.artist}</Text>
              <Text selectable style={s.muted}>
                {image.source}
              </Text>
              <Text selectable style={s.muted}>
                {image.licenseURL}
              </Text>
              <Text style={s.muted}>{image.changes}</Text>
            </View>
          ))
        : null}
    </Page>
  );
}
