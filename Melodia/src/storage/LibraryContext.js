import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { View, Text, ActivityIndicator, Pressable } from "react-native";
import { loadLibrary, saveLibrary } from "./storage";
import s from "../theme/styles";
const LibraryContext = createContext();
export function LibraryProvider({ children }) {
  const [library, setLibrary] = useState({ favorites: [], scores: [] });
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const current = useRef(library);
  const busy = useRef(false);
  async function load() {
    setError("");
    try {
      const data = await loadLibrary();
      current.current = data;
      setLibrary(data);
      setReady(true);
    } catch {
      setError("Cannot read saved data. Please retry.");
    }
  }
  useEffect(() => {
    load();
  }, []);
  async function update(change) {
    if (busy.current) return false;
    busy.current = true;
    setSaving(true);
    setError("");
    try {
      const next = change(current.current);
      await saveLibrary(next);
      current.current = next;
      setLibrary(next);
      return true;
    } catch {
      setError("Could not save. Please try again.");
      return false;
    } finally {
      busy.current = false;
      setSaving(false);
    }
  }
  function toggleFavorite(id) {
    return update((old) => ({
      ...old,
      favorites: old.favorites.includes(id)
        ? old.favorites.filter((value) => value !== id)
        : [...old.favorites, id],
    }));
  }
  function addScore(score, total) {
    return update((old) => ({
      ...old,
      scores: [
        { score, total, date: new Date().toISOString() },
        ...old.scores,
      ].slice(0, 50),
    }));
  }
  if (!ready)
    return (
      <View style={[s.page, s.content]}>
        {error ? (
          <>
            <Text style={s.error}>{error}</Text>
            <Pressable onPress={load} style={s.button}>
              <Text>Retry</Text>
            </Pressable>
          </>
        ) : (
          <ActivityIndicator accessibilityLabel="Loading saved data" />
        )}
      </View>
    );
  return (
    <LibraryContext.Provider
      value={{ ...library, toggleFavorite, addScore, saving, error }}
    >
      {children}
    </LibraryContext.Provider>
  );
}
export function useLibrary() {
  return useContext(LibraryContext);
}
