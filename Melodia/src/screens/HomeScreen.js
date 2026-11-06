import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Page from "../components/Page";
import InstrumentCard from "../components/InstrumentCard";
import CategoryCard from "../components/CategoryCard";
import SearchBar from "../components/SearchBar";
import { Heading, Section, Button, useGrid } from "../components/UI";
import instruments from "../data/instruments.json";
import images from "../data/images";
import s from "../theme/styles";
import c from "../theme/colors";
export default function HomeScreen({ navigation }) {
  const { cardWidth, familyWidth } = useGrid();
  const open = (item) => navigation.navigate("Details", { id: item.id });
  return (
    <Page>
      <Heading
        eyebrow="A LITTLE CURIOSITY. A LOT OF MUSIC."
        title="Discover your sound."
      />
      <SearchBar onPress={() => navigation.navigate("Search")} />
      <View
        style={{
          backgroundColor: c.purple,
          borderRadius: 28,
          padding: 24,
          minHeight: 326,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: 130,
            borderWidth: 1,
            borderColor: "#2417351A",
            right: -85,
            top: 35,
          }}
        />
        <View
          style={{
            position: "absolute",
            width: 210,
            height: 210,
            borderRadius: 105,
            backgroundColor: "#FFFFFF18",
            right: -64,
            top: 60,
          }}
        />
        <Image
          source={images.guitar}
          resizeMode="contain"
          accessibilityLabel="Featured classical guitar"
          style={{
            position: "absolute",
            right: -5,
            top: 62,
            width: "41%",
            height: 225,
            transform: [{ rotate: "11deg" }],
          }}
        />
        <Text style={[s.eyebrow, { color: c.ink, letterSpacing: 1.5 }]}>
          INSTRUMENT SPOTLIGHT
        </Text>
        <Text
          style={{
            color: c.ink,
            fontSize: 34,
            lineHeight: 39,
            letterSpacing: -1.5,
            fontWeight: "800",
            marginTop: 22,
            width: "70%",
          }}
        >
          Find your{"\n"}kind of{"\n"}sound.
        </Text>
        <Text
          style={{
            color: "#46335D",
            fontSize: 12,
            lineHeight: 18,
            width: "58%",
            marginTop: 12,
            marginBottom: 21,
          }}
        >
          Meet the guitar. Six strings,{"\n"}a thousand possibilities.
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Explore Guitar"
          onPress={() => open(instruments[0])}
          style={({ pressed }) => [
            {
              alignSelf: "flex-start",
              backgroundColor: c.ink,
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 25,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            },
            pressed && s.pressed,
          ]}
        >
          <Text style={{ color: c.text, fontSize: 12, fontWeight: "700" }}>
            Explore Guitar
          </Text>
          <Ionicons name="arrow-forward" size={16} color={c.text} />
        </Pressable>
      </View>
      <View style={{ gap: 14 }}>
        <Section
          title="Find your family"
          action="View all families"
          onPress={() => navigation.navigate("Categories")}
        />
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
          {["Strings", "Wind", "Percussion", "Keyboard"].map((name) => (
            <View key={name} style={{ width: familyWidth }}>
              <CategoryCard
                small
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
      </View>
      <View style={{ gap: 14 }}>
        <Section
          title="Worth a closer listen"
          action="Explore all"
          onPress={() =>
            navigation.navigate("Main", {
              screen: "Explore",
              params: { family: undefined },
            })
          }
        />
        <Text style={[s.muted, { marginTop: -8 }]}>
          A few favourites to spark your curiosity.
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 14 }}>
          {instruments
            .filter((i) =>
              [
                "violin",
                "flute",
                "piano",
                "drums",
                "cello",
                "trumpet",
              ].includes(i.id),
            )
            .map((item) => (
              <View key={item.id} style={{ width: cardWidth }}>
                <InstrumentCard instrument={item} onPress={() => open(item)} />
              </View>
            ))}
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#33271F",
          borderRadius: 24,
          padding: 22,
          gap: 14,
        }}
      >
        <View style={s.between}>
          <Text style={[s.eyebrow, { color: c.orange }]}>
            A PLAYFUL LITTLE CHALLENGE
          </Text>
          <Ionicons name="sparkles-outline" size={23} color={c.orange} />
        </View>
        <Text style={s.heading}>Got an ear for instruments?</Text>
        <Text style={s.muted}>
          Eight questions. A little discovery with every answer.
        </Text>
        <Button
          label="Take the quiz"
          onPress={() => navigation.navigate("Main", { screen: "Quiz" })}
          secondary
        />
      </View>
      <View style={{ gap: 14 }}>
        <Section title="Popular picks" />
        {instruments
          .filter((i) => ["guitar", "saxophone"].includes(i.id))
          .map((item) => (
            <InstrumentCard
              key={item.id}
              compact
              instrument={item}
              onPress={() => open(item)}
            />
          ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 7,
          paddingVertical: 8,
        }}
      >
        <Ionicons name="cloud-offline-outline" size={14} color={c.muted} />
        <Text style={{ color: c.muted, fontSize: 11 }}>
          Your world of music, always with you.
        </Text>
      </View>
    </Page>
  );
}
