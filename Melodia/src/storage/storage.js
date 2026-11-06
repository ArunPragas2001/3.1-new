import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "@melodia/library/v1";
export async function loadLibrary() {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return { favorites: [], scores: [] };
  const data = JSON.parse(raw);
  if (!Array.isArray(data.favorites) || !Array.isArray(data.scores)) {
    throw new Error("Invalid saved library");
  }
  return data;
}
export async function saveLibrary(data) {
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
}
