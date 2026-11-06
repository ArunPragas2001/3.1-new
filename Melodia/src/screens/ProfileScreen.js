import React from "react";
import { Text, View } from "react-native";
import Page from "../components/Page";
import { useLibrary } from "../storage/LibraryContext";
import credits from "../../assets/image-credits.json";
import s from "../theme/styles";
export default function ProfileScreen() {
  const { favorites, scores } = useLibrary();
  const best = scores.length
    ? Math.max(...scores.map((i) => Math.round((i.score / i.total) * 100)))
    : 0;
  return (
    <Page>
      <Text style={s.title}>Your music journey</Text>
      <Text style={s.muted}>Local learner · No account needed</Text>
      <View style={s.card}>
        <Text style={s.heading}>
          {favorites.length} favourites · {scores.length} saved quizzes
        </Text>
        <Text style={s.text}>Best saved score: {best}%</Text>
      </View>
      <Text style={s.heading}>Quiz history</Text>
      {scores.length ? (
        scores.map((result, i) => (
          <View key={result.date + i} style={s.card}>
            <Text style={s.text}>
              {result.score} / {result.total}
            </Text>
            <Text style={s.muted}>
              {new Date(result.date).toLocaleString()}
            </Text>
          </View>
        ))
      ) : (
        <Text style={s.muted}>Complete a quiz and save your result here.</Text>
      )}
      <Text style={s.heading}>About Melodia</Text>
      <Text style={s.muted}>
        Version 1.0.0. Instruments, images, favourites and saved scores are
        local. We keep the latest 50 scores. Clearing app data or uninstalling
        removes progress. An unfinished quiz resets after closing the app.
      </Text>
      <Text style={s.heading}>Image credits</Text>
      {credits.map((image) => (
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
      ))}
    </Page>
  );
}
