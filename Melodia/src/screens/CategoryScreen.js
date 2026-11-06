import React from "react";
import { Text, View } from "react-native";
import Page from "../components/Page";
import CategoryCard from "../components/CategoryCard";
import { Heading, useGrid } from "../components/UI";
import instruments from "../data/instruments.json";
import families from "../data/families";
import s from "../theme/styles";
export default function CategoryScreen({ navigation }) {
  const { familyWidth } = useGrid();
  return (
    <Page>
      <Heading
        eyebrow="FOUR FAMILIES. ENDLESS DISCOVERY."
        title="Every sound has a family."
        description="Follow your curiosity. Find out how each instrument brings music to life."
      />
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
        {Object.keys(families).map((name) => (
          <View key={name} style={{ width: familyWidth }}>
            <CategoryCard
              name={name}
              count={instruments.filter((i) => i.family === name).length}
              onPress={() =>
                navigation.navigate("Main", {
                  screen: "Explore",
                  params: { family: name },
                })
              }
            />
          </View>
        ))}
      </View>
      <View style={s.card}>
        <Text style={s.heading}>A note on families</Text>
        <Text style={s.muted}>
          These are learning categories. Keyboard instruments can use strings or
          air to make their sound. Our Wind family includes both brass and
          woodwind instruments.
        </Text>
      </View>
    </Page>
  );
}
