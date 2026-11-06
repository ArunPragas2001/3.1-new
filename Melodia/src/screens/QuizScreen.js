import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Page from "../components/Page";
import { Heading, Button, Stat } from "../components/UI";
import questions from "../data/questions.json";
import { useLibrary } from "../storage/LibraryContext";
import s from "../theme/styles";
import c from "../theme/colors";
export default function QuizScreen() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [saved, setSaved] = useState(false);
  const { addScore, saving } = useLibrary();
  const question = questions[index];
  function next() {
    const updated = score + (selected === question.answer ? 1 : 0);
    setScore(updated);
    if (index === questions.length - 1) setDone(true);
    else {
      setIndex(index + 1);
      setSelected(null);
    }
  }
  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setSaved(false);
  }
  async function save() {
    if (await addScore(score, questions.length)) setSaved(true);
  }
  if (done)
    return (
      <Page resetKey={done ? "result" : index}>
        <Heading
          eyebrow="A LITTLE WISER. A LITTLE MORE MUSICAL."
          title="Quiz complete!"
        />
        <View
          style={[
            s.card,
            {
              alignItems: "center",
              paddingVertical: 35,
              gap: 20,
              backgroundColor: c.purpleSoft,
            },
          ]}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 28,
              backgroundColor: "#BA9CFF16",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="trophy-outline" size={38} color={c.orange} />
          </View>
          <Text
            style={{
              color: c.text,
              fontSize: 60,
              fontWeight: "800",
              letterSpacing: -3,
            }}
          >
            {score}/{questions.length}
          </Text>
          <Text style={s.heading}>
            {score === questions.length
              ? "A pitch-perfect performance."
              : score >= 4
                ? "A lovely little performance."
                : "Every answer is a new discovery."}
          </Text>
          <Text style={[s.muted, { textAlign: "center" }]}>
            Keep exploring. There is always another sound to discover.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Stat
            value={Math.round((score / questions.length) * 100) + "%"}
            label="ACCURACY"
            icon="checkmark-circle-outline"
          />
          <Stat
            value={questions.length}
            label="QUESTIONS EXPLORED"
            icon="musical-notes-outline"
          />
        </View>
        <Button
          label={
            saved ? "Score saved" : saving ? "Saving…" : "Save score to profile"
          }
          icon={saved ? "checkmark" : "bookmark-outline"}
          disabled={saved || saving}
          onPress={save}
        />
        <Button
          secondary
          label="Try again"
          icon="refresh-outline"
          disabled={saving}
          onPress={restart}
        />
      </Page>
    );
  const answered = selected !== null;
  return (
    <Page resetKey={done ? "result" : index}>
      <Heading
        eyebrow="THE MELODIA MUSIC QUIZ"
        title="A little challenge."
        description="Test your knowledge. Discover something new."
      />
      <View style={{ gap: 12 }}>
        <View style={s.between}>
          <Text style={s.muted}>
            Question {index + 1} of {questions.length}
          </Text>
          <Text style={{ color: c.purple, fontSize: 12 }}>
            {score + (selected === question.answer ? 1 : 0)} correct so far
          </Text>
        </View>
        <View
          accessibilityRole="progressbar"
          accessibilityValue={{ min: 0, max: questions.length, now: index + 1 }}
          style={{ flexDirection: "row", gap: 6 }}
        >
          {questions.map((q, i) => (
            <View
              key={q.id}
              style={{
                height: 4,
                borderRadius: 4,
                flex: 1,
                backgroundColor: i <= index ? c.purple : c.border,
              }}
            />
          ))}
        </View>
      </View>
      <View style={[s.card, { padding: 24, gap: 18 }]}>
        <Ionicons name="musical-notes-outline" size={27} color={c.orange} />
        <Text
          style={{
            color: c.text,
            fontSize: 25,
            lineHeight: 34,
            fontWeight: "700",
            letterSpacing: -0.5,
          }}
        >
          {question.question}
        </Text>
      </View>
      <View style={{ gap: 11 }}>
        {question.options.map((option, i) => {
          const correct = answered && i === question.answer;
          const wrong = answered && selected === i && !correct;
          const color = correct ? c.green : wrong ? c.red : c.muted;
          return (
            <Pressable
              key={option}
              accessibilityRole="button"
              accessibilityLabel={option}
              accessibilityState={{
                selected: selected === i,
                disabled: answered,
              }}
              disabled={answered}
              onPress={() => setSelected(i)}
              style={({ pressed }) => [
                s.card,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 14,
                  padding: 15,
                  borderColor: correct ? c.green : wrong ? c.red : c.border,
                  backgroundColor: correct
                    ? c.greenSoft
                    : wrong
                      ? c.redSoft
                      : c.surface,
                },
                pressed && s.pressed,
              ]}
            >
              <View
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 12,
                  backgroundColor: c.elevated,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color, fontSize: 12, fontWeight: "700" }}>
                  {String.fromCharCode(65 + i)}
                </Text>
              </View>
              <Text style={[s.text, { flex: 1, fontWeight: "600" }]}>
                {option}
              </Text>
              {correct || wrong ? (
                <Ionicons
                  name={correct ? "checkmark-circle" : "close-circle"}
                  size={22}
                  color={color}
                />
              ) : null}
            </Pressable>
          );
        })}
      </View>
      {answered ? (
        <>
          <View
            style={[
              s.card,
              {
                backgroundColor:
                  selected === question.answer ? c.greenSoft : c.purpleSoft,
              },
            ]}
          >
            <Text style={s.heading}>
              {selected === question.answer ? "Correct!" : "Keep learning"}
            </Text>
            <Text style={s.text}>
              Answer: {question.options[question.answer]}
            </Text>
            <Text style={s.muted}>{question.explanation}</Text>
          </View>
          <Button
            label={
              index === questions.length - 1 ? "View result" : "Next question"
            }
            onPress={next}
          />
        </>
      ) : (
        <Text style={[s.muted, { textAlign: "center", fontSize: 12 }]}>
          Pick one answer. Make a little discovery.
        </Text>
      )}
    </Page>
  );
}
