import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import Page from "../components/Page";
import questions from "../data/questions.json";
import { useLibrary } from "../storage/LibraryContext";
import s from "../theme/styles";
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
      <Page>
        <Text style={s.title}>Quiz complete!</Text>
        <Text style={s.title}>
          {score}/{questions.length}
        </Text>
        <Pressable disabled={saved || saving} onPress={save} style={s.button}>
          <Text style={s.buttonText}>
            {saved
              ? "Score saved ✓"
              : saving
                ? "Saving…"
                : "Save score to profile"}
          </Text>
        </Pressable>
        <Pressable disabled={saving} style={s.card} onPress={restart}>
          <Text style={s.text}>Try again →</Text>
        </Pressable>
      </Page>
    );
  return (
    <Page>
      <Text style={s.muted}>
        MUSIC QUIZ · {index + 1} OF {questions.length}
      </Text>
      <Text style={s.title}>{question.question}</Text>
      {question.options.map((option, i) => (
        <Pressable
          key={option}
          accessibilityRole="button"
          accessibilityState={{
            selected: selected === i,
            disabled: selected !== null,
          }}
          disabled={selected !== null}
          onPress={() => setSelected(i)}
          style={[
            s.card,
            selected === i && { borderWidth: 2, borderColor: "#AA82FF" },
          ]}
        >
          <Text style={s.text}>{option}</Text>
        </Pressable>
      ))}
      {selected !== null ? (
        <>
          <Text style={s.heading}>
            {selected === question.answer ? "Correct!" : "Keep learning"}
          </Text>
          <Text style={s.text}>
            Answer: {question.options[question.answer]}
          </Text>
          <Text style={s.muted}>{question.explanation}</Text>
          <Pressable onPress={next} style={s.button}>
            <Text style={s.buttonText}>
              {index === questions.length - 1
                ? "View result"
                : "Next question →"}
            </Text>
          </Pressable>
        </>
      ) : (
        <Text style={s.muted}>
          Choose one answer. Your choice locks after selection.
        </Text>
      )}
    </Page>
  );
}
