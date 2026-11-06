import React from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import s from "../theme/styles";
import c from "../theme/colors";

// Every instrument uses the same component with its own local JSON guide.
export default function PlayingGuide({ guide }) {
  if (!guide) return null;
  const exercise = guide.practice;
  return (
    <View style={{ gap: 24 }}>
      <View style={{ gap: 8 }}>
        <Text style={s.eyebrow}>FROM CURIOSITY TO YOUR FIRST NOTES</Text>
        <Text style={s.heading}>How to play</Text>
        <Text style={s.muted}>
          Start slowly. Read the setup, then try one step at a time.
        </Text>
      </View>
      <View style={s.card}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="options-outline" size={20} color={c.purple} />
          <Text style={s.heading}>Before you begin</Text>
        </View>
        <Text style={s.muted}>{guide.setup}</Text>
      </View>
      <View style={s.card}>
        {guide.method.map((step, index) => (
          <View key={step.title} style={{ gap: 18 }}>
            {index > 0 ? <View style={s.divider} /> : null}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 13,
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 12,
                  backgroundColor: c.purpleSoft,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: c.purple, fontSize: 12, fontWeight: "800" }}
                >
                  {index + 1}
                </Text>
              </View>
              <View style={{ flex: 1, gap: 7 }}>
                <Text style={[s.text, { fontWeight: "700" }]}>
                  {step.title}
                </Text>
                <Text style={s.muted}>{step.instruction}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View style={[s.card, { backgroundColor: c.purpleSoft, gap: 16 }]}>
        <Text style={[s.eyebrow, { color: c.purple }]}>
          TRY IT ON YOUR INSTRUMENT
        </Text>
        <Text style={s.heading}>Beginner practice</Text>
        <Text style={[s.text, { fontWeight: "700" }]}>{exercise.title}</Text>
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", gap: 9 }}
        >
          <Ionicons name="time-outline" size={18} color={c.purple} />
          <Text style={[s.muted, { flex: 1 }]}>{exercise.tempo}</Text>
        </View>
        <View
          style={{
            backgroundColor: c.background,
            borderRadius: 16,
            padding: 14,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            accessibilityLabel="Practice pattern"
          >
            <Text
              selectable
              style={{
                color: c.text,
                fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
                fontSize: 12,
                lineHeight: 25,
              }}
            >
              {exercise.pattern}
            </Text>
          </ScrollView>
        </View>
        <Text style={[s.muted, { fontSize: 12, lineHeight: 20 }]}>
          {exercise.legend}
        </Text>
        <Text style={[s.muted, { fontSize: 12 }]}>
          When a bar is used here, count 1–2–3–4 as one bar.
        </Text>
        {exercise.steps.map((instruction, index) => (
          <View key={instruction} style={{ flexDirection: "row", gap: 10 }}>
            <Text
              style={{ color: c.purple, fontWeight: "700", lineHeight: 24 }}
            >
              {index + 1}.
            </Text>
            <Text style={[s.text, { flex: 1 }]}>{instruction}</Text>
          </View>
        ))}
        <View style={s.divider} />
        <Text style={[s.text, { color: c.green }]}>
          Your goal: {exercise.goal}
        </Text>
      </View>
      <View style={s.card}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={22}
            color={c.orange}
          />
          <Text style={[s.heading, { flex: 1 }]}>
            Example demonstration script
          </Text>
        </View>
        <Text style={s.muted}>
          Read this aloud while demonstrating the exercise.
        </Text>
        <Text selectable style={s.text}>
          {guide.demonstration}
        </Text>
      </View>
      <View style={[s.card, { borderColor: "#62452E" }]}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="bulb-outline" size={22} color={c.orange} />
          <Text style={s.heading}>A useful first tip</Text>
        </View>
        <Text style={s.muted}>{guide.tip}</Text>
      </View>
    </View>
  );
}
