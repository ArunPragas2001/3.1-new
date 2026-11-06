import React from "react";
import { FlatList, Text, View, Pressable } from "react-native";
import instruments from "../data/instruments.json";
import InstrumentCard from "../components/InstrumentCard";
import s from "../theme/styles";
export default function ExploreScreen({ route, navigation }) {
  const family = route.params?.family;
  const data = instruments.filter((i) => !family || i.family === family);
  return (
    <FlatList
      style={s.page}
      contentContainerStyle={{ padding: 20 }}
      data={data}
      keyExtractor={(i) => i.id}
      ListHeaderComponent={
        <View style={{ gap: 14, marginBottom: 20 }}>
          <Text style={s.title}>{family || "All instruments"}</Text>
          <Text style={s.muted}>{data.length} instruments to discover</Text>
          <Pressable
            style={s.button}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={s.buttonText}>Search & filter</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Categories")}>
            <Text style={s.text}>Browse categories →</Text>
          </Pressable>
          {family ? (
            <Pressable
              onPress={() => navigation.setParams({ family: undefined })}
            >
              <Text style={s.text}>Show all families →</Text>
            </Pressable>
          ) : null}
        </View>
      }
      renderItem={({ item }) => (
        <InstrumentCard
          instrument={item}
          onPress={() => navigation.navigate("Details", { id: item.id })}
        />
      )}
    />
  );
}
