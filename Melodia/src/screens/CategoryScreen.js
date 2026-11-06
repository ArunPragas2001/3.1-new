import React from "react";
import { Text } from "react-native";
import Page from "../components/Page";
import CategoryCard from "../components/CategoryCard";
import instruments from "../data/instruments.json";
import s from "../theme/styles";
export default function CategoryScreen({ navigation }) {
  return (
    <Page>
      <Text style={s.title}>Instrument families</Text>
      <Text style={s.muted}>
        These are learning categories. Keyboard instruments may use strings or
        air to make their sound.
      </Text>
      {["Strings", "Wind", "Percussion", "Keyboard"].map((name) => (
        <CategoryCard
          key={name}
          name={name}
          count={instruments.filter((i) => i.family === name).length}
          onPress={() =>
            navigation.navigate("Main", {
              screen: "Explore",
              params: { family: name },
            })
          }
        />
      ))}
    </Page>
  );
}
