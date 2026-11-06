import React from "react";
import { FlatList, Text, View, Pressable } from "react-native";
import instruments from "../data/instruments.json";
import InstrumentCard from "../components/InstrumentCard";
import SearchBar from "../components/SearchBar";
import { Heading, FamilyChips, useGrid } from "../components/UI";
import s from "../theme/styles";
import c from "../theme/colors";
export default function ExploreScreen({ route, navigation }) {
  const family = route.params?.family;
  const { columns, cardWidth } = useGrid();
  const data = instruments.filter((i) => !family || i.family === family);
  return (
    <FlatList
      key={columns}
      numColumns={columns}
      style={s.page}
      contentContainerStyle={[s.content, { gap: 14 }]}
      columnWrapperStyle={{ gap: 14 }}
      data={data}
      keyExtractor={(i) => i.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={{ gap: 20, paddingBottom: 8 }}>
          <Heading
            eyebrow="THE INSTRUMENT LIBRARY"
            title={family || "A world of instruments."}
            description="Get to know the sounds behind the music."
          />
          <SearchBar onPress={() => navigation.navigate("Search")} />
          <FamilyChips
            value={family || "All"}
            onChange={(name) =>
              navigation.setParams({
                family: name === "All" ? undefined : name,
              })
            }
          />
          <View style={s.between}>
            <Text style={s.muted}>{data.length} instruments to discover</Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => navigation.navigate("Categories")}
              style={{ minHeight: 44, justifyContent: "center" }}
            >
              <Text style={{ color: c.purple, fontSize: 12 }}>
                Browse categories →
              </Text>
            </Pressable>
          </View>
          {family ? (
            <Pressable
              onPress={() => navigation.setParams({ family: undefined })}
            >
              <Text style={s.error}>Show all families →</Text>
            </Pressable>
          ) : null}
        </View>
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
